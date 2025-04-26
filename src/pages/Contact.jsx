import React from 'react';

const Contact = () => {
  return (
    <section>
      <h1>Contact Page</h1>
      <form>
        <input name="name" type="text" placeholder="Enter your name" required /><br />
        <input name="email" type="email" placeholder="Enter your email" required /><br />
        <textarea name="message" placeholder="Enter your message" required></textarea><br />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
