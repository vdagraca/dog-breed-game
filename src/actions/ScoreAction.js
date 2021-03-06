export const SET_SCORE = 'SET_SCORE'
export const HANDLE_CORRECT = 'HANDLE_CORRECT'
export const HANDLE_WRONG = 'HANDLE_WRONG'
export const CLEAN_STATS = 'CLEAN_STATS'

export function setScore(score) {
    return {
        type: SET_SCORE,
        payload: { score }
    }
}

export function handleCorrect(name) {
    return {
        type: HANDLE_CORRECT,
        payload: {
            name
        }
    }
}

export function handleWrong(name) {
    return {
        type: HANDLE_WRONG,
        payload: {
            name
        }
    }
}

export function cleanStats() {
    return {
        type: CLEAN_STATS
    }
}