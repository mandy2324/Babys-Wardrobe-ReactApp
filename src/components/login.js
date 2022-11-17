import React from 'react'

const Login = () => {
    return (

        <div className="container" id="login">
            <br></br>
            <br></br>
            <br></br>


            <form>
                <div className="form-group ">
                    <label  >User Name</label>
                    <input type="text" className="form-control " id="username" placeholder="Enter Username" />
                </div>
                <div className="form-group ">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="form-check ">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-light ">Submit</button>
            </form>
            <br></br>
            <br></br>
            <br></br>
        </div >



    )

};
export default Login;