import { PLAYER_ENTERED, PLAYER_EXITED } from './constants'

const initialState = {
    players: []
}

const recountPosition = (players) => {
    return players.map((player, i) => {
        player.position = i
        return player
    })
}

export function lobby(state = initialState, action) {

    let players = []

    switch (action.type) {
        case PLAYER_ENTERED:
            players = Array.from(state.players)
            players.push(action.player)
            players = recountPosition(players)
            return Object.assign({}, state, { players })

        case PLAYER_EXITED:
            players = Array.from(state.players)
            players.splice(action.player.position, 1)
            // console.log(players)
            players = recountPosition(players)
            return Object.assign({}, state, { players })

        default:
            return state
    }
}
