import React, { useState } from 'react';
import './sign-up.styles.scss'
import FormInput from "../../ui/form/form-input/form-input.component";
import CustomButton from "../../ui/form/custom-button/custom-button.componnents";
import { connect } from "react-redux";
import {useHistory} from "react-router-dom";


const SignUp = () => {
    const [newUser, setNewUser] = useState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    let history = useHistory();
    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log(newUser, history)
    }

    const handleChange = (event) => {
        const {value, name} = event.target;
        setNewUser(prevState => ({...prevState, [name]: value}));
    }

    return (
        <div className='sign-up'>
            <h2>I don't have an account</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput
                    type="text"
                    name="displayName"
                    value={newUser.displayName}
                    handleChange={handleChange}
                >
                    Display Name
                </FormInput>

                <FormInput
                    type="email"
                    name="email"
                    value={newUser.email}
                    handleChange={handleChange}
                    required
                >
                    Email
                </FormInput>

                <FormInput
                    type="password"
                    name="password"
                    value={newUser.password}
                    onChange={handleChange}
                    required
                >
                    Password
                </FormInput>

                <FormInput
                    type="password"
                    name="confirmPassword"
                    value={newUser.confirmPassword}
                    onChange={handleChange}
                    required
                >
                    Confirm Password
                </FormInput>

                <CustomButton type='submit'> Sign Up </CustomButton>
            </form>
        </div>
    );
};




export default connect(null, null)(SignUp);
