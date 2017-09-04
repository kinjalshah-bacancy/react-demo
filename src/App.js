import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router'


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      headerText : "Welcome To React",
      contentText : "This is component state!!"
    }
  }

  render() {
    return (
      <div className="App">
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contect</Link></li>
          <li><Link to="/blog">Blog</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}



export default App;
