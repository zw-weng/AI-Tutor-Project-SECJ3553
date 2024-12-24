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
            <li><a href="#about" className="hover:text-gray-400">About</a></li>
          </ul>
        </nav>
      </header>

      {/* Upload Resources Section */}
      <section id="upload" className="py-16 bg-gray-100">
        <h2 className="text-center text-3xl font-bold mb-8">Upload Resources</h2>
        <div className="text-center">
          <input type="file" className="border p-2 rounded" />
          <button className="ml-4 px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            Upload
          </button>
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

      

      {/* Footer */}
      <footer className="py-6 bg-gray-800 text-white text-center">
        <p>&copy; 2024 AI Tutor LMS. All rights reserved.</p>
      </footer>

      {/* Chatbox */}
      <div className="fixed right-4 bottom-4 w-80 h-96 bg-white shadow-lg rounded-lg flex flex-col">
        <div className="bg-blue-500 text-white px-4 py-2 rounded-t-lg text-lg font-semibold">
          Chat with AI Tutor
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {/* Chat messages */}
          <div className="text-gray-700">Hi! How can I assist you today?</div>
        </div>
        <div className="p-2 flex items-center border-t">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 border p-2 rounded"
          />
          <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
