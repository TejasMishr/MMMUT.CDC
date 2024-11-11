import React from 'react';

const ContactForm = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center">
        <div className='flex flex-col justify-evenly items-center h-auto w-full p-2'>
      <h1 className="text-white text-4xl font-extrabold text-center mt-4 mb-6">CONTACT US</h1>
      <div className="flex flex-col sm:flex-row justify-evenly items-center w-3/4 h-auto p-3">
        {/* Form Section */}
       
        
        <div className="flex flex-col h-4/5 sm:w-2/5 w-full items-center justify-between ">
          <form className="flex flex-col justify-between h-full w-full space-y-4">
            <div className="flex space-x-4">
              <input 
                type="text"
                placeholder="First Name"
                className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input 
                type="text"
                placeholder="Last Name"
                className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input 
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input 
                type="text"
                placeholder="Phone Number"
                className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <textarea
                placeholder="Write your message"
                className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded h-36 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button 
  type="submit"
  className="w-full py-2 bg-blue-600 text-white font-bold text-lg rounded hover:bg-blue-700 hover:border-0 border-2 border-black"
>
  SUBMIT
</button>

          </form>
        </div>
        
        {/* Image Section */}
        <div className="flex flex-col h-4/5 sm:w-2/5 w-full items-center justify-center p-2">
          <img
            src="" 
            alt="Contact"
            className="w-full h-full object-cover rounded"
          />
        </div>
      </div></div>
    </div>
  );
};

export default ContactForm;
