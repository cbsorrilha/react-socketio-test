import { WILL_FETCH_PLAYERS, SUCCESS_FETCH_PLAYERS, ERROR_FETCH_PLAYERS } from './constants'
import { SET_TOTAL, FILTER, ENTERED_LOBBY, EXITED_LOBBY } from './constants'

const initialState = {
    players: [],
    isLoading: false,
    errors: [],
    total: 0,
    activeFilter: 'noFilter'
}

const playerFactory = (player, i) => {
    player.isVisible = true
    player.position = i
    return player
}

const filters = {
    playersWithTeams: (players) => {
        return players.map(player => {
            if (!(player.teams.length > 0)) {
                player.isVisible = false
            }
            return player
        })
    },
    noFilter: (players) => {
        return players.map(player => {
            player.isVisible = true
            return player
        })
    },
    helpers: {
        count: (players) => {
            return players.reduce((amount, player) => {
                return (!player.isVisible) ? amount : amount + 1
            }, 0)
        }
    }
}

export function players(state = initialState, action) {

    let players = []

    switch (action.type) {
        case EXITED_LOBBY:
            action.player.lobby = null
            players = Array.from(state.players)
            players[action.player.position] = action.player
            return Object.assign({}, state, { players })

        case ENTERED_LOBBY:
            action.player.lobby = 1
            players = Array.from(state.players)
            players[action.player.position] = action.player
            return Object.assign({}, state, { players })

        case FILTER:
            players = filters[action.filter](state.players)
            return Object.assign({}, state, { players, total: filters.helpers.count(players), activeFilter: action.filter })

        case SET_TOTAL:
            return Object.assign({}, state, {total: action.total})

        case WILL_FETCH_PLAYERS:
            return Object.assign({}, state, { isLoading: true })

        case SUCCESS_FETCH_PLAYERS:
            players = action.players.map((player, i) => {
                return playerFactory(player, i)
            })
            return Object.assign({}, state, { isLoading: false, players })

        case ERROR_FETCH_PLAYERS:
            return Object.assign({}, state, { isLoading: false, errors: action.errors })

        default:
            return state
    }
}
