import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//icon
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import MenuIcon from '@mui/icons-material/Menu'; // 햄버거 아이콘
import CloseIcon from '@mui/icons-material/Close'; // X 아이콘

import logo from '../assets/logo.png';
import './Header.css';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className={`header ${menuOpen ? 'open' : ''}`}>
            <div className="header_container">
                
                <div className="header__logo">
                    <Link to="/">
                        <img src={logo} alt="Chacha Logo" />
                    </Link>
                </div>

                <nav className="header__nav">
                    <Link to="/about">
                        <p data-hover="ABOUT">About</p>
                    </Link>
                    <Link to="/work">
                        <p data-hover="WORK">Work</p>
                    </Link>
                    <Link to="/contact">
                        <p data-hover="CONTACT">Contact</p>
                    </Link>
                </nav>

                <div className="header__icons">
                    <LanguageOutlinedIcon />
                    <NotificationsNoneOutlinedIcon />

                    {/* close */}
                    {menuOpen ? (
                        <CloseIcon
                            sx={{ color: '#000 !important' }} 
                            className="menu-icon"
                            onClick={() => setMenuOpen(false)}
                        />
                    ) : (
                        <MenuIcon
                            sx={{ color: '#fff' }} 
                            className="menu-icon"
                            onClick={() => setMenuOpen(true)}
                        />
                    )}
                </div>
            </div>

            {menuOpen && (
                <div className="mobile-menu">
                    <div className="mobile-menu__content">
                        <Link to="/about" onClick={() => setMenuOpen(false)}>
                            About
                        </Link>
                        <Link to="/work" onClick={() => setMenuOpen(false)}>
                            Work
                        </Link>
                        <Link to="/contact" onClick={() => setMenuOpen(false)}>
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;
