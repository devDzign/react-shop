import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { useHistory } from 'react-router-dom'


export default (ChildComponent) => {
    const RequireAutehentication = (props) => {

        const {isLoggedIn} = props;
        const history = useHistory();

        useEffect(() => {
            if(!isLoggedIn){
                return  history.push('/sign-in-and-sign-up');
            }
        }, [isLoggedIn, history]);

        if (isLoggedIn){
            return <ChildComponent/>;
        }

        return '';

    };

    const mapStateToProps = state => {
        return {
            isLoggedIn: state.authenticate.isLoggedIn
        }
    }

    return connect(mapStateToProps)(RequireAutehentication);
}



