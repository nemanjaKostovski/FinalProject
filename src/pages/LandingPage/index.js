import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import Topic from '../../components/Topic';
import { getTopicsAction } from '../../redux/actions';
import BasePage from '../BasePage';
import withAuthenticated from '../../hoc/withAuthenticated';
import Loader from '../../components/Loader';
import AddButton from '../../components/AddButton';

import style from './index.module.css';

class LandingPage extends Component {

  componentDidMount() {
    this.props.getTopics();
  }

  handleAdd = () => {
    const { history } = this.props;
    history.push('/new-topic');
  }

  render() {
    const { isAuthenticated, topics } = this.props;
    console.log('Rerendering landing')

    return (
      <BasePage isAuthenticated={isAuthenticated}> 
        <ul className={style['topics-container']}>
          <div className={style['local-header']}>
            <h1>Teme:</h1>
            <AddButton onClick={this.handleAdd}/>
          </div>
          {topics ? 
            topics.map(topic => (
              <Topic 
                key={topic.topic_id} 
                userId={topic.user_id}
                id= {topic.topic_id} 
                title={topic.title} 
                timestamp={topic.timestamp}
                />)) 
            : <Loader color="white"/> }
        </ul>
      </BasePage>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.authentication.isAuthenticated,
  topics: state.topics.topics
});

const mapDispatchToProps = dispatch => ({
  getTopics: () => dispatch(getTopicsAction())
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthenticated
)(LandingPage); 