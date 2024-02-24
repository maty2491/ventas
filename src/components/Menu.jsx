import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">VENTAS</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse text-center" id="navbarColor02">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/utensillos">Utensillos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/muebles">Muebles</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Menu;