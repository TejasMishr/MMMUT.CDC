import React, { useState } from 'react';
import API_BASE_URL from "../../config/apiConfig";
import { useNavigate } from 'react-router-dom';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    role: 'User',
    college: '',
    customCollege: '',
    universityRollNo: '',
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);
  const [otp, setOtp] = useState('');
  const [otpError, setOtpError] = useState('');
  const [showOtpPopup, setShowOtpPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // New loading state
  const navigate = useNavigate();

  const colleges = ['MMMUT', 'ITM', 'BIT', 'KIPM', 'SUYANSH', 'Other'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmailError(/\S+@\S+\.\S+/.test(value) ? '' : 'Invalid email format');
    }

    if (name === 'password') {
      setPasswordError(value.length >= 8 ? '' : 'Password must be at least 8 characters');
    }
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
    const { firstName, phone, universityRollNo } = formData;

    if (firstName.length < 2) {
      setError('First name must be at least 2 characters');
      return false;
    }
    if (phone && !/^\d{10}$/.test(phone)) {
      setError('Phone number must be 10 digits');
      return false;
    }
    // if (universityRollNo && !/^\d+$/.test(universityRollNo)) {
    //   setError('University Roll Number must be numeric');
    //   return false;
    // }
    if (emailError || passwordError || !emailVerified) {
      setError('Please fix validation errors and verify your email before submitting');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);
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

      const responseBody = await response.text();

      if (!response.ok) {
        let errorMessage = 'Registration failed';
        try {
          const errorData = JSON.parse(responseBody);
          errorMessage = errorData.message || errorMessage;
        } catch {
          if (responseBody.includes('Email')) {
            errorMessage = 'Email is already registered';
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
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  const verifyEmail = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/verify-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: formData.email }),
      });

      const responseBody = await response.text();

      if (!response.ok) {
        throw new Error(responseBody || 'Failed to send verification email');
      }

      setMessage('Verification email sent! Please check your inbox.');
      setShowOtpPopup(true);
    } catch (err) {
      setMessage('');
      setError(err.message || 'Failed to send verification email');
    }
  };

  const handleOtpSubmit = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/verify-otp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: formData.email, otp }),
      });

      const responseBody = await response.text();

      if (!response.ok) {
        throw new Error(responseBody || 'Invalid OTP');
      }

      setEmailVerified(true);
      setShowOtpPopup(false);
      setMessage('Email verified successfully!');
    } catch (err) {
      setError(err.message || 'Failed to verify OTP');
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
          <div className="flex items-center">
            <div className="w-1/2">
              <label className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="email@gmail.com"
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-md"
                required
              />
              {emailError && <p className="text-red-500">{emailError}</p>}
            </div>
            <button
              type="button"
              onClick={verifyEmail}
              className="ml-4 text-lg bg-blue-600 text-white px-4 py-2 rounded-md"
            >
              Verify Email
            </button>
          </div>
          {message && <p className="text-green-500">{message}</p>}
         
          <div>
            <label className="block text-gray-300 mb-2">Password</label>
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
            {passwordError && <p className="text-red-500">{passwordError}</p>}
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
          <button
            type="submit"
            disabled={isLoading} // Disable the button while loading
            className={`w-full text-lg py-2 rounded-md ${isLoading ? 'bg-gray-500' : 'bg-blue-600 hover:bg-blue-700'} text-white`}
          >
            {isLoading ? 'LOADING...' : 'Register'}
          </button>
        </form>
      </div>

      {/* OTP Popup Modal */}
      {showOtpPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-xl mb-4">Enter OTP</h2>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              className="w-full px-4 py-2 mb-4 border rounded-md"
            />
           {error && <p className="text-red-500">{error}</p>}

            <button
              onClick={handleOtpSubmit}
              className="w-full py-2 text-lg bg-blue-600 text-white rounded-md"
            >
              Verify OTP
            </button>
            <button
  onClick={() => setShowOtpPopup(false)}
  className="py-2 px-4 text-lg bg-gray-400 hover:bg-gray-500 text-white rounded-md"
>
  Close
</button>

          </div>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;