import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function sayHi() {
  alert('hi')
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React不过如此</h2>
        </div>
        <p className="App-intro">
          To get 开始, 编辑 <code>src/App.js</code> 改变页面展示.
          <button onClick={sayHi}>点我</button>
        </p>
      </div>
    );
  }
}

export default App;
