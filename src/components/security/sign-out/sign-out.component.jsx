import {useEffect} from 'react';

import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import {  userLogout } from "../../../redux/users/user.actions";
import {toast} from "react-toastify";

const SignOut = ({signOutUser}) => {

    let history = useHistory();

    useEffect(() => {
       signOutUser(history);
       history.push('/')
        toast.success('Bye bye')
    }, [history,signOutUser]);

    return null;
};


const mapDispatchToProps = (dispatch) => {
    return {
        signOutUser: (history) => dispatch(userLogout(history)),
    }
}

export default connect(null, mapDispatchToProps)(SignOut);

