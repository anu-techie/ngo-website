import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
    } else {
      setErrors({});
      setSubmitted(true);
      console.log(formData);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <div className="contact-container" role="main">
      <div className="contact-box">
        <div className="contact-left" aria-label="Contact information">
          <h2>Contact Us</h2>
          <p>We’d love to hear from you! Reach out using the information below or send us a message using the form.</p>
          <ul className="contact-details">
            <li><strong>Email:</strong> info@bastikipathshala.org</li>
            <li><strong>Phone:</strong> +91 98765 43210</li>
            <li><strong>Address:</strong> 123, Slum Education Street, Delhi, India</li>
          </ul>
        </div>
        <div className="contact-right" aria-label="Contact form">
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name">Name<span aria-hidden="true">*</span></label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                aria-required="true"
                aria-invalid={errors.name ? "true" : "false"}
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email<span aria-hidden="true">*</span></label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                aria-required="true"
                aria-invalid={errors.email ? "true" : "false"}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="message">Message<span aria-hidden="true">*</span></label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                aria-required="true"
                aria-invalid={errors.message ? "true" : "false"}
              ></textarea>
              {errors.message && <span className="error">{errors.message}</span>}
            </div>
            <button type="submit">Send Message</button>
            {submitted && <p className="success">Message sent successfully!</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
