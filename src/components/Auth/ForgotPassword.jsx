import React, { useState } from 'react';
import logo from '../../assets/ethiopost_logo.jfif';
import { Link } from 'react-router-dom';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-3xl p-8 bg-white rounded-lg shadow-md">
        {/* Logo */}
        <div className="flex justify-center mb-8">
         <Link to="/">
          <img src={logo} alt="Logo" className="w-28 h-28 object-cover" />
         </Link>
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Forgot Password?</h2>
        <p className="text-center text-gray-500 mb-6">Enter your email to reset your password.</p>

        {/* Forgot Password Form */}
        <form className="space-y-4">
          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              placeholder="example@mail.com"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-300 ease-in-out"
              disabled={!email}
            >
              Send Reset Link
            </button>
          </div>
        </form>

        {/* Footer Text */}
        <div className="text-center text-sm text-gray-500 mt-6">
          Remembered your password?{' '}
          <a href="/login" className="text-indigo-600 hover:underline">
            Log In
          </a>
        </div>
      </div>
    </div>
  );
}

