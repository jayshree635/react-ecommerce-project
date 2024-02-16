import React, { useEffect, useState } from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const auth = localStorage.getItem('user');

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/')
        }
    })

    const loginHandle = async (e) => {
        e.preventDefault();

        try {
            let result = await fetch("http://localhost:3000/api/v1/login", {
                method: "post",
                body: JSON.stringify({ email, password }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!email || !password) {
                alert("Please fill in all the required fields.");
                return;
            }

            if (result) {
                const data = await result.json();
                if (data.success) {
                    localStorage.setItem("user", JSON.stringify(data));
                    navigate('/');
                } else {
                    alert("please enter correct data")
                }
            }
            // if (result) {
            //     localStorage.setItem("user", JSON.stringify(result));
            // } else {
            //     alert("please enter correct data")
            // }
        } catch (error) {
            console.error("An error occurred while registering:", error);
        }
    }

    return (
        <div className='register'>
            <form className='formData'>
                <h1>Login</h1>
                <label>Email:</label>
                <input className='inputBox' onChange={(e) => setEmail(e.target.value)} value={email} type="email"
                    id="email" name="email" placeholder='Enter Email' />

                <label>Password:</label>
                <input className='inputBox' onChange={(e) => setPassword(e.target.value)} value={password} type='password'
                    name="password" placeholder='Enter Password' />

                <button onClick={loginHandle} type="submit">Submit</button>

            </form>
        </div>
    )
}

export default Login