import React, { Component } from 'react'
import { fetchRandomImage } from '../actions/FetchRandomImageAction'
import { connect } from 'react-redux'


export class RandomDogImageGame extends Component {

    componentDidMount() {
        console.log('RandomDogImageGame componentDidMount test!')
        console.log('this.props test:', this.props)
        this.props.fetchRandomImage()
    }

    render() {
        console.log('this.props test:', this.props)
        const randomImage = this.props.image
        const list = this.props.dogslist

        console.log('randomImage:', randomImage)
        return (
            <div>
                <h1>Random Dog Image Game</h1>

                <img src={randomImage} alt='dog2' />

                {randomImage}

                {list}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('state test:', state)

    return {
        image: state.dogimage,
        dogslist: state.DogsListReducer.dogsList
    }
}

export default connect(mapStateToProps, { fetchRandomImage })(RandomDogImageGame)