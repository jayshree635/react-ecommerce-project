import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Signup = () => {
    const [userName, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/Login')
        }
    })

    const collectData = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:3000/api/v1/signUp", {
                method: "post",
                body: JSON.stringify({ userName, email, password }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!userName || !email || !password) {
                alert("Please fill in all the required fields.");
                return;
            }

            if (response) {
                const data = await response.json();
                console.log(data);
                localStorage.setItem("user", JSON.stringify(data));
                console.log(data);
                navigate('/');
            } else {
                alert("please enter data")
            }
        } catch (error) {
            alert("please enter data")
            console.error("An error occurred while registering:", error);
        }
    }


    return (
        <div className='register'>

            <h1>Register</h1>

            <form className='formData'>

                <label>Name:</label>
                <input className='inputBox' type="text"
                    value={userName} onChange={(e) => setName(e.target.value)} id="name" name="userName" placeholder='Enter Name' />

                <label>Email:</label>
                <input className='inputBox' type="email"
                    value={email} onChange={(e) => setEmail(e.target.value)} id="email" name="email" placeholder='Enter Email' />

                <label>Password:</label>
                <input className='inputBox' type='password'
                    value={password} onChange={(e) => setPassword(e.target.value)} name="password" placeholder='Enter Password' />

                <button onClick={collectData} type="submit">Submit</button>

            </form>

        </div>
    );
};

export default Signup;
