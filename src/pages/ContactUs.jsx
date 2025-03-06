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

    // Check if any validation error exists before submission
    if (errors.email || errors.phone || !formData.name || !formData.email || !formData.phone) {
      alert("Please fix validation errors before submitting.");
      return;
    }

    setIsSubmitting(true);

    const SHEETDB_API_URL = "https://sheetdb.io/api/v1/fphj7e1oda62g";

    try {
      const response = await axios.post(SHEETDB_API_URL, formData, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 201) {
        alert("Form Submitted Successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setErrors({ email: "", phone: "" }); // Reset errors on success
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
      <style>
        {`
          .form-control:hover, .form-control:focus {
            border-color: #48A813 !important;
            box-shadow: 0 0 5px #48A813 !important;
          }

          .form-label:hover {
            color: #48A813;
          }

          .btn-custom {
            background-color: #48A813;
            color: white;
            border: none;
          }

          .btn-custom:hover {
            background-color: #3C8E10;
          }
        `}
      </style>

      {/* Banner Section */}
      <section className="bg-contact py-5">
  <div className="container">
    <div className="services-content text-center text-white float-end w-50 mx-auto text-wrap">
      <h6 className="display-6 fw-bold slide-text">Contact Us</h6>
      <p className="fw-bold slide-text">
      We would love to hear from you!
      </p>
    </div>
  </div>
</section>

      {/* Contact Form Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            {/* Form Section */}
            <div className="col-md-6 text-start">
              <h3 className="mb-4">Book an Appointment</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
                  {errors.email && <p className="text-danger">{errors.email}</p>}
                </div>

                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input type="tel" className="form-control" id="phone" name="phone" value={formData.phone} onChange={handleChange} required maxLength="10" />
                  {errors.phone && <p className="text-danger">{errors.phone}</p>}
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" name="message" value={formData.message} onChange={handleChange} rows="5" />
                </div>

                <button type="submit" className="btn btn-custom" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </form>
            </div>

            {/* Contact Info Section */}
            <div className="col-md-6 mt-5 mt-md-0 text-start">
              <h3 className="mb-4">Our Contact Information</h3>
              <ul className="list-unstyled">
                <li className="mb-2"><strong>Email:</strong> edengardenscapes@gmail.com</li>
                <li className="mb-2"><strong>Phone:</strong> +91 9392947780</li>
                <li className="mb-2"><strong>Address:</strong> Hyderabad, Telangana</li>
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
