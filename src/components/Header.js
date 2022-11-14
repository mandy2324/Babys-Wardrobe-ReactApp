import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
        <h1 className="display-2 text-center">Baby's Wardrobe</h1>

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">

                <Link className="navbar-brand" to="/" >Products</Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">

                    <Link className="nav-link" to="/cart">Cart</Link>

                    <Link className="nav-link" to="/Login">Login</Link>
                    <Link className="nav-link" to="/Recycle">Recycle</Link>
                </div>
                </div>
            </div>
        </nav>

    </div>
    );
};

export default Header;