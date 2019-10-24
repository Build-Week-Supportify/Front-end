import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../store/actions';
import { Link } from "react-router-dom";


class Login extends Component {
    state = {
        email: '',
        password: '',
    };

    changeHandler = event => {
        event.preventDefault();
        this.setState({
            [event.target.id]: event.target.value,
        });
    };

    submitHandler = event => {
        event.preventDefault();
        this.props.loginUser(this.state);
        this.props.history.push('/');
    };

    render() {
        if (this.props.loading) {
            return <h1>{this.props.message}</h1>;
        } else {
            return (
                <form onSubmit={this.submitHandler}>
                    <div>Login</div>

                    <div>
                        
                        <input
                            name = 'username'
                            type = 'text'
                            id = 'username'
                            placeholder = 'username'
                            onChange = {this.changeHandler}
                        />
                                                
                        <input
                            name = 'password'
                            type = 'password'
                            id = 'password'
                            placeholder = 'password'
                            onChange={this.changeHandler}
                        />

                        <button>Login</button>

                        <div>
                            <p>Create An Account </p>
                            <Link to= './register'>
                                <button type = 'submit'>Register here!</button>
                            </Link>
        </div>
                    </div>
                </form>
            );
        }
    }
}

const mapStateToProps = state => {
    return {
        loading: state.loading,
        isLoggedIn: state.isLoggedIn,
        message: state.message,
    };
};

export default connect(mapStateToProps, { loginUser })(Login)