import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleNav, closeNav } from '../actions/Nav';


const Nav = () => {
    let toggle = useSelector(state => state.toggleNav);
    let dispatch = useDispatch();
    let baseClasses = 'nav-container';

    return (
        <nav>
            <div className="mobile-nav-container">
                <div className="logo-container">
                    <Link className="nav-link" onClick={() => dispatch(closeNav())} to='/'>
                        <h2 className="logo">Doopian</h2>
                    </Link>
                </div>
                <div className="hamburger" onClick={() => dispatch(toggleNav())}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>


            <div className={`${baseClasses} ${toggle}`}>
                <ul className="nav-links">
                    <Link className="nav-link" onClick={() => dispatch(closeNav())} to='/blog'>
                        <li>Blog</li>
                    </Link>

                    <Link className="nav-link" onClick={() => dispatch(closeNav())} to='/shop'>
                        <li>Shop</li>
                    </Link>

                    <Link className="nav-link" onClick={() => dispatch(closeNav())} to='/contact'>
                        <li>Contact</li>
                    </Link>
                </ul>
            </div>
        </nav >
    )
};

export default Nav
