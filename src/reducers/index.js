import DogsListReducer from './DogsListReducer'
import { combineReducers } from 'redux';
import DogsImagesReducer from './DogsImagesReducer'

export default combineReducers({
    DogsListReducer,
    DogsImagesReducer
})
