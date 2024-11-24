import React from 'react';

const lForm = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center">
    <div className='flex flex-col justify-evenly items-center h-auto w-full p-2'>
  <h1 className="text-white text-4xl font-extrabold text-center mt-4 mb-6">REGISTER HERE</h1>
  <div className="flex flex-col sm:flex-row justify-evenly items-center w-3/4 h-auto p-3">
   {/*fORM*/}
        <form className="space-y-6">
          {/* Name Field */}
          {/* <div className="flex items-center space-x-4">
            <label className="text-gray-300 w-1/4">NAME:</label>
            <div className="flex gap-4 w-3/4">
              <input
                type="text"
                placeholder="First Name"
                className="w-1/2 px-3 py-2 border border-gray-600 bg-transparent rounded-md text-white focus:outline-none focus:border-blue-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-1/2 px-3 py-2 border border-gray-600 bg-transparent rounded-md text-white focus:outline-none focus:border-blue-500"
              />
            </div>
          </div> */}

          {/* Email Field */}
          <div className="flex items-center space-x-4">
            <label className="text-gray-300 w-1/4">EMAIL:</label>
            <input
              type="email"
              placeholder="Email"
              className="w-3/4 px-3 py-2 border border-gray-600 bg-transparent rounded-md text-white focus:outline-none focus:border-blue-500"
            />
          </div>
          
          {/* Phone Number Field */}
          <div className="flex items-center space-x-4">
            <label className="text-gray-300 w-1/4">PASSWORD</label>
            <input
              type="password"
              placeholder="Password"
              className="w-3/4 px-3 py-2 border border-gray-600 bg-transparent rounded-md text-white focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* College Name Field */}
          {/* <div className="flex items-center space-x-4">
            <label className="text-gray-300 w-1/4">COLLEGE NAME:</label>
            <input
              type="text"
              placeholder="College Name"
              className="w-3/4 px-3 py-2 border border-gray-600 bg-transparent rounded-md text-white focus:outline-none focus:border-blue-500"
            />
          </div> */}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 mt-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default lForm;
