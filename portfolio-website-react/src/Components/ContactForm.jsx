import React from "react";
import "./ContactForm.css";
import sendIcon from "../assets/form-img/send-fill.svg";

const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <h2>Contact</h2>
      <form action="" id="contact-form">
        <input required type="text" id="name-input" placeholder="Full Name" />
        <input
          required
          type="email"
          id="email-input"
          placeholder="Email Address"
        />
        <textarea
          name="message-input"
          id="message-input"
          cols="30"
          rows="10"
          placeholder="Write Your Message..."
          required
          maxLength={250}
        ></textarea>
        <button type="submit" id="submit-form-button">
          Send Message
          <img src={sendIcon}></img>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;