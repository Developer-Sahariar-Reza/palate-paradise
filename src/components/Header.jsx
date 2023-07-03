import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import Button from "./Button";
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between py-8 md:px-10 px-7">
        <div>
          <Link to="/" className="font-bold text-3xl flex items-center">
            <img src={logo} alt="" className="logo" />
            <span className="header-text">Palate Paradise</span>
          </Link>
        </div>
        <div
          className="text-3xl absolute right-8 top-12 header-text cursor-pointer md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open === true ? (
            <XMarkIcon className="w-8 h-8"></XMarkIcon>
          ) : (
            <Bars4Icon className="w-8 h-8"></Bars4Icon>
          )}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 duration-500" : "top-[-490px] duration-500"
          }`}
        >
          <li className="md:me-8 md:my-0 my-5">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "active" : "text-3xl font-bold text-primary"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="md:me-8 md:my-0 my-5">
            <NavLink
              to="/recipes"
              className={({ isActive }) =>
                isActive ? "active" : "text-3xl font-bold text-primary"
              }
            >
              Recipes
            </NavLink>
          </li>
          <li className="md:me-8 md:my-0 my-5">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "active" : "text-3xl font-bold text-primary"
              }
            >
              About
            </NavLink>
          </li>
          <li className="md:me-8 md:my-0 my-5">
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
