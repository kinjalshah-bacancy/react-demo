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
      data: [],
      count: 0,
    };
    this.updateMyState = this.updateMyState.bind(this);
    this.updateRandom = this.updateRandom.bind(this);
    this.findDom = this.findDom.bind(this);
  }
  updateRandom(){
    this.forceUpdate();
  }
  findDom(){
    var myDiv = Document.getElementById('myDiv');
    ReactDOM.findDOMNode(myDiv).style.color = 'blue';
  }
  updateMyState(){
    var count = this.state.count;
    count++;
    var item = "click -"+count;
    var my_array = this.state.data;
    my_array.push(item);
    this.setState({data: my_array,count: count})
  }

  render(){
    return(
      <div className="App-intro">
        <h1>Componet API Start</h1>
        <button onClick={this.updateMyState}>Click Me</button>
        <h4>State Data: {this.state.data}</h4>
        <button onClick={this.updateRandom}>Random No.</button>
        <h4>Rendom Number: {Math.random()}</h4>
        <button onClick={this.findDom}>Find Dom.</button>
        <h4 id="myDiv">this is div</h4>
      </div>
    );
  }
}

export default App;
