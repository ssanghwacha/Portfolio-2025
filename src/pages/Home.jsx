import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Card from '../components/Card';
import Hero from '../components/Hero';
import AltraImg from '../assets/Home/Altra_main.png';
import VelotImg from '../assets/Home/velot_main.png';
import twoSecImg from '../assets/Home/2sec_main.png';
import './Home.css';

gsap.registerPlugin(ScrollTrigger);

function Home() {
    useEffect(() => {
        // 1) .card 애니메이션
        gsap.utils.toArray('.card').forEach((card, index) => {
            gsap.fromTo(
                card,
                { opacity: 0, y: 50, scale: 0.95 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1.2,
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 95%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        });

        // 2) .stacking-card 애니메이션
        gsap.utils.toArray('.stacking-card').forEach((section, index) => {
            gsap.fromTo(
                section,
                { clipPath: 'inset(10% 0% 0% 0%)' },
                {
                    clipPath: 'inset(0% 0% 0% 0%)',
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 50%',
                        end: 'top 50%',
                        scrub: 1,
                        markers: true,
                    },
                }
            );
        });
    }, []);

    return (
        <main className="home">
            <Hero />

            <section className="cards">
                <Card
                    imageSrc={AltraImg}
                    title="Project Altra"
                    description="Find your path. Together."
                />
                <Card
                    imageSrc={VelotImg}
                    title="Project Velot"
                    description="Another cool project."
                />
                <Card
                    imageSrc={twoSecImg}
                    title="Project 2Sec"
                    description="Blazing fast project."
                />
                <button className="view-all-btn">View All</button>
            </section>
        </main>
    );
}

export default Home;
