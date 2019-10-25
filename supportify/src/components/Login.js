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
                    <div className='logintitle'>Login</div>

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

                        <button className='loginbtn'>Login</button>

                        <div>
                            <h1 className='reglog'>Create An Account </h1>
                            <Link to= './register'>
                                <button type = 'submit' className='loginbtn'>Register here!</button>
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

export default connect(mapStateToProps, { loginUser })(Login);
