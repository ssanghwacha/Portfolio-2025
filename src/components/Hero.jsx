// Hero.jsx
import React from 'react';
import Spline from '@splinetool/react-spline';
import './Hero.css'; // 스타일은 별도 CSS로 관리

function Hero() {
    return (
        <section className="hero">
            {/* Spline 3D */}
            <Spline scene="https://prod.spline.design/cFJYynFJHI3d7foK/scene.splinecode" />
            {/* 추가로 텍스트나 버튼 등을 겹쳐서 표시하고 싶으면 아래에 작성 */}
            <div className="hero__content">
                <h1>Hi there!</h1>
                <p>I'm Sangwha</p>
            </div>
        </section>
    );
}

export default Hero;
