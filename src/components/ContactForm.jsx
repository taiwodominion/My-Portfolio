import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import {
  SiGmail,
  SiGooglemaps,
  SiClockify,
  SiFastly,
  SiCoffeescript,
  SiTarget,
  SiAerlingus,
  SiReact,
} from "react-icons/si";

import {
  FaMapLocationDot,
  FaRegClock,
  FaEnvelope,
  FaCircleCheck,
  FaCircleExclamation,
  FaRocket,
  FaRegCopy,
  FaCheck,
} from "react-icons/fa6";

import { IoSendSharp, IoPaperPlane } from "react-icons/io5";
import "../css/ContactForm.css";

const PLACEHOLDERS = {
  name: ["Your name...", "e.g. Sarah Johnson", 
    "Who are you?"],
  subject: [
    "What's this about?",
    "e.g. Freelance Project",
    "Got a job for me?",
  ],
  email: ["your@email.com", "Where should I reply?", "Drop your email"],
  message: [
    "Tell me everything...",
    "What are we building together?",
    "Don't be shy ",
  ],
};

const FUN_FACTS = [
  { icon: <SiFastly />, text: "I reply within 24 hours" },
  { icon: <SiCoffeescript />, text: "Fuelled by coffee & code" },
  { icon: <SiGooglemaps />, text: "Available for remote work" },
  { icon: <SiAerlingus />, text: "Open to full-time & freelance" },
  { icon: <SiTarget />, text: "100% project success rate" },
  { icon: <SiReact />, text: "I turn ideas into reality" },
];

const Contact = () => {
  const formRef = useRef();
  const sectionRef = useRef();
  const [visible, setVisible] = useState(false);
  const [activeFact, setActiveFact] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [focused, setFocused] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("taiwodominion156@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const [placeholderIdx] = useState(() =>
    Object.fromEntries(
      Object.keys(PLACEHOLDERS).map((k) => [
        k,
        Math.floor(Math.random() * PLACEHOLDERS[k].length),
      ]),
    ),
  );

  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFact((p) => (p + 1) % FUN_FACTS.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (submitStatus) {
      const t = setTimeout(() => setSubmitStatus(null), 5000);
      return () => clearTimeout(t);
    }
  }, [submitStatus]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "message") setCharCount(value.length);
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const validateForm = () => {
    const { name, subject, email, message } = formData;
    if (!name.trim() || !subject.trim() || !email.trim() || !message.trim()) {
      setSubmitStatus("error");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubmitStatus("error");
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
        "service_jjnm8e9",
        "template_z12gyxi",
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setSubmitStatus("success");
        setFormData({ name: "", subject: "", email: "", message: "" });
        setCharCount(0);
      })
      .catch((err) => {
        console.error(err);
        setSubmitStatus("error");
      })
      .finally(() => setIsSubmitting(false));
  };

  const allFilled = Object.values(formData).every((v) => v.trim().length > 0);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={visible ? "contact--visible" : ""}
    >
      <div className="contact__orb contact__orb--1" />
      <div className="contact__orb contact__orb--2" />
      <div className="contact__grain" />

      <div className="contact__inner">
        <div className="contact__left">
          <p className="contact__eyebrow">
            <span className="contact__eyebrow-line" />
            Let's Connect
          </p>

          <h2 className="contact__title">
            Got a project
            <br />
            in <span className="contact__title-accent">mind?</span>
          </h2>

          <p className="contact__subtitle">
            Whether it's a full product build, a freelance gig, or just a
            question — my inbox is always open. Let's make something great
            together.
          </p>

          <div className="contact__ticker">
            <div className="contact__ticker-track">
              {FUN_FACTS.map((f, i) => (
                <span
                  key={i}
                  className={`contact__ticker-item ${i === activeFact ? "active" : ""}`}
                >
                  <span className="fact-icon">{f.icon}</span> {f.text}
                </span>
              ))}
            </div>
          </div>

          <div className="contact__info-cards">
            <div
              className={`contact__info-card ${copied ? "copied" : ""}`}
              onClick={handleCopyEmail}
              style={{ cursor: "pointer" }}
            >
              <span className="contact__info-icon">
                {copied ? (
                  <FaCheck style={{ color: "#3ddc84" }} />
                ) : (
                  <SiGmail />
                )}
              </span>
              <div>
                <span className="contact__info-label">
                  {copied ? "Copied!" : "Email"}
                </span>
                <span className="contact__info-val">
                  taiwodominion156@gmail.com
                </span>
              </div>
              {/* Add the copy icon hint */}
              {!copied && (
                <FaRegCopy
                  className="contact__copy-hint"
                  style={{ marginLeft: "auto", opacity: 0.5 }}
                />
              )}
            </div>
            
            <div className="contact__info-card">
              <span className="contact__info-icon">
                <FaMapLocationDot />
              </span>
              <div>
                <span className="contact__info-label">Location</span>
                <span className="contact__info-val">
                  Nigeria · Remote Worldwide
                </span>
              </div>
            </div>
            <div className="contact__info-card">
              <span className="contact__info-icon">
                <FaRegClock />
              </span>
              <div>
                <span className="contact__info-label">Response Time</span>
                <span className="contact__info-val">Within 24 hours</span>
              </div>
            </div>
          </div>

          <div className="contact__avail">
            <span className="contact__avail-dot" />
            <span>Currently available for new projects</span>
          </div>
        </div>

        <div className="contact__right">
          {submitStatus === "success" && (
            <div className="contact__status contact__status--success">
              <FaCircleCheck className="status-icon" />
              <div>
                <strong>Message sent!</strong>
                <p>I'll get back to you within 24 hours.</p>
              </div>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="contact__status contact__status--error">
              <FaCircleExclamation className="status-icon" />
              <div>
                <strong>Something went wrong</strong>
                <p>Check your inputs and try again.</p>
              </div>
            </div>
          )}

          <form ref={formRef} onSubmit={handleSubmit} className="contact__form">
            <div className="contact__form-row">
              <div
                className={`contact__field ${focused === "name" ? "focused" : ""} ${formData.name ? "filled" : ""}`}
              >
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  placeholder={PLACEHOLDERS.name[placeholderIdx.name]}
                  required
                />
                <div className="contact__field-bar" />
              </div>

              <div
                className={`contact__field ${focused === "email" ? "focused" : ""} ${formData.email ? "filled" : ""}`}
              >
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  placeholder={PLACEHOLDERS.email[placeholderIdx.email]}
                  required
                />
                <div className="contact__field-bar" />
              </div>
            </div>

            <div
              className={`contact__field ${focused === "subject" ? "focused" : ""} ${formData.subject ? "filled" : ""}`}
            >
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                onFocus={() => setFocused("subject")}
                onBlur={() => setFocused(null)}
                placeholder={PLACEHOLDERS.subject[placeholderIdx.subject]}
                required
              />
              <div className="contact__field-bar" />
            </div>

            <div
              className={`contact__field contact__field--textarea ${focused === "message" ? "focused" : ""} ${formData.message ? "filled" : ""}`}
            >
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                placeholder={PLACEHOLDERS.message[placeholderIdx.message]}
                maxLength={500}
                rows={5}
                required
              />
              <div className="contact__field-bar" />
              <span className="contact__char-count">
                {charCount}
                <span>/500</span>
              </span>
            </div>

            <div className="contact__progress">
              <div className="contact__progress-track">
                <div
                  className="contact__progress-fill"
                  style={{
                    width: `${(Object.values(formData).filter((v) => v.trim()).length / 4) * 100}%`,
                  }}
                />
              </div>
              <span className="contact__progress-label">
                {Object.values(formData).filter((v) => v.trim()).length}/4
                fields filled
              </span>
            </div>

            <button
              type="submit"
              className={`contact__submit ${allFilled ? "contact__submit--ready" : ""}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="contact__spinner" />
                  <span>Sending...</span>
                </>
              ) : allFilled ? (
                <>
                  <FaRocket /> <span>Send It</span> <IoSendSharp />
                </>
              ) : (
                <>
                  <span>Send Message</span> <IoPaperPlane />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
