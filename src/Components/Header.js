import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import './Styles/header.css'
export const Header = (props) => {
  return (
    <div className="sticky-top">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
        <div className="container-fluid">
          <NavLink className="navbar-brand titleHeader" to="/">{props.name}</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-4">
                <NavLink className="nav-link" aria-current="page" to="/home">Home</NavLink>
              </li>
              <li className="nav-item mx-4">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item mx-4">
                <NavLink className="nav-link" to="/projects">Projects</NavLink>
              </li>
              <li className="nav-item mx-4">
                <NavLink className="nav-link" to="/resume">Resume</NavLink>
              </li>
              <li className="nav-item mx-4">
                <NavLink className="nav-link" to="/certifications">Certifications</NavLink>
              </li>
              <li className="nav-item mx-4">
                <NavLink className="nav-link" to="/blogs">Blogs</NavLink>
              </li>
              <li className="nav-item mx-4">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li>
            </ul>
            {props.searchBar ?
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form> : ""}
          </div>
        </div>
      </nav>
    </div>
  );
};


Header.defaultProps={
  name:"Aadesh N",
  searchBar:false
}
Header.propTypes ={
  name : PropTypes.string,
  searchBar : PropTypes.bool.isRequired
}