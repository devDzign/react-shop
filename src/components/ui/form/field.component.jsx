import React from 'react';

const Field = (props) => {
    const {name, value, handler, placeholder, type="text", error=''} =  props;

    return (
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">{props.children}</label>
            <input
                value={value}
                onChange={handler}
                type={type}
                name={name}
                placeholder={placeholder}
                required
                className={"form-control" + (error && " is-invalid")}
            />
            {error && <p className="invalid-feedback">{error}</p>}
        </div>
    );
};

export default Field;
