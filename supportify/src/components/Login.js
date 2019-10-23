import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../store/actions';
import { Link } from "react-router-dom";


class Login extends Component {
    state = {
        email: '',
        password: '',
    };

    changeHandler = e => {
        e.preventDefault();
        this.setState({
            [e.target.id]: e.target.value,
        });
    };

    submitHandler = e => {
        e.preventDefault();
        this.props.loginUser(this.state);
        this.props.history.push('/');
    };

    render() {
        if (this.props.loading) {
            return <h1>{this.props.message}</h1>;
        } else {
            return (
                <form onSubmit={this.submitHandler}>
                    <div className="form-header">Login</div>

                    <div className="form-body">
                        
                        <input
                            name='username'
                            type="text"
                            id="username"
                            placeholder ='username'
                            onChange={this.changeHandler}
                        />

                        
                        <input
                            name='password'
                            type="password"
                            id="password"
                            placeholder='password'
                            onChange={this.changeHandler}
                        />

                        <button>Login</button>

                        <div>
                            <p>Need to register? </p>
                            <Link to="./register">
                                <button type="submit">Register here!</button>
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

export default connect(
    mapStateToProps,
    { loginUser }
)(Login);
