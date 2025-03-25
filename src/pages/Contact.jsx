import React, { useEffect } from 'react';
import gsap from 'gsap';
import Draggable from 'gsap/Draggable';
import './Contact.css';
gsap.registerPlugin(Draggable);

function Contact() {
    useEffect(() => {
        Draggable.create('.contact-card', {
            type: 'x,y',
            inertia: true, 
        });
    }, []);

    return (
        <main className="contact-page">
            <div className="contact-card green-card">
                <small>Let&apos;s Talk!</small>
                <h2>Get in Touch</h2>
            </div>

            <div className="contact-card white-card">
                <small>Download CV</small>
                <h2>Sangwha Cha</h2>
            </div>

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
