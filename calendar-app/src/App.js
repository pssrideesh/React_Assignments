import React, { Component } from 'react';
import './App.css';
import Month from './component/Month/Month';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Month/>
      </div>
    );
  }
}

export default App;
