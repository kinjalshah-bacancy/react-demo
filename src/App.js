import React, { Component } from 'react';
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

        <Clock />*/}
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
      date : new Date(),
      comment : "Hello"
    }
  }

  componentDidMount(){
    this.timeId = setInterval(
    () => {date : this.tick()}
    ,1000)
  }

  tick(){
    this.setState({
      date : new Date(),
      comment : this.state.comment + "o"
    });
  }

  componetWillUnmount(){
    clearInterval(this.timeId)
  }

  render(){
    return(
      <div>
        <h2>Current Tims is : {this.state.date.toLocaleTimeString()}</h2>
        <p>{this.state.comment}</p>
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
      <p className="App-intro">
        <h1>My page starts here! </h1>
        <h2> start with JSX </h2>
        To get started, edit <code>src/App.js</code> and save to reload.
        <h4 style={myStyle}> Hello World </h4>
        <h5>{2 + 6} </h5>
        <h5>{ i == 5 ? "true" : "false"}</h5>
        <h3>{this.props.contect}</h3>
        <table>
          <thead>
            <th>
              <td>ID</td>
              <td>Name</td>
              <td>Age</td>
            </th>
          </thead>
          <tbody>
            {this.state.data.map((person, i) => <TableRow key={i} data={person}/> )}
          </tbody>
        </table>
      </p>
    );
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
