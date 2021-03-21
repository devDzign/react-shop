import React, {useEffect} from 'react';

// redux
import {connect} from "react-redux";

// CSS
import './App.css';
import 'bootstrap/scss/bootstrap.scss'

// Router
import { Redirect, Route, Switch } from "react-router-dom";

// Pages
import HomePage from "./pages/home/homepage.component";
import ShopPage from "./pages/shop/shop.page";
import Header from "./components/header/header.component";
import { isAuthenticatedUser } from "./redux/users/user.actions";
import SignInSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.page";

function App({isLoggedIn, isAuthenticated}) {

    useEffect(() => {
        isAuthenticated();
    });

  return (
    <>
        <Header/>
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/shop" component={ShopPage}/>
            <Route
                exact
                path="/sign-in-and-sign-up"
                render={() =>
                    isLoggedIn ? (
                        <Redirect to='/' />
                    ) : (
                        <SignInSignUpPage />
                    )
                }
            />
        </Switch>
    </>
  );
}

const mapDispatchToProps = dispatch => ( {
    isAuthenticated: () => dispatch(isAuthenticatedUser())
})

const mapStateToProps = state => {
    return {
        isLoggedIn: state.authenticate.isLoggedIn
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
