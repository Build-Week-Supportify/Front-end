import React from 'react';

class Nav extends React.Component {
    render() {
        return (
            <header id="header">
                <nav>
                    <ul>
                    <h3 id="logo"><a href="https://5db2090e9ee9dab705f0f694--supportify.netlify.com/login">Login</a></h3>
                    <h3 id="logo"><a href="https://5db2090e9ee9dab705f0f694--supportify.netlify.com/register">Sign up</a></h3>
                    <h3 id="logo"><a href="https://5db2090e9ee9dab705f0f694--supportify.netlify.com/dashboard">Dashboard</a></h3>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Nav;