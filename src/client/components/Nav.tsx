import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav: React.FC = () => {
    return (
        <nav className="nav justify-content-end bg-dark text-light p-3 mb-2">
            <NavLink exact to='/' className="btn btn-outline-warning mx-2">Feed</NavLink>
            <NavLink exact to='/register' className="btn btn-outline-warning mx-2">Register</NavLink>
            <NavLink exact to='/login' className="btn btn-outline-warning mx-2">Login</NavLink>
            <NavLink exact to='/createreview' className="btn btn-outline-warning mx-2">Review Trails</NavLink>
            <NavLink exact to='/createtag' className="btn btn-outline-warning mx-2">Create Tags</NavLink>
        </nav>
    );
};

export default Nav;