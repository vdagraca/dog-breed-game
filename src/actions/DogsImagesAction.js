export const SET_DOGSIMAGES = 'SET_DOGSIMAGES'
export const SET_CURRENTDOG = 'SET_CURRENTDOG'

export const setDogsImages = (dogsimages) => {
    return {
        type: SET_DOGSIMAGES,
        payload: dogsimages
    }
}

export const setCurrentDog = (data)=> {
    return {
        type: SET_CURRENTDOG,
        payload: data
    }
}
