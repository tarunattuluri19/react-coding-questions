import React, { useState } from "react";

function FormValidations() {
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    phonenumber: "",
    birthday: "",
    resume: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let tempErrors = {};

    // Validate fullname
    if (!values.fullname) {
      tempErrors.fullname = "Name is required";
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!values.email) {
      tempErrors.email = "Email is required";
    } else if (!emailRegex.test(values.email)) {
      tempErrors.email = "Invalid email format";
    }

    // Validate phone
    const phoneRegex = /^\d{10}$/;
    if (!values.phonenumber) {
      tempErrors.phonenumber = "Phone number is required";
    } else if (!phoneRegex.test(values.phonenumber)) {
      tempErrors.phonenumber = "Phone number must be 10 digits";
    }

    // Validate birthday
    if (!values.birthday) {
      tempErrors.birthday = "Birthday is required";
    }

    // Validate file
    if (!values.choosefile) {
      tempErrors.choosefile = "File is required";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", values);
    }
  };

  const errorStyle = {
    color: "red",
    fontSize: "12px",
    marginTop: "5px",
  };

  return (
    <>
      <h2>FormValidation</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name:</label>
          <input
            placeholder="Enter your full name"
            type="text"
            name="fullname"
            value={values.fullname}
            onChange={handleChange}
          />
          {errors.fullname && <div style={errorStyle}>{errors.fullname}</div>}
        </div>
        <div>
          <label>Email:</label>
          <input
            placeholder="Enter your email"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <div style={errorStyle}>{errors.email}</div>}
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            placeholder="Enter your phone number"
            type="number"
            name="phonenumber"
            value={values.phonenumber}
            onChange={handleChange}
          />
          {errors.phonenumber && (
            <div style={errorStyle}>{errors.phonenumber}</div>
          )}
        </div>
        <div>
          <label>Birthday:</label>
          <input
            type="date"
            name="birthday"
            value={values.birthday}
            onChange={handleChange}
          />
          {errors.birthday && <div style={errorStyle}>{errors.birthday}</div>}
        </div>
        <div>
          <label>Choose file:</label>
          <input type="file" name="choosefile" onChange={handleChange} />
          {errors.choosefile && (
            <div style={errorStyle}>{errors.choosefile}</div>
          )}
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}

export default FormValidations;
