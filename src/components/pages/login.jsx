import React, { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="relative flex items-center bg-gray-900 justify-center min-h-screen">
      {/* Radial Gradient Background */}
      <div
        className="absolute inset-0 top-0 right-0 blur-3xl z-[0]"
        style={{
          background:
            "radial-gradient(circle, rgba(23,20,27,1) 0%, rgba(58,94,121,1) 66%, rgba(42,58,78,1) 90%)",
        }}
      />
      {/* Login Form Container */}
      <div className="relative w-full max-w-md bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-6 z-10">
        {/* Logo Section */}
        <div className="flex justify-center mb-4">
          <img
            src="./contactus/image1.jpg"
            alt="Company Logo"
            className="h-16 w-16 rounded-full"
          />
        </div>
        <h2 className="text-4xl font-semibold text-center text-black text-bold mb-4">
          Login
        </h2>
        <form>
          {/* Email Field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="mt-1 block w-full px-4 py-2 border-none bg-gray-800 text-white rounded-lg shadow-neumorphism focus:ring focus:ring-blue-300 focus:outline-none focus:ring-offset-gray-900"
            />
          </div>
          {/* Password Field */}
          <div className="mb-4 relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter your password"
              className="mt-1 block w-full px-4 py-2 border-none bg-gray-800 text-white rounded-lg shadow-neumorphism focus:ring focus:ring-blue-300 focus:outline-none focus:ring-offset-gray-900"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-9 text-gray-500 hover:text-gray-300 focus:outline-none"
            >
              {showPassword ? <IoMdEyeOff size={20} /> : <IoMdEye size={20} />}
            </button>
          </div>
          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Login
            </button>
          </div>
        </form>
        {/* Footer */}
        <p className="mt-4 text-sm text-center text-black text-bold">
          Don’t have an account?{" "}
          <a href="#" className="text-blue-500 hover:underline text-bold">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
