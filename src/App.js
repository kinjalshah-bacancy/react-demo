import React, { Component } from 'react';
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
        {
          /*<h1>{this.state.headerText}</h1>
          <h1>{this.state.contentText}</h1>*/
        }
        <Header header={this.state.headerText}/>
        <Content contect={this.state.contentText}/>
        {/*
        {this.props.header}
        {this.props.content}

      */}
        <Clock />
      </div>
    );
  }
}

App.defaultProps = {
  header : "default props from header",
  content: "default props from content"
}

class Clock extends Component{
  constructor(props){
    super(props);

    this.state = {
      date : new Date()
    }
  }

  componentDidMount(){
    this.timeId = setInterval(
    () => {this.tick()}
    ,1000)
  }

  tick(){
    this.setState({
      date : new Date()
    });
  }

  componetWillUnmount(){
    clearInterval(this.timeId)
  }

  render(){
    return(
      <div>
        <h2>Current Tims is : {this.state.date.toLocaleTimeString()}</h2>
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

    this.state = {
      data : [
        {
          "id" : 1,
          "name" : "ABC",
          "age" : 20
        },
        {
          "id" : 2,
          "name" : "PQR",
          "age" : 30
        },
        {
          "id" : 3,
          "name" : "XYZ",
          "age" : 40
        }
      ]
    }
  }

  render(){
    var i = 5;
    var myStyle = {
      color : 'blue'
    };
    return(
      <div>
        <div className="App-intro">
          <h1>My page starts here! </h1>
          <h2> start with JSX </h2>
          To get started, edit <code>src/App.js</code> and save to reload.
          <h4 style={myStyle}> Hello World </h4>
          <h5>{2 + 6} </h5>
          <h5>{ i === 5 ? "true" : "false"}</h5>
          <h3>{this.props.contect}</h3>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((person, i) => <TableRow key={i} data={person}/> )}
            </tbody>
          </table>
        </div>
        <div>
          <h5>{this.props.propArray}</h5>
          <h5>{this.props.propBool}</h5>
          <h5>{this.props.propFunc(5)}</h5>
          <h5>{this.props.propNumber}</h5>
          <h5>{this.props.propString}</h5>
          <h5>{this.props.propObject.obj1}</h5>
          <h5>{this.props.propObject.obj2}</h5>
          <h5>{this.props.propObject.obj3}</h5>
        </div>
      </div>
    );
  }
}

Content.propTypes = {
 propArray: PropTypes.array.isRequired,
 propBool: PropTypes.bool.isRequired,
 propFunc: PropTypes.func,
 propNumber: PropTypes.number,
 propString: PropTypes.string,
 propObject: PropTypes.object
}

Content.defaultProps = {
  propArray : [1,2,3,4],
  propBool : true,
  propFunc : function(e) { return (e)},
  propNumber : 1,
  propString : "Hello",
  propObject : {
    "obj1" : "val1",
    "obj2" : "val2",
    "obj3" : "val3"
  }
}

class TableRow extends Component{
  render(){
    return(
      <tr>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.age}</td>
      </tr>
    );
  }
}

export default App;
