import React from 'react'
import {  Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark ">
        <div class="container-fluid my-2">
            <Link className="navbar-brand" to="/">World</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">

                    <li class="nav-item">
                        <Link className="nav-link" to="/Kashmir">Kashmir</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to="/India">India</Link>
                    </li>
                   
                    <li class="nav-item">
                        <Link className="nav-link" to="/business">Business</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to="/crypto">CryptoWorld</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to="/Sports">Sports</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to="/Technology">Technology</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to="/Health">Health</Link>
                    </li>
                   
                </ul>
            </div>
        </div>
    </nav>
</div>
  )
}

export default Navbar