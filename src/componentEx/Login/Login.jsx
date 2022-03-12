import React, { useState } from "react";
import './style.css';
import axios from "axios"; //Sử dụng axios



export default function Login() {

    const [userName, setUserName] = useState([]);
    const [passWord, setPass] = useState();

    const handeLogin = (e) => {
        e.preventDefault();
        console.log(userName, passWord);

        axios.post('https://todo-nodemy.herokuapp.com/user/login', {
            username: userName,
            password: passWord

        }).then(response => {
            const token = response.data.token;

            console.log(token);

            localStorage.setItem('auth',token);

            // response.redirect('/getListUser');

            // return <Navigate to={'/getListUser'} />

        }
)
        .catch((err) => console.log(err));
    }

    return (
        <div className="wrapper">
            <form>
                <label ><b>Username</b></label>
                <input type="text" placeholder="Enter Username" onChange={e => setUserName(e.target.value)} name="uname" required />

                <label ><b>Password</b></label>
                <input type="password" placeholder="Enter Password" onChange={e => setPass(e.target.value)} name="psw" required />

                <button onClick={handeLogin}>Login</button>

                <span className="psw"><a href="/register">Register</a></span>
            </form >
        </div>
    );
}