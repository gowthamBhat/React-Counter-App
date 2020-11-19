import React, { Component } from 'react'

class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-light">
                    <span className="count-label navbar-brand mb-0 h1">Navbar <span className="badge badge-dark">{this.props.totalCounters}</span> </span>
                </nav>
            </div>
        )
    }
}
export default NavBar