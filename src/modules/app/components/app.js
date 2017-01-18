import React, {Component, PropTypes} from 'react'
import { Link, IndexLink } from 'react-router'

const Title = ({ children }) => {
    return (
        <div className="navbar-header">
            <h1>{ children }</h1>
        </div>
    )
}

const Navigation = ({children}) => {
    return (
        <ul className="nav navbar-nav navbar-right">
            {
                children.map((child, i) => {
                    return <li key={child + i}>{ child }</li>
                })
            }
        </ul>
    )
}

export const App = ({children}) => {
    return (
        <div>
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <Title>MixBR React & Socket.io</Title>
                    <Navigation>
                        <IndexLink activeClassName="active" to="/">Players</IndexLink>
                        <Link activeClassName="active" to="/lobby">Lobby</Link>
                    </Navigation>
                </div>
            </nav>
            <div className="container">
                { children }
            </div>
        </div>
    )
}
