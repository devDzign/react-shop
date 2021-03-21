import React from 'react';
import './header.styles.scss'
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from '../../assets/crown.svg'

const ROUTES_PATH = [
    {
        'name': 'home',
        'path': '/'
    },
    {
        'name': 'shop',
        'path': '/shop'
    }
]

const Header = (props) => {

    // const renderAuthenticationLink = isLoggedIn
    //     ?
    //         <Link to={"/sign-out"} className="nav-link">Sign Out</Link>
    //     :
    //         <Link to={"sign-in-and-sign-up"} className="nav-link">Sign In</Link>
    //     ;

    return (
        <div className='header'>
            <Link className="logo-container" to='/'>
                <Logo className='logo'/>
            </Link>
            <div className="options">
                {
                    ROUTES_PATH.map((route, key) => {
                        return <Link to={route.path} key={key} className='option'>{route.name.toUpperCase()}</Link>
                    })
                }
            </div>
        </div>
    );
};


export default Header;