import request from 'superagent'

export const SET_DOGSLIST = 'SET_DOGSLIST'

export const setDogsList = (dogslist) => {
    return {
        type: SET_DOGSLIST,
        payload: dogslist
    }
}

export function getDogsList(assignRandomValues = false) {
    // console.log('random image action')
    return function (dispatch) {
        request
            .get('https://dog.ceo/api/breeds/list/all')
            .then(response => {
                const breeds = Object.keys(response.body.message)
                dispatch(setDogsList(breeds))

                if (assignRandomValues) {
                    console.log('dogslist test:', breeds)
                    const randomNumber = Math.random() * breeds.length
                    console.log('randomNumber test:', randomNumber)
                    const randomIndex = Math.floor(randomNumber)
                    console.log('randomIndex test:', randomIndex)
                    const randomBreed = breeds[randomIndex]
                    console.log("randomBreed test:", randomBreed)

                    const randomBreedImageUrl =`https://dog.ceo/api/breed/${encodeURIComponent(randomBreeds)}/images/random`
                    dispatch(setRandomBreed({ name: randomBreed, imageUrl: randomBreedImageUrl }))
                    }
            })
            .catch(error => {console.error('Error')})
    }
}
