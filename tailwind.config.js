// tailwind.config.js
module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}', // React 파일 경로
    ],
    darkMode: 'class', // 다크모드 설정
    theme: {
        extend: {
            colors: {
                primary: '#00ff88', // 너의 accent 컬러
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
