import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Nav extends Component {
    render() {
        return (
            <nav>
                <Link to='/'>
                    <h2>Doopian</h2>
                </Link>

                <ul>
                    <Link to='/shop'>
                        <li>Shop</li>
                    </Link>

                    <Link to='/contact'>
                        <li>Contact</li>
                    </Link>
                </ul>
            </nav>
        )
    }
}

export default Nav
