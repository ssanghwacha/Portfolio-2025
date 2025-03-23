// src/pages/Contact.jsx
import React from 'react';
import './Contact.css';
import arrowSvg from '../assets/arrow.svg';

function Contact() {
    return (
        <main className="contact-page">
            {/* 첫 번째 카드 (녹색) */}
            <div className="contact-card green-card">
                <small>Let&apos;s Talk!</small>
                <h2>Get in Touch</h2>
                <img src={arrowSvg} alt="arrow" className="arrow-icon" />
            </div>

            {/* 두 번째 카드 (흰색) */}
            <div className="contact-card white-card">
                <small>Download CV</small>
                <h2>Sangwha Cha</h2>
                <img src={arrowSvg} alt="arrow" className="arrow-icon" />
            </div>

            {/* 세 번째 카드 (파란색) */}
            <div className="contact-card blue-card">
                <small>Find more work</small>
                <h2>
                    Behance
                    <br />
                    LinkedIn
                </h2>
                <img src={arrowSvg} alt="arrow" className="arrow-icon" />
            </div>
        </main>
    );
}

export default Contact;
