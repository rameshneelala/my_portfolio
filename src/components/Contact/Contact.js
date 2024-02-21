import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SocialIcons from "../SocialIcons/SocialIcons";
import "./index.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <Header />
      <div className="social-icons-set">
        <SocialIcons />
      </div>
      <div className="bottom">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
