import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedinIn, FaTwitter, FaCodepen } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import '../css/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    console.log('Env values:', {
      service: import.meta.env.VITE_EMAILJS_SERVICE_ID,
      template: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      key: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    });
  }, []);

  useEffect(() => {
    let timer;
    if (submitStatus === 'success') {
      timer = setTimeout(() => {
        setSubmitStatus(null);
      }, 5000); 
    }
    return () => clearTimeout(timer);
  }, [submitStatus]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    else if (formData.name.length < 2) newErrors.name = 'Name must be at least 2 characters';

    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Enter a valid email';

    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.length < 10) newErrors.message = 'Message must be at least 10 characters';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      console.log('EmailJS Response:', response);
      
      if (response.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        console.error('EmailJS returned non-200 status:', response);
        setSubmitStatus('error');
      }
    } catch (err) {
      console.error('EmailJS error details:', {
        error: err,
        envVars: {
          serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
          templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        }
      });
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <h1 className="section-title">Get In Touch</h1>

        <div className="contact-form">
          {submitStatus === 'success' && (
            <div className="success-message">Message sent successfully!</div>
          )}
          {submitStatus === 'error' && (
            <div className="error-message">Failed to send message. Please try again later.</div>
          )}

          <form onSubmit={handleSubmit}>
            <div className={`form-group ${errors.name ? 'invalid' : ''}`}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>

            <div className={`form-group ${errors.email ? 'invalid' : ''}`}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className={`form-group ${errors.message ? 'invalid' : ''}`}>
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && <span className="error-message">{errors.message}</span>}
            </div>

            <button type="submit" className="btn" disabled={isSubmitting}>
              {isSubmitting ? <><span className="spinner"></span> Sending...</> : 'Send Message'}
            </button>
          </form>

          <div className="social-links">
            <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://codepen.io/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaCodepen />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;