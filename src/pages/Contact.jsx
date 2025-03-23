// src/pages/Contact.jsx
import React, { useEffect } from 'react';
import gsap from 'gsap';
import Draggable from 'gsap/Draggable';
import './Contact.css';
gsap.registerPlugin(Draggable);

function Contact() {
    useEffect(() => {
        // 모든 .contact-card 요소를 드래그 가능하도록 설정
        Draggable.create('.contact-card', {
            type: 'x,y', // x,y 축으로 이동
            inertia: true, // 드래그 후 자연스럽게 감속
            // bounds: window, // 화면 밖으로 못 나가게 하고 싶다면
            // edgeResistance: 0.65, // 화면 끝에서 탄성
        });
    }, []);

    return (
        <main className="contact-page">
            {/* 첫 번째 카드 (녹색) */}
            <div className="contact-card green-card">
                <small>Let&apos;s Talk!</small>
                <h2>Get in Touch</h2>
            </div>

            {/* 두 번째 카드 (흰색) */}
            <div className="contact-card white-card">
                <small>Download CV</small>
                <h2>Sangwha Cha</h2>
            </div>

            {/* 세 번째 카드 (파란색) */}
            <div className="contact-card blue-card">
                <small>Find more work</small>
                <h2>
                    Behance
                    <br />
                    LinkedIn
                </h2>
            </div>
        </main>
    );
}

export default Contact;
