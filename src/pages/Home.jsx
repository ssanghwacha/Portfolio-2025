import Footer from '../global/Footer'; // ✅ Footer만 유지

import './Home.css';

function Home() {
    return (
        <>
            <main className="home">
                <div className="grid">
                    <div className="col-10">
                        <h1>Hi</h1>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Home;
