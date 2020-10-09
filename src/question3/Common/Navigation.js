import React from 'react';

export default class Navigation extends React.Component {

  render() {
    return (
        <div>
          <link rel="stylesheet" type="text/css" href="//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
          <nav className="navbar navbar-dark bg-dark justify-content-between">
            <a href="/" className="navbar-brand">
              <i className="inline-me icon-size fa fa-address-card"/>
              <span><h2 className="inline-me user-account-title">User Account Manager</h2></span>
            </a>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a onClick={this.props.newUserButton} className="custom-navbar-button btn btn-default btn-outline btn-circle collapsed">New User</a>
              </li>
            </ul>
            <form className="form-inline">
              <input className="form-control mr-sm-2" type="search" onChange={this.props.searchFilter} placeholder="Type to Search" aria-label="Search"/>
            </form>
          </nav>
        </div>
    );
  }
}