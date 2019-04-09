import React from 'react'
import { Link } from 'react-router-dom'

export default function DogBreedImages (props) {
    const images=props.images
  return (
    <div className="dog-breed-images">
      <h1>Dogs Breed Images</h1>
     

      <div>
      { !images && 'Loading...' }
        { images && images.map(url => <img src={ url } alt="Dog" />) }
        {console.log("check")}
    </div>

      <Link to="/">Go back to the index</Link>
    </div>
  )
}