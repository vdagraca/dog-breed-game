import DogsListReducer from './DogsListReducer'
import { combineReducers } from 'redux';
import DogsImagesReducer from './DogsImagesReducer'
import dogimage from './FetchRandomImageReducer'
import score from './score'
import gameData from './gameData'

export default combineReducers({
    DogsListReducer,
    DogsImagesReducer,
    dogimage,
    score,
    gameData
})

