// pages/Resources.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { 
  BookOpen, 
  FileText, 
  Video, 
  Code, 
  Download,
  ExternalLink,
  Folder
} from 'lucide-react';

const Resources = () => {
  const { darkMode } = useSelector(state => state.theme);

  const categories = [
    {
      title: "GATE Preparation",
      icon: BookOpen,
      resources: [
        { name: "GATE ECE Syllabus 2025", type: "PDF", size: "2.5 MB" },
        { name: "Previous Year Papers (2015-2024)", type: "ZIP", size: "15 MB" },
        { name: "Important Formulas Sheet", type: "PDF", size: "1.2 MB" },
        { name: "Mock Test Series", type: "Link", external: true }
      ]
    },
    {
      title: "VLSI Resources",
      icon: Code,
      resources: [
        { name: "Verilog Tutorial", type: "PDF", size: "5 MB" },
        { name: "Cadence Tools Guide", type: "PDF", size: "8 MB" },
        { name: "FPGA Programming Basics", type: "PDF", size: "3.5 MB" },
        { name: "Sample VLSI Projects", type: "ZIP", size: "25 MB" }
      ]
    },
    {
      title: "Embedded Systems",
      icon: Folder,
      resources: [
        { name: "Arduino Starter Kit Guide", type: "PDF", size: "4 MB" },
        { name: "Raspberry Pi Projects", type: "PDF", size: "6 MB" },
        { name: "STM32 Programming", type: "PDF", size: "7 MB" },
        { name: "IoT Project Ideas", type: "PDF", size: "2 MB" }
      ]
    },
    {
      title: "Video Lectures",
      icon: Video,
      resources: [
        { name: "Digital Electronics Series", type: "Link", external: true },
        { name: "Signal Processing Lectures", type: "Link", external: true },
        { name: "Microprocessor Architecture", type: "Link", external: true },
        { name: "Communication Systems", type: "Link", external: true }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <FileText className="h-16 w-16 text-blue-600" />
          </div>
          <h1 className={`text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Learning Resources
          </h1>
          <p className={`text-xl max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Comprehensive study materials, tutorials, and tools for electronics engineering
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className={`p-6 rounded-xl ${
                darkMode ? 'bg-gray-800' : 'bg-white shadow-lg'
              }`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-lg ${
                    darkMode ? 'bg-blue-900 text-blue-400' : 'bg-blue-100 text-blue-600'
                  }`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h2 className={`text-2xl font-bold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {category.title}
                  </h2>
                </div>

                <div className="space-y-3">
                  {category.resources.map((resource, idx) => (
                    <div key={idx} className={`p-4 rounded-lg border transition-all duration-200 hover:scale-105 cursor-pointer ${
                      darkMode 
                        ? 'border-gray-700 bg-gray-700 hover:bg-gray-600' 
                        : 'border-gray-200 bg-gray-50 hover:bg-gray-100'
                    }`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          {resource.external ? (
                            <ExternalLink className={`h-5 w-5 ${
                              darkMode ? 'text-blue-400' : 'text-blue-600'
                            }`} />
                          ) : (
                            <Download className={`h-5 w-5 ${
                              darkMode ? 'text-blue-400' : 'text-blue-600'
                            }`} />
                          )}
                          <div>
                            <p className={`font-medium ${
                              darkMode ? 'text-white' : 'text-gray-900'
                            }`}>
                              {resource.name}
                            </p>
                            {resource.size && (
                              <p className={`text-sm ${
                                darkMode ? 'text-gray-400' : 'text-gray-500'
                              }`}>
                                {resource.type} • {resource.size}
                              </p>
                            )}
                          </div>
                        </div>
                        <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                          darkMode 
                            ? 'bg-blue-900 text-blue-300' 
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {resource.type}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Upload Section */}
        <div className={`mt-12 p-8 rounded-xl text-center ${
          darkMode ? 'bg-gray-800' : 'bg-white shadow-lg'
        }`}>
          <h2 className={`text-2xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Have Useful Resources?
          </h2>
          <p className={`mb-6 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Share your study materials, notes, or project files with fellow members
          </p>
          <button className="bg-linear-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
            Contribute Resources
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resources;