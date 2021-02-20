import React, { useState } from "react";

import { db } from "../../firestore/firebase";

import "./Contact.css";

const initialData = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [values, setValue] = useState(initialData);

  const handleInputData = (e) => {
    const { value, name } = e.target;
    setValue({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("contacts")
      .add({
        values,
      })
      .then(() => {
        alert("Message has been submitted");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="contact">
      <h1 className="contact__title">Contact me</h1>
      <div className="contact__form-wrapper">
        <form className="contact__form" onSubmit={handleSubmit}>
          <input
            className="contact__form-input"
            value={values.name}
            name="name"
            placeholder="Name"
            onChange={handleInputData}
          />

          <input
            className="contact__form-input"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={handleInputData}
            required
          />

          <textarea
            className="contact__form-textarea"
            placeholder="Message"
            value={values.message}
            name="message"
            onChange={handleInputData}
          ></textarea>
          <button type="submit" className="contact__form-submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
