import { SET_DOGSIMAGES } from '../actions/DogsImagesAction'

const initialState = {
  dogsImages: []
}

const reducer = (state = initialState, action = {}) => {
//   console.log("STATE", state, "ACTION", action.payload)
  switch (action.type) {
    case "SET_DOGSIMAGES":
      return { ...state, dogsImages: action.payload 
       }
      
    default:
      return state
      
  }
}


export default reducer
