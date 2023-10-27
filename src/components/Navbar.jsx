import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='container navbar flex'>
        <Link to="/" className='navbar-brand'>ExcerTracker</Link>
        <div className="">
            <ul className="flex links">
                <li className="">
                    <Link to="/" className='nav-link'>Exercises</Link>
                </li>
                <li className="">
                    <Link to="/create" className="nav-link">Create Exercises Log</Link>
                </li>
                <li className="">
                    <Link to="/user" className="nav-link">Create User</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}
