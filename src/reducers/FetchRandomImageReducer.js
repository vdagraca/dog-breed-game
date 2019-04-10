import { GET_RANDOM_IMAGE } from '../actions/FetchRandomImageAction'


const initialState = null

const reducer = (state = initialState, action = {}) => {
    // console.log('state:', state, 'Action:', action)
    switch (action.type) {
        case GET_RANDOM_IMAGE:
            return action.payload
        default:
            return state
    }
}

export default reducer