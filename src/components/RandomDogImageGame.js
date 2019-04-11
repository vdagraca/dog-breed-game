import React, { Component } from 'react'
import { getDogsList } from '../actions/DogsListAction'
import { connect } from 'react-redux'

export class RandomDogImageGame extends Component {

    componentDidMount() {
        console.log('RandomDogImageGame componentDidMount test!')
        console.log('this.props test:', this.props)
        this.props.getDogsList(true)
    }

    shuffle(array) {
        let ctr = array.length;
        let temp;
        let index;

        while (ctr > 0) {
            index = Math.floor(Math.random() * ctr);
            ctr--;
            temp = array[ctr];
            array[ctr] = array[index];
            array[index] = temp;
        }
        return array;
    }

    handleClick(breed) {
        if (breed === this.props.currentDog.name) {
            alert('Congratulations!!')
            this.props.getDogsList(true)
        } else {
            alert(`Wrong,the right anwer is ${this.props.currentDog.name}!`)
            this.props.getDogsList(true)
        }

    }

    render() {
        console.log('this.props test:', this.props)
        const randomImage = this.props.currentDog.imageUrl
        const correctAnswer = this.props.currentDog.name
        const randomAnswerOne = this.props.randomDogOne
        const randomAnswerTwo = this.props.randomDogTwo
        const answerArray = [correctAnswer, randomAnswerOne, randomAnswerTwo]

        const shuffledArray = this.shuffle(answerArray)
        console.log('shuffledarray', shuffledArray)
        const list = this.props.dogslist

        return (
            <div>
                <h1>Random Dog Image Game</h1>

                <img src={randomImage} alt='dog2' /><br></br>

                <button onClick={() => this.handleClick(shuffledArray[0])}>{shuffledArray[0]}</button>
                <button onClick={() => this.handleClick(shuffledArray[1])}>{shuffledArray[1]}</button>
                <button onClick={() => this.handleClick(shuffledArray[2])}>{shuffledArray[2]}</button>

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
        randomDogTwo: state.DogsImagesReducer.twoRandomDogs.two,
    }
}

export default connect(mapStateToProps, { getDogsList })(RandomDogImageGame)