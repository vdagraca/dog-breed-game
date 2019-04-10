import React, {Component} from 'react'
import DogBreedImages from './DogBreedImages'
import request from 'superagent'
import { connect } from 'react-redux'
import {setDogsImages} from '../actions/DogsImagesAction'

class DogsBreedImagesContainer extends Component {

  getDogImages=() =>{
    const breed = this.props.match.params.breed

    request
      .get(`https://dog.ceo/api/breed/hound/${encodeURIComponent(breed)}/images/random/10`)
      .then(response => {
        const arrayOfImageUrls = response.body.message
        this.props.setDogsImages(arrayOfImageUrls)
      })  
      .catch(console.error)
  }

  componentDidMount() {
    this.getDogImages()
  }


  updateImages(images) {
    this.props.dispatch(setDogsImages(images))
  }

  render() {
    const { dogsImages } = this.props
    return (
        <div>
            <DogBreedImages dogsimages={dogsImages} />
        </div>
    )
  }
}

const mapStateToProps = state => {
return { dogsImages: state.DogsImagesReducer.dogsImages }
}

export default connect(mapStateToProps, { setDogsImages })(DogsBreedImagesContainer);

