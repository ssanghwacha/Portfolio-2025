import './Header.css';

function Header() {
    return (
        <>
            <header className="site-header">
                <div className="container">
                    <div className="grid">
                        <div className="col-3">Logo goes here</div>
                        <div className="col-9">
                            <ul>
                                <li>About</li>
                                <li>Home</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
export default Header;
