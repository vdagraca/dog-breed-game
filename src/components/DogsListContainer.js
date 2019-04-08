import React, { Component } from 'react'
import DogsList from './DogsList'
import { getDogsList } from '../actions/DogsListAction'

export default class DogsListContainer extends Component {
    // state = { dogBreeds: null }

    componentDidMount() {
        this.props.getDogsList()
        // request
        //     .get('https://dog.ceo/api/breeds/list/all')
        //     .then(response => {
        //         const breeds = Object.keys(response.body.message)
        //         this.updateBreeds(breeds)
        //     })
        //     .catch(console.error)
    }

    // updateBreeds(breeds) {
    //     this.setState({
    //         dogBreeds: breeds
    //     })
    // }

    render() {
        const { dogsList } = this.props
        return (
            { dogsList }
            // <DogsList />)
            // return <DogsList dogBreeds={this.state.dogBreeds} />
        )
    }
}