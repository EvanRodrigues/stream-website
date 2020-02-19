import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(state => ({
            open: !state.open
        }));
    }

    render() {
        let baseClasses = 'nav-container';
        let open = this.state.open ? 'open' : 'closed';

        return (
            <nav>
                <div className="mobile-nav-container">
                    <div className="logo-container">
                        <Link className="nav-link" to='/'>
                            <h2 className="logo">Doopian</h2>
                        </Link>
                    </div>
                    <div className="hamburger" onClick={this.toggle}>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                </div>


                <div className={`${baseClasses} ${open}`}>
                    <ul className="nav-links">
                        <Link className="nav-link" to='/blog'>
                            <li>Blog</li>
                        </Link>

                        <Link className="nav-link" to='/shop'>
                            <li>Shop</li>
                        </Link>

                        <Link className="nav-link" to='/contact'>
                            <li>Contact</li>
                        </Link>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Nav
