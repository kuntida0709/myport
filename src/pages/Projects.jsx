import Navbar from "../components/Navbar";

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#f8f8f8] font-sans">
      <Navbar />

      <div className="max-w-6xl mx-auto px-8 py-20">
        {/* Title */}
        <h1 className="text-5xl font-bold mb-16">Projects</h1>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Project 1 */}
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-xl hover:-translate-y-2 transition duration-300">
            <h2 className="text-2xl font-semibold mb-4">
              AI-Driven Poultry Farm Management System
            </h2>

            <p className="text-gray-600 mb-6">
              A web application designed to assist poultry farmers using AI. The
              system can answer farm-related questions, analyze chicken
              diseases, and generate raising plans such as feed schedules,
              vaccines, and water management based on farm conditions.
            </p>

            <ul className="text-gray-600 space-y-2 mb-6 list-disc pl-5">
              <li>AI chatbot for poultry farming questions</li>
              <li>Disease analysis from symptoms</li>
              <li>Automatic raising plan generation</li>
              <li>Farm data tracking and dashboard</li>
            </ul>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-gray-100 rounded-md text-sm">
                React
              </span>
              <span className="px-3 py-1 bg-gray-100 rounded-md text-sm">
                FastAPI
              </span>
              <span className="px-3 py-1 bg-gray-100 rounded-md text-sm">
                PostgreSQL
              </span>
              <span className="px-3 py-1 bg-gray-100 rounded-md text-sm">
                AI
              </span>
              <span className="px-3 py-1 bg-gray-100 rounded-md text-sm">
                ChromaDB
              </span>
            </div>
            {/* buttons */}
            <div className="flex gap-4">
              <a
                href="https://github.com/kuntida0709/project68demo4.git"
                target="_blank"
                className="px-5 py-2 border border-black rounded-lg
                hover:bg-black hover:text-white
                transition duration-300"
              >
                View Code
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-xl hover:-translate-y-2 transition duration-300">
            <h2 className="text-2xl font-semibold mb-4">
              Cocktail Community Mobile App
            </h2>

            <p className="text-gray-600 mb-6">
              A community-based mobile application for cocktail enthusiasts.
              Users can explore cocktail recipes from an external API, track
              drinks they have tried, and interact with other users. The app
              includes gamification features to encourage users to try more
              cocktail recipes.
            </p>

            <ul className="text-gray-600 space-y-2 mb-6 list-disc pl-5">
              <li>Browse cocktail recipes from external API</li>
              <li>Firebase authentication system</li>
              <li>Like and comment system</li>
              <li>Track cocktails users have tried</li>
              <li>Achievement badge and leveling system</li>
            </ul>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-gray-100 rounded-md text-sm">
                Flutter
              </span>
              <span className="px-3 py-1 bg-gray-100 rounded-md text-sm">
                Dart
              </span>
              <span className="px-3 py-1 bg-gray-100 rounded-md text-sm">
                Firebase
              </span>
              <span className="px-3 py-1 bg-gray-100 rounded-md text-sm">
                REST API
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
