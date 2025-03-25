SangwhaCha Portfolio 2025

1. Overview
   Portfolio-2025 is a React.js project
   • Multi-page navigation with React Router
   • Scroll animations and 3D scene (GSAP, Spline)
   • Icon usage with MUI Icons
   • Layout file with <Outlet> for shared Header/Footer
   • Responsive design
   • useState and useEffect hooks

2. Installation

    ```bash
    git clone https://github.com/ssanghwacha/Portfolio-2025.git
    cd Portfolio-2025
    npm install

    ```

3. initialize
   To start the development server:
   npm run dev

    Then open http://localhost:5173 in your browser (or whichever port Vite indicates)

4. Project Structure
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

5.Third-Party Packages
-React Router
For multi-page routing and <Outlet> usage.
-MUI Icons (@mui/icons-material)
For icons such as Menu, Close, Bell, and Language.
-GSAP
For scroll animations or 3D integration.
-splinetool/react-spline
For integrating 3D Spline scenes into Hero.
