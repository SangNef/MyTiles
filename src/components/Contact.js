import React from 'react';
import './css/contact.css';

const Contact = () => {
    return (
      <section className="contact" id="contact-us">
        <div className="description">
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.097074056704!2d105.78010051542147!3d21.028801485998393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b32b842a37%3A0xe91a56573e7f9a11!2zOGEgVMO0biBUaOG6pXQgVGh1eeG6v3QsIE3hu7kgxJDDrG5oLCBD4bqndSBHaeG6pXksIEjDoCBO4buZaSAxMDAwMDAsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1680622717811!5m2!1svi!2s"
              width="100%"
              height="100%"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="contact-box">
            <div className="full-name">
              <input
                type="text"
                className="first-name"
                placeholder="First Name..."
              />
              <input
                type="text"
                className="last-name"
                placeholder="Last Name..."
              />
            </div>
            <input
              type="email"
              name="email"
              className="email"
              id="email"
              placeholder="Your Email..."
            />
            <textarea
              name="contact"
              className="contact-text"
              id="contact"
              cols="30"
              rows="5"
            ></textarea>
            <div className="submit">
              <input type="submit" value="Gửi" />
            </div>
          </div>
        </div>
      </section>
    );
};

export default Contact;