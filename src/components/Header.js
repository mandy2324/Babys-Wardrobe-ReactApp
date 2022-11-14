import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
        <h1 className="display-2 text-center">Baby's Wardrobe</h1>

        <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">

                <Link className="navbar-brand font-weight-bold" to="/" >Products</Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav font-weight-bold">

                    <Link className="nav-link font-weight-bold" to="/cart">Cart</Link>
                    <Link className="nav-link font-weight-bold" to="/Recycle">Recycle</Link>
                    <Link className="nav-link font-weight-bold" to="/Login">Login</Link>
                </div>
                </div>
            </div>
        </nav>

    </div>
    );
};

export default Header;