import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({ auth }) => {
  console.log(auth);

  // show login or logout button depending on the auth value
  // a tag to force full browser render
  const authButton = auth ? (
    <a href="/api/logout">Logout</a>
  ) : (
    <a href="/api/auth/google">Login</a>
  );

  return (
    <nav>
      <div className="nav-wrapper">
        <Link className="brand-logo" to="/">SSR</Link>
        <ul className="right">
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/admins">Admins</Link></li>
          <li>{authButton}</li>
        </ul>
      </div>
    </nav>

  );
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
