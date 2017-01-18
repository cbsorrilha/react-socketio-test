/*Vendor components*/
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

/*Custom components*/
import AppContainer from './modules/app'
import LobbyContainer from './modules/lobby'
import PlayersContainer from './modules/players'

import rootReducer from './appReducers'
import { Config } from './config'

const { adminBase } = Config.url

const store = createStore(rootReducer)

const history = syncHistoryWithStore(hashHistory, store)


ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path={ adminBase } component={AppContainer} >
                <IndexRoute component={PlayersContainer}/>
                <Route path="/lobby" component={LobbyContainer} />
            </Route>
        </Router>
    </Provider>, document.getElementById('app')
)
