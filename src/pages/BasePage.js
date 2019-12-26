import React, { Component, Fragment } from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';


class BasePage extends Component {
  render() {
    const { isAuthenticated } = this.props;

    return (
      <Fragment>
        <Header isAuthenticated={isAuthenticated} />
        <main className="main-content">
          {this.props.children}
        </main>
        <Footer /> 
      </Fragment>
    );
  }
}
export default BasePage;