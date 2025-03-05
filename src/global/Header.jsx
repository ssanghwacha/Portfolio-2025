import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <>
            <header className="site-header">
                <div className="container">
                    <div className="grid">
                        <div className="col-2">Logo goes here</div>
                        <div className="col-8">
                            <ul className="nav-links">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
