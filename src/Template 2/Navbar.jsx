import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
 
  return (
    <>
      <div className="container-fluid nav_bg n">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <img className="logo" alt="logo" src="https://shubhwed.com/wp-content/uploads/2021/05/SHUBHWED-4.svg"/>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"><i className="fa fa-bars" style={{fontSize:"30px"}}></i></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="#"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="#"
                      >
                        About Us
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="#"
                      >
                        Services
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="#"
                      >
                        Vendor
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="#"
                      >
                        Contact Us
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div style={{display:"flex", justifyContent:"flex-end", marginRight:"10%"}}>
        <i className="fa fa-facebook-f icon"></i>
        <i className="fa fa-twitter icon"></i>
        <i className="fa fa-google icon"></i>
        <i className="fa fa-envelope icon"></i>
      </div>

    </>
  );
};

export default Navbar;


