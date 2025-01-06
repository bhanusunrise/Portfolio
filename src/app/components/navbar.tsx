'use client';

import './navbar.css';
import { useState } from 'react';

export default function Navbar({ setActivePage }: { setActivePage: (page: string) => void }) {
    const [activeLink, setActiveLink] = useState<string>('Home');

    const handleLinkClick = (link: string) => {
        setActiveLink(link);
        setActivePage(link); // Set the active page in the parent component
    };

    return (
        <div className="navbar-container">
            <div className="navbar-logo">
                <p>Pasindu Bhanuka</p>
            </div>
            <div className="navbar-links">
                {['Home', 'Portfolio', 'Experience', 'Contact'].map((link) => (
                    <a
                        key={link}
                        href="#"
                        className={`nav-link ${activeLink === link ? 'active' : ''}`}
                        onClick={() => handleLinkClick(link)}
                    >
                        {link}
                    </a>
                ))}
            </div>
        </div>
    );
}
