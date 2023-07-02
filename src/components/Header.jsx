import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import Button from "./Button";

const Header = () => {
  return (
    <nav className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between py-8 md:px-10 px-7">
        <div>
          <Link to="/" className="font-bold text-3xl flex items-center">
            <img src={logo} alt="" className="logo" />
            <span className="header-text">Palate Paradise</span>
          </Link>
        </div>
        <ul className="md:flex md:items-center">
          <li className="md:me-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "active" : "text-3xl font-bold text-primary"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="md:me-8">
            <NavLink
              to="/recipes"
              className={({ isActive }) =>
                isActive ? "active" : "text-3xl font-bold text-primary"
              }
            >
              Recipes
            </NavLink>
          </li>
          <li className="md:me-8">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "active" : "text-3xl font-bold text-primary"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "active" : "text-3xl font-bold text-primary"
              }
            >
              Contact
            </NavLink>
          </li>
          <Button>Get Started</Button>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
