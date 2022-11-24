import "./_Portfolio.scss";

import { projects } from "../../Data/projects";

const Portfolio = () => {
    let projDisplay = [];
    for (let i = 0; i < projects.length; i++) {
        const pImage = projects[i].image;
        const pTitle = projects[i].title;
        const pTag = projects[i].tag;
        const pLink = projects[i].link;
        const pRepo = projects[i].repo;
        let pButtons;
        if (pLink !== "#") {
            pButtons = (
                <div className="portfolio__button-wrapper">
                    <a href={pLink}>
                        <button className="portfolio__button">Site</button>
                    </a>
                    <a href={pRepo}>
                        <button className="portfolio__button">Repo</button>
                    </a>
                </div>
            );
        } else {
            pButtons = (
                <p className="portfolio__button-wrapper">
                    Not currently deployed
                </p>
            );
        }

        projDisplay.push(
            <div className="portfolio__project">
                <a href={pLink}>
                    <img
                        src={pImage}
                        alt="project image"
                        className="portfolio__project-img"
                    />
                </a>
                <a href={pLink}>
                    <p className="portfolio__project-title">{pTitle}</p>
                </a>
                <p className="portfolio__project-tagline">{pTag}</p>
                {pButtons}
            </div>
        );
    }
    return (
        <fieldset className="portfolio">
            <legend className="portfolio__title">Portfolio</legend>
            {projDisplay}
        </fieldset>
    );
};

export default Portfolio;
