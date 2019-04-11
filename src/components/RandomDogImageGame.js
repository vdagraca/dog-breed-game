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