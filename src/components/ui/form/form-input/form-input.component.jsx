import React from 'react'
import './form-input.styles.scss'

const FormInput = ({handleChange, children, error = null, ...otherProps}) => {

    return (
        <div className="group">
            <input
                className={`${error ? ' invalid-error-input' : ''} form-input`}
                onChange={handleChange}
                {...otherProps}
            />
            {error &&  <div className="invalid-feedback-error">
                {error}
            </div>}


            {
                children ?
                    <label
                        className={`${otherProps.value.length ? 'shrink' : ''} ${error ? ' invalid-error-label' : ''} form-input-label`}>
                        {children}
                    </label>
                    : null
            }

        </div>
    );
};

export default FormInput;
