import "./_Portfolio.scss";
import ProjectModal from "../ProjectModal/ProjectModal";

import { projects } from "../../Data/projects";
import { useState } from "react";

const Portfolio = () => {
    let projDisplay = [];
    const [modalVisible, setModalVisible] = useState(-1);

    for (let i = 0; i < projects.length; i++) {
        const pImage = projects[i].image;
        const pTitle = projects[i].title;
        const pTag = projects[i].tag;
        const pLink = projects[i].link;
        const pRepo = projects[i].repo;
        const pTime = projects[i].time;
        let pButtons;

        if (pLink !== "#") {
            pButtons = (
                <div className="portfolio__button-wrapper">
                    <a href={pLink} target="_blank">
                        <button className="portfolio__button">Site</button>
                    </a>
                    <a href={pRepo} target="_blank">
                        <button className="portfolio__button">Repo</button>
                    </a>
                    <button
                        className="portfolio__button"
                        onClick={() => {
                            setModalVisible(i);
                        }}
                    >
                        Read more
                    </button>
                </div>
            );
        } else {
            pButtons = (
                <div>
                    <p className="portfolio__project-tagline">
                        {" "}
                        Not currently deployed
                    </p>
                    <a href={pRepo} target="_blank">
                        <button className="portfolio__button">Repo</button>
                    </a>
                    <button
                        className="portfolio__button"
                        onClick={() => {
                            setModalVisible(i);
                        }}
                    >
                        Read more
                    </button>
                </div>
            );
        }

        projDisplay.push(
            <div className="portfolio__project">
                <a href={pLink} target="_blank">
                    <img
                        src={pImage}
                        alt="project image"
                        className="portfolio__project-img"
                    />
                </a>
                <a href={pLink} target="_blank">
                    <p className="portfolio__project-title">{pTitle}</p>
                </a>
                <p className="portfolio__project-time">{pTime} project</p>
                <p className="portfolio__project-tagline">{pTag}</p>
                {pButtons}
                <ProjectModal
                    projectIndex={i}
                    visible={modalVisible}
                    setVisible={setModalVisible}
                />
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
