import React, {Component} from "react";
import { connect } from "react-redux";
import {registerUser} from '../store/actions';

class Register extends Component {
    state = {
        username: '',
        password: '',
        first_name: '',
        last_name: '',
        email: ''
    }


    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSelect = e => {
        console.log(e.target.value);
        this.setState({
            authLevel: e.target.value
        }
        )
    }

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.authLevel !== ''){
        this.props.registerUser(this.state)
        this.props.history.push("/login")  
        } else {
            alert("Please select your role")
        }
    }

    render() {
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Signup</h5>
                    <div className="input-field">
                        <label htmlFor="username">Username</label>
                        <input type="text" id='username' onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password' onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="first_name">First Name</label>
                        <input type="text" id='first_name' onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="last_name">Last Name</label>
                        <input type="text" id='last_name' onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="text" id='email' onChange={this.handleChange} />
                    </div>
                    <div>
                    <label htmlFor="admin">
                        <p>Are you a School Admin or a Board Member?</p>
                        <input 
                            checked 
                            type="radio" 
                            name="authLevel" 
                            id="admin" 
                            onChange={this.handleSelect} 
                            value={this.state.authLevel}
                        />
                        <span>Admin</span>
                    </label>
                    </div>
                    <div>
                    <label htmlFor="boardMember" >
                        <input 
                            checked 
                            type="radio" 
                            name="authLevel" 
                            id="boardMember" 
                            onChange={this.handleSelect} 
                            value={this.state.authLevel}
                        />
                        <span>Board Member</span>
                    </label>
                    </div>
                    <div className="input-field">
                        <button>submit</button>
                    </div>
                </form>
            </div>
        )
    }
}



export default connect(
    null,
    { registerUser }
)(Register)