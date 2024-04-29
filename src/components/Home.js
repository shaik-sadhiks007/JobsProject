import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Banner from './Banner';
import Filters from './Filters';
import Jobs from './Jobs';
import Contact from './Contact';

export default function Home() {
    const location = useLocation();
    const isLoginPage = location.pathname === '/login' || location.pathname === '/register';

    return (
        <>
            {!isLoginPage && (
                <>
                    <Navbar />
                    <Banner />
                    <div className="container my-5">
                        <div className="row">
                            <div className="col-lg-3 col-md-5 col-sm-12 order-md-1">
                                <Filters />
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 mt-md-0 mt-sm-5 order-md-3">
                                <Jobs />
                            </div>
                            <div className="col-lg-3 col-md-7 col-sm-12 mt-sm-0 mt-md-5 order-md-2">
                                <Contact />
                            </div>
                        </div>
                    </div>
                    <div className='text-center'>api is provided by remotive.com</div>
                </>
            )}
        </>
    );
}
