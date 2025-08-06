import React, { useState } from 'react';
import './Join.css';

const Join = () => {
  const [formData, setFormData] = useState({
    role: '',
    name: '',
    email: '',
    phone: '',
    reason: '',
    volunteerId: '',
    resume: null
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'resume') {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.role) newErrors.role = 'Please select a role';
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone must be 10 digits';
    }
    if (!formData.reason.trim()) newErrors.reason = 'Please tell us why you want to join';

    if (formData.role === 'Volunteer' && !formData.volunteerId.trim()) {
      newErrors.volunteerId = 'ID is required for volunteers';
    }

    if (formData.role === 'Intern' && !formData.resume) {
      newErrors.resume = 'Resume is required for interns';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSubmitted(false);
    } else {
      setErrors({});
      setSubmitted(true);

      // Show data in console (you can replace with actual backend logic)
      console.log('Submitted Data:', formData);

      // Reset
      setFormData({
        role: '',
        name: '',
        email: '',
        phone: '',
        reason: '',
        volunteerId: '',
        resume: null
      });
      e.target.reset();
    }
  };

  return (
    <div className="join-container" role="main">
      <div className="join-box">
        <h2>Join With Us</h2>
        <p>Apply to be a Volunteer or Intern and make an impact!</p>

        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="role">Join as<span>*</span></label>
            <select id="role" name="role" value={formData.role} onChange={handleChange} aria-required="true">
              <option value="">-- Select --</option>
              <option value="Volunteer">Volunteer</option>
              <option value="Intern">Intern</option>
            </select>
            {errors.role && <span className="error">{errors.role}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="name">Full Name<span>*</span></label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email<span>*</span></label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone<span>*</span></label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="reason">Why do you want to join?<span>*</span></label>
            <textarea id="reason" name="reason" rows="4" value={formData.reason} onChange={handleChange}></textarea>
            {errors.reason && <span className="error">{errors.reason}</span>}
          </div>

          {/* Conditional Field: ID for Volunteers */}
          {formData.role === 'Volunteer' && (
            <div className="form-group">
              <label htmlFor="volunteerId">Volunteer ID<span>*</span></label>
              <input type="text" id="volunteerId" name="volunteerId" value={formData.volunteerId} onChange={handleChange} />
              {errors.volunteerId && <span className="error">{errors.volunteerId}</span>}
            </div>
          )}

          {/* Conditional Field: Resume for Interns */}
          {formData.role === 'Intern' && (
            <div className="form-group">
              <label htmlFor="resume">Upload Resume<span>*</span></label>
              <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" onChange={handleChange} />
              {errors.resume && <span className="error">{errors.resume}</span>}
            </div>
          )}

          <button type="submit">Submit Application</button>
          {submitted && <p className="success">Application submitted successfully!</p>}
        </form>
      </div>
    </div>
  );
};

export default Join;
