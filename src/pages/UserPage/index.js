import React, {Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import BasePage from "../BasePage";
import withAuthenticated from "../../hoc/withAuthenticated";
import { getUser } from "../../utils/services";
import User from '../../components/User';
import Loader from '../../components/Loader';

import style from './index.module.css';

class UserPage extends Component {
  state = {
    error: null,
    user_id: '',
    name: '',
    surname: '',
    email: '',
    username: '',
    inProgress: true
  }

  componentDidMount() {
    getUser()
      .then(data => {
        if(!data.success)
         return this.setState({error: data.message, inProgress: false }) 
        else
         return this.setState({...data.user, inProgress: false})
      })
      .catch(error => this.setState({error}))
  }

  render() {
    const {isAuthenticated} = this.props;
    const { 
      error, 
      user_id, 
      name, 
      surname, 
      email, 
      username, 
      inProgress
    } = this.state;

    return (
      <BasePage isAuthenticated={isAuthenticated}>
        <section className={style["user-container"]}>
          {inProgress ?
            <Loader color="white" />
          : error ? 
            <div className={style.error}>{error}</div>
            : <User 
              name={name}
              user_id={user_id}
              surname={surname}
              email={email}
              username={username}
            />}
        </section>
      </BasePage>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.authentication.isAuthenticated
})

export default compose(
  connect(mapStateToProps),
  withAuthenticated
)(UserPage);