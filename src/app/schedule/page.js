// This is the main data structure for the schedule - easy to update!
const scheduleData = [
  {
    week: 1,
    date: "August 26th, 2025",
    topic: "Introduction to Web Development",
    topics: [
      "Course overview and expectations",
      "Web architecture and client-server model",
      "Setting up development environment",
      "Introduction to HTML basics"
    ],
    readings: ["Chapters 1-2: HTML & CSS by Duckett"],
    assignments: ["Install development tools", "Complete HTML basics tutorial"],
    notes: "First week focuses on getting everyone set up and comfortable with the basics."
  },
  {
    week: 2,
    date: "September 2nd, 2025",
    topic: "HTML Structure and Semantics",
    topics: [
      "HTML document structure",
      "Semantic HTML elements",
      "Forms and input elements",
      "Accessibility basics"
    ],
    readings: ["Chapters 3-4: HTML & CSS by Duckett"],
    assignments: ["Personal portfolio page (HTML only)"],
    notes: "Emphasis on writing clean, semantic HTML that's accessible to all users."
  },
  {
    week: 3,
    date: "September 9th, 2025",
    topic: "CSS Fundamentals",
    topics: [
      "CSS syntax and selectors",
      "Box model and layout",
      "Colors, typography, and spacing",
      "CSS best practices"
    ],
    readings: ["Chapters 5-7: HTML & CSS by Duckett"],
    assignments: ["Style your portfolio page", "CSS layout exercises"],
    notes: "Learn to make your HTML look professional and polished."
  },
  {
    week: 4,
    date: "September 16th, 2025",
    topic: "Responsive Design and CSS Layout",
    topics: [
      "Flexbox layout",
      "CSS Grid",
      "Media queries and responsive design",
      "Mobile-first approach"
    ],
    readings: ["Chapters 8-9: HTML & CSS by Duckett"],
    assignments: ["Responsive website project"],
    notes: "Make your websites work beautifully on all devices."
  },
  {
    week: 5,
    date: "September 23rd, 2025",
    topic: "JavaScript Basics",
    topics: [
      "JavaScript syntax and fundamentals",
      "Variables, data types, and operators",
      "Control structures (if/else, loops)",
      "Functions and scope"
    ],
    readings: ["Chapters 1-3: JavaScript & jQuery by Duckett"],
    assignments: ["JavaScript fundamentals exercises"],
    notes: "Start building interactive functionality into your websites."
  },
  {
    week: 6,
    date: "September 30th, 2025",
    topic: "DOM Manipulation",
    topics: [
      "Document Object Model (DOM)",
      "Selecting and manipulating elements",
      "Event handling",
      "Dynamic content creation"
    ],
    readings: ["Chapters 4-6: JavaScript & jQuery by Duckett"],
    assignments: ["Interactive website with JavaScript"],
    notes: "Learn to make your websites respond to user interactions."
  },
  {
    week: 7,
    date: "October 7th, 2025",
    topic: "Modern JavaScript (ES6+)",
    topics: [
      "Arrow functions and template literals",
      "Destructuring and spread operators",
      "Promises and async/await",
      "Modules and imports"
    ],
    readings: ["Online resources on ES6+ features"],
    assignments: ["Refactor previous projects with modern JavaScript"],
    notes: "Update your JavaScript skills to modern standards."
  },
  {
    week: 8,
    date: "October 14th, 2025",
    topic: "Midterm Review and Project Work",
    topics: [
      "Review of HTML, CSS, and JavaScript",
      "Project planning and design",
      "Code review and best practices",
      "Midterm assessment"
    ],
    readings: ["Review all previous materials"],
    assignments: ["Midterm project due"],
    notes: "Midterm week - demonstrate your skills with a comprehensive project."
  },
  {
    week: 9,
    date: "October 21st, 2025",
    topic: "Introduction to React",
    topics: [
      "React fundamentals and JSX",
      "Components and props",
      "State and lifecycle",
      "React development environment"
    ],
    readings: ["React documentation and tutorials"],
    assignments: ["First React component", "React tutorial completion"],
    notes: "Let's dive into modern web development with React!"
  },
  {
    week: 10,
    date: "October 28th, 2025",
    topic: "React Hooks and State Management",
    topics: [
      "useState and useEffect hooks",
      "Custom hooks",
      "State management patterns",
      "Component composition"
    ],
    readings: ["React Hooks documentation"],
    assignments: ["React application with hooks"],
    notes: "Master modern React patterns with hooks."
  },
  {
    week: 11,
    date: "November 4th, 2025",
    topic: "React Routing and Forms",
    topics: [
      "React Router for navigation",
      "Form handling in React",
      "Controlled components",
      "Form validation"
    ],
    readings: ["React Router documentation"],
    assignments: ["Multi-page React application"],
    notes: "Build more complex applications with proper navigation."
  },
  {
    week: 12,
    date: "November 11th, 2025",
    topic: "API Integration and Data Fetching",
    topics: [
      "RESTful APIs and HTTP methods",
      "Fetch API and axios",
      "Async data loading",
      "Error handling"
    ],
    readings: ["API documentation and best practices"],
    assignments: ["React app with external API integration"],
    notes: "Connect your applications to real data sources."
  },
  {
    week: 13,
    date: "November 18th, 2025",
    topic: "Deployment and Performance",
    topics: [
      "Building for production",
      "Deployment strategies",
      "Performance optimization",
      "SEO and accessibility"
    ],
    readings: ["Deployment guides and performance tips"],
    assignments: ["Deploy your application", "Performance audit"],
    notes: "Learn to deploy your applications and make them fast."
  },
  {
    week: 14,
    date: "November 25th, 2025",
    topic: "Final Project Development",
    topics: [
      "Project planning and architecture",
      "Development best practices",
      "Code review and testing",
      "Documentation"
    ],
    readings: ["Project-specific resources"],
    assignments: ["Final project development"],
    notes: "Focus on building your final project with all the skills learned."
  },
  {
    week: 15,
    date: "December 2nd, 2025",
    topic: "Final Project Development (Continued)",
    topics: [
      "Project refinement and testing",
      "Performance optimization",
      "Documentation and presentation prep",
      "Peer code reviews"
    ],
    readings: ["Project-specific resources"],
    assignments: ["Final project development", "Peer reviews"],
    notes: "Continue developing and refining your final project."
  },
  {
    week: 16,
    date: "December 9th, 2025",
    topic: "Final Project Presentations",
    topics: [
      "Project presentations",
      "Code demonstrations",
      "Peer feedback",
      "Course wrap-up"
    ],
    readings: ["Presentation preparation"],
    assignments: ["Final project due", "Presentation"],
    notes: "Showcase your skills with a comprehensive final project!"
  }
];

export default function Schedule() {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Course Schedule</h1>
        
        <div className="mb-6">
          <p className="text-gray-600 mb-4">
            This schedule provides a week-by-week breakdown of course topics, readings, and assignments. 
            The schedule is subject to change based on class progress and needs.
          </p>
          
          {/* Quick Navigation */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="text-sm font-semibold text-gray-700">Jump to:</span>
            {scheduleData.map((week) => (
              <a
                key={week.week}
                href={`#week-${week.week}`}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm hover:bg-blue-200 transition-colors"
              >
                Week {week.week}
              </a>
            ))}
          </div>
        </div>

        {/* Schedule Grid */}
        <div className="space-y-6">
          {scheduleData.map((week) => (
            <div key={week.week} id={`week-${week.week}`} className="border border-gray-200 rounded-lg overflow-hidden">
              {/* Week Header */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold">Week {week.week}: {week.topic}</h2>
                  <span className="text-blue-100 font-medium">{week.date}</span>
                </div>
              </div>
              
              {/* Week Content */}
              <div className="p-6 space-y-6">
                {/* Topics */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    <span className="text-blue-600 mr-2">📚</span>
                    Topics Covered
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                    {week.topics.map((topic, index) => (
                      <li key={index}>{topic}</li>
                    ))}
                  </ul>
                </div>

                {/* Readings and Assignments */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                      <span className="text-green-600 mr-2">📖</span>
                      Required Readings
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                      {week.readings.map((reading, index) => (
                        <li key={index}>{reading}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                      <span className="text-purple-600 mr-2">📝</span>
                      Assignments
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                      {week.assignments.map((assignment, index) => (
                        <li key={index}>{assignment}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Notes */}
                {week.notes && (
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                      <span className="text-yellow-600 mr-2">💡</span>
                      Notes
                    </h3>
                    <p className="text-gray-700">{week.notes}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Schedule Summary */}
        <div className="mt-8 bg-gray-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Schedule Summary</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Phase 1: Fundamentals (Weeks 1-4)</h3>
              <p className="text-sm text-gray-600">HTML, CSS, and responsive design</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Phase 2: Interactivity (Weeks 5-8)</h3>
              <p className="text-sm text-gray-600">JavaScript and DOM manipulation</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Phase 3: Modern Development (Weeks 9-15)</h3>
              <p className="text-sm text-gray-600">React, APIs, and final project</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 