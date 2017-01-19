import { playerEntered, playerExited } from '../actions'
import { PLAYER_ENTERED, PLAYER_EXITED } from '../constants'

const mockPlayer = { name: "player" }

test('must return an action describing that a player entered the lobby', () => {
    expect(playerEntered(mockPlayer)).toMatchObject({ type: PLAYER_ENTERED, player: mockPlayer })
})

test('must return an action describing that a player exited the lobby', () => {
    expect(playerExited(mockPlayer)).toMatchObject({ type: PLAYER_EXITED, player: mockPlayer })
})
