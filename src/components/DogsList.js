import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './DogsList.css'

export default class DogsList extends Component {
    renderDogBreed(breed) {
        return      <li className="dogslist" key={breed}>
        <Link className="dogs-list" to={ `/dog-breeds/${breed}` }>{breed}</Link>
      </li>
     
      }

    render() {
        const { dogslist } = this.props
        return (
            <div>
                <h2> Dog breeds list</h2>
                <p>Each breed will display 10 photos! Know your breeds before you test yourself in the Quiz!</p>
                <ul >
                    
                        { dogslist.map(this.renderDogBreed) }
                
                </ul>
                
            </div>
        )
    }
}
