import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CSC-336 Web Programming | American University",
  description: "Course website for CSC-336 Web Programming at American University",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">
          <nav className="bg-blue-800 text-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex items-center">
                  <Link href="/" className="text-xl font-bold hover:text-blue-200 transition-colors">
                    CSC-336 Web Programming
                  </Link>
                </div>
                <div className="flex items-center space-x-8">
                  <Link href="/" className="hover:text-blue-200 transition-colors">Home</Link>
                  <Link href="/syllabus" className="hover:text-blue-200 transition-colors">Syllabus</Link>
                  <Link href="/schedule" className="hover:text-blue-200 transition-colors">Schedule</Link>
                </div>
              </div>
            </div>
          </nav>
          <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {children}
          </main>
          <footer className="bg-gray-800 text-white py-8 mt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <p>&copy; 2025 American University. CSC-336 Web Programming.</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
