import { PLAYER_ENTERED, PLAYER_EXITED } from '../constants'
import { lobby } from '../reducer'

const mockPlayer = {
    position: 0
}

let state = {
    players: []
}

test('must return the state with the new player on the playerlist', () => {
    state = lobby(undefined, { type: PLAYER_ENTERED, player: mockPlayer })
    expect(state).toMatchObject({
        players: [mockPlayer]
    })
})

test('must return the state with the new player removed from the playerlist', () => {
    state = lobby(undefined, { type: PLAYER_ENTERED, player: mockPlayer })
    state = lobby(state, { type: PLAYER_EXITED, player: mockPlayer })
    expect(state).toMatchObject({
        players: []
    })
})
