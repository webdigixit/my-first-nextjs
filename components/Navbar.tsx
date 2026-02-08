import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* לוגו או שם האתר */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              MySite
            </Link>
          </div>

          {/* לינקים לניווט */}
          <div className="flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Home
            </Link>
            <Link href="/users" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Users
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              About
            </Link>
          </div>

          {/* כפתור קריאה לפעולה (אופציונלי) */}
          <div className="hidden md:block">
            <button className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}