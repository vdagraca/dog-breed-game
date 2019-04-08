import React, { Component } from 'react'
// import { Link } from ‘react-router-dom’


export default class DogsList extends Component {
    //   renderDogBreed(breed) {
    //     return      <li key={breed}>
    //     <Link to={ `/dog-breeds/${breed}` }>{breed}</Link>
    //   </li>

    //   }

    render() {
        const { dogslist } = this.props
        return (
            <div className="dogs-list">
                <ul>
                    {this.props.dogslist !== null && this.props.dogslist.map(breed => {
                        <li key={breed}>{breed}</li>
                    })}
                </ul>
                {/* 
                <h1>Dogs List</h1>

                {!dogBreeds && 'Loading...'}

                {
                    dogBreeds &&
                    <ul>{this.props.dogBreeds.map(breed => <li key={breed}>{breed}</li>)}</ul>
                } */}
            </div>
        )
    }
}