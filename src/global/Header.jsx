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
                {/* logo */}
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="Chacha Logo" />
                    </Link>
                </div>
                {/* nav */}
                <nav className={`nav ${menuOpen ? 'open' : ''}`}>
                    <Link to="/about">About</Link>
                    <Link to="/work">Work</Link>
                    <Link to="/contact">Contact</Link>
                </nav>

                {/* right nav */}
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
