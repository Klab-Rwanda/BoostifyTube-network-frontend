import React from "react";
import "../Styles/Contacts.css";
import { MdLocationPin } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const Contacts = () => {
  return (
    <div className="contact-cont">
      <div className="content-cont">
        <div className="socialM">
          <h2 className="cont-title">Let's get in Touch with You!</h2>
          <p className="loc">
            <MdLocationPin className="soc1" />
            Kigali KN403
          </p>
          <p className="loc">
            <FaPhoneAlt className="soc1" />
            +250787615313
          </p>
          <p className="loc">
            <MdOutlineEmail className="soc1" />
            origingroup@gmail299.com
          </p>
          <div className="iconss">
            <FaSquareXTwitter className="soc" />
            <FaInstagram className="soc" />
            <FaTiktok className="soc" />
          </div>
        </div>
        <div className="contact-form">
          <h2>Contact Us</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
