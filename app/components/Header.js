export default function Header() {
    return (
      <header className="flex justify-between items-center p-6 bg-gray-800 text-white">
        <div className="text-xl font-bold">AI Tutor LMS</div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#features" className="hover:text-gray-400">Features</a></li>
            <li><a href="#demo" className="hover:text-gray-400">Demo</a></li>
            <li><a href="#testimonials" className="hover:text-gray-400">Testimonials</a></li>
          </ul>
        </nav>
        <div>
          <button className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700">Login</button>
          <button className="ml-2 px-4 py-2 bg-green-500 rounded hover:bg-green-600">Sign Up</button>
        </div>
      </header>
    );
  }
  