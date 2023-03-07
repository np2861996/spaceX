import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
    return (
        <div className="container-fluid nav_bg">
                <div className="row">

                    <div className="col-12 mx-auto">
                        <nav className="navbar navbar-expand-lg">
                            <div className="container-fluid">
                                <NavLink className="navbar-brand m-auto" to="/"><h1 className="text-white text-center">spaceX</h1></NavLink>
                            </div>
                        </nav>
                    </div>
                </div>

            </div>
    )
}

export default Footer
