"use client"; // Mark this component as a client component

import { useRouter } from "next/navigation"; // Import from next/navigation
import FileUpload from "./components/FileUpload"; // Import the FileUpload component

export default function Home() {
  const router = useRouter(); // Use the router from next/navigation

  const handleUploadSuccess = () => {
    // Redirect to the "Function" page upon successful file upload
    router.push("/function");
  };

  return (
    <div>
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-gray-800 text-white">
        <div className="text-xl font-bold">AI Tutor LMS</div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-gray-400">Home</a></li>
            <li><a href="#features" className="hover:text-gray-400">Features</a></li>
          </ul>
        </nav>
      </header>

      {/* Upload Resources Section */}
      <section id="upload" className="py-16 bg-gray-100">
        <h2 className="text-center text-3xl font-bold mb-8">Upload Resources</h2>
        <div className="flex justify-center">
          <div className="w-full max-w-sm">
            <FileUpload />
          </div>
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

      {/* Footer */}
      <footer className="py-6 bg-gray-800 text-white text-center">
        <p>&copy; 2024 AI Tutor LMS. All rights reserved.</p>
      </footer>
    </div>
  );
}