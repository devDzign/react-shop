import React from 'react';
import './sign-in-and-sign-up.styles.scss'
import {Loading, SignInForm, SignUp} from "../../components";
import {connect} from "react-redux";



const SignInAndSignUpPage = ({isFetchingLogin,isFetchingRegister}) => {



    if (isFetchingRegister || isFetchingLogin) {
        return (
            <div className='sign-in-and-sign-up'>
                <Loading />
            </div>
        );
    }

    return (
        <div className='sign-in-and-sign-up'>
          <SignInForm/>
          <SignUp />
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isFetchingLogin: state.authenticate.isFetching,
        isFetchingRegister: state.registration.isFetching,

    }
}
export default connect(mapStateToProps, null)(SignInAndSignUpPage);
