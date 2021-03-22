import React, {useState} from 'react';
import './sign-in.styles.scss'
import FormInput from "../../ui/form/form-input/form-input.component";
import CustomButton from "../../ui/form/custom-button/custom-button.componnents";
import {connect} from "react-redux";
import { useHistory } from "react-router-dom";



const SignInForm = () => {
    const [credential, setCredential] = useState({
        email: "",
        password: ""
    })

    let history = useHistory();

    const handleSubmit =  async (event) => {
        event.preventDefault()
        console.log(credential, history);
    }

    const handleChange = (event) => {
        const {value, name} = event.target;
        setCredential(prevState => ({...prevState, [name]: value}));

    }

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email ans password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    type="email"
                    name="email"
                    value={credential.email}
                    handleChange={handleChange}
                    required
                >
                    Email
                </FormInput>

                <FormInput
                    type="password"
                    name="password"
                    value={credential.password}
                    onChange={handleChange}
                    required
                >
                    Password
                </FormInput>

                <CustomButton type='submit'> Sign in </CustomButton>
            </form>
        </div>
    );
};




export default connect(null, null)(SignInForm);
