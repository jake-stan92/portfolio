import React from "react";
import "./ContactForm.css";
import sendIcon from "../assets/form-img/send-fill.svg";

const ContactForm = () => {
  return (
    <div className="contact-section">
      <div className="contact-form-container">
        <h2>Contact</h2>
        <form id="contact-form" name="contact-form" method="POST">
          <input type="hidden" name="form-name" value="contact-form" />
          <input
            required
            type="text"
            name="name-input"
            id="name-input"
            placeholder="Full Name"
            aria-label="name-input-field"
          />
          <input
            required
            type="email"
            name="email-input"
            id="email-input"
            placeholder="Email Address"
            aria-label="email-input-field"
          />
          <textarea
            name="message-input"
            id="message-input"
            cols="30"
            rows="10"
            placeholder="Write Your Message..."
            required
            maxLength={250}
            aria-label="message-input-area"
          ></textarea>
          <button
            type="submit"
            id="submit-form-button"
            aria-label="submit-button"
          >
            Send Message
            <img src={sendIcon} alt="send icon"></img>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
