import React from 'react'
import { Routes, Route } from "react-router-dom";

export const SignUp = () => {
  return (
    <div className= "container">
    <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
  <legend className="fieldset-legend">Create an Account</legend>
  
  <label className="fieldset-label">User Name</label>
  <input type="email" className="input" placeholder="Email" />
  
  <label className="fieldset-label">Email</label>
  <input type="email" className="input" placeholder="Email" />
  
  <label className="fieldset-label">Password</label>
  <input type="password" className="input" placeholder="Password" />

  <label className="fieldset-label">Confirm Password</label>
  <input type="password" className="input" placeholder="Password" />
  
  <button className="btn btn-neutral mt-4">Sign me up!</button>
    </fieldset>
    </div>
  )
};

export default SignUp