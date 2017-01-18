import React, {Component, PropTypes} from 'react'

const LobbyBtn = ({click, onLobby}) => {
    if (!onLobby) {
        return (<button onClick={click} className="btn btn-default">Entrar no Lobby</button>)
    }
    return (
        <button className="btn btn-success">No Lobby</button>
    )
}

const Player = ({ player, actionFactories}) => {
    const { enterLobbyFactory } = actionFactories
    return (
        <div className="player">
            <div className="lobbyBtn">
                <LobbyBtn click={ enterLobbyFactory(player) } onLobby={ player.lobby } />
            </div>
            <div className="playerData">
                <div className="playerAvatar">
                    <img src={player.avatar} />
                </div>
                <div className="playerInfo">
                    <h4>{player.username}</h4>
                    <div>{player.email}</div>
                    { (player.teams.length > 0) ? <div>Possui times</div> : <div>Não possui times</div> }
                </div>
            </div>
            <div className="playerDate">
                { player.date_joined }
            </div>
        </div>
    )
}

export const Players = ({total, list, isLoading, errors, actions }) => {
    const { toggleTeamFilter } = actions
    return (
        <div>
            <div className="playerControls">
                <div className="total">
                    Total: { total }
                </div>
                <div className="checkbox">
                    <label>
                        <input type="checkbox" onChange={ toggleTeamFilter } />
                        Mostrar somente players com times
                    </label>
                </div>

            </div>
            <div className="playerList">
                {
                    list.map((player, i)=> {
                        if(player.isVisible){
                            return (
                                <div key={player.steam_id} className="playerCard">
                                    <Player position={i} player={player} actionFactories={{enterLobbyFactory: actions.enterLobbyFactory}} />
                                </div>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}
