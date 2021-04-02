import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="headers">
           <nav className="navbar navbar-expand-lg navbar-light bg-primary ">
                <h2>
                    Gadget&Gear
                </h2>
       
        <div className="collapse navbar-collapse d-flex flex-row-reverse m-3" id="navbarNav">

            <ul className="navbar-nav d-flex justify-content-around headers">
            <li className="nav-item active">
                <Link to="/home" className="nav-link">
                    Home
                </Link>
            </li>
            <li className="nav-item active">
               <Link to="/orders" className="nav-link">
                   Orders
                </Link>
            </li>
            <li className="nav-item active">
               <Link to="/admin/:loggedInUser.email" className="nav-link">
                   Admin
                </Link>
            </li>
            <li className="nav-item active" >
               <Link to="/login" className="nav-link">
                   Login
                </Link>
            </li>
            </ul>
        </div>
        </nav> 
        </div>
    );
};

export default Header;