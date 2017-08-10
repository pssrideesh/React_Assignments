import React, { Component } from 'react';
import './App.css';
import NoteContainer from './Component/NoteContainer/NoteContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
            <NoteContainer/>
      </div>
    );
  }
}

export default App;
