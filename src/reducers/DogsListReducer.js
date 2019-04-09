import { SET_DOGSLIST } from '../actions/DogsListAction'


const reducer = (state = [], action = {}) => {
  switch (action.type) {
    case SET_DOGSLIST:
      return action.payload
    default:
      return state
  }
}

export default reducer

//