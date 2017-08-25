import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

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
        <Header header={this.state.headerText}/>
        <Content contect={this.state.contentText}/>
      </div>
    );
  }
}

App.defaultProps = {
  header : "default props from header",
  content: "default props from content"
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
      data:0
    };
    this.setNewNumber = this.setNewNumber.bind(this);
  }
  setNewNumber(){
    this.setState({data:this.state.data + 1});
  }

  render(){
    return(
      <div className="App-intro">
        <h1>Componet API Start</h1>
        <button onClick={this.setNewNumber}>Update component</button>
        <NumberComponent mydata={this.state.data}/>
      </div>
    );
  }
}

class NumberComponent extends Component{
  componentWillMount(){
    console.log('THIS IS COMPONENT WILL MOUNT');
  }
  componentDidMount(){
    console.log('THIS IS COMPONENT DID MOUNT');

  }
  componentWillReceiveProps(newProps){
    console.log('THIS IS COMPONENT WILL RECEIVE PROPS');

  }
  shouldComponentUpdate(newProps, newState){
    console.log('THIS IS COMPONENT SHOULD UPDATE');
    return true;
  }
  componentWillUpdate(newProps, nextState){
    console.log('THIS IS COMPONENT WILL UPDATE');

  }
  componentDidUpdate(newProps, nextState){
    console.log('THIS IS COMPONENT DID UPDATE');

  }
  componentWillUnmount(){
    console.log('THIS IS COMPONENT WILL UNMOUNT');
  }
  render(){
    return(
      <div className="App-intro">
        <p>NumberComponent</p>
        <h2>{this.props.mydata}</h2>
      </div>
    );
  }
}

export default App;
