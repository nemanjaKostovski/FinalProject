import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import BasePage from '../BasePage';
import User from '../../components/User';
import withAuthenticated from '../../hoc/withAuthenticated';
import style from './index.module.css';

class ProfilePage extends Component {


  render() {
    let { isAuthenticated, user: {user_id, ...relevantInfo}} = this.props;

    return (
      <BasePage isAuthenticated={isAuthenticated}>
        <div className={style["profile-container"]}>
          <User {...relevantInfo}/>
        </div>
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
)(ProfilePage);