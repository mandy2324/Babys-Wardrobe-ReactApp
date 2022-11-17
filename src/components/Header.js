import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div id="header">
            <h1 className="display-2 text-center">Baby's Wardrobe</h1>

            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">

                    <Link className="navbar-brand font-weight-bold" to="/products" >Products</Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav font-weight-bold">

                    <Link className="nav-link font-weight-bold" to="/cart">Cart</Link>
                    <Link className="nav-link font-weight-bold" to="/login">Login</Link>
                    <Link className="nav-link font-weight-bold" to="/signup">Signup</Link>
                    <Link className="nav-link font-weight-bold" to="/addProd">Add-Product</Link>
                    <Link className="nav-link font-weight-bold" to="/products">View-Products</Link>
                    <Link className="nav-link font-weight-bold" to="/recycle">Recycle</Link>

                        </div>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Header;