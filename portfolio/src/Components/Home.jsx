
import "./_Home.scss";
import Canvas from "./Canvas.jsx"

const Home = () => {

    return (
        <>
        
            <fieldset className="home">
                <legend className="home__title">Junior<br/> Software<br/> <u>Dev</u>eloper</legend>
                <ul className="home__languages-list">
                    <li className="home__languages-listitem">JS</li>
                    <li className="home__languages-listitem">React</li>
                    <li className="home__languages-listitem">Java</li>
                    <li className="home__languages-listitem">HTML5</li>
                    <li className="home__languages-listitem">SCSS</li>
                </ul>
                
            </fieldset>
    </>
    );
};

export default Home;