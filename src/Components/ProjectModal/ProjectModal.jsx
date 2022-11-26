import "./ProjectModal.scss";
import { projects } from "../../Data/projects";

const ProjectModal = ({ projectIndex, visible, setVisible }) => {
    const pImage = projects[projectIndex].image;
    const pTitle = projects[projectIndex].title;
    const pTag = projects[projectIndex].tag;
    const pLink = projects[projectIndex].link;
    const pRepo = projects[projectIndex].repo;
    const pDesc = projects[projectIndex].desc
        .split(". ")
        .join(",")
        .split(",")
        .map((sentence) => {
            return <li className="project-description">{sentence}</li>;
        });

    return (
        visible == projectIndex && (
            <div className="project-container">
                <div
                    className="project-background"
                    style={{ backgroundImage: `url(${pImage}` }}
                ></div>
                <a href={pLink} target="_blank">
                    <img
                        src={pImage}
                        alt="project image"
                        className="project-img"
                    />
                </a>
                <button
                    className="close-project"
                    onClick={() => {
                        setVisible(-1);
                    }}
                >
                    x
                </button>
                <a href={pLink} target="_blank">
                    <p className="project-title">{pTitle}</p>
                </a>
                <p className="project-tagline">{pTag}</p>
                <ul className="project-description">{pDesc}</ul>
            </div>
        )
    );
};

export default ProjectModal;
