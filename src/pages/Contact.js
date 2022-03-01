import React, { useRef, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import emailjs from "@emailjs/browser";

const Contact = () => {
  useEffect(() => {
    window["animateSlides"]();
  });
  const initialValues = { name: "", email: "", subject: "", message: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [sent, setSent] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));

    // if (Object.keys(formErrors).length === 0 && isSubmit) {
    //   sendEmail(e);
    // }
    sendEmail(e);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  function sendEmail(e) {
    setIsSubmit(true);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      emailjs
        .sendForm(
          "gmail",
          "gmail_template",
          form.current,
          "user_ClNm3OyERKMCp2nECmUje"
        )
        .then(
          (result) => {
            console.log(result.text);
            setSent(true);
          },
          (error) => {
            console.log(error.text);
          }
        );
      setFormValues(initialValues);
      setIsSubmit(false);
    }
    setSent(false);
  }

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.subject) {
      errors.subject = "A subject is required!";
    }
    if (!values.message) {
      errors.message = "A message must be provided";
    }
    return errors;
  };

  return (
    <>
      <section className="contact fade">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Contact Me</title>
          <meta name="description" content="How Can I Help?" />
        </Helmet>
        <h1>How Can I Help?</h1>
        <p>
          <i className="fa-solid fa-envelope fa-lg"></i>jvsonjohnson@gmail.com
        </p>
        <div className="contact-us">
          {Object.keys(formErrors).length === 0 && sent ? (
            <div className="success-msg">
              <i className="fa fa-check"></i>Message sent successfully
            </div>
          ) : (
            ""
          )}
          <form
            ref={form}
            onSubmit={handleSubmit}
            method="POST"
            id="contactForm"
            name="contactForm"
            className="contactForm fadeMe"
          >
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="Name"
                value={formValues.name}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.name}</p>

            <div className="form-group">
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="Email"
                value={formValues.email}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.email}</p>

            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="subject"
                id="subject"
                placeholder="Subject eg. I need a website"
                value={formValues.subject}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.subject}</p>

            <div className="form-group">
              <textarea
                name="message"
                className="form-control"
                id="message"
                cols="30"
                rows="8"
                placeholder="Your Message"
                value={formValues.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <p>{formErrors.message}</p>

            <div className="form-group">
              <input className="btn" type="submit" value="Send Message" />
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
