import React from 'react'

// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

export default function Navigation() {
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    {/* <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link" aria-current="page" href="#">Home</a>
                            <a className="nav-link" href="#d">Features</a>
                            <a className="nav-link" href="#f">Pricing</a>
                            <a className="nav-link" href="#g">Disabled</a>
                        </div>
                    </div> */}

                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            <Link className="nav-link" to="/Features">Features</Link>
                            <Link className="nav-link" to="/Pricing">Pricing</Link>
                            <Link className="nav-link" to="/Disabled">Disabled</Link>
                        </div>
                    </div>

                </div>
            </nav>
            {/* <Outlet /> */}

        </>
    )
}
