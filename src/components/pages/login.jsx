import React, { useState } from 'react';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import API_BASE_URL from "../../config/apiConfig";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState(''); 
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    setIsLoading(true); // Start loading state
    try {
      const response = await fetch(
        `${API_BASE_URL}/api/auth/login`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to login');
      }

      const data = await response.json();
      localStorage.setItem('user', JSON.stringify(data)); // Save user data in localStorage

      setMessage('Login successful!');
      setError('');
      setFormData({ email: '', password: '' });

      // Redirect to dashboard
      window.location.href = '/profile';
      
    } catch (err) {
      setMessage('');
      setError('Invalid Username or Password');
    }
    finally {
      setIsLoading(false); // Stop loading state
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
    <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-8">
      {/* <div className="flex justify-center mb-4">
        <img
          src="./contactus/CDC.png"
          alt="Company Logo"
          className="h-16 w-16 rounded-full"
        />
      </div> */}
      <h2 className="text-4xl font-bold text-center text-white mb-6">
        Login
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-300 mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-md"
            required
          />
        </div>

        <div className="relative">
          <label className="block text-gray-300 mb-2" htmlFor="password">
            Password
          </label>
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-md"
            required
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-10 text-gray-400"
          >
            {showPassword ? <IoMdEyeOff size={20} /> : <IoMdEye size={20} />}
          </button>
        </div>

        {message && <p className="text-green-500 text-center">{message}</p>}
        {error && <p className="text-red-500 text-center">{error}</p>}

        <div className="text-center text-gray-300">
          Don’t have an account?{' '}
          <a href="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </a>
        </div>

        <button
           type="submit"
            className={`w-full py-2 text-lg ${
              isLoading ? 'bg-gray-500' : 'bg-blue-600 hover:bg-blue-700'
            } text-white rounded-md`}
            disabled={isLoading}
        >
          {isLoading ? 'LOADING...' : 'Login'}
        </button>
      </form>
    </div>
  </div>

  );
};

export default LoginForm;