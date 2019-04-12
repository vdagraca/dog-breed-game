const initialState = { breeds: [] }

export default (state = initialState, action = {}) => {
  switch (action.type) {

    case 'CLEAN_DATA': {
      return { ...state, breeds: [] }
    }
    default:
      return state
  }
}