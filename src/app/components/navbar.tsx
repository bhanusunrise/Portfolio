'use client';

import './navbar.css';
import { useState } from 'react';

export default function Navbar({ setActivePage }: { setActivePage: (page: string) => void }) {
    const [activeLink, setActiveLink] = useState<string>('Home');
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const handleLinkClick = (link: string) => {
        setActiveLink(link);
        setActivePage(link);
        setMenuOpen(false); // Close the menu when a link is clicked
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="navbar-container">
            <div className="navbar-logo">
                <p>Pasindu Bhanuka</p>
            </div>
            <button className="menu-toggle" onClick={toggleMenu}>
                ☰
            </button>
            <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
                {['Home', 'Portfolio', 'Experience', 'Contact'].map((link) => (
                    <a
                    key={link}
                    href=""
                    className={`nav-link ${activeLink === link ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();         // ✅ Stop jump-to-top behavior
                      handleLinkClick(link);
                    }}
                  >
                    {link}
                  </a>
                ))}
            </div>
        </div>
    );
}
