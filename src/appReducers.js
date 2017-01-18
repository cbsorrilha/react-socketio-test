/*Vendor imports*/
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
/*Custom imports*/
import { app } from './modules/app/reducer'
import { players } from './modules/players/reducer'
import { lobby } from './modules/lobby/reducer'


const root = combineReducers({
   app,
   players,
   lobby,
   "routing": routerReducer
})

export default root
