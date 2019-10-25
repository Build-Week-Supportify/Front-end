import React from "react";
import axios from "axios";
import {NavLink} from 'react-router-dom';
export default class School extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        schools: null
        };
    }

    componentDidMount() {
        this.fetchSchool(this.props.match.params.id);
    }

    componentWillReceiveProps(newProps) {
        if (this.props.match.params.id !== newProps.match.params.id) {
        this.fetchSchool(newProps.match.params.id);
    }
    }

    fetchSchool = id => {
    axios
        .get(`https://bw-supportify.herokuapp.com/schools/${id}`)
        .then(response => this.setState({ school: response.data }))
        .catch(error => console.log(error.response));
    };

    deleteItem = (id) => {
    axios
        .delete(`https://bw-supportify.herokuapp.com/schools/${id}`)
    }

    render() {
        if (!this.state.schools) {
        return <div>Loading school information...</div>;
    }

    return (
        <div className="save-wrapper">
            <NavLink to={`/update-schools/${this.state.schools.id}`}>
            <button className="update-button">
            Update
            </button>
            </NavLink>

            <button onClick={() => this.deleteItem(this.state.schools.id)} className="delete-button">
            Delete
            </button>

        </div>
        );
    }
}
