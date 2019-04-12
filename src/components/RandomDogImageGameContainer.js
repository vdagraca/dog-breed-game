import React, { Component } from 'react'
import RandomDogImageGame from './RandomDogImageGame'


import { Prompt } from 'react-router'
import { Link } from "react-router-dom"


class RandomDogImageGameContainer extends Component {

    render() {

        return (
            <div>
                <RandomDogImageGame />
                <Link to={'/end'}><button className='endBtn'>End the game</button></Link>
                <Prompt message="Are you sure you want to end the game?" />
            </div>
        )
    }

}

export default RandomDogImageGameContainer
