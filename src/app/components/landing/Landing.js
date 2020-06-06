import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../logo.svg';


const Landing = () => (
    <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to uplift.
          </p>
          <Link
            className="App-link"
            to="/login"
          >
            Login
          </Link>
        </header>
);

export default Landing;