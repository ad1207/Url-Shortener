import React,{useRef} from "react";
import axios from "axios"
import {useNavigate} from 'react-router-dom'

export default function Signup(){
    const username = useRef()
    const email = useRef()
    const navigate = useNavigate()
    const password = useRef()
    const handleSubmit = async (e) => {
        e.preventDefault()
        let res = await axios.post("http://localhost:5000/user/register",{username:username.current.value,email:email.current.value, password:password.current.value})
        document.cookie = "token="+res.data.token
        navigate('/user/dashboard')
    }
    return(
        <div>
            <br></br>
            <br></br>
            <form onSubmit={(e) => handleSubmit(e)}>
            <label for="username">Username:</label>
            <input id="username" type="text" ref={username}/>
            <br></br>
            <label for="email">Email:</label>
            <input id="email" type="email" ref={email}/>
            <br></br>
            <label for="password">Password:</label>
            <input  id="password" type="password" ref={password}/>
            <br></br>
            <button type="submit">Signup</button>
            <button onClick={() => navigate('/user/login')}>Log In</button>
            </form>
        </div>
    )
}