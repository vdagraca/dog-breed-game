const initialState = {breeds: [], correctAnswer: {}, breedMode:''}

export default (state = initialState, action = {}) => {
    switch (action.type) {
      case "GET_DOGS_LIST": {
        return {...state, breeds: action.payload.breeds, correctAnswer: action.payload.correctAnswer, 
        breedMode: action.payload.breedMode}
      }
      case 'CLEAN_DATA': {
        return {...state, breeds: {}}
      }
      default:
        return state
    }
  }