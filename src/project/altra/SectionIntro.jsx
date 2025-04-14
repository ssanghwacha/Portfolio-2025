import React from 'react';
import './SectionIntro.css';

// SVG tool icons
import AiIcon from '../../assets/tools/Ai.svg';
import PsIcon from '../../assets/tools/Ps.svg';
import FigmaIcon from '../../assets/tools/Figma.svg';
import MazeIcon from '../../assets/tools/Maze.svg';
import GoogleFIcon from '../../assets/tools/GoogleF.svg';
import appIcon from '../../assets/altra/app_icon_altra.png'; // ✅ 소문자

function SectionIntro() {
    return (
        <>
            <section className="section-intro">
                <div className="intro-meta-group">
                    <div className="intro-meta-block">
                        <span className="label">Team</span>
                        <span className="value">1 Designer</span>
                    </div>
                    <div className="intro-meta-block">
                        <span className="label">Timeline</span>
                        <span className="value">Sep–Oct 2024</span>
                    </div>
                    <div className="intro-meta-block">
                        <span className="label">Tools</span>
                        <div className="icons">
                            <img src={FigmaIcon} alt="Figma" />
                            <img src={MazeIcon} alt="Maze" />
                            <img src={GoogleFIcon} alt="Google Forms" />
                            <img src={AiIcon} alt="Adobe Illustrator" />
                            <img src={PsIcon} alt="Adobe Photoshop" />
                        </div>
                    </div>
                    <div className="intro-meta-block">
                        <span className="label">Tasks</span>
                        <div className="tags">
                            <span>UX UI</span>
                            <span>Branding</span>
                        </div>
                    </div>
                </div>

                <div className="intro-right">
                    <div className="subtitle">What is Altra</div>
                    <h2 className="title">
                        Explore new trails. <br />
                        Designed for first steps.
                    </h2>
                    <p className="description">
                        ALTRA is a hiking navigation app designed to support
                        beginners in exploring nature with confidence. Rather
                        than focusing solely on advanced features or performance
                        tracking, ALTRA emphasizes approachability, clarity, and
                        trust. From onboarding to real-time navigation, every
                        design aimed to make beginner hikers feel safe,
                        supported, and excited to explore the outdoors.
                    </p>
                </div>
            </section>

            {/* ✅ 이미지 위치 여기 */}
            <div className="intro-full-image-wrapper">
                <img
                    src={appIcon}
                    alt="Altra App Icon Preview"
                    className="intro-full-image"
                />
            </div>
        </>
    );
}

export default SectionIntro;
