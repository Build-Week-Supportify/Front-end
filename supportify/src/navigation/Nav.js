import React from 'react';


class Nav extends React.Component {
    render() {
        return (
            <header id="header">
                <nav id="nav">
                    <ul>
                    <h3 id="logo"><a href="supportify\src\App.js">Home</a></h3>
                    <h3 id="logo"><a href="supportify\src\components\Login.js">Login</a></h3>
                    <h3 id="logo"><a href="supportify\src\components\Register.js">Sign up</a></h3>
                    <h3 id="logo"><a href="supportify\src\components\dashboard\Dashboard.js">Account</a></h3>
                    <h3 id="logo"><a href="supportify\src\components\Payment.js">Pay</a></h3>

                    </ul>
                </nav>
            </header>
        );
    }
}

export default Nav;
