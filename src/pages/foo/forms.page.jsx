import React, { useState } from 'react';
import FormInput from "../../components/ui/form/form-input/form-input.component";
import CustomButton from "../../components/ui/form/custom-button/custom-button.componnents";

const FormsPage = () => {

    const [persons, setPersons] = useState([]);
    const [canSubmit, setCanSubmit] = useState(false);
    const [person, setPerson] = useState({
        firstname: '',
        email: ''
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (person.firstname && person.email) {
            setPersons(prevState => ([...persons, person]))
        } else {

        }
    }

    const handleChange = (event) => {
        const {value, name} = event.target;
        if (person.firstname && person.email) {
            setCanSubmit(preState => true)
        }else{
            setCanSubmit(preState => false)
        }
        setPerson(prevState => ({...prevState, [name]: value}));
    }

    return (
        <div className={"container"}>
            <div className={"row"}>
                <div className="col">
                    <form onSubmit={handleSubmit}>
                        <FormInput
                            type="text"
                            name="firstname"
                            value={person.firstname}
                            handleChange={handleChange}
                            required
                        >
                            Name
                        </FormInput>

                        <FormInput
                            type="email"
                            name="email"
                            value={person.email}
                            handleChange={handleChange}
                            required
                        >
                            Email
                        </FormInput>

                        <CustomButton
                            type='submit'
                            disabled={!canSubmit}
                        >
                            Add User
                        </CustomButton>
                    </form>


                    <div>
                        <p>{JSON.stringify(persons)}</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FormsPage;
