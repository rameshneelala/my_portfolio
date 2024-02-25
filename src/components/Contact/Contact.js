import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SocialIcons from "../SocialIcons/SocialIcons";
import "./index.css";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="contact-container-main">
      <div>
        <Header />
      </div>

      <section className="contact">
        <p className="section__text__p1">Get in Touch</p>
        <h1 className="title">Contact Me</h1>
        <div className="contact-info-upper-container">
          <form className="contact-details-container">
            <div className="form-container-contact">
              <div className="inputs-container">
                <div>
                  <label>
                    <input
                      className="contact-container"
                      type="text"
                      name="name"
                      placeholder="Name"
                      // value={formData.name}
                      // onChange={handleChange}
                    />
                  </label>
                  <br />
                  <label>
                    <input
                      className="contact-container"
                      placeholder="Email"
                      type="email"
                      name="email"
                      // value={formData.email}
                      // onChange={handleChange}
                    />
                  </label>
                  <br />
                  <label>
                    <input
                      className="contact-container"
                      placeholder="Phone Number"
                      type="tel"
                      name="number"
                      // value={formData.number}
                      // onChange={handleChange}
                    />
                  </label>
                  <br />
                </div>
                <div>
                  <textarea
                    className="contact-container txt"
                    placeholder="Message"
                    name="message"
                    // value={formData.message}
                    // onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="bottom-btn-email-container">
              <button type="submit" className="submit-button">
                Submit
              </button>
              <div class="email-container">
                <MdEmail class="email-icon" />
                {/* <img
                  src="./assets/email.png"
                  alt="Email icon"
                  className="icon contact-icon email-icon"
                /> */}
                <p className="mail-id">
                  <a href="mailto:rameshneelala18@gmail.com">
                    rameshneelala18@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </form>
        </div>
      </section>

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
