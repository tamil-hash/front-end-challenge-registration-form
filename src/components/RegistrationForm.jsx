import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const mobileNumberRegex = /^\d{10}$/;

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [showError, setShowErrors] = useState({
    name: false,
    email: false,
    mobile: false,
  });

  const submitForm = () => {
    navigate("/success");
  };

  const validateFormData = (e) => {
    e.preventDefault();
    let newErrors = { name: false, email: false, mobile: false };
    if (e.target[0].value === "") {
      newErrors = { name: true, ...newErrors };
    }
    if (e.target[1].value === "") {
      newErrors = { email: true, ...newErrors };
    }
    if (e.target[2].value === "") {
      newErrors = { mobile: true, ...newErrors };
    } else if (!mobileNumberRegex.test(e.target[2].value)) {
      console.log("asd");
      newErrors = { mobile: true, ...newErrors };
    }
    setShowErrors(newErrors);
    if (!newErrors.name && !newErrors.email && !newErrors.mobile) {
      submitForm();
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={validateFormData} className="registration-form">
        <h1>Registration form</h1>
        <div className="form-item">
          <label htmlFor="name">
            Name:<span>*</span>
          </label>
          <input
            className={showError.name ? "error-input" : null}
            type="text"
            id="name"
            placeholder="Name"
          />
          {showError.name && (
            <p className="error-msg">Please enter your name</p>
          )}
        </div>
        <div className="form-item">
          <label htmlFor="email">
            Email:<span>*</span>
          </label>
          <input
            className={showError.email ? "error-input" : null}
            type="text"
            id="email"
            placeholder="Email"
          />
          {showError.email && (
            <p className="error-msg">Please enter your Mail id</p>
          )}
        </div>
        <div className="form-item">
          <label htmlFor="mobile">Mobile Number:</label>
          <input
            className={showError.mobile ? "error-input" : null}
            type="text"
            name="phone"
            id="mobile"
            placeholder="Mobile number"
          />
          {showError.mobile && (
            <p className="error-msg">Please enter proper mobile number</p>
          )}
        </div>
        <div className="form-item">
          <label htmlFor="country">Country:</label>
          <input type="text" id="country" placeholder="country" />
        </div>
        <div className="form-item">
          <label htmlFor="state">State:</label>
          <input type="text" id="state" placeholder="State" />
        </div>
        <div className="form-item">
          <label htmlFor="city">City:</label>
          <input type="text" id="city" placeholder="City" />
        </div>
        <div className="form-item">
          <label htmlFor="message">Message:</label>
          <textarea id="message" placeholder="Write your message here..." />
        </div>
        <div className="form-item">
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;

// ○	Name - required
// ○	Email - required
// ○	Mobile
// ○	Country
// ○	City
// ○	State
// ○	Message
