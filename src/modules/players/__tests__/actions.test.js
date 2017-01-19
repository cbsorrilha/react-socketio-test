import { WILL_FETCH_PLAYERS, SUCCESS_FETCH_PLAYERS, ERROR_FETCH_PLAYERS } from '../constants'
import { SET_TOTAL, FILTER, ENTERED_LOBBY, EXITED_LOBBY } from '../constants'

import { willFetchPlayers,  successFetchPlayers,  errorFetchPlayers,  setTotal } from '../actions'
import { filter, enteredLobby, exitedLobby } from '../actions'

const mockPlayer = { name: "player" }

const mockPlayerArray = [mockPlayer, mockPlayer, mockPlayer]

const mockErrorArray = ['generic error']

const mockFilter = "filter"

test('must return an action describing that the players will be fetched', () => {
    expect(willFetchPlayers()).toMatchObject({ type: WILL_FETCH_PLAYERS })
})

test('must return an action describing that the players has success on fetch', () => {
    expect(successFetchPlayers(mockPlayerArray)).toMatchObject({ type: SUCCESS_FETCH_PLAYERS, players: mockPlayerArray })
})

test('must return an action describing that the players has error on fetch', () => {
    expect(errorFetchPlayers(mockErrorArray)).toMatchObject({ type: ERROR_FETCH_PLAYERS, errors: mockErrorArray })
})

test('must return an action describing that the total is set', () => {
    expect(setTotal(1)).toMatchObject({ type: SET_TOTAL, total: 1 })
})

test('must return an action describing that a filter must be applied', () => {
    expect(filter(mockFilter)).toMatchObject({ type: FILTER, filter: mockFilter })
})

test('must return an action describing that a player entered the lobby', () => {
    expect(enteredLobby(mockPlayer)).toMatchObject({ type: ENTERED_LOBBY, player: mockPlayer })
})

test('must return an action describing that the total is set', () => {
    expect(exitedLobby(mockPlayer)).toMatchObject({ type: EXITED_LOBBY, player: mockPlayer })
})
