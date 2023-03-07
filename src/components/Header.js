import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <>
            <div className="container-fluid nav_bg">
                <div className="row">

                    <div className="col-12 mx-auto">
                        <nav className="navbar navbar-expand-lg">
                            <div className="container-fluid">
                                <NavLink className="navbar-brand" to="/"><h1 className="text-white">spaceX</h1></NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li className="nav-item"><NavLink exect className="nav-link text-white" to="/">Home</NavLink></li>
                                        <li className="nav-item"><NavLink exect className="nav-link text-white" to="/about">About</NavLink></li>
                                        <li className="nav-item"><NavLink exect className="nav-link text-white" to="/services">Services</NavLink></li>
                                        <li className="nav-item"><NavLink exect className="nav-link text-white" to="/contact">Contact</NavLink></li>
                                    </ul>

                                </div>
                            </div>
                        </nav>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Header
