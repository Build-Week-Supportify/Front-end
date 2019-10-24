import React from './node_modules/react';

const SchoolForm = props => {

    const { school_name, location } = props.school;

    return (
        <div>
        <h2>{school_name}</h2>
        <div>
            Location: <em>{location}</em>
        </div>
    </div>
    );
};

export default SchoolForm;