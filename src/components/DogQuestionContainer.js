import React, { Component } from 'react'
import { DogQuestion } from './DogQuestion'
import { fetchRandomImage } from '../actions/FetchRandomImageAction'
import { connect } from 'react-redux'


class DogQuestionContainer extends Component {

    componentDidMount() {
      this.props.fetchRandomImage()
    }

    render() {
        console.log("props dog question", this.props)
        return (
            <div>
                <DogQuestion dogsList={this.props.dogsList}></DogQuestion>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('state test 2:', state)

    return {
        dogslist: state.DogsListReducer.dogsList
    }
}

export default connect(mapStateToProps, {fetchRandomImage})(DogQuestionContainer)