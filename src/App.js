import React, { Component } from 'react';
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
