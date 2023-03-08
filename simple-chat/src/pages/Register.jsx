import React from 'react'
import Add from "../images/profile.png"

const Register = () => {
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className="logo">Simple Chat</span>
                <span className="title">Register to use the Simple Chat</span>
                <form>
                    <input type="text" placeholder='display name' />
                    <input type="email" placeholder='email' />
                    <input type="password" placeholder='password' />
                    <input style={{ display: "none" }} type="file" id="file" />
                    <label htmlFor="file">
                        <img src={Add} alt="" />
                        <span>add profile photo</span>
                    </label>
                    <button>Sign Up</button>
                </form>
                <p>Got an account? Login here!</p>
            </div>
        </div>
    )
}

export default Register