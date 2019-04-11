import React, { Component } from 'react';
import './App.css';
import DogsListContainer from './components/DogsListContainer';
import { Route } from 'react-router-dom'
import DogBreedImagesContainer from './components/DogBreedImagesContainer'
import Home from './navigation/Home'
import NavBar from './navigation/NavBar'
import RandomDogImageGameContainer from './components/RandomDogImageGameContainer'
import DogQuestionContainer  from './components/DogQuestionContainer';
import GameContainer from './components/GameContainer';
import EndGame from './components/EndGame';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route path="/dog-list" component={DogsListContainer} />
          <Route path="/dog-game-1" component={RandomDogImageGameContainer} />
          <Route path="/dog-game-2" component={DogQuestionContainer} />
          <Route path="/dog-breeds/:breed" component={DogBreedImagesContainer} />
          <Route exact path="/game" component={GameContainer} />
          <Route exact path="/end" component={EndGame} />
        </div>

      </div>
    );
  }
}

export default App;
