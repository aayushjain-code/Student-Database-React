import React from "react";
import { Link } from "react-router-dom";
import { useFirebase } from "react-redux-firebase";

const Navbar = () => {
  const firebase = useFirebase();
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-white">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src={require("../../assets/newLogo.svg")}
            height="80px"
            alt="logo"
          />
        </Link>

        <div>
          <ul className="navbar-nav mr-auto"></ul>
          <ul className="navbar-nav align-items-center">
            <li className="nav-item">
              <Link to="/studentForm" className="btn btn-primary mr-3 font-weight-bold">
                ADD STUDENT
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="!#"
                id="navbarDropdown"
                data-toggle="dropdown"
              >
                <img
                  src={require("../../assets/p.png")}
                  alt="admin"
                  height="50"
                />


                <span className="ml-2 navbar-text font-weight-bold">Aayush Jain</span>
              </a>
              <div className="dropdown-menu" >

                <a
                  className="dropdown-item font-weight-bold"
                  href="!#"
                  onClick={() => firebase.logout()}
                >
                  LOGOUT
              </a>


              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};


export default Navbar;
