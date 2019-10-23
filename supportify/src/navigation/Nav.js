import React from 'react';

class Nav extends React.Component {
    render() {
        return (
            <header id="header">
                <nav id="nav">
                    <ul>
                    <h3 id="logo"><a href="#">Login</a></h3>
                    <h3 id="logo"><a href="#">Sign up</a></h3>
                    <h3 id="logo"><a href="#">Account</a></h3>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Nav;