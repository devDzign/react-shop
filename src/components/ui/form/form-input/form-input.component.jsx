import React from 'react'
import './form-input.styles.scss'

const FormInput = ({handleChange, children,...otherProps}) => {


    return (
        <div className="group">
            <input
                className='form-input'
                onChange={handleChange}
                {...otherProps}
            />

            {
                children ?
                    <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                        {children}
                    </label>
                    : null
            }

        </div>
    );
};

export default FormInput;
