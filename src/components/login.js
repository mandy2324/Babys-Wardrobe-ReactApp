import React from 'react'
import AuthApi from '../projectApi/AuthApi';

const Login = () => {

    const handleLogin = (event) => {
        let username = document.getElementById('username').value
        let password = document.getElementById('password').value
        //AuthApi.authenticate(username, password)
        AuthApi.authenticate('admin', '123')
    }

    return (
        <div className="container" id="login">
            <br></br>
            <br></br>
            <br></br>

            <form>
                <div className="form-group ">
                    <label  >Username</label>
                    <input type="text" className="form-control " id="username" placeholder="Username" />
                </div>
                <div className="form-group ">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Password" />
                </div>
                <div className="form-check ">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="button" className="btn btn-light " onClick={() => { handleLogin() }}>Login</button>
            </form>

            <br></br>
            <br></br>
            <br></br>
        </div >
    )
};

export default Login;