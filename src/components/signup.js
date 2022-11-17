import React from 'react'

const Signup = () => {
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
                <button type="submit" className="btn btn-light ">Submit</button>
            </form>

            <br></br>
            <br></br>
            <br></br>
        </div >

    )
}

export default Signup;