import { WILL_FETCH_PLAYERS, SUCCESS_FETCH_PLAYERS, ERROR_FETCH_PLAYERS } from './constants'
import { SET_TOTAL, FILTER, ENTERED_LOBBY, EXITED_LOBBY } from './constants'

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

export const filter = (filter) => {
    return { type: FILTER, filter }
}

export const enteredLobby = (player) => {
    return { type: ENTERED_LOBBY, player }
}

export const exitedLobby = (player) => {
    return { type: EXITED_LOBBY, player }
}
