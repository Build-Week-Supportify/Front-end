import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SchoolForm from "./SchoolForm";
export default class SchoolList extends Component {

    constructor(props) {
        super(props);
        this.state = {
        schools: []
    };
}

    componentDidMount() {
        axios
        .get("https://bw-supportify.herokuapp.com/schools")

        .then(response => this.setState({ schools: response.data }))

        .catch(error => console.log(error.response));

        this.setState({schools: []});
    }

  //updates - passes two states - can collect input data from user to use Ajax to upload to database
    componentDidUpdate() {
        axios
        .get("https://bw-supportify.herokuapp.com/schools")

        .then(response => this.setState({ schools: response.data }))
        .catch(error => console.log(error.response));
    }

    render() {
        return (
        <div >
        {this.state.schools.map(school=> (
            <SchoolDetails key={school.id} school={school} />
        ))}
        </div>
        );
    }
}

function SchoolDetails({ school }) {
    return (
        <Link to={`/schools/${school.id}`}>
        <SchoolForm school={school} />
        </Link>
    );
}
