import request from 'superagent'

export const SET_DOGSLIST = 'SET_DOGSLIST'
export const SET_CURRENTDOG = 'SET_CURRENTDOG'

export const setDogsList = (dogslist) => {
    return {
        type: SET_DOGSLIST,
        payload: dogslist
    }
}

export const setCurrentDog = (data)=> {
    return {
        type: SET_CURRENTDOG,
        payload: {
            name: data.name,
            imageUrl: data.imageUrl
        }
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

                    const randomBreedImageUrl =`https://dog.ceo/api/breed/${encodeURIComponent(randomBreed)}/images/random`
                    request.get(randomBreedImageUrl).then(response =>
                        {
                            const imageUrl = response.body.message 
                            console.log(imageUrl)
                            dispatch(setCurrentDog({ name: randomBreed, imageUrl: imageUrl }))
                        }
                        )
                }
            })
            .catch(error => {console.error('Error')})
    }
}
