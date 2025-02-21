import React, { useState } from "react";
import axios from "axios";
import "../index.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    phone: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let errorMessages = { ...errors };

    if (name === "email") {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      errorMessages.email = emailPattern.test(value) ? "" : "Invalid email format!";
    }

    if (name === "phone") {
      const phonePattern = /^[0-9]{10}$/;
      errorMessages.phone = phonePattern.test(value) ? "" : "Phone number must be exactly 10 digits!";
    }

    setErrors(errorMessages);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (errors.email || errors.phone) {
      alert("Please fix validation errors before submitting.");
      return;
    }

    setIsSubmitting(true);

    const SHEETDB_API_URL = "https://sheetdb.io/api/v1/7nksmzigjhcm4";

    try {
      const response = await axios.post(SHEETDB_API_URL, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 201) {
        alert("Form Submitted Successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        throw new Error("Failed to submit. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("Failed to submit the form. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <section className="bg-img2 py-5">
        <div className="container">
          <div className="text-center bg-color w-50 float-end text-white">
            <h1 className="display-4 fw-bold mb-4 slide-text">Contact Us</h1>
            <p className="lead fw-bold mb-4 slide-text">We would love to hear from you!</p>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3 className="mb-4">Book an Appointment</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Full Name
                  </label>
                  <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
                  {errors.email && <p className="text-danger">{errors.email}</p>}
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input type="tel" className="form-control" id="phone" name="phone" value={formData.phone} onChange={handleChange} required maxLength="10" />
                  {errors.phone && <p className="text-danger">{errors.phone}</p>}
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea className="form-control" id="message" name="message" value={formData.message} onChange={handleChange} rows="5" />
                </div>
                <button type="submit" className="btn btn-custom" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </form>
            </div>
            <div className="col-md-6 mt-5 mt-md-0">
              <h3 className="mb-4">Our Contact Information</h3>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <strong>Email:</strong> edengardenscapes@gmail.com
                </li>
                <li className="mb-2">
                  <strong>Phone:</strong> +91 9392947780
                </li>
                <li className="mb-2">
                  <strong>Address:</strong> Hyderabad, Telangana
                </li>
              </ul>
              <h4 className="mt-4 mb-4">Business Hours</h4>
              <p>Monday to Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday, Sunday: 10:00 AM - 4:00 PM</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
