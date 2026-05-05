// pages/Contact.jsx
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { contactService } from '../api/services';


import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle,
  AlertCircle,
  Clock,
  MessageSquare
} from 'lucide-react';


const Contact = () => {
  const { darkMode } = useSelector(state => state.theme);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['Electronics Department', 'Engineering College', 'Campus, City - 141001']
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 8640905340', '+91-6283499305']
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['contact@nanonerds.club', 'info@nanonerds.club']
    },
    // {
    //   icon: Clock,
    //   title: 'Office Hours',
    //   details: ['Monday - Friday: 9:00 AM - 5:00 PM', 'Saturday: 10:00 AM - 2:00 PM']
    // }
  ];

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
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = 'Subject must be at least 5 characters';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Message must be at least 20 characters';
    }

    return newErrors;
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      await contactService.submitContact(formData);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitError(error.response?.data?.message || 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
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
              Message Sent Successfully!
            </h1>
            <p className={`text-lg mb-6 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Thank you for contacting Nano-Nerds. We'll get back to you within 24-48 hours.
            </p>
            <button
              onClick={() => setSubmitSuccess(false)}
              className="bg-linear-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <MessageSquare className="h-16 w-16 text-blue-600" />
          </div>
          <h1 className={`text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Get In Touch
          </h1>
          <p className={`text-xl max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div key={index} className={`p-6 rounded-xl ${
                  darkMode ? 'bg-gray-800' : 'bg-white shadow-lg'
                }`}>
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${
                    darkMode ? 'bg-blue-900 text-blue-400' : 'bg-blue-100 text-blue-600'
                  }`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className={`text-lg font-semibold mb-3 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {info.title}
                  </h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className={`text-sm ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {detail}
                    </p>
                  ))}
                </div>
              );
            })}

            {/* Social Links */}
            <div className={`p-6 rounded-xl ${
              darkMode ? 'bg-gray-800' : 'bg-white shadow-lg'
            }`}>
              <h3 className={`text-lg font-semibold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Follow Us
              </h3>
              <div className="flex gap-4">
                {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                  <a
                    key={social}
                    href={`https://${social}.com/nanonerds`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-200 ${
                      darkMode 
                        ? 'bg-gray-700 text-gray-300 hover:bg-blue-600 hover:text-white' 
                        : 'bg-gray-100 text-gray-600 hover:bg-blue-600 hover:text-white'
                    }`}
                  >
                    {social[0].toUpperCase()}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`lg:col-span-2 p-8 rounded-xl ${
            darkMode ? 'bg-gray-800' : 'bg-white shadow-lg'
          }`}>
            <h2 className={`text-2xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Send us a Message
            </h2>

            {submitError && (
              <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 flex items-start">
                <AlertCircle className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                <span className="text-sm text-red-800">{submitError}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Your Name *
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
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Your Email *
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
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 ${
                    errors.subject
                      ? 'border-red-500 focus:border-red-500'
                      : darkMode
                      ? 'border-gray-600 bg-gray-700 text-white focus:border-blue-500'
                      : 'border-gray-300 focus:border-blue-500'
                  }`}
                  placeholder="How can we help you?"
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                )}
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 ${
                    errors.message
                      ? 'border-red-500 focus:border-red-500'
                      : darkMode
                      ? 'border-gray-600 bg-gray-700 text-white focus:border-blue-500'
                      : 'border-gray-300 focus:border-blue-500'
                  }`}
                  placeholder="Tell us more about your inquiry..."
                />
                <div className="flex justify-between items-center mt-1">
                  {errors.message ? (
                    <p className="text-sm text-red-500">{errors.message}</p>
                  ) : (
                    <span></span>
                  )}
                  <p className={`text-sm ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {formData.message.length}/500
                  </p>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed text-gray-200'
                    : 'bg-linear-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transform hover:scale-105'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Map Section (Optional) */}
        {/* <div className={`mt-12 p-8 rounded-xl ${
          darkMode ? 'bg-gray-800' : 'bg-white shadow-lg'
        }`}>
          {/* <h2 className={`text-2xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Find Us
          </h2> */}
          {/* <div className="aspect-video w-full rounded-lg overflow-hidden bg-gray-200"> */}
            {/* Replace with actual Google Maps embed */}
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3423.0!2d75.8573!3d30.9010!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDU0JzAzLjYiTiA3NcKwNTEnMjYuMyJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Location Map"
            ></iframe> */}
          {/* </div> */}
        {/* </div> */} 
      </div>
    </div>
  );
};



export default Contact;



// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import {
//   Mail,
//   Phone,
//   User,
//   Send,
//   CheckCircle,
//   AlertCircle,
//   Instagram,
//   Linkedin,
//   Twitter,
//   Facebook
// } from 'lucide-react';

// const Contact = () => {
//   const { darkMode } = useSelector(state => state.theme);

//   const [data, setData] = useState({ name: '', email: '', message: '' });
//   const [error, setError] = useState('');
//   const [sent, setSent] = useState(false);

//   const handleChange = e =>
//     setData({ ...data, [e.target.name]: e.target.value });

//   const handleSubmit = e => {
//     e.preventDefault();
//     if (data.name.length < 2 || data.message.length < 20)
//       return setError('Please fill all fields properly');

//     setError('');
//     setSent(true);
//     setData({ name: '', email: '', message: '' });
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center px-4">
//       <div
//         className={`w-full max-w-4xl grid md:grid-cols-2 rounded-2xl overflow-hidden
//         ${darkMode ? 'bg-gray-800' : 'bg-white shadow-xl'}`}
//       >
//         {/* LEFT PANEL */}
//         <div className="bg-linear-to-br from-blue-600 to-purple-600 p-8 text-white flex flex-col justify-between">
//           <div>
//             <h2 className="text-3xl font-bold mb-4">Let’s Connect 👋</h2>
//             <p className="text-sm opacity-90 mb-6">
//               Reach out for collaborations, events, or queries.
//             </p>

//             <p className="flex items-center gap-2 mb-3">
//               <Phone size={18} /> +91 6283499305
//             </p>
//             <p className="flex items-center gap-2 mb-6">
//               <Mail size={18} /> contact@nanonerds.club
//             </p>
//           </div>

//           {/* SOCIAL LINKS */}
//           <div>
//             <p className="text-sm mb-3 opacity-80">Follow us</p>
//             <div className="flex gap-3">
//               {[
//                 { icon: Instagram, link: 'https://instagram.com/nanonerds' },
//                 { icon: Linkedin, link: 'https://linkedin.com/company/nanonerds' },
//                 { icon: Twitter, link: 'https://twitter.com/nanonerds' },
//                 { icon: Facebook, link: 'https://facebook.com/nanonerds' }
//               ].map(({ icon: Icon, link }, i) => (
//                 <a
//                   key={i}
//                   href={link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center
//                   hover:bg-white hover:text-blue-600 transition-all duration-200 hover:scale-110"
//                 >
//                   <Icon size={18} />
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* RIGHT PANEL */}
//         <div className="p-8">
//           {sent ? (
//             <div className="text-center">
//               <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
//               <h3 className="text-2xl font-bold">Message Sent!</h3>
//               <p className="text-sm text-gray-500 mt-2">
//                 We’ll get back to you soon.
//               </p>
//               <button
//                 onClick={() => setSent(false)}
//                 className="mt-6 px-5 py-2 bg-blue-600 text-white rounded-lg"
//               >
//                 Send Another
//               </button>
//             </div>
//           ) : (
//             <form onSubmit={handleSubmit} className="space-y-5">
//               <h3 className="text-2xl font-bold mb-4">Contact Us</h3>

//               {error && (
//                 <div className="flex items-center text-red-600 text-sm">
//                   <AlertCircle size={16} className="mr-2" /> {error}
//                 </div>
//               )}

//               <div className="relative">
//                 <User className="absolute top-3 left-3 text-gray-400" size={18} />
//                 <input
//                   name="name"
//                   value={data.name}
//                   onChange={handleChange}
//                   placeholder="Your Name"
//                   className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               <div className="relative">
//                 <Mail className="absolute top-3 left-3 text-gray-400" size={18} />
//                 <input
//                   name="email"
//                   value={data.email}
//                   onChange={handleChange}
//                   placeholder="Your Email"
//                   className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               <textarea
//                 name="message"
//                 value={data.message}
//                 onChange={handleChange}
//                 rows="4"
//                 placeholder="Your Message (min 20 chars)"
//                 className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
//               />

//               <button
//                 type="submit"
//                 className="w-full py-3 rounded-lg font-semibold text-white
//                 bg-gradient-to-r from-blue-600 to-purple-600
//                 hover:scale-105 transition-transform flex items-center justify-center"
//               >
//                 <Send size={18} className="mr-2" /> Send Message
//               </button>
//             </form>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
