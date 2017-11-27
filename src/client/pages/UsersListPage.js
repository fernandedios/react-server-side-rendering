import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map(user => {
      return <li key={user.id}>{user.name}</li>
    });
  }

  render() {
    return (
      <div>
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
