import React from "react";

const RegistrationForm = () => {
  return (
    <div className="form-container">
      <form className="registration-form">
        <h1>Registration form</h1>
        <div className="form-item">
          <label htmlFor="name">
            Name:<span>*</span>
          </label>
          <input type="text" id="name" placeholder="Name" />
        </div>
        <div className="form-item">
          <label htmlFor="email">
            Email:<span>*</span>
          </label>
          <input type="text" placeholder="Email" />
        </div>
        <div className="form-item">
          <label htmlFor="mobile">Mobile Number:</label>
          <input type="text" placeholder="mobile" />
        </div>
        <div className="form-item">
          <label htmlFor="country">Country:</label>
          <input type="text" placeholder="country" />
        </div>
        <div className="form-item">
          <label htmlFor="city">City</label>
          <input type="text" placeholder="City" />
        </div>
        <div className="form-item">
          <label htmlFor="state">State:</label>
          <input type="text" placeholder="State" />
        </div>
        <div className="form-item">
          <label htmlFor="email">Message:</label>
          <textarea placeholder="Write your message here..." />
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
