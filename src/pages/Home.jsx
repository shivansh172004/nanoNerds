// pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { 
  Zap, 
  Users, 
  BookOpen, 
  Award, 
  ArrowRight, 
  Cpu, 
  CircuitBoard, 
  Smartphone,
  Calendar,
  TrendingUp,
  Star
} from 'lucide-react';

const Home = () => {
  const { darkMode } = useSelector(state => state.theme);
  const { posts } = useSelector(state => state.posts);
  const { members } = useSelector(state => state.team);

  const features = [
    {
      icon: Cpu,
      title: "VLSI Design",
      description: "Learn advanced Very Large Scale Integration design techniques and industry standards."
    },
    {
      icon: CircuitBoard,
      title: "Embedded Systems",
      description: "Hands-on projects with microcontrollers, sensors, and real-time systems."
    },
    {
      icon: Smartphone,
      title: "IoT Projects",
      description: "Build connected devices and explore the Internet of Things ecosystem."
    },
    {
      icon: BookOpen,
      title: "GATE Preparation",
      description: "Comprehensive study materials and mock tests for GATE ECE examination."
    }
  ];

  const stats = [
    { label: "Active Members", value: "150+", icon: Users },
    { label: "Projects Completed", value: "75+", icon: Award },
    { label: "Workshop Hours", value: "500+", icon: Calendar },
    { label: "Success Rate", value: "95%", icon: TrendingUp }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "VLSI Design Workshop",
      date: "Oct 15, 2024",
      time: "10:00 AM",
      location: "Lab 201",
      type: "Workshop"
    },
    {
      id: 2,
      title: "Guest Lecture: Industry 4.0",
      date: "Oct 22, 2024",
      time: "2:00 PM",
      location: "Auditorium",
      type: "Lecture"
    },
    {
      id: 3,
      title: "Electronics Quiz Competition",
      date: "Oct 28, 2024",
      time: "11:00 AM",
      location: "Online",
      type: "Competition"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <div className="flex justify-center items-center mb-8">
              <Zap className="h-16 w-16 text-yellow-400 animate-pulse" />
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
                Nano-Nerds
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Innovating the future of electronics through hands-on projects, workshops, 
              and cutting-edge research in VLSI design and embedded systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/register"
                className="bg-gradient-to-r from-yellow-400 to-pink-500 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:from-yellow-300 hover:to-pink-400 transition-all duration-300 transform hover:scale-105"
              >
                Join Our Club
                <ArrowRight className="inline-block ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                    darkMode ? 'bg-blue-900 text-blue-400' : 'bg-blue-100 text-blue-600'
                  }`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <div className={`text-3xl font-bold mb-2 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {stat.value}
                  </div>
                  <div className={`text-sm ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              What We Offer
            </h2>
            <p className={`text-xl max-w-2xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Explore our comprehensive programs designed to enhance your electronics engineering skills
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                  darkMode 
                    ? 'bg-gray-800 hover:bg-gray-700' 
                    : 'bg-white hover:shadow-xl shadow-lg'
                }`}>
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${
                    darkMode ? 'bg-blue-900 text-blue-400' : 'bg-blue-100 text-blue-600'
                  }`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className={`text-xl font-semibold mb-3 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {feature.title}
                  </h3>
                  <p className={`${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className={`text-3xl font-bold mb-2 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Latest Articles
              </h2>
              <p className={`${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Stay updated with our latest insights and tutorials
              </p>
            </div>
            <Link
              to="/blog"
              className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
            >
              View All Posts
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(0, 3).map((post) => (
              <article key={post.id} className={`rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 ${
                darkMode 
                  ? 'bg-gray-900 hover:bg-gray-700' 
                  : 'bg-white hover:shadow-xl shadow-lg'
              }`}>
                <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600"></div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      darkMode 
                        ? 'bg-blue-900 text-blue-300' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {post.category}
                    </span>
                    <span className={`text-sm ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className={`text-xl font-semibold mb-3 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {post.title}
                  </h3>
                  <p className={`mb-4 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className={`text-sm ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      By {post.author}
                    </span>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="flex items-center gap-1">
                        <Star className="h-4 w-4" />
                        {post.likes}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Upcoming Events
            </h2>
            <p className={`text-lg ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Don't miss out on our exciting workshops and lectures
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <div key={event.id} className={`p-6 rounded-xl border-l-4 border-blue-500 transition-all duration-300 hover:scale-105 ${
                darkMode 
                  ? 'bg-gray-800 hover:bg-gray-700' 
                  : 'bg-white hover:shadow-lg shadow-md'
              }`}>
                <div className={`inline-block px-3 py-1 text-xs font-medium rounded-full mb-3 ${
                  event.type === 'Workshop' 
                    ? darkMode ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-800'
                    : event.type === 'Lecture' 
                    ? darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-800'
                    : darkMode ? 'bg-purple-900 text-purple-300' : 'bg-purple-100 text-purple-800'
                }`}>
                  {event.type}
                </div>
                <h3 className={`text-lg font-semibold mb-2 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {event.title}
                </h3>
                <div className={`space-y-1 text-sm ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  <p>📅 {event.date}</p>
                  <p>🕐 {event.time}</p>
                  <p>📍 {event.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Join Our Electronics Community?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Connect with like-minded engineers, work on exciting projects, and advance your career in electronics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
            >
              Become a Member
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;