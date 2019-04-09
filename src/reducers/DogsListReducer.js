import { SET_DOGSLIST } from '../actions/DogsListAction'

const initialState = {
  dogsList: []
}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "SET_DOGSLIST":
      return { ...state, dogsList: action.payload }
    default:
      return state
  }
}

export default reducer
