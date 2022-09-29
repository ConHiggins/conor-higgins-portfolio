import "./_About.scss";
import profileImg from "../Assets/profile.png";
const About = () => {
    return (
        <fieldset className="about">
            <legend className="about__title">About</legend>
            <img
                src={profileImg}
                alt="profile image"
                className="about__profile-img"
            />
            <ul className="about__description">
                <li className="about__description-item">
                    Conor Higgins is a Junior Full-Stack Software Developer from
                    the Peak District, and recent graduate of{" "}
                    <a className="nology-link" href="https://nology.io/">
                        _Nology's
                    </a>{" "}
                    full-stack development training course .
                </li>

                <li className="about__description-item">
                    In early 2016, inspired by the accessibility of languages
                    like Ruby, Conor found a passion for programming and
                    established an independent goal of learning to code.
                </li>
                <li className="about__description-item">
                    Conor was able to develop his skills in frontend web
                    development and functional programming through work as a
                    Junior Data Exec in market research, as well as building
                    various personal projects (including websites, web-based
                    apps and video games).
                </li>
                <li className="about__description-item">
                    Studying with _Nology has enabled Conor to consolidate his
                    existing knowledge and expand his skill-set, gaining
                    experience in more advanced areas of programming.
                    <br /> This included Object-Oriented methodologies,
                    full-stack websites, Unit Testing, Github Branching, and
                    other key characteristics of a well-rounded developer.
                </li>
            </ul>
        </fieldset>
    );
};

export default About;
