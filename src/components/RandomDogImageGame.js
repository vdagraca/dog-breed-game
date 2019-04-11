import React, { Component } from 'react'
import { getDogsList } from '../actions/DogsListAction'
import { connect } from 'react-redux'


export class RandomDogImageGame extends Component {

    componentDidMount() {
        console.log('RandomDogImageGame componentDidMount test!')
        console.log('this.props test:', this.props)
        this.props.getDogsList(true)
    }

    render() {
        console.log('this.props test:', this.props)
        const randomImage = this.props.currentDog.imageUrl
        const randomName = this.props.currentDog.name
        const randomAnswerOne = this.props.randomDogOne
        console.log('randomanswerone', randomAnswerOne)
        const randomAnswerTwo = this.props.randomDogTwo
        console.log('randomanswertwo:', randomAnswerTwo)

        const list = this.props.dogslist

        console.log('randomImage:', randomImage)
        return (
            <div>
                <h1>Random Dog Image Game</h1>

                <img src={randomImage} alt='dog2' /><br></br>

                <button>{randomName}</button>
                <button>{randomAnswerOne}</button>
                <button>{randomAnswerTwo}</button>

                {list}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('state test:', state)

    return {
        image: state.dogimage,
        currentDog: state.DogsImagesReducer.currentDog,
        randomDogOne: state.DogsImagesReducer.twoRandomDogs.one,
        randomDogTwo: state.DogsImagesReducer.twoRandomDogs.two
    }
}

export default connect(mapStateToProps, { getDogsList })(RandomDogImageGame)