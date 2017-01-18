import React, {Component, PropTypes} from 'react'

export const Player = ({ player }) => {
    return (
        <div className="player">
            <div className="lobbyBtn">
                <button className="btn btn-default">Entrar no Lobby</button>
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
                    list.map(player => {
                        return (
                            <div key={player.steam_id} className="playerCard">
                                <Player player={player} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
