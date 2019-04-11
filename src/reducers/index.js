import DogsListReducer from './DogsListReducer'
import { combineReducers } from 'redux';
import DogsImagesReducer from './DogsImagesReducer'
import dogimage from './FetchRandomImageReducer'

export default combineReducers({
    DogsListReducer,
    DogsImagesReducer,
    dogimage
})

