import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default (ChildComponent) => {
  class RequireAuth extends Component {
    render() {
      switch (this.props.auth) {
        case false:
          // user is NOT logged in, redirect to landing page
          return <Redirect to="/" />;

        case null:
          // in the process of authentication
          return <div>Loading</div>;

        default:
          // user is authenticated. pass ChildComponent along with all props
          return <ChildComponent {...this.props} />;
      }
    }
  }

  function mapStateToProps({ auth }) {
    return { auth };
  }

  return connect(mapStateToProps)(RequireAuth);
};
