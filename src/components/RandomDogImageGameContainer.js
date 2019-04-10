import React, { Component } from 'react'
import RandomDogImageGame from './RandomDogImageGame'
import RandomQuestion from './RandomQuestion'

export class RandomDogImageGameContainer extends Component {
    render() {
        return (
            <div>
                <RandomDogImageGame />
                <RandomQuestion />
            </div>
        )
    }
}

export default RandomDogImageGameContainer
