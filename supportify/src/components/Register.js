import React, {Component} from 'react';
import { connect } from 'react-redux';
import {registerUser} from '../store/actions';

class Register extends Component {

    state = {
        username: '',
        password: '',
        first_name: '',
        last_name: '',
        email: ''
    }


    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSelect = event => {
        console.log(event.target.value);
        this.setState({
            authLevel: event.target.value
        }
        )
    }

    handleSubmit = event => {
        event.preventDefault();
        if (this.state.authLevel !== ''){
        this.props.registerUser(this.state)
        this.props.history.push('/login')  
        } else {
            alert('Select Role')
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h3>Sign Up</h3>

                    <div>
                        <label htmlFor = 'username'>Username</label>
                        <input type = 'text' id = 'username' onChange={this.handleChange} />
                    </div>

                    <div>
                        <label htmlFor = 'password'>Password</label>
                        <input type = 'password' id = 'password' onChange={this.handleChange} />
                    </div>

                    <div>
                        <label htmlFor = 'first_name'>First Name</label>
                        <input type = 'text' id = 'first_name' onChange={this.handleChange} />
                    </div>

                    <div>
                        <label htmlFor = 'last_name'>Last Name</label>
                        <input type = 'text' id = 'last_name' onChange={this.handleChange} />
                    </div>

                    <div>
                        <label htmlFor = 'email'>Email</label>
                        <input type = 'text' id = 'email' onChange={this.handleChange} />
                    </div>

                    <div>
                    <label htmlFor = 'admin'>
                        <p>Are you a School Administrator or a Board Member?</p>

                        <input 
                            checked 
                            type = 'radio' 
                            name = 'authLevel' 
                            id = 'admin'
                            onChange={this.handleSelect} 
                            value={this.state.authLevel}
                        />

                        <span>Administrator</span>
                    </label>
                    </div>

                    <div>
                    <label htmlFor = 'boardMember' >
                        <input 
                            checked 
                            type = 'radio' 
                            name = 'authLevel' 
                            id = 'boardMember'
                            onChange={this.handleSelect} 
                            value={this.state.authLevel}
                        />
                        <span>Board Member</span>
                    </label>
                    </div>

                    <div className = 'input-field'>
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}


export default connect(null, { registerUser })(Register)