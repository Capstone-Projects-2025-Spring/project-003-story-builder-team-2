import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing

function Home() {
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Navigation Bar */}
      <NavBar />

      {/* Main Section */}
      <MainSection navigate={navigate} />

      {/* How It Works Section */}
      <HowItWorksSection />
    </div>
  );
}

// NavBar Component
const NavBar = () => (
  <nav className="bg-white shadow-md">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center text-2xl font-bold">
          Story Builder
        </div>
        {/* Navigation Links */}
        <div className="hidden md:flex space-x-4 items-center">
          <a href="#how-it-works" className="text-gray-700 hover:text-gray-900">
            How It Works
          </a>
          <a href="#signup" className="text-blue-600 hover:text-blue-800">
            Get Started
          </a>
        </div>
      </div>
    </div>
  </nav>
);

// MainSection Component
const MainSection = ({ navigate }) => (
  <header className="bg-blue-600 text-white py-20">
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-4">Create and Perfect Your Story!</h1>
      <p className="text-lg mb-6">
        Build AI agents to write stories in the style of legendary authors. Use them to create,
        collaborate and refine until the perfect story is crafted.
      </p>
      <button
        onClick={() => navigate("/agent")} // Navigate to AgentScreen
        className="bg-white text-blue-600 font-semibold py-2 px-4 rounded hover:bg-gray-100"
      >
        Start Your Story
      </button>
    </div>
  </header>
);

// HowItWorksSection Component
const HowItWorksSection = () => (
  <section id="how-it-works" className="bg-gray-100 py-20">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12">How It Works</h2>
      <ol className="list-decimal list-inside text-lg">
        <li>Create agents with specific writing styles.</li>
        <li>Give them a story prompt.</li>
        <li>Agents outline the story and compete for the best version.</li>
        <li>Receive critiques, set goals, and improve the story iteratively.</li>
        <li>Repeat until the story is fully crafted.</li>
      </ol>
    </div>
  </section>
);

export default Home;