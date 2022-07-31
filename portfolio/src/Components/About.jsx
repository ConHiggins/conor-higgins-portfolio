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
                    Conor Higgins is a 26 year-old Software Developer from the
                    Peak District, currently studying to become a full-stack
                    developer with _Nology.
                </li>
                <li className="about__description-item">
                    Conor began learning programming in early 2016, inspired by
                    the accessibility of languages like Ruby
                </li>
                <li className="about__description-item">
                    Initially self-taught, Conor found a love for programming
                    through work as a Junior Data Exec in market research, as
                    well as building various personal projects including
                    websites, web-based apps and video games.
                </li>
            </ul>
        </fieldset>
    );
};

export default About;
