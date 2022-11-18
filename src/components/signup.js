import React from 'react'
import UserApi from '../projectApi/UserApi';

const Signup = () => {

    const handleSignup = (event) => {
        let username = document.getElementById('inputUsername').value
        let password = document.getElementById('inputPassword').value
        let street = document.getElementById('inputStreet').value
        let city = document.getElementById('inputCity').value
        let state = document.getElementById('inputState').value
        let zip = document.getElementById('inputZip').value
        let address = { 'street': street, 'city': city, 'state': state, 'zip': zip }
        let user = { 'id': '0', 'username': username, 'password': password, 'role': 'ROLE_USER', 'enabled': true, 'address': address }
        UserApi.addUser(user)
    }

    return (
        <div id="signup" style={{
            width: "70%",
            margin: "0 auto",
             padding: "0 auto"
           
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
                <div className="container">
                    <br></br>
                    <h5>Address</h5>
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

                <button type="button" className="btn btn-light m-3" onClick={() => { handleSignup() }}>Signup</button>
            </form>
        </div>
    )
}

export default Signup;