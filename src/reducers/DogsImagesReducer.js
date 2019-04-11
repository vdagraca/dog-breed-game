import { SET_DOGSIMAGES, SET_CURRENTDOG } from '../actions/DogsImagesAction'

const initialState = {
  dogsImages: [],
  currentDog: {},
}

const reducer = (state = initialState, action = {}) => {
  //   console.log("STATE", state, "ACTION", action.payload)
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

    default:
      return state

  }
}


export default reducer

