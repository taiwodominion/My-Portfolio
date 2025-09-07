// import { useState, useEffect } from 'react';
// import emailjs from '@emailjs/browser';
// import { FaGithub, FaLinkedinIn, FaTwitter, FaCodepen } from 'react-icons/fa';
// import '../css/Contact.css';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState(null);

//   // Log environment variables (safely)
//   useEffect(() => {
//     const service = import.meta.env.VITE_EMAILJS_SERVICE_ID;
//     const template = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
//     const key = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

//     if (!service || !template || !key) {
//       console.error('Missing one or more EmailJS environment variables.');
//     } else {
//       console.log('Env values:', { service, template, key });
//     }
//   }, []);

//   // Clear success message after timeout
//   useEffect(() => {
//     let timer;
//     if (submitStatus === 'success') {
//       timer = setTimeout(() => {
//         setSubmitStatus(null);
//       }, 5000);
//     }
//     return () => clearTimeout(timer);
//   }, [submitStatus]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//     if (errors[name]) {
//       setErrors(prev => ({ ...prev, [name]: '' }));
//     }
//     if (submitStatus) {
//       setSubmitStatus(null);
//     }
//   };

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.name.trim()) newErrors.name = 'Name is required';
//     else if (formData.name.length < 2) newErrors.name = 'Name must be at least 2 characters';

//     if (!formData.email.trim()) newErrors.email = 'Email is required';
//     else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Enter a valid email';

//     if (!formData.message.trim()) newErrors.message = 'Message is required';
//     else if (formData.message.length < 10) newErrors.message = 'Message must be at least 10 characters';

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//     const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validate()) return;

//     setIsSubmitting(true);

//     try {
//       await emailjs.send(
//         import.meta.env.VITE_EMAILJS_SERVICE_ID,
//         import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
//         {
//           name: formData.name,
//           email: formData.email,
//           message: formData.message,
//         },
//         import.meta.env.VITE_EMAILJS_PUBLIC_KEY
//       );

//       setSubmitStatus('success');
//       setFormData({ name: '', email: '', message: '' });

//     } catch (error) {
//       console.error('Submission failed:', error);
//       setSubmitStatus('error');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };


//   console.log('Public key:', import.meta.env.VITE_EMAILJS_PUBLIC_KEY);



//   return (
//     <section id="contact">
//       <div className="container">
//         <h1 className="section-title">Get In Touch</h1>

//         <div className="contact-form">
//           {submitStatus === 'success' && (
//             <div className="success-message">Message sent successfully!</div>
//           )}
//           {submitStatus === 'error' && (
//             <div className="error-message">Failed to send message. Please try again later.</div>
//           )}

//           <form onSubmit={handleSubmit} noValidate>
//             <div className={`form-group ${errors.name ? 'invalid' : ''}`}>
//               <label htmlFor="name">Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 id="name"
//                 value={formData.name}
//                 onChange={handleChange}
//               />
//               {errors.name && <span className="error-message">{errors.name}</span>}
//             </div>

//             <div className={`form-group ${errors.email ? 'invalid' : ''}`}>
//               <label htmlFor="email">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 id="email"
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//               {errors.email && <span className="error-message">{errors.email}</span>}
//             </div>

//             <div className={`form-group ${errors.message ? 'invalid' : ''}`}>
//               <label htmlFor="message">Message</label>
//               <textarea
//                 name="message"
//                 id="message"
//                 rows="5"
//                 value={formData.message}
//                 onChange={handleChange}
//               ></textarea>
//               {errors.message && <span className="error-message">{errors.message}</span>}
//             </div>

//             <button type="submit" className="btn" disabled={isSubmitting}>
//               {isSubmitting ? <><span className="spinner"></span> Sending...</> : 'Send Message'}
//             </button>
//           </form>

//           <div className="social-links">
//             <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
//               <FaGithub />
//             </a>
//             <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
//               <FaLinkedinIn />
//             </a>
//             <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
//               <FaTwitter />
//             </a>
//             <a href="https://codepen.io/yourprofile" target="_blank" rel="noopener noreferrer">
//               <FaCodepen />
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedinIn, FaTwitter, FaCodepen } from 'react-icons/fa';
import '../css/Contact.css'; // Your custom styles

const Contact = () => {
  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // "success" | "error" | null

  useEffect(() => {
    if (submitStatus) {
      const timer = setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const { name, subject, email, message } = formData;
    if (!name.trim() || !subject.trim() || !email.trim() || !message.trim()) {
      setSubmitStatus('error');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSubmitStatus('error');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    emailjs
      .send(
        'service_jjnm8e9',
        'template_z12gyxi',
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setSubmitStatus('success');
        setFormData({ name: '', subject: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact">
      <div className="container">
        <h1 className="section-title">Get In Touch</h1>

        <form id="contactForm" ref={formRef} onSubmit={handleSubmit}>
          {/* ✅ Popup message */}
          {submitStatus === 'success' && (
            <div className="form-popup success">✅ Email sent successfully!</div>
          )}
          {submitStatus === 'error' && (
            <div className="form-popup error">❌ Failed to send. Check inputs or try again.</div>
          )}

          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <span className="spinner"></span> Sending...
              </>
            ) : (
              'Send Message'
            )}
          </button>
        </form>

        <div className="social-links">
             <a href="https://github.com/taiwodominion" target="_blank" rel="noopener noreferrer">
               <FaGithub />
             </a>
             {/* <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
               <FaLinkedinIn />
             </a> */}
             <a href="https://x.com/_dom_codes" target="_blank" rel="noopener noreferrer">
               <FaTwitter />
             </a>
           </div>
      </div>
    </section>
  );
};

export default Contact;
