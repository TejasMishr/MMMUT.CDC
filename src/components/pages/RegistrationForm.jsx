import React, { useState } from 'react';
import API_BASE_URL from "../../config/apiConfig";
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    role: 'User',
    college: '',
    customCollege: '', // For user-provided college
    universityRollNo: '',
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const colleges = ['MMMUT', 'ITM', 'BIT', 'KIPM', 'SUYANSH', 'Other'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'college' && value !== 'Other') {
      setFormData((prev) => ({ ...prev, customCollege: '' }));
    }
  };

  const handleRoleChange = (e) => {
    setFormData({ ...formData, role: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const validateForm = () => {
    const { phone, universityRollNo } = formData;
    if (phone && !/^\d{10}$/.test(phone)) {
      setError('Phone number must be 10 digits');
      return false;
    }
    if (universityRollNo && !/^\d+$/.test(universityRollNo)) {
      setError('University Roll Number must be numeric');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          password: formData.password,
          role: formData.role,
          college: formData.college === 'Other' ? formData.customCollege : formData.college,
          universityRollNo: formData.universityRollNo,
        }),
      });

      // if (!response.ok) {
      //   const errorData = await response.json();
      //   throw new Error(errorData.message || 'Failed to register');
      // }
      const responseBody = await response.text(); // Read response as text first

      if (!response.ok) {
        let errorMessage = 'Failed to register'; // Default error message
        try {
          // Attempt to parse JSON from response
          const errorData = JSON.parse(responseBody);
          errorMessage = errorData.message || errorMessage;
        } catch {
          // If parsing fails, use plain text and check for specific errors
          if (responseBody.includes('Email')) {
            errorMessage = 'Email already exists';
          }
        }
        throw new Error(errorMessage);
      }
      setMessage('Registration successful! Redirecting to login...');
      setError('');
      setTimeout(() => navigate('/login'), 2000);

    } catch (err) {
      setMessage('');
      setError(err.message || 'Failed to register');
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center">
      <div className="w-full max-w-3xl p-8 mt-10 bg-gray-800 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-white text-center mb-6">Register Here</h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-gray-300 mb-2">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-md"
                required
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-300 mb-2">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-md"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md"
              required
            />
          </div>
          <div className="relative">
            <label className="block text-gray-300 mb-2">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-9 text-gray-400"
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">College</label>
            <select
              name="college"
              value={formData.college}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md"
            >
              <option value="">Select your college</option>
              {colleges.map((college) => (
                <option key={college} value={college}>
                  {college}
                </option>
              ))}
            </select>
          </div>
          {formData.college === 'Other' && (
            <div>
              <label className="block text-gray-300 mb-2">Custom College</label>
              <input
                type="text"
                name="customCollege"
                value={formData.customCollege}
                onChange={handleChange}
                placeholder="Enter your college"
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-md"
                required
              />
            </div>
          )}
          <div>
            <label className="block text-gray-300 mb-2">University Roll Number</label>
            <input
              type="text"
              name="universityRollNo"
              value={formData.universityRollNo}
              onChange={handleChange}
              placeholder="University Roll Number"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Role</label>
            <div className="flex space-x-4">
              <label className="flex items-center text-gray-300">
                <input
                  type="radio"
                  name="role"
                  value="User"
                  checked={formData.role === 'User'}
                  onChange={handleRoleChange}
                  className="mr-2"
                />
                User
              </label>
              <label className="flex items-center text-gray-300">
                <input
                  type="radio"
                  name="role"
                  value="Team Leader"
                  checked={formData.role === 'Team Leader'}
                  onChange={handleRoleChange}
                  className="mr-2"
                />
                Team Leader
              </label>
            </div>
          </div>
          {message && <p className="text-green-500">{message}</p>}
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
