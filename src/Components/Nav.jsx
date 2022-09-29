import "./_Nav.scss";

const Nav = ({ handleChangeComponent }) => {
    return (
        <section className="navbar">
            <div className="navbar-button-container">
                <button
                    className="navbar__link"
                    onClick={() => handleChangeComponent(0)}
                >
                    Home
                </button>
                <div className="leaves-container">
                    <div className="hidden-leaf"></div>
                    <div className="hidden-leaf"></div>
                    <div className="hidden-leaf"></div>
                </div>
            </div>
            <div className="navbar-button-container">
                <button
                    className="navbar__link"
                    onClick={() => handleChangeComponent(1)}
                >
                    Portfolio
                </button>
                <div className="leaves-container">
                    <div className="hidden-leaf"></div>
                    <div className="hidden-leaf"></div>
                    <div className="hidden-leaf"></div>
                </div>
            </div>
            <div className="navbar-button-container">
                <button
                    className="navbar__link"
                    onClick={() => handleChangeComponent(2)}
                >
                    About
                </button>
                <div className="leaves-container">
                    <div className="hidden-leaf"></div>
                    <div className="hidden-leaf"></div>
                    <div className="hidden-leaf"></div>
                </div>
            </div>
        </section>
    );
};

export default Nav;
