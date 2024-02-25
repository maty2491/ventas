import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AudioPlayer from '../components/AudioPlayer';
import borbotones from '/assets/borbotones.png'

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false); // Cierra el menú cuando se hace clic en un enlace del menú
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                <Link className="navbar-brand" to="/">
                    <img src={borbotones} width="140" height="70" alt=""/>
                </Link>
                <button className="navbar-toggler" type="button" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse  navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarColor02">
                    <ul className="navbar-nav text-center mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/" onClick={handleLinkClick}>Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/utensillos" onClick={handleLinkClick}>Utensillos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/muebles" onClick={handleLinkClick}>Muebles</Link>
                        </li>
                    </ul>
                    <div className="audio-player-container">
                        <AudioPlayer />
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Menu;
