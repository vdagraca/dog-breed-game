import request from 'superagent'


export const GET_RANDOM_IMAGE = 'GET_RANDOM_IMAGE'

export function fetchRandomImage(breed) {
    // console.log('random image action')
    return function (dispatch) {
        request
            .get(`https://dog.ceo/api/breed/${encodeURIComponent(breed)}/images/random/`)
            .then(response => {
                console.log(response)
                return response.body.message
            })
            .then(image => dispatch({
                type: GET_RANDOM_IMAGE,
                payload: image
            }))
            .catch(error => console.error('Error'))
    }
}