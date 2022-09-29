import "./_Home.scss";
import Canvas from "./Canvas.jsx";
import Showcase from "./Showcase/Showcase";

const Home = () => {
    return (
        <div className="home-container">
            <fieldset className="home">
                <legend className="home__title">
                    <div className="home__title__leaf"></div>
                    <div className="home__title__leaf"></div>
                    <div className="home__title__leaf"></div>
                    Conor <br /> Higgins <br />{" "}
                    <h2 className="home__subtitle">
                        Junior Full-Stack Developer
                    </h2>
                </legend>

                <div className="languages-frameworks">
                    <ul className="home__languages-list">
                        <li className="home__languages-listitem">
                            <img
                                alt="js-logo"
                                className="lang-icon"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                            />
                            JS
                        </li>
                        <li className="home__languages-listitem">
                            <img
                                alt="react-logo"
                                className="lang-icon"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                            />
                            React
                        </li>

                        <li className="home__languages-listitem">
                            <img
                                alt="html5-logo"
                                className="lang-icon"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                            />
                            HTML5
                        </li>
                        <li className="home__languages-listitem">
                            <img
                                alt="sass-logo"
                                className="lang-icon"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
                            />
                            SCSS
                        </li>
                        <li className="home__languages-listitem">
                            <img
                                alt="java-logo"
                                className="lang-icon"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                            />
                            Java
                        </li>
                        <li className="home__languages-listitem">
                            <img
                                alt="spring-boot-logo"
                                className="lang-icon"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
                            />
                            Spring Boot
                        </li>
                    </ul>
                </div>
            </fieldset>
            <Showcase />
        </div>
    );
};

export default Home;
