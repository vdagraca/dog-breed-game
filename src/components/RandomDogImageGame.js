import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getDogsList, cleanData } from '../actions/DogsListAction'
import { handleCorrect, handleWrong } from '../actions/ScoreAction';
import store from '../store'

export class RandomDogImageGame extends Component {

    state = {
        showPopup: false
    }

    togglePopup = () => this.setState({
        showPopup: !this.state.showPopup
    })


    getDogsList = (num) => {
        store.dispatch(getDogsList(num))
    }

    nextQuestion = (value, breed) => {
        if (value === "Correct") {
            store.dispatch(handleCorrect(breed))
        }
        if (value === "Wrong") {

            store.dispatch(handleWrong(breed))
        }
    }

    componentDidMount() {
        console.log('RandomDogImageGame componentDidMount test!')
        console.log('this.props test:', this.props)
        this.props.getDogsList(true)
    }

    submitAnswerPicture = (e) => {
        store.dispatch(cleanData())
        if (e.target.alt === this.props.correctAnswer.name) {
            this.nextQuestion("Correct", this.props.correctAnswer.name)
            this.overWriteBreeds(this.props.score.level * 3)
        } else {
            this.togglePopup()
            setTimeout(() => {
                this.togglePopup()
                this.overWriteBreeds(this.props.score.level * 3)
                this.nextQuestion("Wrong", this.props.correctAnswer.name)
            }, 2000)
        }
    }

    submitAnswerBreed = (e) => {
        store.dispatch(cleanData())
        if (e.target.value === this.props.correctAnswer.name) {
            this.overWriteBreeds(this.props.score.level * 3)
            this.nextQuestion("Correct", this.props.correctAnswer.name)
        } else {
            this.togglePopup()
            setTimeout(() => {
                this.togglePopup()
                this.overWriteBreeds(this.props.score.level * 3)
                this.nextQuestion("Wrong", this.props.correctAnswer.name)
            }, 2000)
        }
    }

    submitAnswerBreedWithKey = (e) => {
        store.dispatch(cleanData())
        if (e.value === this.props.correctAnswer.name) {
                this.overWriteBreeds(this.props.score.level * 3)
                this.nextQuestion("Correct", this.props.correctAnswer.name)
        } else {
            this.togglePopup()
            setTimeout(() => {
                this.togglePopup()
                this.overWriteBreeds(this.props.score.level * 3)
                this.nextQuestion("Wrong", this.props.correctAnswer.name)
            }, 2000)
        }
        return null
    }

    submitAnswerPictureWithKey = (e) => {
        store.dispatch(cleanData())
        if (e.alt === this.props.correctAnswer.name) {
                this.overWriteBreeds(this.props.score.level * 3)
                this.nextQuestion("Correct", this.props.correctAnswer.name)
        } else {
            this.togglePopup()
            setTimeout(() => {
                this.togglePopup()
                this.overWriteBreeds(this.props.score.level * 3)
                this.nextQuestion("Wrong", this.props.correctAnswer.name)
            }, 2000)
        }
        return null
    }

    shuffle(array) {
        let ctr = array.length;
        let temp;
        let index;

        // While there are elements in the array
        while (ctr > 0) {
            // Pick a random index
            index = Math.floor(Math.random() * ctr);
            // Decrease ctr by 1
            ctr--;
            // And swap the last element with it
            temp = array[ctr];
            array[ctr] = array[index];
            array[index] = temp;
        }
        return array;
    }

    render() {
        console.log('this.props test:', this.props)
        const randomImage = this.props.currentDog.imageUrl
        const correctAnswer = this.props.currentDog.name
        const randomAnswerOne = this.props.randomDogOne
        const randomAnswerTwo = this.props.randomDogTwo
        const answerArray = [correctAnswer, randomAnswerOne, randomAnswerTwo]
        const {correctAnswers, totalQuestions, streakCounter, totalScore, level} = this.props.score
        const shuffledArray = this.shuffle(answerArray)
        console.log('shuffledarray', shuffledArray)
        const list = this.props.dogslist

        function buttonClickedone() {
            if (shuffledArray[0] === correctAnswer) {
                return alert('Congratulations!!')
            } else { return alert('Wrong, try again!') }
        }
        function buttonClickedtwo() {
            if (shuffledArray[1] === correctAnswer) {
                return alert('Congratulations!!')
            } else { return alert('Wrong, try again!') }
        }
        function buttonClickedthree() {
            if (shuffledArray[2] === correctAnswer) {
                return alert('Congratulations!!')
            } else { return alert('Wrong, try again!') }
        }


        // function buttonClicked(array) {
        //     for (let i = 0; i < 3; i++) {
        //         if (array[i] === correctAnswer) {
        //             return alert('you win')
        //         } if (array[1] !== correctAnswer) { return alert('you loose') }
        //     }
        // }

        return (
            <div>
                <h1>Random Dog Image Game</h1>

                <p>Your score: {Math.round(totalScore)}%</p>
                <p>Total questions: {totalQuestions}</p>
                <p>Total correct answers: {correctAnswers}</p>
                <p>Current level: {level}</p>
                <p>Level up in: {streakCounter}</p>

                <img src={randomImage} alt='dog2' /><br></br>


                <button onClick={() => buttonClickedone(shuffledArray)}>{shuffledArray[0]}</button>
                <button onClick={() => buttonClickedtwo(shuffledArray)}>{shuffledArray[1]}</button>
                <button onClick={() => buttonClickedthree(shuffledArray)}>{shuffledArray[2]}</button>

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