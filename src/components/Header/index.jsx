import React, { useEffect, useState } from "react";
import menuIconOpen from '../../assets/images/menu-icon-open.png';
import menuIconClose from '../../assets/images/menu-icon-close.png';
import logo from '../../assets/images/onyiiCraft.png';
import './header.css';
import { Link } from "react-router-dom";

const Header = () => {
    const [menuIcon, setMenuIcon] = useState(false); // Start with menu closed
    const navLinks = ['Home', 'Contact', 'Shop'];

    const outsideClick = (event) => {
        // Correctly access the ref's current value
        if (!event.target.classList.contains('menu-icon')) {
            setMenuIcon(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', outsideClick)
        // Cleanup function
        return () => {
            document.removeEventListener('click', outsideClick);
        };
    }, [menuIcon]);

    const toggleMenuIcon = () => {
        setMenuIcon(!menuIcon);
    };

    return (
        <div className="header">
            <div className="nav-bar">
                <img src={logo} alt="Logo" className="logo" />
                <ul className="nav-links">
                    {navLinks.map((link, index) => (
                        <li className="link" key={index}>
                            <Link to={`/${link === 'Home' ? '' : link}`}>{link}</Link>
                        </li>
                    ))}
                </ul>

                <div onClick={toggleMenuIcon} className="menu-icon-div" aria-expanded={menuIcon}>
                    <img src={menuIcon ? menuIconClose : menuIconOpen} alt="Menu Icon" className="menu-icon" />
                </div>
            </div>
            
            {menuIcon && (
                <ul className="nav-links-mobile">
                    {navLinks.map((link, index) => (
                        <li className="link" key={index}>
                            <Link to={`/${link === 'Home' ? '' : link}`}>{link}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Header;
