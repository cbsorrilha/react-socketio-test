import { SET_TOTAL, WILL_FETCH_PLAYERS, SUCCESS_FETCH_PLAYERS, ERROR_FETCH_PLAYERS } from './constants'

const initialState = {
    players: [],
    isLoading: false,
    errors: [],
    total: 0
}

const playerFactory = (player) => {
    player.isVisible = true
    return player
}

export function players(state = initialState, action) {

    let players = []

    switch (action.type) {
        case SET_TOTAL:
            return Object.assign({}, state, {total: action.total})
            break
        case WILL_FETCH_PLAYERS:
            return Object.assign({}, state, { isLoading: true })
            break
        case SUCCESS_FETCH_PLAYERS:
            players = action.players.map((player) => {
                return playerFactory(player)
            })
            return Object.assign({}, state, { isLoading: false, players })
            break
        case ERROR_FETCH_PLAYERS:
            return Object.assign({}, state, { isLoading: false, errors: action.errors })
            break
        default:
            return state
    }
}
