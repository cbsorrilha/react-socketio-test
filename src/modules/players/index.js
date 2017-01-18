/*Vendor imports*/
import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
/*Custom imports*/
import { Players } from './components/players'
import { willFetchPlayers, successFetchPlayers, errorFetchPlayers } from './actions'
import { setTotal, filter, enteredLobby } from './actions'
import { fetchPlayers } from './requests'

class PlayersContainer extends Component{

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.refresh()
    }

    getActions() {
        const { activeFilter, enterLobby } = this.props
        return {
            toggleTeamFilter: () => {
                let filterName = (activeFilter == 'noFilter') ? 'playersWithTeams' : 'noFilter'
                this.props.filter(filterName)
            },
            enterLobbyFactory: (player) => {
                return () => {
                    enterLobby(player)
                }
            }

        }
    }

    render() {
        const { players, isLoading, errors, total } = this.props
        return (
            <Players
                actions={ this.getActions() }
                total={ total }
                list={ players }
                isLoading={ isLoading }
                errors={ errors } />
        )
    }
}

const mapStateToProps = (state) => {
    const { players, isLoading, errors, total, activeFilter } = state.players
    return {
        players,
        isLoading,
        errors,
        total,
        activeFilter,
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        filter: filterName => {
            dispatch(filter(filterName))
        },
        enterLobby: player => {
            dispatch(enteredLobby(player))
        },
        refresh: () => {
            dispatch(willFetchPlayers())
            fetchPlayers()
            .then((response)=>{
                console.log(response)
                let { results, count } = response.data
                dispatch(successFetchPlayers(results))
                dispatch(setTotal(count))

            })
            .catch(function (error) {
                if (error.response) {
                    // The request was made, but the server responded with a status code
                    // that falls out of the range of 2xx
                    dispatch(errorFetchPlayers(["Não foi possível realizar a sua solicitação :("]))
                    console.error(error.response.status +" "+ error.response.data)
                } else {
                    // Something happened in setting up the request that triggered an Error
                    dispatch(errorFetchPlayers(["Não foi possível realizar a sua solicitação :("]))
                    console.log('Error', error.message);
                }
                console.log(error.config);
            })
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(PlayersContainer)
