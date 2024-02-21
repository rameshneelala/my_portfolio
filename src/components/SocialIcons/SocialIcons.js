import {
  INSTAGRAM_HREF,
  INSTAGRAM_SRC,
  LINKEDIN_HREF,
  LINKEDIN_SRC,
  MAIL_HREF,
  MAIL_SRC,
} from "../../utils/constants";
import "./index.css";

const SocialIcons = () => {
  return (
    <div>
      <div className="social-icons-container">
        <div className="icons-card">
          <a href={LINKEDIN_HREF} target="_blank" rel="noreferrer">
            <img src={LINKEDIN_SRC} alt="linkedin" className="social-icon" />
          </a>
          <a href={INSTAGRAM_HREF} target="_blank" rel="noreferrer">
            <img src={INSTAGRAM_SRC} alt="instagram" className="social-icon" />
          </a>
          <a href={MAIL_HREF} target="_blank" rel="noreferrer">
            <img src={MAIL_SRC} alt="mail" className="social-icon" />
          </a>
        </div>
        <p className="social-icons-description">
          Copyright © 2024. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default SocialIcons;
