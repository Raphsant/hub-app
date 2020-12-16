import React from "react";
import { useState } from "react";
import { usersCollection } from "../data/firebase";
import "./header.css";

/**
 * Here is where the message containing the greeting message is going to be.
 * Welcome, Raph
 * Could be Good morning, Good afternoon, or evening depending on the time of the day.
 */

function Header(props) {
  const user = props.user;
  const profilePic = user.photoURL;
  
  const headerName = user.displayName;

  return (
    <div className="header__container">
      <img id="pfp" src={profilePic} alt="profilePicture"/>
      <h1>Greetings, {headerName}</h1>
      <h3>This is your Hub</h3>
    </div>
  );
}

export default Header;
