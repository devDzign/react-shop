import React, {useEffect} from 'react';
// CSS
import './App.css';
import 'bootstrap/scss/bootstrap.scss'
// redux
import {connect} from "react-redux";
// Actions Redux
import { isAuthenticatedUser } from "./redux/users/user.actions";
// Router
import { Redirect, Route, Switch } from "react-router-dom";
// HOC
import {RequireAutehentication} from "./hoc";
//Components
import {Header} from "./components";
// PAGES
import {HomePage, ShopPage, SignInAndSignUpPage} from "./pages";

/**
 *
 * @param isLoggedIn
 * @param isAuthenticated
 * @returns {JSX.Element}
 * @constructor
 */
const App = ({isLoggedIn, isAuthenticated}) => {

    useEffect(() => {
        isAuthenticated();
    });

  return (
    <>
        <Header/>
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/shop" component={RequireAutehentication(ShopPage)}/>
            <Route
                exact
                path="/sign-in-and-sign-up"
                render={() =>
                    isLoggedIn ? (
                        <Redirect to='/' />
                    ) : (
                        <SignInAndSignUpPage />
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
