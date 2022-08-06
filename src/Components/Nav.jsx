import "./_Nav.scss";

const Nav = ({ handleChangeComponent }) => {
    return (
        <section className="navbar">
            <p className="name">Conor Higgins</p>
            <button
                className="navbar__link"
                onClick={() => handleChangeComponent(0)}
            >
                Home
            </button>
            <button
                className="navbar__link"
                onClick={() => handleChangeComponent(1)}
            >
                Portfolio
            </button>
            <button
                className="navbar__link"
                onClick={() => handleChangeComponent(2)}
            >
                About
            </button>
        </section>
    );
};

export default Nav;
