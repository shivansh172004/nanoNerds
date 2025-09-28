// components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Zap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const { darkMode } = useSelector(state => state.theme);

  const quickLinks = [
    { path: '/about', label: 'About Us' },
    { path: '/resources', label: 'Resources' },
    { path: '/blog', label: 'Blog' },
    { path: '/quiz', label: 'Quiz' },
    { path: '/team', label: 'Team' }
  ];

  const resources = [
    { path: '/gate-preparation', label: 'GATE Preparation' },
    { path: '/vlsi-resources', label: 'VLSI Resources' },
    { path: '/embedded-systems', label: 'Embedded Systems' },
    { path: '/electronics-basics', label: 'Electronics Basics' },
    { path: '/project-ideas', label: 'Project Ideas' }
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/nanonerds', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/nanonerds', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/nanonerds', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com/company/nanonerds', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/nanonerds', label: 'GitHub' }
  ];

  return (
    <footer className={`border-t ${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-gray-50 border-gray-200'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Club Info */}
            <div className="col-span-1 lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Zap className="h-8 w-8 text-blue-600" />
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Nano-Nerds
                </span>
              </div>
              <p className={`text-sm mb-6 max-w-md ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                An electronics club dedicated to fostering innovation in VLSI design, embedded systems, 
                and hardware development. Join us to explore the cutting-edge world of electronics engineering.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <MapPin className={`h-4 w-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                  <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Electronics Dept, Engineering College, Campus
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className={`h-4 w-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                  <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    contact@nanonerds.club
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className={`h-4 w-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                  <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    +91 (0)161 123-4567
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className={`text-sm font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Quick Links
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className={`text-sm transition-colors duration-200 hover:text-blue-600 ${
                        darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className={`text-sm font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Resources
              </h3>
              <ul className="space-y-2">
                {resources.map((resource) => (
                  <li key={resource.path}>
                    <Link
                      to={resource.path}
                      className={`text-sm transition-colors duration-200 hover:text-blue-600 ${
                        darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
                      }`}
                    >
                      {resource.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <div className="flex space-x-6 mb-4 sm:mb-0">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`transition-colors duration-200 hover:text-blue-600 ${
                        darkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-500 hover:text-blue-600'
                      }`}
                      aria-label={social.label}
                    >
                      <IconComponent className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
              
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                © {new Date().getFullYear()} Nano-Nerds Electronics Club. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;