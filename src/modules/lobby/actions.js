import { PLAYER_ENTERED, PLAYER_EXITED } from './constants'

export const playerEntered = (player) => {
    return { type: PLAYER_ENTERED, player }
}

export const playerExited = (player) => {
    return { type: PLAYER_EXITED, player }
}
