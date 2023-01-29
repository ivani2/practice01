import React, { Component } from "react";

const NavBar = ( { totalCounters } ) => {

    console.log(" NavBar - Rendered ");

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
            <a className="navbar-brand" href="#">
                Navbar{" "}
                <span className="badge badge-pill badge-primary">
                    { totalCounters }
                </span>
            </a>
        </nav>
    );
};

// class NavBar extends Component {
//     render() {
//     }
// }

export default NavBar;
