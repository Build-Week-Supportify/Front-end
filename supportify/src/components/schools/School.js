import React from 'react';
import axios from 'axios';

const School = ({ item }) => {

    const addSchool = (id, props, data) => {

    axios
        .get(`https://bw-supportify.herokuapp.com/schools/`)

        .then(response => {
            console.log('form-update', response);
            props.updateSchools(data);
        })

        .catch(function(error) {
        console.log(error);
        });

        window.location.href = window.location.href;
    };

    return (
    <>
        <h2>{item.name}</h2>
        <button onClick={() => addSchool(item.id)}>Add School</button>
    </>
    );
};

export default School;