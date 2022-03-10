// import ListGroup from 'react-bootstrap/ListGroup';
// import React, { useState, useEffect } from "react";
import './style.css';
// import { faTrash } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"



export default function Register() {

    return (
        <div className="wrapper">
            <form method="post">
                <label for="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required />

                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required />

                <button type="submit">Register</button>

                <span className="psw"><a href="/login">Login</a></span>
            </form >
        </div>
    );
}