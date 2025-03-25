import React from 'react';

import logo from '../assets/logo.png';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__top">
                <div className="footer__grid">
                    <div className="footer__left">
                        <img src={logo} alt="Chacha Logo" />
                        <p className="footer__name">Sangwha Cha</p>
                        <p className="footer__copyright">© 2025 Chacha</p>
                    </div>

                    <div className="footer__right">
                        <a
                            href="https://www.behance.net/ssanghwa12b2b5"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            CV <span className="arrow">↗</span>
                        </a>
                        <a
                            href="https://www.behance.net/ssanghwa12b2b5"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Behance <span className="arrow">↗</span>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/sangwhacha?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn <span className="arrow">↗</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer__bottom">design@sangwhacha.com</div>
        </footer>
    );
}

export default Footer;
