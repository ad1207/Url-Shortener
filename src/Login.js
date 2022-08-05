import React,{useRef} from "react";
import axios from "axios"
import {useNavigate} from 'react-router-dom'

export default function Login(){
    const email = useRef()
    const navigate = useNavigate()
    const password = useRef()
    const handleSubmit = async (e) => {
        e.preventDefault()
        let res = await axios.post("http://localhost:5000/user/login",{email:email.current.value, password:password.current.value})
        document.cookie = "token="+res.data.token
        navigate('/user/dashboard')
    }
    return(
        <div>
            <br></br>
            <br></br>
            <form onSubmit={(e) => handleSubmit(e)}>
            <label for="email">Email:</label>
            <input id="email" type="email" ref={email}/>
            <br></br>
            <label for="password">Password:</label>
            <input  id="password" type="password" ref={password}/>
            <br></br>
            <button type="submit">Log in</button>
            <button onClick={() => navigate('/user/signup')}>Sign Up</button>
            </form>
        </div>
    )
}