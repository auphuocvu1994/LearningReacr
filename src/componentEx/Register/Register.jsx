import React, { useState } from "react";
import './style.css';
import axios from "axios"; //Sử dụng axios

export default function Register() {

    const [userName, setUserName] = useState([]);
    const [passWord, setPass] = useState();

    const handeRegister = (e) => {
        e.preventDefault();
        console.log(userName, passWord);

        axios.post('https://todo-nodemy.herokuapp.com/user/register', {
            username: userName,
            password: passWord

        }).then(response => console.log(response)).catch((err) => console.log(err));
    }


    return (
        <div className="wrapper">
            <form>
                <label ><b>Username</b></label>
                <input type="text" placeholder="Enter Username" onChange={e => setUserName(e.target.value)}  name="uname" required />

                <label ><b>Password</b></label>
                <input type="password" placeholder="Enter Password" onChange={e => setPass(e.target.value)}  name="psw" required />

                <button onClick={handeRegister}>Register</button>

                <span className="psw"><a href="/login">Login</a></span>
            </form >
        </div>
    );
}