export default function Syllabus() {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Course Syllabus</h1>
        
        {/* Course Information */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Course Information</h2>
            <div className="space-y-2 text-gray-600">
              <div><strong>Course:</strong> CSC-336 Web Programming</div>
              <div><strong>Credits:</strong> 3</div>
              <div><strong>Prerequisites:</strong> CSC-208</div>
              <div><strong>Meeting Time:</strong> 5:30-8:00pm</div>
              <div><strong>Location:</strong> TBD</div>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Instructor Information</h2>
            <div className="space-y-2 text-gray-600">
              <div><strong>Name:</strong> Mike Treanor</div>
              <div><strong>Email:</strong> [treanor@american.edu]</div>
              <div><strong>Office Hours:</strong> TBD</div>
              <div><strong>Office Location:</strong> TBD</div>
            </div>
          </div>
        </div>

        {/* Course Description */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Course Description</h2>
          <p className="text-gray-600 leading-relaxed">
          Web Programming I (3) This course provides students with a strong foundation in the principles of web application development from the fundamentals to current technologies. The course focuses on back-end programming rather than website layouts and front-end design. Topics include creating interactive websites, web application architecture, server-side scripting, databases, client-server interactions, and web security. Students are introduced to specific sets of web programming tools including JavaScript, Node.JS, PhP, Python CGI, and SQL. Students gain an understanding of some of the most important technologies that underlie the popular websites they encounter every day, which is both practical for creating web apps and intellectually interesting for computer scientists.
          </p>
        </div>

        {/* Learning Objectives */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Learning Objectives</h2>
          <p className="text-gray-600 mb-4">By the end of this course, students will be able to:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
            <li>Understand web architecture and client-server communication</li>
            <li>Create semantic, accessible HTML markup</li>
            <li>Style web pages using CSS with responsive design principles</li>
            <li>Write modern JavaScript code using ES6+ features</li>
            <li>Build interactive web applications using React</li>
            <li>Deploy and maintain web applications</li>
            <li>Use version control systems (Git) for collaborative development</li>
            <li>Apply web development best practices and standards</li>
          </ul>
        </div>

        {/* Grading */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Grading</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Assignments (40%)</span>
                  <span className="font-semibold">40%</span>
                </div>
                <div className="flex justify-between">
                  <span>Projects (30%)</span>
                  <span className="font-semibold">30%</span>
                </div>
                <div className="flex justify-between">
                  <span>Participation (10%)</span>
                  <span className="font-semibold">10%</span>
                </div>
                <div className="flex justify-between">
                  <span>Final Project (20%)</span>
                  <span className="font-semibold">20%</span>
                </div>
              </div>
              <div className="border-l-2 border-gray-300 pl-4">
                <h3 className="font-semibold mb-2">Grade Scale</h3>
                <div className="space-y-1 text-sm">
                  <div>A: 93-100%</div>
                  <div>A-: 90-92%</div>
                  <div>B+: 87-89%</div>
                  <div>B: 83-86%</div>
                  <div>B-: 80-82%</div>
                  <div>C+: 77-79%</div>
                  <div>C: 73-76%</div>
                  <div>C-: 70-72%</div>
                  <div>D: 60-69%</div>
                  <div>F: Below 60%</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course Policies */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Course Policies</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Attendance</h3>
              <p className="text-gray-600">
                Regular attendance is expected. Students are responsible for all material covered in class, 
                including announcements and schedule changes.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Late Work</h3>
              <p className="text-gray-600">
                Assignments are due at the beginning of class on the due date. Late assignments will be 
                accepted up to 24 hours after the due date with a 10% penalty. No assignments will be 
                accepted after 24 hours without prior approval.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Academic Integrity</h3>
              <p className="text-gray-600">
                All work must be your own. Collaboration is encouraged for learning, but all submitted 
                work must be original. Plagiarism or cheating will result in a failing grade and may 
                lead to further disciplinary action.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Accommodations</h3>
              <p className="text-gray-600">
                Students with documented disabilities should contact the Academic Support and Access 
                Center (ASAC) to arrange accommodations. Please inform the instructor of any 
                accommodations at the beginning of the semester.
              </p>
            </div>
          </div>
        </div>

        {/* Required Materials */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Required Materials</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Textbooks</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                <li>HTML and CSS: Design and Build Websites by Jon Duckett</li>
                <li>JavaScript and JQuery: Interactive Front-End Web Development by Jon Duckett</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Software & Tools</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                <li>Visual Studio Code or similar code editor</li>
                <li>Git for version control</li>
                <li>Node.js and npm</li>
                <li>Web browser (Chrome, Firefox, Safari, or Edge)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Schedule Overview */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Course Schedule Overview</h2>
          <p className="text-gray-600 mb-4">
            The course is organized into weekly modules covering different aspects of web development. 
            See the <a href="/schedule" className="text-blue-600 hover:underline">detailed schedule</a> for specific topics and assignments.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">Weeks 1-4</h3>
              <p className="text-blue-700">HTML, CSS, and Web Fundamentals</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">Weeks 5-8</h3>
              <p className="text-green-700">JavaScript and DOM Manipulation</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-2">Weeks 9-15</h3>
              <p className="text-purple-700">React, Frameworks, and Final Project</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 