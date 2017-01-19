import { WILL_FETCH_PLAYERS, SUCCESS_FETCH_PLAYERS, ERROR_FETCH_PLAYERS } from '../constants'
import { SET_TOTAL, FILTER, ENTERED_LOBBY, EXITED_LOBBY } from '../constants'

import { players } from '../reducer'

const mockPlayer = {
    lobby: null,
}

const mockPlayers = [
    { lobby: null, teams: [1] },
    { lobby: null, teams: [] },
    { lobby: null, teams: [] }
]

let state = {
    players: [],
    isLoading: false,
    errors: [],
    total: 0,
    activeFilter: 'noFilter'
}

describe('players reducer', () => {
    it('should return the initial state', () => {
        expect(
            players(undefined, {})
        ).toEqual(state)
    })

    it('should handle players fetching', () => {
        expect(players(undefined, { type: WILL_FETCH_PLAYERS }))
            .toEqual({
                players: [],
                isLoading: true,
                errors: [],
                total: 0,
                activeFilter: 'noFilter'
            })

        expect(players({
                    players: [],
                    isLoading: true,
                    errors: [],
                    total: 0,
                    activeFilter: 'noFilter'
                },
                {
                    type: SUCCESS_FETCH_PLAYERS,
                    players: mockPlayers
                }
            )
        ).toEqual({
            players: [
                {
                    lobby: null,
                    teams:[1],
                    isVisible: true,
                    position: 0,
                },
                {
                    lobby: null,
                    teams:[],
                    isVisible: true,
                    position: 1,
                },
                {
                    lobby: null,
                    teams:[],
                    isVisible: true,
                    position: 2,
                },
            ],
            isLoading: false,
            errors: [],
            total: 0,
            activeFilter: 'noFilter'
        })

        expect(players({
            players: [
                {
                    lobby: null,
                    teams: [1],
                    isVisible: true,
                    position: 0,
                },
                {
                    lobby: null,
                    teams: [],
                    isVisible: true,
                    position: 1,
                },
                {
                    lobby: null,
                    teams: [],
                    isVisible: true,
                    position: 2,
                },
            ],
            isLoading: false,
            errors: [],
            total: 0,
            activeFilter: 'noFilter'
        },{
            type: SET_TOTAL,
            total: 3
        })).toEqual({
            players: [
                {
                    lobby: null,
                    teams: [1],
                    isVisible: true,
                    position: 0,
                },
                {
                    lobby: null,
                    teams: [],
                    isVisible: true,
                    position: 1,
                },
                {
                    lobby: null,
                    teams: [],
                    isVisible: true,
                    position: 2,
                },
            ],
            isLoading: false,
            errors: [],
            total: 3,
            activeFilter: 'noFilter'
        })

        expect(players({
                    players: [],
                    isLoading: true,
                    errors: [],
                    total: 0,
                    activeFilter: 'noFilter'
                },
                {
                    type: ERROR_FETCH_PLAYERS,
                    errors: ['Erro genérico']
                }
            )
        ).toEqual({
            players: [],
            isLoading: false,
            errors: ['Erro genérico'],
            total: 0,
            activeFilter: 'noFilter'
        })
    })

    it('should handle filtering on the players list', () => {
        expect(
            players({
                players: [
                    {
                        lobby: null,
                        teams: [1],
                        isVisible: true,
                        position: 0,
                    },
                    {
                        lobby: null,
                        teams: [],
                        isVisible: true,
                        position: 1,
                    },
                    {
                        lobby: null,
                        teams: [],
                        isVisible: true,
                        position: 2,
                    },
                ],
                isLoading: false,
                errors: [],
                total: 3,
                activeFilter: 'noFilter'
            },{
                type: FILTER,
                filter: 'playersWithTeams'
            })
        ).toEqual({
            players: [
                {
                    lobby: null,
                    teams: [1],
                    isVisible: true,
                    position: 0,
                },
                {
                    lobby: null,
                    teams: [],
                    isVisible: false,
                    position: 1,
                },
                {
                    lobby: null,
                    teams: [],
                    isVisible: false,
                    position: 2,
                },
            ],
            isLoading: false,
            errors: [],
            total: 1,
            activeFilter: 'playersWithTeams'
        })
    })
    it('should handle lobby ins and outs', () => {


        expect(players({
            players: [
                {
                    lobby: null,
                    teams: [1],
                    isVisible: true,
                    position: 0,
                },
                {
                    lobby: null,
                    teams: [],
                    isVisible: false,
                    position: 1,
                },
                {
                    lobby: null,
                    teams: [],
                    isVisible: false,
                    position: 2,
                },
            ],
            isLoading: false,
            errors: [],
            total: 1,
            activeFilter: 'playersWithTeams'
        }, {
            type: ENTERED_LOBBY,
            player: {
                lobby: 1,
                teams: [1],
                isVisible: true,
                position: 0,
            }
        })).toEqual({
            players: [
                {
                    lobby: 1,
                    teams: [1],
                    isVisible: true,
                    position: 0,
                },
                {
                    lobby: null,
                    teams: [],
                    isVisible: false,
                    position: 1,
                },
                {
                    lobby: null,
                    teams: [],
                    isVisible: false,
                    position: 2,
                },
            ],
            isLoading: false,
            errors: [],
            total: 1,
            activeFilter: 'playersWithTeams'
        })

        expect(players({
            players: [
                {
                    lobby: 1,
                    teams: [1],
                    isVisible: true,
                    position: 0,
                },
                {
                    lobby: null,
                    teams: [],
                    isVisible: false,
                    position: 1,
                },
                {
                    lobby: null,
                    teams: [],
                    isVisible: false,
                    position: 2,
                },
            ],
            isLoading: false,
            errors: [],
            total: 1,
            activeFilter: 'playersWithTeams'
        }, {
            type: EXITED_LOBBY,
            player: {
                lobby: 1,
                teams: [1],
                isVisible: true,
                position: 0,
            }
        })).toEqual({
            players: [
                {
                    lobby: null,
                    teams: [1],
                    isVisible: true,
                    position: 0,
                },
                {
                    lobby: null,
                    teams: [],
                    isVisible: false,
                    position: 1,
                },
                {
                    lobby: null,
                    teams: [],
                    isVisible: false,
                    position: 2,
                },
            ],
            isLoading: false,
            errors: [],
            total: 1,
            activeFilter: 'playersWithTeams'
        })
    })
})
