import "./Showcase.scss";
import { projects } from "../../Data/projects";

const Showcase = () => {
    const projectIndex = 0; ///Set this to whichever project should be displayed

    const pImage = projects[projectIndex].image;
    const pTitle = projects[projectIndex].title;
    const pTag = projects[projectIndex].tag;
    const pLink = projects[projectIndex].link;
    let pButtons;
    if (pLink !== "#") {
        pButtons = (
            <div className="showcase__button-wrapper">
                <a href={pLink}>
                    <button className="showcase__button"></button>
                </a>

                <button className="showcase__button"></button>
            </div>
        );
    } else {
        pButtons = (
            <p className="showcase__project__button-wrapper">
                Not currently deployed
            </p>
        );
    }

    return (
        <div className="showcase__project">
            <h1 className="showcase__project-title">Recent Work:</h1>
            <a href={pLink}>
                <img
                    src={pImage}
                    alt="project image"
                    className="showcase__project-img"
                />
            </a>
            <a href={pLink}>
                <p className="showcase__project-title">{pTitle}</p>
            </a>
            <p className="showcase__project-tagline">{pTag}</p>
            {pButtons}
        </div>
    );
};

export default Showcase;
