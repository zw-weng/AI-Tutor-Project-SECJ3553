export default function Home() {
  return (
    <div>
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-gray-800 text-white">
        <div className="text-xl font-bold">AI Tutor LMS</div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-gray-400">Home</a></li>
            <li><a href="#features" className="hover:text-gray-400">Features</a></li>
            <li><a href="#pricing" className="hover:text-gray-400">Pricing</a></li>
            <li><a href="#about" className="hover:text-gray-400">About</a></li>
            <li><a href="#login" className="hover:text-gray-400">Login</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center bg-blue-500 text-white py-20">
        <h1 className="text-4xl font-bold">Transform Learning with AI</h1>
        <p className="mt-4 text-lg">Personalized, Adaptive, and AI-Powered LMS</p>
        <div className="mt-6">
          <button className="px-6 py-2 bg-green-500 rounded hover:bg-green-600">Get Started Free</button>
          <button className="ml-4 px-6 py-2 bg-gray-800 rounded hover:bg-gray-900">Request a Demo</button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-100">
        <h2 className="text-center text-3xl font-bold mb-8">Features</h2>
        <div className="flex justify-around">
          <div className="text-center">
            <img src="/icons/ai-tutor.svg" alt="AI Tutor" className="w-16 mx-auto" />
            <h3 className="mt-4 font-semibold">AI-Powered Tutors</h3>
            <p className="mt-2 text-gray-600">Get personalized tutoring with AI.</p>
          </div>
          <div className="text-center">
            <img src="/icons/personalized.svg" alt="Personalized Learning" className="w-16 mx-auto" />
            <h3 className="mt-4 font-semibold">Personalized Learning Paths</h3>
            <p className="mt-2 text-gray-600">Adaptive courses tailored to learners.</p>
          </div>
          <div className="text-center">
            <img src="/icons/analytics.svg" alt="Analytics" className="w-16 mx-auto" />
            <h3 className="mt-4 font-semibold">Real-Time Analytics</h3>
            <p className="mt-2 text-gray-600">Track progress and improve outcomes.</p>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section id="demo" className="py-16 bg-white">
        <h2 className="text-center text-3xl font-bold mb-8">Interactive Demo</h2>
        <div className="text-center">
          <textarea
            placeholder="Ask our AI tutor anything..."
            className="w-3/4 p-4 border rounded"
          ></textarea>
          <button className="ml-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Submit
          </button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-gray-100">
        <h2 className="text-center text-3xl font-bold mb-8">What Users Say</h2>
        <div className="flex justify-around">
          <blockquote className="w-1/3 text-center italic">
            "This LMS improved our outcomes by 30%!" - User 1
          </blockquote>
          <blockquote className="w-1/3 text-center italic">
            "The AI tutor is a game-changer!" - User 2
          </blockquote>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-white">
        <h2 className="text-center text-3xl font-bold mb-8">Pricing</h2>
        <div className="flex justify-around">
          <div className="text-center border p-6 rounded">
            <h3 className="font-bold">Basic Plan</h3>
            <p className="mt-4">$10/month</p>
            <button className="mt-6 px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600">
              Choose Plan
            </button>
          </div>
          <div className="text-center border p-6 rounded">
            <h3 className="font-bold">Pro Plan</h3>
            <p className="mt-4">$20/month</p>
            <button className="mt-6 px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600">
              Choose Plan
            </button>
          </div>
          <div className="text-center border p-6 rounded">
            <h3 className="font-bold">Enterprise</h3>
            <p className="mt-4">Custom Pricing</p>
            <button className="mt-6 px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-800 text-white text-center">
        <p>&copy; 2024 AI Tutor LMS. All rights reserved.</p>
      </footer>
    </div>
  );
}
