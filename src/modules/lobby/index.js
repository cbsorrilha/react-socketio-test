/*Vendor imports*/
import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
/*Custom imports*/
import { playerEntered, playerExited } from './actions'
import { Lobby } from './components/lobby'

class LobbyContainer extends Component{

    constructor(props) {
        super(props)
        window.socket.on('player:entered', this._playerEntered.bind(this))
        window.socket.on('player:exited', this._playerExited.bind(this))
    }

    _playerEntered(player) {
        const { playerWillEnter } = this.props
        playerWillEnter(player)
    }

    _playerExited(player) {
        const { playerWillEnter } = this.props
        playerWillEnter(player)
    }

    getActionsFactories() {
        const { playerWillExit } = this.props
        return {
            playerExitedFactory: (player) => {
                return () => {
                    playerWillExit(player)
                    window.socket.emit('player:exit', player)
                }
            }
        }
    }

    render() {
        const { players } = this.props
        return (
            <Lobby list={players} actionsFactories={this.getActionsFactories()} />
        )
    }
}

const mapStateToProps = (state) => {
    const { players } = state.lobby
    return {
        players
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        playerWillExit: (player) => {
            dispatch(playerExited(player))
        },
        playerWillEnter: (player) => {
            dispatch(playerEntered(player))
        }

    }

}

export default connect(mapStateToProps, mapDispatchToProps)(LobbyContainer)
