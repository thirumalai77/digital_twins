import React,{useState} from 'react';
import {NavLink} from 'react-router-dom';
import {Nav,Navbar} from 'react-bootstrap';
import appLogo from '../assets/images/appLogo.png';
function Navigation(){
    return (
    <Navbar className='bg-template-color nav-bar-style' fixed="top" expand='lg'>
        <div className="container">
        <Navbar.Brand className='position-relative logo-container' href="/">
            <img
                src={appLogo}
                className="d-inline-block align-top logo-style"
                alt="React Bootstrap logo"
            />
        </Navbar.Brand>
        <Nav className="justify-content-end col-md-11 menu-nav">
            <NavLink className="d-inline p-2 text-black pl-4 pr-4 nav-link" to='/about'> About </NavLink>
            <NavLink className="d-inline p-2 text-black pl-4 pr-4 nav-link" to='/services'> Services </NavLink>
            <NavLink className="d-inline p-2 text-black pl-4 pr-4 nav-link" to='/contactUs'> Contact Us </NavLink>
        </Nav>
        </div>
        </Navbar>
    )
}

export default Navigation;