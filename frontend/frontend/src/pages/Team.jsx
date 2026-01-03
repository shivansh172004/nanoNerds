import React from 'react';
import { useSelector } from 'react-redux';
import { Mail, Linkedin, Github, Phone, Users } from 'lucide-react';

const Team = () => {
  const { darkMode } = useSelector(state => state.theme);
  const { members } = useSelector(state => state.team);

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Users className="h-16 w-16 text-blue-600" />
          </div>
          <h1 className={`text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Our Team
          </h1>
          <p className={`text-xl max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Meet the dedicated individuals driving innovation at Nano-Nerds
          </p>
        </div>

        Team Grid
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map(member => (
            <div key={member.id} className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
              darkMode ? 'bg-gray-800' : 'bg-white shadow-lg'
            }`}>
              <div className="text-center mb-4">
                <div className={`w-32 h-32 mx-auto rounded-full mb-4 flex items-center justify-center text-4xl font-bold ${
                  darkMode ? 'bg-blue-900 text-blue-400' : 'bg-blue-100 text-blue-600'
                }`}>
                  {member.name.charAt(0)}
                </div>
                <h3 className={`text-xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {member.name}
                </h3>
                <p className={`text-sm font-medium mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  {member.position}
                </p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {member.year}
                </p>
              </div>

              {member.specialization && (
                <p className={`text-sm text-center mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {member.specialization}
                </p>
              )}

              {/* Contact Links */}
              <div className="flex justify-center gap-3 mt-4">
                {member.email && <a href={`mailto:${member.email}`} className={`p-2 rounded-lg transition-colors duration-200 ${darkMode ? 'bg-gray-700 text-gray-300 hover:bg-blue-600 hover:text-white' : 'bg-gray-100 text-gray-600 hover:bg-blue-600 hover:text-white'}`} title="Email"><Mail className="h-5 w-5" /></a>}
                {member.linkedin && <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className={`p-2 rounded-lg transition-colors duration-200 ${darkMode ? 'bg-gray-700 text-gray-300 hover:bg-blue-600 hover:text-white' : 'bg-gray-100 text-gray-600 hover:bg-blue-600 hover:text-white'}`} title="LinkedIn"><Linkedin className="h-5 w-5" /></a>}
                {member.github && <a href={member.github} target="_blank" rel="noopener noreferrer" className={`p-2 rounded-lg transition-colors duration-200 ${darkMode ? 'bg-gray-700 text-gray-300 hover:bg-blue-600 hover:text-white' : 'bg-gray-100 text-gray-600 hover:bg-blue-600 hover:text-white'}`} title="GitHub"><Github className="h-5 w-5" /></a>}
                {member.phone && <a href={`tel:${member.phone}`} className={`p-2 rounded-lg transition-colors duration-200 ${darkMode ? 'bg-gray-700 text-gray-300 hover:bg-blue-600 hover:text-white' : 'bg-gray-100 text-gray-600 hover:bg-blue-600 hover:text-white'}`} title="Phone"><Phone className="h-5 w-5" /></a>}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`mt-16 p-12 rounded-xl text-center ${darkMode ? 'bg-gradient-to-r from-gray-800 to-gray-700' : 'bg-gradient-to-r from-blue-600 to-purple-600'}`}>
          <h2 className="text-3xl font-bold text-white mb-4">Want to Join Our Team?</h2>
          <p className="text-xl text-blue-100 mb-8">We're always looking for passionate individuals to join our club</p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300">
            Become a Member
          </button>
        </div>
      </div>
    </div>
  );
};

export default Team;
