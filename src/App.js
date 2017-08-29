import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Content/>
      </div>
    );
  }
}

class Header extends Component{
  render(){
    return(
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
    );
  }
}

class Content extends Component{
  constructor(props){
    super(props);
    this.state ={
      myinputvalue: "input here"
    }
    this.myinputchange = this.myinputchange.bind(this);
  }

  myinputchange(e){
    var itemvalue = e.target.value
    this.setState({myinputvalue: itemvalue})
  }

  render(){
    return(
      <div>
        <div className="App-intro">
          <h1>Forms in react</h1>
          <InputComponent myvalue={this.state.myinputvalue} myinputchange={this.myinputchange}/>
          <h5>{this.state.myinputvalue}</h5>
        </div>
      </div>
    );
  }
}

class InputComponent extends Component{
  render(){
    return(
      <div>
        <input value ={this.props.myvalue} onChange={this.props.myinputchange}/>
      </div>
    );
  }
}


export default App;
