import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/MU-logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="navbar px-10 py-5  ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52 nav-menu  bg-white"
          >
            <li>
              <Link to="">Home</Link>
              </li>
              <li>
              <Link to="">About Us</Link>
            </li>
           
            <li  tabIndex={0}>
            <Link>
              Members
              <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
            </Link>
            <ul className="p-2 bg-white text-accent ">
              <li>
                <Link>Executive Committee 2019-2020</Link>
              </li>
              <li>
                <Link>Executive Committee 2020-2021</Link>
              </li>
              <li>
                <Link>Executive Committee 2021-2022</Link>
              </li>
              <li>
                <Link>Executive Committee 2022-2023</Link>
              </li>
             
            </ul>
          </li>
            <li className="" tabIndex={1}>
              <Link className="justify-between">
                Events
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </Link>
              <ul className="p-2 bg-white">
                <li>
                  <Link>Blood Donation</Link>
                </li>
                <li>
                  <Link>Winter Cloths Distribution</Link>
                </li>
                <li>
                  <Link>Tree Plantation</Link>
                </li>
                <li>
                  <Link>Ifter Distribution</Link>
                </li>
                <li>
                  <Link>Relif Distribution</Link>
                </li>
                <li>
                  <Link>Poster Competition</Link>
                </li>
                <li>
                  <Link>Dental camp</Link>
                </li>
              </ul>
            </li>
           
            <li>
              <Link to="">Gallary</Link>
            </li>
            <li>
              <Link to="">Certification</Link>
            </li>
            
            <li>
              <Link to="">Contact Us</Link>
            </li>
          </ul>
        </div>
        <Link to="/">
          <img className="w-16" src={logo} alt="MUSSC LOGO"></img>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 nav-menu ">
          <li className="">
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="">About Us</Link>
          </li>
          <li  tabIndex={0}>
            <Link>
              Members
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </Link>
            <ul className="p-2 bg-white">
              <li>
                <Link>Executive Committee 2019-2020</Link>
              </li>
              <li>
                <Link>Executive Committee 2020-2021</Link>
              </li>
              <li>
                <Link>Executive Committee 2021-2022</Link>
              </li>
              <li>
                <Link>Executive Committee 2022-2023</Link>
              </li>
             
            </ul>
          </li>
          <li tabIndex={1}>
            <Link>
              Events
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </Link>
            <ul className="p-2 bg-white">
              <li>
                <Link>Blood Donation</Link>
              </li>
              <li>
                <Link>Winter Cloths Distribution</Link>
              </li>
              <li>
                <Link>Tree Plantation</Link>
              </li>
              <li>
                <Link>Ifter Distribution</Link>
              </li>
              <li>
                <Link>Relif Distribution</Link>
              </li>
              <li>
                <Link>Poster Competition</Link>
              </li>
              <li>
                <Link>Dental camp</Link>
              </li>
            </ul>
          </li>
          
          <li>
              <Link to="">Gallary</Link>
            </li>
            <li>
              <Link to="">Certification</Link>
            </li>
          <li>
            <Link to="">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end join_us">
        <a
          href="https://forms.gle/6FPtrQrt4PdAkqR48"
          className="btn bg-white border border-primary hover:bg-primary hover:text-white hover:border-primary "
        >
          Join us
        </a>
      </div>
    </div>
  );
};

export default Header;
