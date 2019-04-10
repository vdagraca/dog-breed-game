import React, { Component } from 'react'
import { connect } from 'react-redux'
import request from 'superagent'


export class DogQuestion extends Component {

    state = {
      image1: '',
      image2: '',
      image3: '',
      breed: ''
    }

    componentDidMount() {
      const {dogsList} = this.props
      console.log('dogslist test:',dogsList)
      const randomNumber1 = Math.random() * dogsList.length
      console.log('randomNumber test:', randomNumber1)
      const randomIndex1 = Math.floor(randomNumber1)
      console.log('randomIndex test:', randomIndex1)
      const randomBreed1 = dogsList[randomIndex1]
      console.log("randomBreed test:", randomBreed1)

      const randomBreedImageUrl1 =`https://dog.ceo/api/breed/${randomBreed1}/images/random`
      //dispatch(setRandomBreed({ name: randomBreed, imageUrl: randomBreedImageUrl }))
      request
            .get(randomBreedImageUrl1)
            .then(response => {
              this.setState({image1: response.body.message})
            })

      console.log('dogslist test:',dogsList)
      const randomNumber2 = Math.random() * dogsList.length
      console.log('randomNumber test:', randomNumber2)
      const randomIndex2 = Math.floor(randomNumber2)
      console.log('randomIndex test:', randomIndex2)
      const randomBreed2 = dogsList[randomIndex2]
      console.log("randomBreed test:", randomBreed2)

      const randomBreedImageUrl2 =`https://dog.ceo/api/breed/${randomBreed2}/images/random`
      //dispatch(setRandomBreed({ name: randomBreed, imageUrl: randomBreedImageUrl }))
      request
            .get(randomBreedImageUrl2)
            .then(response => {
              this.setState({image2: response.body.message})
            })

      console.log('dogslist test:',dogsList)
      const randomNumber3 = Math.random() * dogsList.length
      console.log('randomNumber test:', randomNumber3)
      const randomIndex3 = Math.floor(randomNumber3)
      console.log('randomIndex test:', randomIndex3)
      const randomBreed3 = dogsList[randomIndex3]
      console.log("randomBreed test:", randomBreed3)

      const randomBreedImageUrl3 =`https://dog.ceo/api/breed/${randomBreed3}/images/random`
      //dispatch(setRandomBreed({ name: randomBreed, imageUrl: randomBreedImageUrl }))
      request
            .get(randomBreedImageUrl3)
            .then(response => {
              this.setState({image3: response.body.message})
            })

    }

    render() {
        
        return (
            <div>
                <span>Which dog breed is it {this.state.breed}?</span>
                <img onClick={() => {}} src={this.state.image1}/>
                <img onClick={() => {}} src={this.state.image2}/>
                <img onClick={() => {}} src={this.state.image3}/>
            </div>
        )
    }
}

