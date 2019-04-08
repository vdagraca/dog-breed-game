import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DogsListContainer from './components/DogsListContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DogsListContainer />
      </div>
    );
  }
}

export default App;
