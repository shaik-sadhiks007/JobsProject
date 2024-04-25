import React from 'react'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg border-bottom border-secondary mt-2 pb-3">
            <div className="container">
                <a className="navbar-brand fs-3" href="#">
                    <i className="fa-solid fa-circle icon"></i>
                    namless
                </a>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">namless</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item me-2">
                                <a className="nav-link fs-5" aria-current="page" href="#">Start a search</a>
                            </li>
                            <li className="nav-item me-2">
                                <a className="nav-link fs-5" href="#">Jobs list</a>
                            </li>
                            <li className="nav-item me-2">
                                <a className="nav-link fs-5" href="#">Salary estimate</a>
                            </li>
                            <li className="nav-item me-2">
                                <a className="nav-link fs-5" href="#">Pricing</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="d-flex">
                    <button className="btn btn-login border border-black me-2 fs-5" type="submit">Login</button>
                    <button className="btn btn-signup fs-5" type="submit">Sign up</button>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                    aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar
