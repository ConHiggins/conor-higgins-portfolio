import "./_Portfolio.scss";
import waveDashGif from "../Assets/waveDash_gif_1.gif";

import { projects } from "../Data/projects";

const Portfolio = () => {

    let projDisplay = [];
    for(let i=0; i<projects.length; i++) {

    const pImage = projects[i].image;    
    const pTitle = projects[i].title;    
    const pTag = projects[i].tag;
    
    projDisplay.push(
            <div className="portfolio__project">
                <img src={pImage} alt="project image" className="portfolio__project-img" />
                <p className="portfolio__project-title">{pTitle}</p>
                <p className="portfolio__project-tagline">{pTag}</p>
                <div className="portfolio__button-wrapper">
                    <button className="portfolio__button"></button>
                    <button className="portfolio__button"></button>
                </div>
            </div>
        )

    }
    return (<fieldset className="portfolio">
            <legend className="portfolio__title">Portfolio</legend>
            {projDisplay}
            </fieldset>);

};

export default Portfolio;