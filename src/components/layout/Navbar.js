import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'


class Navbar extends Component {
    constructor(){
        super()

    }

    render(){
        return(
            <nav className="nav-wrapper green darken-3">
                <div className="container">
                    <Link to='/' className="brand-logo">Danilo test</Link>
                    <SignedInLinks />
                    <SignedOutLinks />
                </div>
            </nav>
        )

    }

}

export default Navbar