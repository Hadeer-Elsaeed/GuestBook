import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  logOut(e){
    localStorage.removeItem('usertoken')
    window.location = '/login'
  }
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/messages/list" className="nav-link">Messages</Link>
          </li>
          <li className="navbar-item">
          <a  onClick={this.logOut.bind(this)}  className="nav-link">Logout</a>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}