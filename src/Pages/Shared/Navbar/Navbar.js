import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };
  const menu = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/appointment">Appointment</Link>
      </li>
      <li>
        <Link to="/reviews">Reviews</Link>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
      <li>{user && <Link to="/dashboard">Dashboard</Link>}</li>
      <li>
        {user ? (
          <button
            className="btn btn-ghost text-white tooltip tooltip-left tooltip-accent  bg-gradient-to-l from-secondary to-primary"
            onClick={logout}
            data-tip={user?.email}
          >
            Log Out
          </button>
        ) : (
          <Link to="/login">Log In</Link>
        )}
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar text-black">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menu}
            </ul>
          </div>
          <span className="btn btn-ghost normal-case text-3xl text-shadow shadow-transparent text-transparent bg-clip-text bg-gradient-to-t from-secondary  to-primary font-black">
            Doctors Portal
          </span>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menu}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
