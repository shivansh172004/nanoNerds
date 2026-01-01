// pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useWindowState } from "../context/WindowStateContext";
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
  Star,
} from "lucide-react";

const Home = () => {
  const { darkMode } = useSelector((state) => state.theme);
  const { posts } = useSelector((state) => state.posts);
  const { members } = useSelector((state) => state.team);

  const { isMaximized } = useWindowState();

  const features = [
    {
      icon: Cpu,
      title: "VLSI Design",
      description:
        "Learn advanced Very Large Scale Integration design techniques and industry standards.",
    },
    {
      icon: CircuitBoard,
      title: "Embedded Systems",
      description:
        "Hands-on projects with microcontrollers, sensors, and real-time systems.",
    },
    {
      icon: Smartphone,
      title: "IoT Projects",
      description:
        "Build connected devices and explore the Internet of Things ecosystem.",
    },
    {
      icon: BookOpen,
      title: "GATE Preparation",
      description:
        "Comprehensive study materials and mock tests for GATE ECE examination.",
    },
  ];

  const stats = [
    { label: "Active Members", value: "150+", icon: Users },
    { label: "Projects Completed", value: "75+", icon: Award },
    { label: "Workshop Hours", value: "500+", icon: Calendar },
    { label: "Success Rate", value: "95%", icon: TrendingUp },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "VLSI Design Workshop",
      date: "Oct 15, 2024",
      time: "10:00 AM",
      location: "Lab 201",
      type: "Workshop",
    },
    {
      id: 2,
      title: "Guest Lecture: Industry 4.0",
      date: "Oct 22, 2024",
      time: "2:00 PM",
      location: "Auditorium",
      type: "Lecture",
    },
    {
      id: 3,
      title: "Electronics Quiz Competition",
      date: "Oct 28, 2024",
      time: "11:00 AM",
      location: "Online",
      type: "Competition",
    },
  ];

  return (
    <div
      className={`min-h-screen transition-all ${
        isMaximized ? "pt-12" : "pt-16"
      }`}
    >
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
              Innovating the future of electronics through hands-on projects,
              workshops, and cutting-edge research in VLSI design and embedded
              systems.
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
      <section className={`py-16 ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                      darkMode
                        ? "bg-blue-900 text-blue-400"
                        : "bg-blue-100 text-blue-600"
                    }`}
                  >
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <div
                    className={`text-3xl font-bold mb-2 ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {stat.value}
                  </div>
                  <div
                    className={`text-sm ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
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
            <h2
              className={`text-4xl font-bold mb-4 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              What We Offer
            </h2>
            <p
              className={`text-xl max-w-2xl mx-auto ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Explore our comprehensive programs designed to enhance your
              electronics engineering skills
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                    darkMode
                      ? "bg-gray-800 hover:bg-gray-700"
                      : "bg-white hover:shadow-xl shadow-lg"
                  }`}
                >
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${
                      darkMode
                        ? "bg-blue-900 text-blue-400"
                        : "bg-blue-100 text-blue-600"
                    }`}
                  >
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3
                    className={`text-xl font-semibold mb-3 ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className={`${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section className={`py-20 ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2
                className={`text-3xl font-bold mb-2 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Latest Articles
              </h2>
              <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>
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
              <article
                key={post.id}
                className={`rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 ${
                  darkMode
                    ? "bg-gray-900 hover:bg-gray-700"
                    : "bg-white hover:shadow-xl shadow-lg"
                }`}
              >
                <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600"></div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        darkMode
                          ? "bg-blue-900 text-blue-300"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {post.category}
                    </span>
                    <span
                      className={`text-sm ${
                        darkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      {post.readTime}
                    </span>
                  </div>
                  <h3
                    className={`text-xl font-semibold mb-3 ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {post.title}
                  </h3>
                  <p
                    className={`mb-4 ${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-sm ${
                        darkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
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
            <h2
              className={`text-3xl font-bold mb-4 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Upcoming Events
            </h2>
            <p
              className={`text-lg ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Don't miss out on our exciting workshops and lectures
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className={`p-6 rounded-xl border-l-4 border-blue-500 transition-all duration-300 hover:scale-105 ${
                  darkMode
                    ? "bg-gray-800 hover:bg-gray-700"
                    : "bg-white hover:shadow-lg shadow-md"
                }`}
              >
                <div
                  className={`inline-block px-3 py-1 text-xs font-medium rounded-full mb-3 ${
                    event.type === "Workshop"
                      ? darkMode
                        ? "bg-green-900 text-green-300"
                        : "bg-green-100 text-green-800"
                      : event.type === "Lecture"
                      ? darkMode
                        ? "bg-blue-900 text-blue-300"
                        : "bg-blue-100 text-blue-800"
                      : darkMode
                      ? "bg-purple-900 text-purple-300"
                      : "bg-purple-100 text-purple-800"
                  }`}
                >
                  {event.type}
                </div>
                <h3
                  className={`text-lg font-semibold mb-2 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {event.title}
                </h3>
                <div
                  className={`space-y-1 text-sm ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
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
            Connect with like-minded engineers, work on exciting projects, and
            advance your career in electronics.
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

// // pages/Home.jsx
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import {
//   Zap,
//   Users,
//   BookOpen,
//   Award,
//   ArrowRight,
//   Cpu,
//   CircuitBoard,
//   Smartphone,
//   Calendar,
//   TrendingUp,
//   Star,
//   Maximize2,
//   Minimize2,
//   ZoomIn,
//   ZoomOut,
//   Eye,
//   EyeOff,
// } from "lucide-react";

// const Home = () => {
//   const { darkMode } = useSelector((state) => state.theme);
//   const { posts } = useSelector((state) => state.posts);
//   const { members } = useSelector((state) => state.team);

//   // State for zoom and window events
//   const [windowState, setWindowState] = useState({
//     isMinimized: false,
//     zoomLevel: 100,
//     windowWidth: window.innerWidth,
//     windowHeight: window.innerHeight,
//     shouldHideNavbar: false,
//   });
//   const [showNotification, setShowNotification] = useState(false);
//   const [notificationMessage, setNotificationMessage] = useState("");

//   // Detect zoom and resize changes
//   useEffect(() => {
//     let lastWidth = window.innerWidth;
//     let lastHeight = window.innerHeight;

//     const checkWindowCondition = (width, height, zoom) => {
//       // Hide navbar if window is very small OR zoomed out significantly
//       const isSmallWindow = width < 768 || height < 500;
//       const isZoomedOut = zoom < 75;
//       return isSmallWindow || isZoomedOut;
//     };

//     const handleResize = () => {
//       const newWidth = window.innerWidth;
//       const newHeight = window.innerHeight;

//       // Calculate zoom level (approximate)
//       const zoomLevel = Math.round(
//         (window.outerWidth / window.innerWidth) * 100
//       );

//       // Check if window was minimized (significant size reduction)
//       const wasMinimized =
//         newWidth < lastWidth * 0.5 || newHeight < lastHeight * 0.5;

//       // Determine if navbar should be hidden
//       const shouldHide = checkWindowCondition(newWidth, newHeight, zoomLevel);

//       setWindowState({
//         isMinimized: wasMinimized,
//         zoomLevel: zoomLevel,
//         windowWidth: newWidth,
//         windowHeight: newHeight,
//         shouldHideNavbar: shouldHide,
//       });

//       // Show notification for zoom changes
//       if (Math.abs(zoomLevel - 100) > 10) {
//         const message =
//           zoomLevel > 100
//             ? `🔍 Zoomed In (${zoomLevel}%)`
//             : `🔍 Zoomed Out (${zoomLevel}%)`;
//         setNotificationMessage(message);
//         setShowNotification(true);
//         setTimeout(() => setShowNotification(false), 3000);
//       }

//       // Show notification for window resize
//       if (Math.abs(newWidth - lastWidth) > 100) {
//         setNotificationMessage(`📐 Window Resized (${newWidth}x${newHeight})`);
//         setShowNotification(true);
//         setTimeout(() => setShowNotification(false), 3000);
//       }

//       lastWidth = newWidth;
//       lastHeight = newHeight;
//     };

//     // Detect visibility change (tab switch/minimize)
//     const handleVisibilityChange = () => {
//       if (document.hidden) {
//         setNotificationMessage("👋 See you soon!");
//         setShowNotification(true);
//         console.log("Page minimized or tab switched");
//       } else {
//         setNotificationMessage("👋 Welcome back!");
//         setShowNotification(true);
//         setTimeout(() => setShowNotification(false), 3000);
//         console.log("Page visible again");
//       }
//     };

//     // Detect zoom using visual viewport API
//     const handleVisualViewportResize = () => {
//       if (window.visualViewport) {
//         const scale = Math.round(window.visualViewport.scale * 100);
//         const width = window.innerWidth;
//         const height = window.innerHeight;

//         if (Math.abs(scale - windowState.zoomLevel) > 5) {
//           const shouldHide = checkWindowCondition(width, height, scale);

//           setWindowState((prev) => ({
//             ...prev,
//             zoomLevel: scale,
//             shouldHideNavbar: shouldHide,
//           }));

//           const message =
//             scale > 100
//               ? `🔍 Zoomed In (${scale}%)`
//               : scale < 100
//               ? `🔍 Zoomed Out (${scale}%)`
//               : "🔍 Normal Zoom (100%)";
//           setNotificationMessage(message);
//           setShowNotification(true);
//           setTimeout(() => setShowNotification(false), 3000);
//         }
//       }
//     };

//     // Initial check
//     handleResize();

//     window.addEventListener("resize", handleResize);
//     document.addEventListener("visibilitychange", handleVisibilityChange);

//     if (window.visualViewport) {
//       window.visualViewport.addEventListener(
//         "resize",
//         handleVisualViewportResize
//       );
//     }

//     return () => {
//       window.removeEventListener("resize", handleResize);
//       document.removeEventListener("visibilitychange", handleVisibilityChange);
//       if (window.visualViewport) {
//         window.visualViewport.removeEventListener(
//           "resize",
//           handleVisualViewportResize
//         );
//       }
//     };
//   }, []);

//   const features = [
//     {
//       icon: Cpu,
//       title: "VLSI Design",
//       description:
//         "Learn advanced Very Large Scale Integration design techniques and industry standards.",
//     },
//     {
//       icon: CircuitBoard,
//       title: "Embedded Systems",
//       description:
//         "Hands-on projects with microcontrollers, sensors, and real-time systems.",
//     },
//     {
//       icon: Smartphone,
//       title: "IoT Projects",
//       description:
//         "Build connected devices and explore the Internet of Things ecosystem.",
//     },
//     {
//       icon: BookOpen,
//       title: "GATE Preparation",
//       description:
//         "Comprehensive study materials and mock tests for GATE ECE examination.",
//     },
//   ];

//   const stats = [
//     { label: "Active Members", value: "150+", icon: Users },
//     { label: "Projects Completed", value: "75+", icon: Award },
//     { label: "Workshop Hours", value: "500+", icon: Calendar },
//     { label: "Success Rate", value: "95%", icon: TrendingUp },
//   ];

//   const upcomingEvents = [
//     {
//       id: 1,
//       title: "VLSI Design Workshop",
//       date: "Oct 15, 2024",
//       time: "10:00 AM",
//       location: "Lab 201",
//       type: "Workshop",
//     },
//     {
//       id: 2,
//       title: "Guest Lecture: Industry 4.0",
//       date: "Oct 22, 2024",
//       time: "2:00 PM",
//       location: "Auditorium",
//       type: "Lecture",
//     },
//     {
//       id: 3,
//       title: "Electronics Quiz Competition",
//       date: "Oct 28, 2024",
//       time: "11:00 AM",
//       location: "Online",
//       type: "Competition",
//     },
//   ];

//   return (
//     <div className="min-h-screen">
//       {/* Notification Toast */}
//       {showNotification && (
//         <div
//           className={`fixed z-50 animate-bounce transition-all duration-300 ${
//             windowState.shouldHideNavbar ? "top-4 right-4" : "top-20 right-4"
//           }`}
//         >
//           <div
//             className={`px-6 py-4 rounded-lg shadow-2xl border-2 ${
//               darkMode
//                 ? "bg-gray-800 border-blue-500 text-white"
//                 : "bg-white border-blue-600 text-gray-900"
//             }`}
//           >
//             <p className="font-semibold text-lg">{notificationMessage}</p>
//           </div>
//         </div>
//       )}

//       {/* Navbar Visibility Indicator */}
//       {windowState.shouldHideNavbar && (
//         <div className="fixed top-4 left-4 z-50">
//           <div
//             className={`px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 ${
//               darkMode
//                 ? "bg-yellow-900 text-yellow-300"
//                 : "bg-yellow-100 text-yellow-800"
//             }`}
//           >
//             <EyeOff className="h-4 w-4" />
//             <span className="text-sm font-medium">Compact Mode Active</span>
//           </div>
//         </div>
//       )}

//       {/* Window State Indicator (bottom right corner) */}
//       <div className="fixed bottom-4 right-4 z-40">
//         <div
//           className={`px-4 py-2 rounded-lg shadow-lg text-xs ${
//             darkMode ? "bg-gray-800 text-gray-300" : "bg-white text-gray-700"
//           }`}
//         >
//           <div className="flex items-center gap-2">
//             {windowState.zoomLevel > 100 ? (
//               <ZoomIn className="h-4 w-4" />
//             ) : windowState.zoomLevel < 100 ? (
//               <ZoomOut className="h-4 w-4" />
//             ) : (
//               <Maximize2 className="h-4 w-4" />
//             )}
//             <span>Zoom: {windowState.zoomLevel}%</span>
//           </div>
//           <div className="text-xs opacity-70">
//             {windowState.windowWidth}x{windowState.windowHeight}
//           </div>
//         </div>
//       </div>

//       {/* Hero Section */}
//       <section
//         className={`relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 transition-all duration-300 ${
//           windowState.shouldHideNavbar ? "pt-8" : "pt-0"
//         }`}
//       >
//         <div className="absolute inset-0 bg-black opacity-20"></div>
//         <div
//           className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
//             windowState.shouldHideNavbar ? "py-12" : "py-24 lg:py-32"
//           }`}
//         >
//           <div className="text-center">
//             <div className="flex justify-center items-center mb-8">
//               <Zap
//                 className={`text-yellow-400 animate-pulse transition-all duration-300 ${
//                   windowState.shouldHideNavbar ? "h-10 w-10" : "h-16 w-16"
//                 }`}
//               />
//             </div>
//             <h1
//               className={`font-bold text-white mb-6 transition-all duration-300 ${
//                 windowState.shouldHideNavbar
//                   ? "text-2xl sm:text-3xl"
//                   : "text-4xl sm:text-6xl lg:text-7xl"
//               }`}
//             >
//               Welcome to{" "}
//               <span className="bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
//                 Nano-Nerds
//               </span>
//             </h1>
//             <p
//               className={`text-gray-200 mb-8 max-w-3xl mx-auto transition-all duration-300 ${
//                 windowState.shouldHideNavbar
//                   ? "text-sm sm:text-base"
//                   : "text-xl sm:text-2xl"
//               }`}
//             >
//               Innovating the future of electronics through hands-on projects,
//               workshops, and cutting-edge research in VLSI design and embedded
//               systems.
//             </p>
//             <div
//               className={`flex flex-col sm:flex-row gap-4 justify-center ${
//                 windowState.shouldHideNavbar ? "hidden" : ""
//               }`}
//             >
//               <Link
//                 to="/register"
//                 className="bg-gradient-to-r from-yellow-400 to-pink-500 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:from-yellow-300 hover:to-pink-400 transition-all duration-300 transform hover:scale-105"
//               >
//                 Join Our Club
//                 <ArrowRight className="inline-block ml-2 h-5 w-5" />
//               </Link>
//               <Link
//                 to="/about"
//                 className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
//               >
//                 Learn More
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section
//         className={`${
//           darkMode ? "bg-gray-800" : "bg-gray-50"
//         } transition-all duration-300 ${
//           windowState.shouldHideNavbar ? "py-8" : "py-16"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div
//             className={`grid gap-8 ${
//               windowState.shouldHideNavbar
//                 ? "grid-cols-2 lg:grid-cols-4"
//                 : "grid-cols-2 lg:grid-cols-4"
//             }`}
//           >
//             {stats.map((stat, index) => {
//               const IconComponent = stat.icon;
//               return (
//                 <div key={index} className="text-center">
//                   <div
//                     className={`inline-flex items-center justify-center rounded-full mb-4 transition-all duration-300 ${
//                       windowState.shouldHideNavbar ? "w-12 h-12" : "w-16 h-16"
//                     } ${
//                       darkMode
//                         ? "bg-blue-900 text-blue-400"
//                         : "bg-blue-100 text-blue-600"
//                     }`}
//                   >
//                     <IconComponent
//                       className={`transition-all duration-300 ${
//                         windowState.shouldHideNavbar ? "h-6 w-6" : "h-8 w-8"
//                       }`}
//                     />
//                   </div>
//                   <div
//                     className={`font-bold mb-2 transition-all duration-300 ${
//                       windowState.shouldHideNavbar ? "text-2xl" : "text-3xl"
//                     } ${darkMode ? "text-white" : "text-gray-900"}`}
//                   >
//                     {stat.value}
//                   </div>
//                   <div
//                     className={`text-sm ${
//                       darkMode ? "text-gray-400" : "text-gray-600"
//                     }`}
//                   >
//                     {stat.label}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section
//         className={`transition-all duration-300 ${
//           windowState.shouldHideNavbar ? "py-10" : "py-20"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div
//             className={`text-center transition-all duration-300 ${
//               windowState.shouldHideNavbar ? "mb-8" : "mb-16"
//             }`}
//           >
//             <h2
//               className={`font-bold mb-4 transition-all duration-300 ${
//                 windowState.shouldHideNavbar ? "text-2xl" : "text-4xl"
//               } ${darkMode ? "text-white" : "text-gray-900"}`}
//             >
//               What We Offer
//             </h2>
//             <p
//               className={`max-w-2xl mx-auto transition-all duration-300 ${
//                 windowState.shouldHideNavbar ? "text-base" : "text-xl"
//               } ${darkMode ? "text-gray-300" : "text-gray-600"}`}
//             >
//               Explore our comprehensive programs designed to enhance your
//               electronics engineering skills
//             </p>
//           </div>

//           <div
//             className={`grid gap-8 ${
//               windowState.shouldHideNavbar
//                 ? "grid-cols-1 md:grid-cols-2"
//                 : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
//             }`}
//           >
//             {features.map((feature, index) => {
//               const IconComponent = feature.icon;
//               return (
//                 <div
//                   key={index}
//                   className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
//                     darkMode
//                       ? "bg-gray-800 hover:bg-gray-700"
//                       : "bg-white hover:shadow-xl shadow-lg"
//                   }`}
//                 >
//                   <div
//                     className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${
//                       darkMode
//                         ? "bg-blue-900 text-blue-400"
//                         : "bg-blue-100 text-blue-600"
//                     }`}
//                   >
//                     <IconComponent className="h-6 w-6" />
//                   </div>
//                   <h3
//                     className={`text-xl font-semibold mb-3 ${
//                       darkMode ? "text-white" : "text-gray-900"
//                     }`}
//                   >
//                     {feature.title}
//                   </h3>
//                   <p
//                     className={`${
//                       darkMode ? "text-gray-300" : "text-gray-600"
//                     }`}
//                   >
//                     {feature.description}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Latest Posts Section */}
//       <section
//         className={`${
//           darkMode ? "bg-gray-800" : "bg-gray-50"
//         } transition-all duration-300 ${
//           windowState.shouldHideNavbar ? "py-10" : "py-20"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div
//             className={`flex justify-between items-center transition-all duration-300 ${
//               windowState.shouldHideNavbar ? "mb-6" : "mb-12"
//             }`}
//           >
//             <div>
//               <h2
//                 className={`font-bold mb-2 transition-all duration-300 ${
//                   windowState.shouldHideNavbar ? "text-2xl" : "text-3xl"
//                 } ${darkMode ? "text-white" : "text-gray-900"}`}
//               >
//                 Latest Articles
//               </h2>
//               <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>
//                 Stay updated with our latest insights and tutorials
//               </p>
//             </div>
//             <Link
//               to="/blog"
//               className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
//             >
//               View All Posts
//               <ArrowRight className="ml-2 h-4 w-4" />
//             </Link>
//           </div>

//           <div
//             className={`grid gap-8 ${
//               windowState.shouldHideNavbar
//                 ? "grid-cols-1 md:grid-cols-2"
//                 : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
//             }`}
//           >
//             {posts
//               .slice(0, windowState.shouldHideNavbar ? 2 : 3)
//               .map((post) => (
//                 <article
//                   key={post.id}
//                   className={`rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 ${
//                     darkMode
//                       ? "bg-gray-900 hover:bg-gray-700"
//                       : "bg-white hover:shadow-xl shadow-lg"
//                   }`}
//                 >
//                   <div
//                     className={`bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 ${
//                       windowState.shouldHideNavbar ? "h-32" : "h-48"
//                     }`}
//                   ></div>
//                   <div className="p-6">
//                     <div className="flex items-center gap-2 mb-3">
//                       <span
//                         className={`px-3 py-1 text-xs font-medium rounded-full ${
//                           darkMode
//                             ? "bg-blue-900 text-blue-300"
//                             : "bg-blue-100 text-blue-800"
//                         }`}
//                       >
//                         {post.category}
//                       </span>
//                       <span
//                         className={`text-sm ${
//                           darkMode ? "text-gray-400" : "text-gray-500"
//                         }`}
//                       >
//                         {post.readTime}
//                       </span>
//                     </div>
//                     <h3
//                       className={`text-xl font-semibold mb-3 ${
//                         darkMode ? "text-white" : "text-gray-900"
//                       }`}
//                     >
//                       {post.title}
//                     </h3>
//                     <p
//                       className={`mb-4 ${
//                         darkMode ? "text-gray-300" : "text-gray-600"
//                       }`}
//                     >
//                       {post.excerpt}
//                     </p>
//                     <div className="flex items-center justify-between">
//                       <span
//                         className={`text-sm ${
//                           darkMode ? "text-gray-400" : "text-gray-500"
//                         }`}
//                       >
//                         By {post.author}
//                       </span>
//                       <div className="flex items-center gap-4 text-sm">
//                         <span className="flex items-center gap-1">
//                           <Star className="h-4 w-4" />
//                           {post.likes}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </article>
//               ))}
//           </div>
//         </div>
//       </section>

//       {/* Upcoming Events */}
//       <section
//         className={`transition-all duration-300 ${
//           windowState.shouldHideNavbar ? "py-10" : "py-20"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div
//             className={`text-center transition-all duration-300 ${
//               windowState.shouldHideNavbar ? "mb-6" : "mb-12"
//             }`}
//           >
//             <h2
//               className={`font-bold mb-4 transition-all duration-300 ${
//                 windowState.shouldHideNavbar ? "text-2xl" : "text-3xl"
//               } ${darkMode ? "text-white" : "text-gray-900"}`}
//             >
//               Upcoming Events
//             </h2>
//             <p
//               className={`transition-all duration-300 ${
//                 windowState.shouldHideNavbar ? "text-base" : "text-lg"
//               } ${darkMode ? "text-gray-300" : "text-gray-600"}`}
//             >
//               Don't miss out on our exciting workshops and lectures
//             </p>
//           </div>

//           <div
//             className={`grid gap-6 ${
//               windowState.shouldHideNavbar
//                 ? "grid-cols-1 md:grid-cols-2"
//                 : "grid-cols-1 md:grid-cols-3"
//             }`}
//           >
//             {upcomingEvents
//               .slice(0, windowState.shouldHideNavbar ? 2 : 3)
//               .map((event) => (
//                 <div
//                   key={event.id}
//                   className={`p-6 rounded-xl border-l-4 border-blue-500 transition-all duration-300 hover:scale-105 ${
//                     darkMode
//                       ? "bg-gray-800 hover:bg-gray-700"
//                       : "bg-white hover:shadow-lg shadow-md"
//                   }`}
//                 >
//                   <div
//                     className={`inline-block px-3 py-1 text-xs font-medium rounded-full mb-3 ${
//                       event.type === "Workshop"
//                         ? darkMode
//                           ? "bg-green-900 text-green-300"
//                           : "bg-green-100 text-green-800"
//                         : event.type === "Lecture"
//                         ? darkMode
//                           ? "bg-blue-900 text-blue-300"
//                           : "bg-blue-100 text-blue-800"
//                         : darkMode
//                         ? "bg-purple-900 text-purple-300"
//                         : "bg-purple-100 text-purple-800"
//                     }`}
//                   >
//                     {event.type}
//                   </div>
//                   <h3
//                     className={`text-lg font-semibold mb-2 ${
//                       darkMode ? "text-white" : "text-gray-900"
//                     }`}
//                   >
//                     {event.title}
//                   </h3>
//                   <div
//                     className={`space-y-1 text-sm ${
//                       darkMode ? "text-gray-300" : "text-gray-600"
//                     }`}
//                   >
//                     <p>📅 {event.date}</p>
//                     <p>🕐 {event.time}</p>
//                     <p>📍 {event.location}</p>
//                   </div>
//                 </div>
//               ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       {!windowState.shouldHideNavbar && (
//         <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
//           <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//             <h2 className="text-3xl font-bold text-white mb-4">
//               Ready to Join Our Electronics Community?
//             </h2>
//             <p className="text-xl text-blue-100 mb-8">
//               Connect with like-minded engineers, work on exciting projects, and
//               advance your career in electronics.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Link
//                 to="/register"
//                 className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
//               >
//                 Become a Member
//               </Link>
//               <Link
//                 to="/contact"
//                 className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
//               >
//                 Get in Touch
//               </Link>
//             </div>
//           </div>
//         </section>
//       )}
//     </div>
//   );
// };

// export default Home;
