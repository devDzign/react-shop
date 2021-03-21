import React from 'react';
import PropTypes from 'prop-types';

const TestingPage = ({name, age}) => {
    return (
        <div>
           <p>{name || "default Name"}</p>
           <p>{age || 1000 }</p>
        </div>
    );
};

TestingPage.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
};

export default TestingPage;
