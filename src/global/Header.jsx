import { useState } from 'react';
import { Link } from 'react-router-dom';
import { GlobeIcon, BellIcon, MenuIcon, XIcon } from 'lucide-react'; // 햄버거 메뉴 아이콘 추가
import './Header.css';
import logo from '../assets/logo.png';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header">
            <div className="container">
                {/* 로고 */}
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="Chacha Logo" />
                    </Link>
                </div>

                {/* 네비게이션 메뉴 */}
                <nav className={`nav ${menuOpen ? 'open' : ''}`}>
                    <Link to="/about">About</Link>
                    <Link to="/work">Work</Link>
                    <Link to="/contact">Contact</Link>
                </nav>

                {/* 우측 아이콘 및 햄버거 버튼 */}
                <div className="icons">
                    <GlobeIcon size={20} />
                    <BellIcon size={20} />
                    <button
                        className="menu-btn"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? (
                            <XIcon size={24} />
                        ) : (
                            <MenuIcon size={24} />
                        )}
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
