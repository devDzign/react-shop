import React from 'react';
import './header.styles.scss'
import {Link, NavLink, useHistory} from "react-router-dom";
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {connect} from "react-redux";
import {userLogout} from "../../redux/users/user.actions";
import {toast} from "react-toastify";

const ROUTES_PATH = [
    {
        'name': 'home',
        'path': '/'
    },
    {
        'name': 'shop',
        'path': '/shop'
    },
]

const Header = ({isLoggedIn, signOutUser}) => {
    let history = useHistory();

    const logoutHandle = async () => {
        await signOutUser(history);
        history.push('/')
        toast.success('Bye bye')
    }

    const renderAuthenticationLink = isLoggedIn
        ?
        <a  href="#" onClick={logoutHandle} className="nav-link option">
            Sign Out
        </a>
        :
        <NavLink exact activeClassName='active' to={"sign-in-and-sign-up"} className="nav-link option">
            Sign In
        </NavLink>
    ;


    return (
        <div className='header'>
            <Link className="logo-container" to='/'>
                <Logo className='logo'/>
            </Link>
            <div className="options">
                {
                    ROUTES_PATH.map((route, key) => {
                        return <NavLink  exact activeClassName='active' to={route.path} key={key} className='option'>{route.name.toUpperCase()}</NavLink>
                    })
                }
                {renderAuthenticationLink}
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isLoggedIn: state.authenticate.isLoggedIn
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOutUser: (history) => dispatch(userLogout(history)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);