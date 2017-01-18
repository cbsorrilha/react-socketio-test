import { PLAYER_ENTERED, PLAYER_EXITED } from './constants'

const initialState = {
    players: [
        {
            avatar:"http://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/86/8680e99aca10276c1ad2b79ecd2c97ba4a369610_full.jpg",
            username:"gabrielfgularte",
            steam_id: "hduashduadhisa1",
            position:0,
        },
        {
            avatar:"https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/3f/3fd70e29ea346c05ed961cb8ded2cec754791136_full.jpg",
            username:"folks",
            steam_id: "hduashduadhisa2",
            position:1,
        }
    ]
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
