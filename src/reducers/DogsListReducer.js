import { SET_DOGSLIST } from '../actions/DogsListAction'

const initialState = {
  dogsList: []
}

const reducer = (state = initialState, action = {}) => {
  // console.log("STATE", state, "ACTION", action.payload)
  switch (action.type) {
    case "SET_DOGSLIST":
      return { ...state, dogsList: action.payload }
    default:
      return state
  }
}

export default reducer
