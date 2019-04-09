import React, { Component } from 'react'
import request from 'superagent'
import { connect } from "react-redux"
import DogsList from './DogsList'
import { setDogsList } from '../actions/DogsListAction'

class DogsListContainer extends Component {
  
    getDogsList = () => {
        request
            .get('https://dog.ceo/api/breeds/list/all')
            .then(response => {
                const breeds = Object.keys(response.body.message)
                this.updateBreeds(breeds)
            })
            .catch(error => { console.log('ERROR!') })
    }

    componentDidMount() {
        this.getDogsList()
    }

    updateBreeds(breeds) {
        this.props.dispatch(setDogsList(breeds))
    }

    render() {
        const { dogsList } = this.props
        return (
            <div>
                <DogsList dogslist={dogsList} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { dogsList: state.DogsListReducer.dogsList }
}

export default connect(mapStateToProps)(DogsListContainer);
