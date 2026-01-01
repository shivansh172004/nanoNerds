// pages/Alumni.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { Briefcase, GraduationCap, Award, MapPin } from 'lucide-react';

const Alumni = () => {
  const { darkMode } = useSelector(state => state.theme);

  const alumni = [
    {
      id: 1,
      name: "Vikram Patel",
      batch: "2019-2023",
      company: "Intel Corporation",
      position: "VLSI Design Engineer",
      location: "Bangalore",
      achievements: ["Published 3 research papers", "Intel Innovation Award 2023"],
      image: "/api/placeholder/150/150"
    },
    {
      id: 2,
      name: "Ananya Sharma",
      batch: "2018-2022",
      company: "Qualcomm",
      position: "Senior Hardware Engineer",
      location: "Hyderabad",
      achievements: ["Patent holder", "Best Project Award"],
      image: "/api/placeholder/150/150"
    },
    {
      id: 3,
      name: "Rohan Mehta",
      batch: "2020-2024",
      company: "Texas Instruments",
      position: "Embedded Systems Engineer",
      location: "Bangalore",
      achievements: ["Club President 2023", "Hackathon Winner"],
      image: "/api/placeholder/150/150"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <GraduationCap className="h-16 w-16 text-blue-600" />
          </div>
          <h1 className={`text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Our Alumni
          </h1>
          <p className={`text-xl max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Success stories of our former members making an impact in the industry
          </p>
        </div>

        {/* Alumni Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {alumni.map((person) => (
            <div key={person.id} className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
              darkMode ? 'bg-gray-800' : 'bg-white shadow-lg'
            }`}>
              <div className="text-center mb-4">
                <div className={`w-24 h-24 mx-auto rounded-full mb-4 flex items-center justify-center text-3xl font-bold ${
                  darkMode ? 'bg-blue-900 text-blue-400' : 'bg-blue-100 text-blue-600'
                }`}>
                  {person.name.charAt(0)}
                </div>
                <h3 className={`text-xl font-bold mb-1 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {person.name}
                </h3>
                <p className={`text-sm ${
                  darkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  Batch: {person.batch}
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Briefcase className={`h-5 w-5 mt-1 flex-shrink-0 ${
                    darkMode ? 'text-blue-400' : 'text-blue-600'
                  }`} />
                  <div>
                    <p className={`font-semibold ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {person.position}
                    </p>
                    <p className={`text-sm ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {person.company}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className={`h-5 w-5 flex-shrink-0 ${
                    darkMode ? 'text-blue-400' : 'text-blue-600'
                  }`} />
                  <p className={`text-sm ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {person.location}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Award className={`h-5 w-5 flex-shrink-0 ${
                      darkMode ? 'text-blue-400' : 'text-blue-600'
                    }`} />
                    <p className={`text-sm font-semibold ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      Achievements:
                    </p>
                  </div>
                  <ul className={`text-sm ml-8 space-y-1 ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {person.achievements.map((achievement, idx) => (
                      <li key={idx}>• {achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Alumni;