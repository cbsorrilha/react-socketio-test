import { SET_TOTAL, WILL_FETCH_PLAYERS, SUCCESS_FETCH_PLAYERS, ERROR_FETCH_PLAYERS } from './constants'

export const willFetchPlayers = () => {
    return { type: WILL_FETCH_PLAYERS }
}

export const successFetchPlayers = (players) => {
    return { type: SUCCESS_FETCH_PLAYERS, players }
}

export const errorFetchPlayers = (errors) => {
    return { type: ERROR_FETCH_PLAYERS, errors }
}

export const setTotal = (total) => {
    return { type: SET_TOTAL, total }
}
