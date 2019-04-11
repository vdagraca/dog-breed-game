import { TWO_RANDOMDOGS } from '../actions/DogsListAction'
import { SET_CURRENTDOG, SET_DOGSIMAGES } from '../actions/DogsImagesAction'

const initialState = {
  dogsImages: [],
  currentDog: {},
  twoRandomDogs: {}
}

const reducer = (state = initialState, action = {}) => {
  console.log("STATE", state, "ACTION", action.payload)
  switch (action.type) {
    case SET_DOGSIMAGES:
      return {
        ...state,
        dogsImages: action.payload
      }
    case SET_CURRENTDOG:
      return {
        ...state,
        currentDog: action.payload
      }
    case TWO_RANDOMDOGS:
      return {
        ...state,
        twoRandomDogs: action.payload

      }

    default:
      return state

  }
}


export default reducer

