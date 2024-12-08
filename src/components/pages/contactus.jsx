import React, { useState } from "react";
import { Lottie } from "../hooks/lottie/lottie"; // Assuming Lottie component is imported for animations
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_r1dvjqg";
    const templateID = "template_ochgjah";
    const userID = "eUMkHS1YtRueH6YcM";

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then(
        (response) => {
          setStatus("Message Delivered Successfully!");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          setStatus("Failed to Contact. Please try again.");
        }
      );
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center relative overflow-hidden">
      {/* Radial Gradient Background */}
      <div
        className="absolute inset-0 blur-3xl z-[0]"
        style={{
          background:
            "radial-gradient(circle, rgba(23,20,27,1) 0%, rgba(58,94,121,1) 66%, rgba(42,58,78,1) 90%)",
        }}
      />

      {/* Main Content */}
      <div className="flex flex-col justify-evenly items-center h-auto w-full p-4 relative z-10">
        <h1 className="text-white text-4xl font-extrabold text-center mt-4 mb-6">
          CONTACT US
        </h1>
        <div className="flex flex-col sm:flex-row justify-around items-center w-[90%] h-auto p-4 sm:space-x-8 space-y-8 sm:space-y-0">
          {/* Form Section */}
          <div className="flex flex-col sm:w-2/5 w-full items-center justify-between">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col justify-between h-full w-full space-y-4 z-18"
            >
              <div className="flex space-x-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border-none bg-gray-800 text-white rounded-lg shadow-neumorphism focus:ring focus:ring-blue-300 focus:outline-none focus:ring-offset-gray-900"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border-none bg-gray-800 text-white rounded-lg shadow-neumorphism focus:ring focus:ring-blue-300 focus:outline-none focus:ring-offset-gray-900"
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border-none bg-gray-800 text-white rounded-lg shadow-neumorphism focus:ring focus:ring-blue-300 focus:outline-none focus:ring-offset-gray-900"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border-none bg-gray-800 text-white rounded-lg shadow-neumorphism focus:ring focus:ring-blue-300 focus:outline-none focus:ring-offset-gray-900"
              />
              <textarea
                name="message"
                placeholder="Write your message"
                required
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border-none h-36 resize-none bg-gray-800 text-white rounded-lg shadow-neumorphism focus:ring focus:ring-blue-300 focus:outline-none focus:ring-offset-gray-900"
              />
              <div className="w-full flex justify-center items-center">
                <button
                  type="submit"
                  className="w-full h-full text-2xl py-2 mt-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition duration-200"
                >
                  Submit
                </button>
              </div>
            </form>
            {status && <p className="text-white mt-4">{status}</p>}
          </div>

          {/* Lottie Animation Section */}
          <div className="flex flex-col h-[300px] sm:w-2/5 w-full items-center justify-center mt-[1%] sm:mt-0 z-[-1]">
            <Lottie
              link="https://lottie.host/8d3fce25-2155-4ee4-8a7f-d93005ea2de9/NNJYhVZfSe.json"
              wid="55%"
              className="sm:w-[60%] w-[90%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
