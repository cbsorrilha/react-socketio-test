/*Vendor imports*/
import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
/*Custom imports*/

import { App } from './components/app'

class AppContainer extends Component{

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <App>
                { this.props.children }
            </App>
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

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
