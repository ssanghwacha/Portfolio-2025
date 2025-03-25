SangwhaCha Portfolio 2025

1. Overview
   Portfolio-2025 is a React.js project
   • Multi-page navigation with React Router
   • Scroll animations and 3D scene (GSAP, Spline)
   • Icon usage with MUI Icons
   • Layout file with <Outlet> for shared Header/Footer
   • Responsive design
   • useState and useEffect hooks

2. -Installation
   git clone https://github.com/ssanghwacha/Portfolio-2025.git
   cd Portfolio-2025

    -Install dependencies
    npm install

3.Project Structure
Portfolio-2025/
├─ public/
├─ src/
│ ├─ assets/
│ ├─ components/
│ ├─ global/ # Header, Footer
│ ├─ pages/ # Home, About, Work, Contact
│ ├─ Layout.jsx # Contains <Header />, <Footer />, <Outlet />
│ ├─ App.jsx # Defines routes
│ ├─ main.jsx # Entry point
│ └─ ...
├─ .gitignore
├─ package.json
├─ README.md
└─ vite.config.js

4.Third-Party Packages 1. React Router
-For multi-page routing and <Outlet> usage. 2. MUI Icons (@mui/icons-material)
-For icons such as Menu, Close, Bell, and Language. 3. GSAP
-For scroll animations or 3D integration. 4. @splinetool/react-spline
For integrating 3D Spline scenes into Hero.
