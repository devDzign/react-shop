import React from 'react';
import './sign-in-and-sign-up.styles.scss'
import {SignInForm, SignUp} from "../../components";


const SignInAndSignUpPage = () => {
    return (
        <div className='sign-in-and-sign-up'>
          <SignInForm/>
          <SignUp />
        </div>
    );
};

export default SignInAndSignUpPage;