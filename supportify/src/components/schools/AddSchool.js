import React, { useState} from 'react';
import axios from 'axios';

export default function AddSchool(props) {

    const initialItem = {
        id: props.id,
        school_name: '',
        location: ''
    };

    const [item, setItem] = useState(initialItem);
    const [addSchool, setSchools] = useState([]);

    const id = props.id;

    const handleTextInput = event => {
        event.preventDefault();
        let value = event.target.value;
        setItem({
        ...item,
        [event.target.name]: value
        });
    };

    const schoolInfo = {...item, ...addSchool}
    console.log(schoolInfo)

    const handleSubmit = event => {
        event.preventDefault();
        axios
        .put(`https://bw-supportify.herokuapp.com/schools/${id}`, schoolInfo)
        .then(response => {
            console.log(response);
            setItem(initialItem);
            props.history.push('/schools');
        })
        .catch(error => console.log(error.response));
    };

    return (
        <div>
        <div className = 'addsch'>Add School</div>
        <form onSubmit = {handleSubmit}>
        <input
            type = 'text'
            name = 'school_name'
            onChange = {handleTextInput}
            placeholder = 'school_name'
            value = {item.school_name}
        />
        <div/>

        <input
            type = 'text'
            name = 'location'
            onChange = {handleTextInput}
            placeholder = 'location'
            value = {item.location}
        />
        <div/>

        <button className = 'addschbtn'>Add School</button>
        </form>
        </div>
    );
}