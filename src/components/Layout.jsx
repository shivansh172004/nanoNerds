// components/Layout.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  const { darkMode } = useSelector(state => state.theme);

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;