import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-section">
      <h2>Contact </h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" className='input' id="name" name="name" ></input>

        <label htmlFor="email">Email:</label>
        <input type="email" className='input' id="email" name="email" ></input>
  
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
