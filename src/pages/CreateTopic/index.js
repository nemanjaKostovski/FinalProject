import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import withAuthenticated from '../../hoc/withAuthenticated';
import BasePage from '../BasePage';
import S from '../../components/Section';
import style from './index.module.css';
import { createTopic } from '../../utils/services';
import Loader from '../../components/Loader';

class CreateTopic extends Component {
  state = {
    message: null,
    requestSent: false,
    requestRecieved: false
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({requestSent: true});
    createTopic({title: this.topicRef.value, user_id: this.props.user.user_id})
      .then(data => this.setState({ message: data.message, requestRecieved: true}))
      .catch(err => this.setState({message: err.message || "Error", requestRecieved: true}));
  }

  render() {
    const { isAuthenticated } = this.props;
    const { message, requestSent, requestRecieved } = this.state;

    return (
      <BasePage isAuthenticated={isAuthenticated}>
        <S>
          {message && <div className={style.message}>{message}</div>}
          {
            !requestSent ? (
              <form className={style.form} onSubmit={this.handleSubmit}>
                <label htmlFor="_new_topic">Chose topic name:</label>
                <input ref={ref => this.topicRef = ref} type="text" placeholder="Topic header" id="_new_topic"/> 
                <button className="button-primary">Create</button>
              </form>) 
              : !requestRecieved ? ( 
                 <Loader color="white"/>
              ) : null
          }
        </S>
      </BasePage>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.authentication.isAuthenticated,
  user: state.authentication.user
})

export default compose(
  connect(mapStateToProps),
  withAuthenticated
)(CreateTopic);