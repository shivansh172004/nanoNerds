// // components/Footer.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { Zap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

// const Footer = () => {
//   const { darkMode } = useSelector(state => state.theme);

//   const quickLinks = [
//     { path: '/about', label: 'About Us' },
//     { path: '/resources', label: 'Resources' },
//     { path: '/blog', label: 'Blog' },
//     { path: '/quiz', label: 'Quiz' },
//     { path: '/team', label: 'Team' }
//   ];

//   const resources = [
//     { path: '/gate-preparation', label: 'GATE Preparation' },
//     { path: '/vlsi-resources', label: 'VLSI Resources' },
//     { path: '/embedded-systems', label: 'Embedded Systems' },
//     { path: '/electronics-basics', label: 'Electronics Basics' },
//     { path: '/project-ideas', label: 'Project Ideas' }
//   ];

//   const socialLinks = [
//     { icon: Facebook, href: 'https://facebook.com/nanonerds', label: 'Facebook' },
//     { icon: Twitter, href: 'https://twitter.com/nanonerds', label: 'Twitter' },
//     { icon: Instagram, href: 'https://instagram.com/nanonerds', label: 'Instagram' },
//     { icon: Linkedin, href: 'https://linkedin.com/company/nanonerds', label: 'LinkedIn' },
//     { icon: Github, href: 'https://github.com/nanonerds', label: 'GitHub' }
//   ];

//   return (
//     <footer className={`border-t ${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-gray-50 border-gray-200'} transition-colors duration-300`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="py-12">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {/* Club Info */}
//             <div className="col-span-1 lg:col-span-2">
//               <div className="flex items-center space-x-2 mb-4">
//                 <Zap className="h-8 w-8 text-blue-600" />
//                 <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                   Nano-Nerds
//                 </span>
//               </div>
//               <p className={`text-sm mb-6 max-w-md ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
//                 An electronics club dedicated to fostering innovation in VLSI design, embedded systems, 
//                 and hardware development. Join us to explore the cutting-edge world of electronics engineering.
//               </p>
              
//               {/* Contact Info */}
//               <div className="space-y-2">
//                 <div className="flex items-center space-x-3">
//                   <MapPin className={`h-4 w-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
//                   <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
//                     Electronics Dept, Engineering College, Campus
//                   </span>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <Mail className={`h-4 w-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
//                   <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
//                     contact@nanonerds.club
//                   </span>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <Phone className={`h-4 w-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
//                   <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
//                     +91 (0)161 123-4567
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* Quick Links */}
//             <div>
//               <h3 className={`text-sm font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
//                 Quick Links
//               </h3>
//               <ul className="space-y-2">
//                 {quickLinks.map((link) => (
//                   <li key={link.path}>
//                     <Link
//                       to={link.path}
//                       className={`text-sm transition-colors duration-200 hover:text-blue-600 ${
//                         darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
//                       }`}
//                     >
//                       {link.label}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Resources */}
//             <div>
//               <h3 className={`text-sm font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
//                 Resources
//               </h3>
//               <ul className="space-y-2">
//                 {resources.map((resource) => (
//                   <li key={resource.path}>
//                     <Link
//                       to={resource.path}
//                       className={`text-sm transition-colors duration-200 hover:text-blue-600 ${
//                         darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
//                       }`}
//                     >
//                       {resource.label}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           {/* Social Links */}
//           <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
//             <div className="flex flex-col sm:flex-row justify-between items-center">
//               <div className="flex space-x-6 mb-4 sm:mb-0">
//                 {socialLinks.map((social) => {
//                   const IconComponent = social.icon;
//                   return (
//                     <a
//                       key={social.label}
//                       href={social.href}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className={`transition-colors duration-200 hover:text-blue-600 ${
//                         darkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-500 hover:text-blue-600'
//                       }`}
//                       aria-label={social.label}
//                     >
//                       <IconComponent className="h-5 w-5" />
//                     </a>
//                   );
//                 })}
//               </div>
              
//               <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
//                 © {new Date().getFullYear()} Nano-Nerds Electronics Club. All rights reserved.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// import React from "react";
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import {
//   Zap,
//   Mail,
//   Phone,
//   MapPin,
//   Facebook,
//   Twitter,
//   Instagram,
//   Linkedin,
//   Github,
// } from "lucide-react";

// const Footer = () => {
//   const { darkMode } = useSelector((state) => state.theme);

//   const quickLinks = [
//     { path: "/about", label: "About Us" },
//     { path: "/resources", label: "Resources" },
//     // { path: "/blog", label: "Blog" },
//     { path: "/quiz", label: "Quiz" },
//     { path: "/team", label: "Team" },
//   ];

//   const resources = [
//     { path: "/gate-preparation", label: "GATE Preparation" },
//     { path: "/vlsi-resources", label: "VLSI Resources" },
//     { path: "/embedded-systems", label: "Embedded Systems" },
//     { path: "/electronics-basics", label: "Electronics Basics" },
//     { path: "/project-ideas", label: "Project Ideas" },
//   ];

//   const socialLinks = [
//     {
//       icon: Facebook,
//       href: "https://facebook.com/nanonerds",
//       label: "Facebook",
//     },
//     { icon: Twitter, href: "https://twitter.com/nanonerds", label: "Twitter" },
//     {
//       icon: Instagram,
//       href: "https://www.instagram.com/nanonerds_sliet?igsh=MTliYmsxamMyNHphbg==",
//       label: "Instagram",
//     },
//     {
//       icon: Linkedin,
//       href: "https://www.linkedin.com/company/nano-nerds/",
//       label: "LinkedIn",
//     },
//     { icon: Github, href: "https://github.com/nanonerds", label: "GitHub" },
//   ];

//   return (
//   <footer className={`${darkMode ? "bg-gray-900 text-gray-300" : "bg-white text-gray-700"} border-t dark:border-gray-700`}>
//   <div className="max-w-7xl mx-auto px-6 py-12">

//     {/* Top Grid */}
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">

//       {/* About */}
//       <div>
//         <div className="flex justify-center md:justify-start items-center gap-2 mb-4">
//           <Zap className="text-blue-600" />
//           <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
//             Nano-Nerds
//           </h3>
//         </div>

//         <p className="text-sm leading-relaxed">
//           An electronics club dedicated to fostering innovation in VLSI design,
//           embedded systems, and hardware development.
//         </p>

//         {/* Contact */}
//         <div className="mt-4 space-y-2 text-sm">
//           <p>📍 Electronics Dept, Engineering College</p>
//           <p>✉️ contact@nanonerds.club</p>
//           <p>📞 +91 86409 05340</p>
//         </div>
//       </div>

//       {/* Quick Links */}
//       <div>
//         <h4 className="text-lg font-semibold mb-4 text-blue-600 dark:text-blue-400">
//           Quick Links
//         </h4>
//         <ul className="space-y-2 text-sm">
//           {["About", "Resources", "Quiz", "Team", "Contact"].map((item) => (
//             <li key={item}>
//               <a href={`/${item.toLowerCase()}`} className="hover:text-blue-500">
//                 {item}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Resources */}
//       <div>
//         <h4 className="text-lg font-semibold mb-4 text-blue-600 dark:text-blue-400">
//           Resources
//         </h4>
//         <ul className="space-y-2 text-sm">
//           {[
//             "GATE Preparation",
//             "VLSI Resources",
//             "Embedded Systems",
//             "Electronics Basics",
//             "Project Ideas",
//           ].map((res) => (
//             <li key={res} className="hover:text-blue-500 cursor-pointer">
//               {res}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>

//     {/* Social Icons */}
//     <div className="mt-10 flex justify-center gap-6 text-xl">
//       <a className="hover:text-blue-600 transition">🌐</a>
//       <a className="hover:text-blue-600 transition">🐦</a>
//       <a className="hover:text-blue-600 transition">📸</a>
//       <a className="hover:text-blue-600 transition">💼</a>
//     </div>

//     {/* Bottom */}
//     <div className="mt-6 text-center text-sm text-gray-500">
//       © 2026 Nano-Nerds Electronics Club. All rights reserved.
//     </div>

//   </div>
// </footer>

//   );
// };

// export default Footer;



import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Zap, Code, Heart, ExternalLink } from "lucide-react";

const Footer = () => {
  const { darkMode } = useSelector((state) => state.theme);

  const quickLinks = [
    { path: "/about", label: "About Us" },
    { path: "/resources", label: "Resources" },
    { path: "/quiz", label: "Quiz" },
    { path: "/team", label: "Team" },
    { path: "/contact", label: "Contact" },
  ];

  const resources = [
    { path: "/gate-preparation", label: "GATE Preparation" },
    { path: "/vlsi-resources", label: "VLSI Resources" },
    { path: "/embedded-systems", label: "Embedded Systems" },
    { path: "/electronics-basics", label: "Electronics Basics" },
    { path: "/project-ideas", label: "Project Ideas" },
  ];

  const socialLinks = [
    { emoji: "🌐", label: "Website", href: "#" },
    { emoji: "🐦", label: "Twitter", href: "/" },
    {
      emoji: "📸",
      label: "Instagram",
      href: "https://www.instagram.com/nanonerds_sliet?igsh=MTliYmsxamMyNHphbg==",
    },
    {
      emoji: "💼",
      label: "LinkedIn",
      href: "/",
    },
    { emoji: "💻", label: "GitHub", href: "https://github.com/shivansh172004/nanoNerds" },
  ];

  return (
    <footer
      className={`${
        darkMode ? "bg-gray-900 text-gray-300" : "bg-white text-gray-700"
      } border-t dark:border-gray-700`}
    >
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center sm:text-left">
          {/* About */}
          <div>
            <div className="flex justify-center sm:justify-start items-center gap-2 mb-4">
              <Zap className="text-blue-600" />
              <h3
                className={`text-lg font-semibold ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Nano-Nerds
              </h3>
            </div>
            <p className="text-sm leading-relaxed">
              An electronics club dedicated to fostering innovation in VLSI
              design, embedded systems, and hardware development.
            </p>
            <div className="mt-4 space-y-2 text-sm">
              <p>📍 Electronics Dept, Engineering College</p>
              <p>✉️ contact@nanonerds.club</p>
              <p>📞 +91 86409 05340</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-600 dark:text-blue-400">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="hover:text-blue-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-600 dark:text-blue-400">
              Resources
            </h4>
            <ul className="space-y-2 text-sm">
              {resources.map((res) => (
                <li key={res.label}>
                  <Link
                    to={res.path}
                    className="hover:text-blue-500 transition-colors"
                  >
                    {res.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="mt-10 flex justify-center gap-6 text-2xl">
          {socialLinks.map((social, idx) => (
            <a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              title={social.label}
              className="hover:text-blue-600 transition-all transform hover:scale-110"
            >
              {social.emoji}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-8 mb-6 border-t border-gray-200 dark:border-gray-700"></div>

        {/* Bottom Section */}
        <div className="space-y-4">
          <div className="text-center text-sm text-gray-500 dark:text-gray-400">
            © 2026 Nano-Nerds Electronics Club. All rights reserved.
          </div>

          {/* Developer Credit Badge */}
          <div className="flex justify-center">
            <a
              href="https://github.com/shivansh172004"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-6 py-3 rounded-full bg-linear-to-r from-purple-600 via-blue-600 to-cyan-600 text-white font-medium text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 pointer-events-none rounded-full bg-linear-to-r from-purple-600 via-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>

              {/* Content */}
              <div className="relative flex items-center gap-3">
                <Code className="w-5 h-5 animate-pulse" />
                <div className="flex flex-col items-start">
                  <span className="text-xs uppercase tracking-wider opacity-90">
                    Crafted with
                  </span>
                  <div className="flex items-center gap-1">
                    <Heart className="w-3 h-3 fill-current" />
                    <span className="font-semibold">by Shivansh Sharma</span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
