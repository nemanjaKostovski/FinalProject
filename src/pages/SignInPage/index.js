import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { loginAction } from '../../redux/actions';
import SignIn from '../../components/Account/SignIn';
import BasePage from '../BasePage';
import withAuthenticated from '../../hoc/withAuthenticated';

class SignInPage extends Component {

  handleSubmit = (data) => {
    console.log(data);
    this.props.login(data, this.props.history);
  }

  render() {
    const { isAuthenticated, error } = this.props;

    return (
      <BasePage isAuthenticated={isAuthenticated}>
        <SignIn error={error} onSubmit={this.handleSubmit} />
      </BasePage>
    );
  }
}

const mapStateToProps = ({authentication}) => ({
  isAuthenticated: authentication.isAuthenticated,
  error: authentication.loginError
});

const mapDispatchToProps = dispatch => ({
  login: (data, history) => dispatch(loginAction(data, history))
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthenticated
)(SignInPage, false);
