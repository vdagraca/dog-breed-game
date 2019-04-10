import React, { Component } from 'react';
import './App.css';
import DogsListContainer from './components/DogsListContainer';
import { Route } from 'react-router-dom'
import DogBreedImagesContainer from './components/DogBreedImagesContainer'
import Home from './navigation/Home'
import NavBar from './navigation/NavBar'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
        <NavBar/>
        <Route exact path="/" component={Home} />
        <Route path="/dog-list" component={DogsListContainer}/> 
        <Route path="/dog-breeds/:breed" component={DogBreedImagesContainer} />
        
        </div>
        
      </div>
    );
  }
}

export default App;
