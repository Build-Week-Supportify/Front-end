import React from "react";
import axios from "axios";
import SchoolForm from "./MovieCard";
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

    // saveSchool = () => {
    // const addToSavedList = this.props.addToSavedList;
    // addToSavedList(this.state.movie);
    // };

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

        {/* <SchoolForm school={this.state.schools} />
        <div className="save-button" onClick={this.saveSchool}>
          Save
        </div> */}
      </div>
    );
  }
}



// import React from 'react';
// import axios from 'axios';

// const School = ({ item }) => {

//     const addSchool = (id, props, data) => {

//     axios
//         .get(`https://bw-supportify.herokuapp.com/schools/`)

//         .then(response => {
//             console.log('form-update', response);
//             props.updateSchools(data);
//         })

//         .catch(function(error) {
//         console.log(error);
//         });

//         window.location.href = window.location.href;
//     };

//     return (
//     <>
//         <h2>{item.name}</h2>
//         <button onClick={() => addSchool(item.id)}>Add School</button>
//     </>
//     );
// };

// export default School;