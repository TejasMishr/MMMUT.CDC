import React, { useState } from "react";
import { Lottie } from "../hooks/lottie/lottie"; 
import emailjs from "emailjs-com";
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa"; 

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

    const serviceID = "service_4401q79";
    const templateID = "template_rizf9og";
    const userID = "6SYFkuz4yz71tbNLR";
  
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
    <div className="bg-gray-900 min-h-screen flex flex-col items-center relative justify-center overflow-hidden">
 
      <div
        className="absolute inset-0 blur-3xl z-[0]"
        style={{
          background:
            "radial-gradient(circle, rgba(23,20,27,1) 0%, rgba(58,94,121,1) 66%, rgba(42,58,78,1) 90%)",
        }}
      />

    
      <div className="flex flex-col justify-evenly items-center h-auto w-full p-4 relative z-10">
        <h1 className="text-white text-4xl font-extrabold text-center mt-4 mb-6">
          Get in Touch with Us
        </h1>
        <p className="text-gray-300 text-center max-w-2xl mb-10">
          Have questions or need assistance? Feel free to reach out to us via the form below or connect with us on WhatsApp and Telegram for quick responses. We’re here to help!
        </p>

        <div className="flex flex-col sm:flex-row justify-around items-center w-[90%] h-auto p-4 sm:space-x-8 space-y-8 sm:space-y-0">
        
          <div className="flex flex-col sm:w-2/5 w-full items-center justify-between">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col justify-between h-full w-full space-y-4 z-18 bg-gray-800 p-6 rounded-lg shadow-xl"
            >
              <div className="flex space-x-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border-none bg-gray-700 text-white rounded-lg focus:ring focus:ring-blue-300 focus:outline-none focus:ring-offset-gray-900"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border-none bg-gray-700 text-white rounded-lg focus:ring focus:ring-blue-300 focus:outline-none focus:ring-offset-gray-900"
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border-none bg-gray-700 text-white rounded-lg focus:ring focus:ring-blue-300 focus:outline-none focus:ring-offset-gray-900"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border-none bg-gray-700 text-white rounded-lg focus:ring focus:ring-blue-300 focus:outline-none focus:ring-offset-gray-900"
              />
              <textarea
                name="message"
                placeholder="Write your message"
                required
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border-none h-36 resize-none bg-gray-700 text-white rounded-lg focus:ring focus:ring-blue-300 focus:outline-none focus:ring-offset-gray-900"
              />
              <div className="w-full flex justify-center items-center">
                <button
                  type="submit"
                  className="w-full text-2xl py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition duration-200 font-semibold"
                >
                  Submit
                </button>
              </div>
            </form>
            {status && <p className="text-white mt-4">{status}</p>}
          </div>

  
          <div className="flex flex-col h-[300px] sm:w-2/5 w-full items-center justify-center mt-[1%] sm:mt-0">
            <Lottie
              link="https://lottie.host/e6328aed-b731-4b3a-be87-c559a8e86b32/huTVlPDewn.json"
              wid="55%"
              className="sm:w-[60%] w-[90%]"
            />
          </div>
        </div>

     
        <p className="text-white text-xl mt-8">Connect with us on:</p>
        <div className="flex space-x-8 justify-center items-center mt-4">
          <a
            href="https://wa.me/6386532383"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 text-5xl hover:text-green-400 transition duration-200"
            style={{ zIndex: 50 }}
         >
            <FaWhatsapp />
          </a>
          <a
            href="https://t.me/CDC_Support"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 text-5xl hover:text-blue-400 transition duration-200"
            style={{ zIndex: 50 }}
         >
            <FaTelegramPlane />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
