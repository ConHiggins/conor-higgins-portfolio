import "./_Portfolio.scss";

const Portfolio = () => {

    return (

        <fieldset className="portfolio">
            <legend className="portfolio__title">Portfolio</legend>
            <div className="portfolio__project">
                <img src="#" alt="project image" className="portfolio__project-img" />
                <p className="portfolio__project-title">Project_1</p>
                <p className="portfolio__project-tagline">tagline</p>
                <button className="portfolio__button"></button>
                <button className="portfolio__button"></button>
            </div>
        </fieldset>
    );

};

export default Portfolio;