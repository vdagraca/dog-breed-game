import request from 'superagent'

export const SET_DOGSLIST = 'SET_DOGSLIST'
export const SET_CURRENTDOG = 'SET_CURRENTDOG'
export const SET_BREEDS = 'SET_BREEDS'
export const OVERWRITE_BREEDS = 'OVERWRITE_BREEDS'
export const CORRECT_ANSWER = 'CORRECT_ANSWER'
export const REMOVE_BREED = 'REMOVE_BREED'
export const CLEAN_DATA = 'CLEAN_DATA'

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


export function newData(breeds, randomBreed) {
    return {
        type: OVERWRITE_BREEDS,
        payload: { breeds, correctAnswer: breeds[0], randomBreed}
    }
}

export function cleanData() {
    return {
        type: CLEAN_DATA
    }
}

// export function overWriteBreeds(num) {
//     return function (dispatch) {
//         request(`https://dog.ceo/api/breeds/image/random/${num}`)
//             .then(response => {
//                 const breeds = response.body.message.map((dog) => {
//                     const rawDogBreed = dog.split('/')[4]
//                     const dogBreed = (rawDogBreed.includes("-") 
//                     ? rawDogBreed.split('-')[0]
//                     : rawDogBreed)
//                     const formattedDogBreed = dogBreed.slice(0,1).toUpperCase() 
//                                          + dogBreed.slice(1,)
//                     return { name: formattedDogBreed, image: dog }
//                 })
//                 const breedMode = (Math.random() > 0.5);
//                 dispatch(newData(breeds, breedMode))
//             })
//     }
// }


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
                    const randomIndex2 = Math.floor(Math.random() * breeds.length)
                    const randomBreed2 = breeds[randomIndex2]
                    const randomIndex3 = Math.floor(Math.random() * breeds.length)
                    const randomBreed3 = breeds[randomIndex3]
 
 
                    const randomBreedImageUrl = `https://dog.ceo/api/breed/${encodeURIComponent(randomBreed)}/images/random`
                    request.get(randomBreedImageUrl).then(response => {
                        const imageUrl = response.body.message
                        console.log(imageUrl)
                        dispatch(setCurrentDog({ name: randomBreed, imageUrl: imageUrl }))
 
                        // dispatch(twoRandomDogs({ one: randomBreed2, two: randomBreed3 }))

                    }
                    )
                }
            }
        )    
    }
}        