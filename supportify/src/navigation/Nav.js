import React from 'react';
import { NavStyles } from "./NavStyle";

export default function Header({ }) {
    const HDiv = styled.div`
      text-decoration: none;
    `;
    const StyledNavLink = styled(NavLink)`
      text-decoration: none;
      color: black;
      :visited {
        color: black;
      }
      :hover {
        background-color: grey;
      }
    `;
    const StyledLink = styled(Link)`
      text-decoration: none;
      color: black;
      :visited {
        color: black;
      }
    `;

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
