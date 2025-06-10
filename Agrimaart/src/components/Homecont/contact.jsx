import React from 'react';


const ContactUs = () => {
  return (
    <section className="contact-wrapper">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Let’s Connect</h2>
          <p>We’d love to hear from you. Whether you have a question, suggestion, or just want to say hello — reach out and we’ll get back to you shortly.</p>
        </div>
        <form className="contact-form" onSubmit={e => { e.preventDefault(); alert('Message sent successfully!'); }}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" placeholder="your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="you@example.com" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Messages</label>
            <textarea id="message" name="message" placeholder="Type your message here..." required></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
