import React, {useState} from 'react';
import './sign-in.styles.scss'
import FormInput from "../../ui/form/form-input/form-input.component";
import CustomButton from "../../ui/form/custom-button/custom-button.componnents";
import {connect} from "react-redux";
import { useHistory } from "react-router-dom";
import {loginStart} from "../../../redux/users/user.actions";



const SignInForm = ({signInUserAction, errors}) => {
    const [credential, setCredential] = useState({
        email: "",
        password: ""
    })

    let history = useHistory();

    const handleSubmit =  async (event) => {
        event.preventDefault()
        signInUserAction(credential, history);
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
                    error= {errors}
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

const mapDispatchToProps = (dispatch) => {
    return {
        signInUserAction: (credential, history) => dispatch(loginStart(credential, history)),
    }
}

const mapStateToProps = state => {
    return {
        errors: state.authenticate.errors,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
