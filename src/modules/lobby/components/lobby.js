import React, {Component, PropTypes} from 'react'

const Player = ({player, actionsFactories}) => {
    const { playerExitedFactory } = actionsFactories
    return (
        <div className="player">
            <div className="playerAvatar">
                <img src={player.avatar} title={player.username} />
            </div>
            <div className="playerInfo">
                <h3>{ player.username }</h3>
            </div>
            <div>
                <button onClick={playerExitedFactory(player)} className="btn btn-block btn-default">SAIR</button>
            </div>
        </div>
    )
}

export const Lobby = ({list, actionsFactories}) => {
    return (
        <div>
            <div className="lobbyTop">
                <div className="total">
                    Total: { list.length }
                </div>
            </div>
            <div className="lobbyList">
                {
                    list.map(player => {
                        // console.log(player)
                        return (
                            <div key={player.steam_id} className="playerCard -lobby">
                                <Player player={player} actionsFactories={actionsFactories} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
