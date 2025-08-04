import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8">
        <h1 className="text-4xl font-bold mb-4">CSC-336 Web Programming</h1>
        <p className="text-xl mb-2">American University</p>
        <p className="text-lg opacity-90">Learn modern web development with hands-on projects</p>
      </div>

      {/* Course Overview */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Course Overview</h2>
          <p className="text-gray-600 mb-4">
            This course introduces students to modern web programming techniques and technologies. 
            Students will learn HTML, CSS, JavaScript, and explore frameworks like React and Next.js.
          </p>
          <div className="space-y-2">
            <div className="flex items-center">
              <span className="font-semibold text-gray-700 w-24">Credits:</span>
              <span>3</span>
            </div>
            <div className="flex items-center">
              <span className="font-semibold text-gray-700 w-24">Prerequisites:</span>
              <span>CSC-148 or equivalent programming experience</span>
            </div>
            <div className="flex items-center">
              <span className="font-semibold text-gray-700 w-24">Format:</span>
              <span>Lecture + Lab</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Learning Objectives</h2>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              Understand web architecture and client-server communication
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              Master HTML5, CSS3, and modern JavaScript (ES6+)
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              Build responsive and accessible web applications
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              Work with modern frameworks and development tools
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              Deploy and maintain web applications
            </li>
          </ul>
        </div>
      </div>

      {/* Quick Links */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Quick Links</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <a 
            href="/syllabus" 
            className="block p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
          >
            <h3 className="font-semibold text-gray-800 mb-2">📋 Syllabus</h3>
            <p className="text-sm text-gray-600">Course policies, grading, and requirements</p>
          </a>
          <a 
            href="/schedule" 
            className="block p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
          >
            <h3 className="font-semibold text-gray-800 mb-2">📅 Schedule</h3>
            <p className="text-sm text-gray-600">Week-by-week course schedule and topics</p>
          </a>
          <a 
            href="#" 
            className="block p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
          >
            <h3 className="font-semibold text-gray-800 mb-2">📚 Resources</h3>
            <p className="text-sm text-gray-600">Textbooks, tools, and helpful links</p>
          </a>
        </div>
      </div>      
    </div>
  );
}
