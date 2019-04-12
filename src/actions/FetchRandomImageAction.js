import { getDogsList } from './DogsListAction'


export const GET_RANDOM_IMAGE = 'GET_RANDOM_IMAGE'

export function fetchRandomImage(assignRandomValues = false) {
    // console.log('random image action')
    return function (dispatch) {

        dispatch(getDogsList(true))
    }
}