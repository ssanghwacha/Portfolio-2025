import Header from '../global/Header';
import Footer from '../global/Footer';

import './Home.css';

function Home() {
    return (
        <>
            <Header />
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
