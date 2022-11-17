import React from 'react'

const Signup = () => {
    return (
        <div id = "signup"  style={{
            width: "70%",
            margin: "0 auto",
            padding: "1rem"
           
        }}> 
        <form>
            <h3 >Signup Page</h3>
            <div className="container">
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputUsername4">Username</label>
                        <input type="username" className="form-control" id="inputusername4" placeholder="" />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputPassword4">Password</label>
                        <input type="password" className="form-control" id="inputPassword4" placeholder="" />
                    </div>
                </div>
            </div>
            <div className="container">
                <br></br>
                <h6>Address</h6>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputStreet">Street</label>
                        <input type="text" className="form-control" id="inputStreet" />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputCity">City</label>
                        <input type="text" className="form-control" id="inputCity" />


                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputState">State</label>
                        <input type="text" className="form-control" id="inputState" />


                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputZip">Zip</label>
                        <input type="text" className="form-control" id="inputZip" />
                    </div>
                </div>

            </div>

            <button type="submit" className="btn btn-light m-3">Sign in</button>
        </form>
        </div>
    )
}

export default Signup;