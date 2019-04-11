import DogsListReducer from './DogsListReducer'
import { combineReducers } from 'redux';
import DogsImagesReducer from './DogsImagesReducer'
import dogimage from './FetchRandomImageReducer'
import twodogs from './DogsImagesReducer'

export default combineReducers({
    DogsListReducer,
    DogsImagesReducer,
    dogimage,
    twodogs
})

