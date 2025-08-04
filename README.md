# CSC-336 Web Programming Course Website

A modern, responsive course website built with Next.js for CSC-336 Web Programming at American University.

## Features

- **Professional Design**: Clean, modern interface with American University branding
- **Easy Updates**: Simple data-driven approach for schedule and content updates
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Fast Performance**: Built with Next.js for optimal loading speeds
- **Accessible**: Follows web accessibility best practices

## Pages

- **Home**: Course overview, learning objectives, and quick links
- **Syllabus**: Comprehensive course policies, grading, and requirements
- **Schedule**: Week-by-week breakdown of topics, readings, and assignments

## Quick Start

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [your-repo-url]
cd csc336-fall2025
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Updating Content

### Updating the Schedule

The schedule is the easiest thing to update! Simply edit the `scheduleData` array in `src/app/schedule/page.js`:

```javascript
const scheduleData = [
  {
    week: 1,
    date: "Jan 13-17",
    topic: "Introduction to Web Development",
    topics: [
      "Course overview and expectations",
      "Web architecture and client-server model",
      // Add or modify topics here
    ],
    readings: ["Chapters 1-2: HTML & CSS by Duckett"],
    assignments: ["Install development tools", "Complete HTML basics tutorial"],
    notes: "First week focuses on getting everyone set up and comfortable with the basics."
  },
  // Add new weeks or modify existing ones
];
```

### Updating the Syllabus

Edit the content directly in `src/app/syllabus/page.js`. The syllabus is structured with clear sections that you can easily modify:

- Course Information
- Instructor Information
- Learning Objectives
- Grading
- Course Policies
- Required Materials

### Updating the Homepage

Modify `src/app/page.js` to update:
- Course overview
- Learning objectives
- Quick links
- Technologies covered

### Updating Navigation

Edit the navigation links in `src/app/layout.js`:

```javascript
<div className="flex items-center space-x-8">
  <a href="/" className="hover:text-blue-200 transition-colors">Home</a>
  <a href="/syllabus" className="hover:text-blue-200 transition-colors">Syllabus</a>
  <a href="/schedule" className="hover:text-blue-200 transition-colors">Schedule</a>
  {/* Add new navigation items here */}
</div>
```

## Customization

### Colors and Branding

The website uses Tailwind CSS for styling. To change colors:

1. **Primary Colors**: Update the blue colors in the layout and components
2. **Background**: Modify the gray background colors
3. **Accent Colors**: Change the gradient colors in headers

### Adding New Pages

1. Create a new folder in `src/app/` (e.g., `src/app/resources/`)
2. Add a `page.js` file in that folder
3. Update the navigation in `src/app/layout.js`

Example new page:
```javascript
// src/app/resources/page.js
export default function Resources() {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Course Resources</h1>
        {/* Add your content here */}
      </div>
    </div>
  );
}
```

### Adding Images

1. Place images in the `public/` folder
2. Reference them in your components:
```javascript
import Image from 'next/image';

<Image src="/your-image.jpg" alt="Description" width={400} height={300} />
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically on every push

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository to [Netlify](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `.next`

### Deploy to GitHub Pages

1. Add to `package.json`:
```json
{
  "scripts": {
    "export": "next build && next export"
  }
}
```

2. Build and deploy:
```bash
npm run export
```

## File Structure

```
csc336-fall2025/
├── src/
│   └── app/
│       ├── layout.js          # Main layout with navigation
│       ├── page.js            # Homepage
│       ├── syllabus/
│       │   └── page.js        # Syllabus page
│       └── schedule/
│           └── page.js        # Schedule page (easy to update)
├── public/                    # Static assets
├── package.json
└── README.md
```

## Technologies Used

- **Next.js 14**: React framework with App Router
- **Tailwind CSS**: Utility-first CSS framework
- **JavaScript**: No TypeScript as requested
- **Responsive Design**: Mobile-first approach

## Tips for Easy Updates

1. **Schedule Updates**: Only modify the `scheduleData` array - no other code changes needed
2. **Content Updates**: Most content is in plain text - easy to edit
3. **Styling**: Use Tailwind classes for quick styling changes
4. **Navigation**: Add new pages by creating folders and `page.js` files

## Support

If you need help updating the website:

1. Check this README for common tasks
2. Review the existing code structure
3. The schedule is the most frequently updated part - focus on that first

## License

This project is for educational use at American University.
