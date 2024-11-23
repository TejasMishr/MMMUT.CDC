import React, { useState } from "react";
import { Lottie } from "../hooks/lottie/lottie";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <>
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
            <div className="flex flex-col h-4/5 sm:w-2/5 w-full items-center justify-between">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col justify-between h-full w-full space-y-4"
              >
                <div className="flex space-x-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    required
                    className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    required
                    className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    required
                    className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Write your message"
                    required
                    className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded h-36 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="w-full flex justify-center items-center">
                  {isSubmitting ? (
                    <div className="w-12 h-12 flex justify-center items-center">
                      <Lottie
                        link="https://lottie.host/964260d4-07c9-418f-9347-c395a8315735/F9D6H9L9YV.json"
                        wid="80%"
                        hig="30%"
                      />
                    </div>
                  ) : (
                    <button
                      type="submit"
                      className="w-full py-2 mt-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition duration-200 sm:mb-[0] mb-[20%]"
                    >
                      Submit
                    </button>
                  )}
                </div>
              </form>
            </div>

            {/* Image Section */}
            <div className="flex flex-col h-4/5 sm:w-2/5 w-full items-center justify-center">
              <Lottie
                link="https://lottie.host/8d3fce25-2155-4ee4-8a7f-d93005ea2de9/NNJYhVZfSe.json"
                wid="40%"
                hig=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
