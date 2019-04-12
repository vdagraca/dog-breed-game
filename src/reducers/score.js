const initialState = { totalScore: 0, totalQuestions: 0, thingy: [], correctAnswers: 0 }

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case "SET_SCORE": {
      return { ...state, totalScore: action.payload.score }
    }
    case "HANDLE_CORRECT": {
      return (
        {
          ...state,
          totalQuestions: state.totalQuestions + 1,
          correctAnswers: state.correctAnswers + 1,
          thingy: state.thingy.concat(action.payload.name)
        }
      )
    }
    case "HANDLE_WRONG": {
      return (
        {
          ...state,
          totalQuestions: state.totalQuestions + 1,
          thingy: state.thingy.concat(action.payload.name)
        }
      )
    }

    case "CLEAN_STATS": {
      return initialState
    }
    default:
      return state
  }
}