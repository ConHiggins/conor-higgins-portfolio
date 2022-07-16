import "./_Nav.scss";

const Nav = () => {

    return (
        <section className="navbar">
            <a href="Home" className="navbar__link">Home</a>
            <a href="<Portfolio />" className="navbar__link">Portfolio</a>
            <a href=".about" className="navbar__link">About</a>
        </section>
    )
}

export default Nav;