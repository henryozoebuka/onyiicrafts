import React, { useEffect, useState } from "react";
import menuIconOpen from '../../assets/images/menu-icon-open.png';
import menuIconClose from '../../assets/images/menu-icon-close.png';
import logo from '../../assets/images/onyiiCraft.png';
import './header.css';
import { Link } from "react-router-dom";

const Header = () => {
    const [menuIcon, setMenuIcon] = useState(false);
    const [scrollPercentage, setScrollPercentage] = useState(0)

    const navLinks = ['Home', 'Contact', 'Shop'];

    const outsideClick = (event) => {
        // Correctly access the ref's current value
        if (!event.target.classList.contains('menu-icon')) {
            setMenuIcon(false);
        }
    };

    const handleScroll = () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight
        const scrolledHeight = window.scrollY
        const scrolledHeightPercentage = (scrolledHeight / totalHeight) * 100
        setScrollPercentage(scrolledHeightPercentage)
    }

    useEffect(() => {
        document.addEventListener('click', outsideClick)
        // Cleanup function
        return () => {
            document.removeEventListener('click', outsideClick);
        };
    }, [menuIcon]);

    useEffect(() => {
        document.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('scroll', handleScroll);
        }
    })

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
            <div className="scroll-indicator-wrapper">
                <div className="scroll-indicator" style={{width: `${scrollPercentage}%`}}></div>
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
