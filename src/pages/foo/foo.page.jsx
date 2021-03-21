import React, { useState } from 'react';

const Foo = () => {
    const [title, setTitle] = useState("Hello useState hooks");

    const handleClick = () => {
        if (title === "Hello useState hooks") {
            setTitle((prevState) => 'Change useState hooks')
        } else {
            setTitle((prevState) => "Hello useState hooks")
        }

    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-5">
                    <h1>{title}</h1>

                    <button type="button" className="btn btn-outline-primary" onClick={handleClick}> Change title
                    </button>
                </div>

            </div>

        </div>
    );
};

export default Foo;
