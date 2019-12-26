import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import withAuthenticate from '../../hoc/withAuthenticated';
import BasePage from '../BasePage';
import SignUp from '../../components/Account/SignUp';

import { registerAction } from '../../redux/actions/index';

class SignUpPage extends Component {

  handleSubmit = (inputValues) => {
    this.props.register(inputValues, this.props.history);
  }

  render() {
    const { isAuthenticated, error } = this.props;

    return (
      <BasePage isAuthenticated={isAuthenticated}> 
        <SignUp error={error} onSubmit={this.handleSubmit} />
      </BasePage>
    );
  }
}

const mapStateToProps = ({authentication}) => ({
  isAuthenticated: authentication.isAuthenticated,
  error: authentication.registerError
});

const mapDispatchtoProps = dispatch => ({
  register: (data, history) => dispatch(registerAction(data, history))
})

export default compose(
  connect(mapStateToProps, mapDispatchtoProps),
  withAuthenticate
)(SignUpPage, false);