import request from 'superagent'
export const SET_DOGSLIST = 'SET_DOGSLIST'


export const setDogsList = (dogslist) => {
    return {
        type: SET_DOGSLIST,
        payload: dogslist
    }
}

export const getDogsList = () => {
    return (dispatch) => {
        request
            .get('https://dog.ceo/api/breeds/list/all')
            .then(response => {
                dispatch(setDogsList(Object.keys(response.body.message))
                    // const breeds = Object.keys(response.body.message)
                    // this.updateBreeds(breeds)
                )
            })
            .catch(error => { console.log('ERROR!') })
    }
}

//