// pages/About.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { 
  Target, 
  Eye, 
  Award, 
  Users, 
  Calendar, 
  BookOpen, 
  Lightbulb,
  Zap,
  ArrowRight
} from 'lucide-react';

const About = () => {
  const { darkMode } = useSelector(state => state.theme);

  const achievements = [
    {
      year: '2024',
      title: 'National Electronics Championship',
      description: 'First place in VLSI design competition'
    },
    {
      year: '2023',
      title: 'IEEE Student Branch Award',
      description: 'Outstanding contribution to student activities'
    },
    {
      year: '2023',
      title: 'Innovation Excellence',
      description: '50+ successful student projects completed'
    },
    {
      year: '2022',
      title: 'Club Establishment',
      description: 'Founded with 25 founding members'
    }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Fostering creative thinking and breakthrough solutions in electronics'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Building strong partnerships between students, faculty, and industry'
    },
    {
      icon: BookOpen,
      title: 'Learning',
      description: 'Continuous skill development through hands-on experience'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Striving for the highest standards in all our endeavors'
    }
  ];

  const activities = [
    {
      title: 'Technical Workshops',
      description: 'Regular sessions on VLSI design, PCB development, and embedded systems',
      frequency: 'Weekly'
    },
    {
      title: 'Guest Lectures',
      description: 'Industry experts sharing insights on latest technology trends',
      frequency: 'Monthly'
    },
    {
      title: 'Project Competitions',
      description: 'Inter-college competitions to showcase innovative electronics projects',
      frequency: 'Quarterly'
    },
    {
      title: 'GATE Preparation',
      description: 'Comprehensive coaching and mock tests for GATE ECE examination',
      frequency: 'Year-round'
    },
    {
      title: 'Industry Visits',
      description: 'Exposure to real-world electronics manufacturing and R&D facilities',
      frequency: 'Semester'
    },
    {
      title: 'Research Papers',
      description: 'Supporting students in publishing research in electronics journals',
      frequency: 'Ongoing'
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Zap className="h-16 w-16 text-blue-600" />
          </div>
          <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            About Nano-Nerds
          </h1>
          <p className={`text-xl max-w-3xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Empowering the next generation of electronics engineers through innovation, 
            collaboration, and hands-on learning experiences.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className={`p-8 rounded-xl ${
            darkMode ? 'bg-gray-800' : 'bg-white shadow-lg'
          }`}>
            <div className="flex items-center mb-6">
              <Target className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className={`text-2xl font-bold ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Our Mission
              </h2>
            </div>
            <p className={`text-lg leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              To create a vibrant community of electronics enthusiasts who push the boundaries 
              of technology through collaborative learning, innovative projects, and industry engagement. 
              We aim to bridge the gap between academic knowledge and practical application in the 
              field of electronics and communication engineering.
            </p>
          </div>

          <div className={`p-8 rounded-xl ${
            darkMode ? 'bg-gray-800' : 'bg-white shadow-lg'
          }`}>
            <div className="flex items-center mb-6">
              <Eye className="h-8 w-8 text-purple-600 mr-3" />
              <h2 className={`text-2xl font-bold ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Our Vision
              </h2>
            </div>
            <p className={`text-lg leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              To be the premier electronics club that nurtures future technology leaders, 
              fosters innovation in VLSI design and embedded systems, and contributes 
              significantly to the advancement of electronics engineering through research, 
              development, and knowledge sharing.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold text-center mb-12 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className={`p-6 rounded-xl text-center transition-all duration-300 hover:scale-105 ${
                  darkMode ? 'bg-gray-800' : 'bg-white shadow-lg'
                }`}>
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                    darkMode ? 'bg-blue-900 text-blue-400' : 'bg-blue-100 text-blue-600'
                  }`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className={`text-xl font-semibold mb-3 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {value.title}
                  </h3>
                  <p className={`${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Our Story */}
        <section className={`p-8 rounded-xl mb-16 ${
          darkMode ? 'bg-gray-800' : 'bg-gradient-to-r from-blue-50 to-purple-50'
        }`}>
          <h2 className={`text-3xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Our Story
          </h2>
          <div className={`prose max-w-none ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            <p className="text-lg leading-relaxed mb-4">
              Founded in 2022 by a group of passionate electronics engineering students, 
              Nano-Nerds began as a small study group focused on VLSI design and embedded systems. 
              What started with just 25 members has now grown into a thriving community of over 150 
              active participants from various engineering disciplines.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Our club emerged from the recognition that traditional classroom learning, while 
              fundamental, often lacks the practical, hands-on experience that today's technology 
              industry demands. We set out to create a space where students could experiment, 
              innovate, and collaborate on real-world projects that would prepare them for 
              successful careers in electronics and technology.
            </p>
            <p className="text-lg leading-relaxed">
              Today, we are proud to be recognized as one of the leading student organizations 
              in our institution, with alumni working at top technology companies worldwide and 
              continuing to contribute to the electronics engineering field through research and innovation.
            </p>
          </div>
        </section>

        {/* Activities */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold text-center mb-12 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <div key={index} className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                darkMode ? 'bg-gray-800' : 'bg-white shadow-lg'
              }`}>
                <div className="flex justify-between items-start mb-4">
                  <h3 className={`text-xl font-semibold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {activity.title}
                  </h3>
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {activity.frequency}
                  </span>
                </div>
                <p className={`${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {activity.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements Timeline */}
        <section className="mb-16">
          <h2 className={`text-3xl font-bold text-center mb-12 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Our Journey
          </h2>
          <div className="relative">
            <div className={`absolute left-1/2 transform -translate-x-1/2 h-full w-1 ${
              darkMode ? 'bg-gray-700' : 'bg-gray-300'
            }`}></div>
            <div className="space-y-8">
              {achievements.map((achievement, index) => (
                <div key={index} className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}>
                  <div className={`w-1/2 ${
                    index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'
                  }`}>
                    <div className={`p-6 rounded-xl ${
                      darkMode ? 'bg-gray-800' : 'bg-white shadow-lg'
                    }`}>
                      <div className={`text-2xl font-bold mb-2 ${
                        darkMode ? 'text-blue-400' : 'text-blue-600'
                      }`}>
                        {achievement.year}
                      </div>
                      <h3 className={`text-xl font-semibold mb-2 ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {achievement.title}
                      </h3>
                      <p className={`${
                        darkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                  <div className="relative flex-shrink-0">
                    <div className={`w-4 h-4 rounded-full border-4 ${
                      darkMode 
                        ? 'bg-gray-900 border-blue-400' 
                        : 'bg-white border-blue-600'
                    }`}></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className={`p-12 rounded-xl ${
            darkMode ? 'bg-gradient-to-r from-gray-800 to-gray-700' : 'bg-gradient-to-r from-blue-600 to-purple-600'
          }`}>
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Join Our Mission?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Become part of a community that's shaping the future of electronics engineering. 
              Your journey towards innovation starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                Join Our Club
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;