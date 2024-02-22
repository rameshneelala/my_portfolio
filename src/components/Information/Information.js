import { Link } from "react-router-dom";
import { BG_YELLOW, PROFILE_IMG } from "../../utils/constants";
import "./index.css";

const Information = () => {
  return (
    <div>
      <div className="info-container">
        <div className="content-card">
          <p className="designation">Frontend Developer</p>
          <h1 className="name">Hello, my name is Neelala Ramesh</h1>
          <p className="professional-details">
            I fell in love with programming and I have at least learnt
            something, I think… 🤷‍♂️ <br />I am fluent in classics like HTML, CSS,
            Javascript, ReactJs and Go.
          </p>
          <div className="buttons-container">
            <Link to="/projects">
              <button className="project-button">Projects</button>
            </Link>
            <a
              href="https://www.linkedin.com/in/sachinbalagam/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="linkedin-button">LinkedIn</button>
            </a>
          </div>
        </div>

        <div className="image-card">
          <img src={BG_YELLOW} alt="background" className="bg-image" />
          <img src={PROFILE_IMG} alt="profile" className="profile-image" />
        </div>
      </div>
    </div>
  );
};

export default Information;
