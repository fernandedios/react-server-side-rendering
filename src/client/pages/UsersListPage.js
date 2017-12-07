import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { fetchUsers } from '../actions';

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  head() {
    // use template strings for jsx with dynamic elements for react-helmet
    return (
      <Helmet>
        <title>{`${this.props.users.length} Users Loaded`}</title>
        <meta property="og:title" content="Users App" />
      </Helmet>
    );
  }

  renderUsers() {
    return this.props.users.map(user => {
      return <li key={user.id}>{user.name}</li>
    });
  }

  render() {
    return (
      <div>
        {this.head()}
        List of users
        {this.renderUsers()}
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return { users };
}

function loadData(store) {
  // manually dispatch action creator
  return store.dispatch(fetchUsers()); // returns a promise
}


export default {
  component: connect(mapStateToProps, { fetchUsers })(UsersList),
  loadData
};
