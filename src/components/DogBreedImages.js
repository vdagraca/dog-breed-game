import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class DogBreedImages extends Component {
   
  render (){
    const {dogsimages}=this.props
    return (
    <div className="dog-breed-images">
      <h1>Dogs Breed Images</h1>
     

      <div>
      { !dogsimages && 'Loading...' }
        { dogsimages && dogsimages.map(url => <img src={ url } alt="Dog1" />) }
        {console.log("check")}
    </div>

      <Link to="/">Go back to the index</Link>
    </div>
  )
  }

}
