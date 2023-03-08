import React from 'react'

const Login = () => {
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className="logo">Simple Chat</span>
                <span className="title">We missed you, login and start chatting!</span>
                <form>
                    <input type="email" placeholder='email' />
                    <input type="password" placeholder='password' />
                    <button>Sign in</button>
                </form>
                <p>You need an account? Sign up here!</p>
            </div>
        </div>
    )
}

export default Login