import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  function handleContactForm(e) {
    e.preventDefault();
    console.log(
      `Your name is ${firstName} ${lastName}. Your contact information ${phone}, ${email}`
    );
  }

  function setFormField(e, field) {
    switch (field) {
      case "firstName":
        setFirstName(e.target.value);
        break;
      case "lastName":
        setLastName(e.target.value);
        break;
      case "phone":
        setPhone(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      default:
        break;
    }
  }

  return (
    <div>
      <nav className="contacts-header">
        <div>
          <NavLink to="/" className="custom-btn">
            <i className="material-icons">arrow_back_ios_new</i>{" "}
            <span style={{ fontSize: "2rem" }}>Go back</span>
          </NavLink>
        </div>
      </nav>
      <main className="contacts-main">
        <h1>Contact Us</h1>
        <form className="contact-form">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFormField(e, "firstName")}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setFormField(e, "lastName")}
          />
          <input
            type="number"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setFormField(e, "phone")}
          />
          <input
            type="email"
            placeholder="person@example.com"
            value={email}
            onChange={(e) => setFormField(e, "email")}
          />
          <button className="btn btn-dark" onClick={handleContactForm}>
            Submit
          </button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
