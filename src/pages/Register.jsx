// pages/Register.jsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addRegistration } from '../features/members/members.js';
import { 
  User, 
  Mail, 
  Phone, 
  GraduationCap, 
  Calendar, 
  UserPlus,
  CheckCircle,
  AlertCircle,
  Zap
} from 'lucide-react';

const Register = () => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector(state => state.theme);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rollNumber: '',
    year: '',
    branch: '',
    phone: '',
    interests: [],
    motivation: '',
    previousExperience: '',
    expectations: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const interestOptions = [
    'VLSI Design',
    'Embedded Systems',
    'Digital Signal Processing',
    'Microprocessors',
    'IoT (Internet of Things)',
    'PCB Design',
    'Analog Electronics',
    'Power Electronics',
    'Communication Systems',
    'Control Systems',
    'Machine Learning in ECE',
    'Robotics',
    'Semiconductor Devices',
    'RF and Microwave Engineering'
  ];

  const yearOptions = ['1st Year', '2nd Year', '3rd Year', '4th Year', 'M.Tech 1st Year', 'M.Tech 2nd Year'];
  const branchOptions = ['ECE', 'EEE', 'CSE', 'IT', 'ME', 'CE', 'Other'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleInterestChange = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.rollNumber.trim()) {
      newErrors.rollNumber = 'Roll number is required';
    }

    if (!formData.year) {
      newErrors.year = 'Please select your year';
    }

    if (!formData.branch) {
      newErrors.branch = 'Please select your branch';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[+]?[\d\s-()]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (formData.interests.length === 0) {
      newErrors.interests = 'Please select at least one area of interest';
    }

    if (!formData.motivation.trim()) {
      newErrors.motivation = 'Please tell us why you want to join';
    } else if (formData.motivation.trim().length < 50) {
      newErrors.motivation = 'Please provide at least 50 characters';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      const registrationData = {
        id: Date.now(),
        ...formData,
        status: 'pending',
        appliedDate: new Date().toISOString().split('T')[0]
      };
      
      dispatch(addRegistration(registrationData));
      setIsSubmitted(true);
      setIsSubmitting(false);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center p-12 rounded-xl ${
            darkMode ? 'bg-gray-800' : 'bg-white shadow-lg'
          }`}>
            <div className="flex justify-center mb-6">
              <CheckCircle className="h-20 w-20 text-green-600" />
            </div>
            <h1 className={`text-3xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Registration Submitted!
            </h1>
            <p className={`text-lg mb-6 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Thank you for your interest in joining Nano-Nerds Electronics Club. 
              We have received your application and will review it shortly.
            </p>
            <div className={`p-4 rounded-lg mb-6 ${
              darkMode ? 'bg-blue-900 bg-opacity-50' : 'bg-blue-50'
            }`}>
              <h3 className={`font-semibold mb-2 ${
                darkMode ? 'text-blue-300' : 'text-blue-800'
              }`}>
                What's Next?
              </h3>
              <ul className={`text-left text-sm space-y-1 ${
                darkMode ? 'text-blue-200' : 'text-blue-700'
              }`}>
                <li>• Our team will review your application within 3-5 business days</li>
                <li>• You'll receive an email confirmation with further details</li>
                <li>• If selected, you'll be invited to an orientation session</li>
                <li>• Check your email regularly for updates</li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.href = '/'}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
              >
                Back to Home
              </button>
              <button
                onClick={() => window.location.href = '/blog'}
                className={`px-6 py-3 rounded-lg font-medium border transition-all duration-200 ${
                  darkMode 
                    ? 'border-gray-600 text-gray-300 hover:bg-gray-700' 
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                Read Our Blog
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Zap className="h-16 w-16 text-blue-600" />
              <UserPlus className="h-8 w-8 text-purple-600 absolute -bottom-1 -right-1" />
            </div>
          </div>
          <h1 className={`text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Join Nano-Nerds
          </h1>
          <p className={`text-xl max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Ready to dive into the world of electronics? Fill out the form below to become part of our innovative community.
          </p>
        </div>

        {/* Registration Form */}
        <div className={`p-8 rounded-xl ${
          darkMode ? 'bg-gray-800' : 'bg-white shadow-lg'
        }`}>
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div>
              <h2 className={`text-2xl font-semibold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Personal Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    <User className="inline h-4 w-4 mr-2" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 ${
                      errors.name
                        ? 'border-red-500 focus:border-red-500'
                        : darkMode
                        ? 'border-gray-600 bg-gray-700 text-white focus:border-blue-500'
                        : 'border-gray-300 focus:border-blue-500'
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    <Mail className="inline h-4 w-4 mr-2" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 ${
                      errors.email
                        ? 'border-red-500 focus:border-red-500'
                        : darkMode
                        ? 'border-gray-600 bg-gray-700 text-white focus:border-blue-500'
                        : 'border-gray-300 focus:border-blue-500'
                    }`}
                    placeholder="Enter your email address"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    <GraduationCap className="inline h-4 w-4 mr-2" />
                    Roll Number *
                  </label>
                  <input
                    type="text"
                    name="rollNumber"
                    value={formData.rollNumber}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 ${
                      errors.rollNumber
                        ? 'border-red-500 focus:border-red-500'
                        : darkMode
                        ? 'border-gray-600 bg-gray-700 text-white focus:border-blue-500'
                        : 'border-gray-300 focus:border-blue-500'
                    }`}
                    placeholder="e.g., 21ECE001"
                  />
                  {errors.rollNumber && (
                    <p className="mt-1 text-sm text-red-500 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.rollNumber}
                    </p>
                  )}
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    <Phone className="inline h-4 w-4 mr-2" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 ${
                      errors.phone
                        ? 'border-red-500 focus:border-red-500'
                        : darkMode
                        ? 'border-gray-600 bg-gray-700 text-white focus:border-blue-500'
                        : 'border-gray-300 focus:border-blue-500'
                    }`}
                    placeholder="+91-9876543210"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    <Calendar className="inline h-4 w-4 mr-2" />
                    Year of Study *
                  </label>
                  <select
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 ${
                      errors.year
                        ? 'border-red-500 focus:border-red-500'
                        : darkMode
                        ? 'border-gray-600 bg-gray-700 text-white focus:border-blue-500'
                        : 'border-gray-300 focus:border-blue-500'
                    }`}
                  >
                    <option value="">Select your year</option>
                    {yearOptions.map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                  {errors.year && (
                    <p className="mt-1 text-sm text-red-500 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.year}
                    </p>
                  )}
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    <GraduationCap className="inline h-4 w-4 mr-2" />
                    Branch *
                  </label>
                  <select
                    name="branch"
                    value={formData.branch}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 ${
                      errors.branch
                        ? 'border-red-500 focus:border-red-500'
                        : darkMode
                        ? 'border-gray-600 bg-gray-700 text-white focus:border-blue-500'
                        : 'border-gray-300 focus:border-blue-500'
                    }`}
                  >
                    <option value="">Select your branch</option>
                    {branchOptions.map(branch => (
                      <option key={branch} value={branch}>{branch}</option>
                    ))}
                  </select>
                  {errors.branch && (
                    <p className="mt-1 text-sm text-red-500 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.branch}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Areas of Interest */}
            <div>
              <h2 className={`text-2xl font-semibold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Areas of Interest *
              </h2>
              <p className={`mb-4 text-sm ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Select all areas that interest you (minimum 1 required)
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {interestOptions.map(interest => (
                  <label key={interest} className={`flex items-center p-3 rounded-lg border cursor-pointer transition-all duration-200 ${
                    formData.interests.includes(interest)
                      ? 'border-blue-500 bg-blue-50 text-blue-800'
                      : darkMode
                      ? 'border-gray-600 bg-gray-700 text-gray-300 hover:border-gray-500'
                      : 'border-gray-300 bg-gray-50 text-gray-700 hover:border-gray-400'
                  }`}>
                    <input
                      type="checkbox"
                      checked={formData.interests.includes(interest)}
                      onChange={() => handleInterestChange(interest)}
                      className="sr-only"
                    />
                    <div className={`flex-shrink-0 w-4 h-4 rounded border mr-3 flex items-center justify-center ${
                      formData.interests.includes(interest)
                        ? 'bg-blue-600 border-blue-600'
                        : darkMode
                        ? 'border-gray-500'
                        : 'border-gray-400'
                    }`}>
                      {formData.interests.includes(interest) && (
                        <CheckCircle className="h-3 w-3 text-white" />
                      )}
                    </div>
                    <span className="text-sm font-medium">{interest}</span>
                  </label>
                ))}
              </div>
              {errors.interests && (
                <p className="mt-2 text-sm text-red-500 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.interests}
                </p>
              )}
            </div>

            {/* Motivation and Experience */}
            <div className="space-y-6">
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Why do you want to join Nano-Nerds? *
                </label>
                <textarea
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 ${
                    errors.motivation
                      ? 'border-red-500 focus:border-red-500'
                      : darkMode
                      ? 'border-gray-600 bg-gray-700 text-white focus:border-blue-500'
                      : 'border-gray-300 focus:border-blue-500'
                  }`}
                  placeholder="Tell us about your interest in electronics, what you hope to learn, and how you plan to contribute to the club... (minimum 50 characters)"
                />
                <div className="flex justify-between items-center mt-1">
                  {errors.motivation && (
                    <p className="text-sm text-red-500 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.motivation}
                    </p>
                  )}
                  <p className={`text-sm ml-auto ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {formData.motivation.length}/500
                  </p>
                </div>
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Previous Experience (Optional)
                </label>
                <textarea
                  name="previousExperience"
                  value={formData.previousExperience}
                  onChange={handleChange}
                  rows={3}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 ${
                    darkMode
                      ? 'border-gray-600 bg-gray-700 text-white focus:border-blue-500'
                      : 'border-gray-300 focus:border-blue-500'
                  }`}
                  placeholder="Any previous projects, internships, or relevant experience in electronics..."
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  What do you expect from the club? (Optional)
                </label>
                <textarea
                  name="expectations"
                  value={formData.expectations}
                  onChange={handleChange}
                  rows={3}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 ${
                    darkMode
                      ? 'border-gray-600 bg-gray-700 text-white focus:border-blue-500'
                      : 'border-gray-300 focus:border-blue-500'
                  }`}
                  placeholder="Learning opportunities, networking, skill development, project collaboration..."
                />
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className={`p-6 rounded-lg ${
              darkMode ? 'bg-gray-700' : 'bg-gray-50'
            }`}>
              <h3 className={`text-lg font-semibold mb-3 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Terms and Conditions
              </h3>
              <ul className={`text-sm space-y-2 mb-4 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                <li>• Regular participation in club activities and meetings is expected</li>
                <li>• Members are required to maintain good academic standing</li>
                <li>• Respect for fellow members and club property is mandatory</li>
                <li>• Club membership is subject to annual renewal</li>
                <li>• Members may be required to contribute to club projects and events</li>
              </ul>
              <p className={`text-sm ${
                darkMode ? 'text-gray-400' : 'text-gray-500'
              }`}>
                By submitting this form, you agree to abide by the club's rules and regulations.
              </p>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed text-gray-200'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transform hover:scale-105'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"></div>
                    Submitting...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <UserPlus className="h-5 w-5 mr-2" />
                    Submit Application
                  </div>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;