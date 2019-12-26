import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default (BaseComponent, requireAuthenticated = true) => 
class extends Component {
  render() {
    const { isAuthenticated } = this.props;

    let toRender;

    if(requireAuthenticated) {
      toRender = isAuthenticated ? 
      <BaseComponent {...this.props}/> : 
      <Redirect to="/sign-in"/>
    } else {
      toRender = !isAuthenticated ? 
      <BaseComponent {...this.props}/> : 
      <Redirect to="/"/>
    }

    return toRender;
  }
}
