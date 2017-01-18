/*Vendor imports*/
import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
/*Custom imports*/

import { Lobby } from './components/lobby'

class LobbyContainer extends Component{

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Lobby />
        )
    }
}

const mapStateToProps = (state) => {
    // const {  } = state.users
    return {

    }
}


const mapDispatchToProps = (dispatch) => {
    return {

    }

}

export default connect(mapStateToProps, mapDispatchToProps)(LobbyContainer)
