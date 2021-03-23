import React, {useState,useEffect} from 'react';
import './sign-up.styles.scss'
import FormInput from "../../ui/form/form-input/form-input.component";
import CustomButton from "../../ui/form/custom-button/custom-button.componnents";
import {connect} from "react-redux";
import {useHistory} from "react-router-dom";
import {registrationStart} from "../../../redux/registration/registration.actions";

const SignUp = ({signUpUser, errorsData}) => {
    const [newUser, setNewUser] = useState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const [errors, setErrors] = useState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });


    useEffect(() => {
        if (errorsData) {
            errorsData.forEach(violation => {
                setErrors(prevState => ({...prevState, [violation.propertyPath]: violation.message}));
            });
        }
    }, [errorsData]);


    let history = useHistory();
    const handleSubmit = async (event) => {
        event.preventDefault()
        signUpUser(newUser, history)
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
                    error={errors.displayName}
                >
                    Display Name
                </FormInput>

                <FormInput
                    type="email"
                    name="email"
                    value={newUser.email}
                    handleChange={handleChange}
                    error={errors.email}
                    required
                >
                    Email
                </FormInput>

                <FormInput
                    type="password"
                    name="password"
                    value={newUser.password}
                    onChange={handleChange}
                    error={errors.password}
                    required
                >
                    Password
                </FormInput>

                <FormInput
                    type="password"
                    name="confirmPassword"
                    value={newUser.confirmPassword}
                    error={errors.confirmPassword}
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


const mapDispatchToProps = (dispatch) => {
    return {
        signUpUser: (newUser, history) => dispatch(registrationStart(newUser, history)),
    }
}

const mapStateToProps = state => {
    return {
        errorsData: state.registration.errors,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
