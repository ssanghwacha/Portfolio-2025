// Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//icon
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';

// 로고 이미지 가정
import logo from '../assets/logo.png';
import './Header.css';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className={`header ${menuOpen ? 'open' : ''}`}>
            <div className="header_container">
                {/* 로고 */}
                <div className="header__logo">
                    <Link to="/">
                        <img src={logo} alt="Chacha Logo" />
                    </Link>
                </div>

                {/* 내비게이션 */}
                <nav className="header__nav">
                    <Link to="#">
                        {/* p 태그 안의 기본 텍스트: About, 호버 시 data-hover="ABOUT"이 올라옴 */}
                        <p data-hover="ABOUT">About</p>
                    </Link>
                    <Link to="/work">
                        <p data-hover="WORK">Work</p>
                    </Link>
                    <Link to="/contact">
                        <p data-hover="CONTACT">Contact</p>
                    </Link>
                </nav>

                {/* 아이콘 영역 */}
                <div className="header__icons">
                    <LanguageOutlinedIcon />
                    <NotificationsNoneOutlinedIcon />
                </div>
            </div>
        </header>
    );
}

export default Header;
