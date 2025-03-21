import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
    return (
        <nav className="flex-col navbar bg-linear-65 from-purple-500 to-pink-500 h-[20vh] shadow-md">
            <ul className="navbar-center flex justify-center gap-10 w-full">
                <li className="button m-2 py-1 px-3 bg-[#D891D2] shadow-lg rounded-lg tracking-wide uppercase">
                <NavLink to="/" style={({isActive}) => isActive ? {color: "#471660"} : {color: "white"}}>
                Homepage</NavLink></li>
                <li className="button m-2 py-1 px-3 bg-[#D891D2] shadow-lg rounded-lg tracking-wide uppercase">
                <NavLink to="/login" style={({isActive}) => isActive ? {color: "#471660"} : {color: "white"}}>
                Log In
                </NavLink></li>
                <li className="button m-2 py-1 px-3 bg-[#D891D2] shadow-lg rounded-lg tracking-wide uppercase">
                <NavLink to="/signup" style={({isActive}) => isActive ? {color: "#471660"} : {color: "white"}}>
                Sign Up
                </NavLink></li>
                <li className="button m-2 py-1 px-3 bg-[#D891D2] shadow-lg rounded-lg tracking-wide uppercase">
                <NavLink to="/secure/new" style={({isActive}) => isActive ? {color: "#471660"} : {color: "white"}}>
                Create Event
                </NavLink></li>
                <li className="button m-2 py-1 px-3 bg-[#D891D2] shadow-lg rounded-lg tracking-wide uppercase">
                <NavLink to="/logout" style={({isActive}) => isActive ? {color: "#471660"} : {color: "white"}}>
                Log Out
                </NavLink></li>
            </ul>
            <h1 className="text-7xl mt-2 text-[#471660] text-center ">
            Event Scheduler</h1>
        </nav>
    )

}

export default Navigation;