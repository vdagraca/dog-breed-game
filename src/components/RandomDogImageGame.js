import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getDogsList } from '../actions/DogsListAction'
import { handleCorrect, handleWrong } from '../actions/ScoreAction';
import { setScore } from '../actions/ScoreAction';
import store from '../store'

export class RandomDogImageGame extends Component {


    componentDidMount() {
        // console.log('RandomDogImageGame componentDidMount test!')
        // console.log('this.props test:', this.props)
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

    calculatePercentage = (isCorrect) => {
        let { correctAnswers, totalQuestions } = this.props.score
        if (isCorrect) {
            correctAnswers++
        }
        totalQuestions++

        // console.log("propsscore", this.props.score)
        if (totalQuestions > 0) {
            return (correctAnswers / totalQuestions) * 100
        }
        return 0
    }

    buttonClickedone = (shuffledArray, correctAnswer) => {
        if (shuffledArray[0] === correctAnswer) {
            alert('Congratulations!!')
            this.props.getDogsList(true)
            store.dispatch(setScore(this.calculatePercentage(true)))
            store.dispatch(handleCorrect("dog"))
            console.log("test", this.props.getDogsList())
        } else {
            setTimeout(() => {
                this.props.getDogsList(true)
                store.dispatch(setScore(this.calculatePercentage(false)))
                store.dispatch(handleWrong("dog"))
            }, 2000)
            alert('Wrong, try again! The correct dog is ' + correctAnswer)
        }
    }

    buttonClickedtwo = (shuffledArray, correctAnswer) => {
        if (shuffledArray[1] === correctAnswer) {
            alert('Congratulations!!')
            store.dispatch(setScore(this.calculatePercentage(true)))
            store.dispatch(handleCorrect("dog"))
            this.props.getDogsList(true)
        } else {
            setTimeout(() => {
                this.props.getDogsList(true)
                store.dispatch(setScore(this.calculatePercentage(false)))
                store.dispatch(handleWrong("dog"))
            }, 2000)
            alert('Wrong, try again! The correct dog is ' + correctAnswer)
        }
    }

    buttonClickedthree = (shuffledArray, correctAnswer) => {
        if (shuffledArray[2] === correctAnswer) {
            alert('Congratulations!!')
            store.dispatch(setScore(this.calculatePercentage(true)))
            store.dispatch(handleCorrect("dog"))
            this.props.getDogsList(true)
        } else {
            setTimeout(() => {
                this.props.getDogsList(true)
                store.dispatch(setScore(this.calculatePercentage(false)))
                store.dispatch(handleWrong("dog"))
            }, 2000)
            alert('Wrong, try again! The correct dog is ' + correctAnswer)
        }
    }

    handleClick(breed) {
        if (breed === this.props.currentDog.name) {
            alert('Correct!!!')
            this.props.getDogsList(true)
        } else {
            alert(`Wrong,the right anwer is ${this.props.currentDog.name}!`)
            this.props.getDogsList(true)
        }

    }

    render() {
        // console.log('this.score test:', this.props.score)
        const randomImage = this.props.currentDog.imageUrl
        const correctAnswer = this.props.currentDog.name
        const randomAnswerOne = this.props.randomDogOne
        const randomAnswerTwo = this.props.randomDogTwo
        const answerArray = [correctAnswer, randomAnswerOne, randomAnswerTwo]
        const { correctAnswers, totalQuestions, totalScore } = this.props.score
        const shuffledArray = this.shuffle(answerArray)
        // console.log('shuffledarray', shuffledArray)
        const list = this.props.dogslist

        return (
            <div className="game-div">
                <h2>Dog Quiz</h2>

                <p>Your score: {Math.round(totalScore)}%</p>
                <p>Total questions: {totalQuestions}</p>
                <p>Total correct answers: {correctAnswers}</p>

                <img src={randomImage} alt='dog2' /><br></br>

                <button onClick={() => this.buttonClickedone(shuffledArray, correctAnswer)}>{shuffledArray[0]}</button>
                <button onClick={() => this.buttonClickedtwo(shuffledArray, correctAnswer)}>{shuffledArray[1]}</button>
                <button onClick={() => this.buttonClickedthree(shuffledArray, correctAnswer)}>{shuffledArray[2]}</button>

                <img className="dogs-image" src={randomImage} alt='dog2' /><br></br>

                <button  onClick={() => this.handleClick(shuffledArray[0])}>{shuffledArray[0]}</button>
                <button  onClick={() => this.handleClick(shuffledArray[1])}>{shuffledArray[1]}</button>
                <button  onClick={() => this.handleClick(shuffledArray[2])}>{shuffledArray[2]}</button>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    // console.log('state test:', state)

    return {
        image: state.dogimage,
        currentDog: state.DogsImagesReducer.currentDog,
        randomDogOne: state.DogsImagesReducer.twoRandomDogs.one,
        randomDogTwo: state.DogsImagesReducer.twoRandomDogs.two,
        score: state.score,
    }
}

export default connect(mapStateToProps, { getDogsList })(RandomDogImageGame)