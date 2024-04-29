import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { JobsContext } from './JobsContext';

function Navbar() {
    const { isLoggedIn,setIsLoggedIn,user} = useContext(JobsContext)

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
                {
                    isLoggedIn ? (
                        <>
                           <div className='fs-3 me-2 capitalize'>{user}</div> 
                          <button className="btn btn-signup fs-5" onClick={() => setIsLoggedIn(false)}>Log Out</button>
                        </>
                    ) : (
                        <>
                            <div className="d-flex">
                                <Link to='/login'><button className="btn btn-login border border-black me-2 fs-5">Login</button></Link>
                                <Link to='/register'><button className="btn btn-signup fs-5 " >Sign up</button></Link>
                            </div>
                            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                                aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </>
                    )
                }

            </div>
        </nav>
    )
}

export default Navbar
