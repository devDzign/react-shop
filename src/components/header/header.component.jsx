import React, {useEffect,useState} from 'react';
import './header.styles.scss'
import {Link, NavLink, useHistory} from "react-router-dom";
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {connect} from "react-redux";
import {userLogout} from "../../redux/users/user.actions";
import {toast} from "react-toastify";
import {CartIcon} from "../index";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {toggleCartHiddenOrSHow} from "../../redux/cart/cart.actions";

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

const Header = ({isLoggedIn, signOutUser, totalItems, hiddenCart, toggleCart}) => {
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

    const handleClickShowCart = () => {
        toggleCart();
    }

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
                <CartIcon totalItems={totalItems} handleClick={handleClickShowCart}/>
            </div>
            { !hiddenCart && <CartDropdown/>}

        </div>
    );
};

const mapStateToProps = ({authenticate: {isLoggedIn}, cart: {totalItems, hidden}}) => {
    return {
        isLoggedIn,
        totalItems,
        hiddenCart: hidden
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOutUser: (history) => dispatch(userLogout(history)),
        toggleCart: () => dispatch(toggleCartHiddenOrSHow())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);