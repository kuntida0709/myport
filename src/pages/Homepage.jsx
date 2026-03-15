import Navbar from "../components/Navbar";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div className="min-h-screen flex flex-col font-sans">

      {/* Background */}
      <div className="fixed inset-0 -z-10 grid grid-cols-2">
        <div className="bg-[#d6c9bb]"></div>
        <div className="bg-[#f4f4f4]"></div>
      </div>

      <Navbar />

      <main className="flex-grow flex items-center justify-center px-10 py-10">

        <div className="flex w-full max-w-6xl rounded-3xl overflow-hidden shadow-2xl">

          {/* LEFT PROFILE */}
          <div className="bg-[#e8ded4] w-2/5 p-12 flex flex-col items-center text-center gap-5">

            <div className="w-56 h-56 rounded-full overflow-hidden shadow-xl">
              <img
                src="/dddd.png"
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>

            <h2 className="text-3xl font-bold leading-tight">
              Kuntida <br /> Wattana
            </h2>

            <div className="w-12 h-1 bg-blue-600"></div>

            <p className="text-sm tracking-widest text-gray-600">
              ELECTRONIC COMPUTER TECHNOLOGY
            </p>

            <div className="flex gap-4 mt-4">

              <a
                href="https://github.com/kuntida0709"
                className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full hover:bg-black hover:text-white transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.instagram.com/mch0x_.cxre/"
                className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full hover:bg-pink-500 hover:text-white transition"
              >
                <FaInstagram />
              </a>

            </div>

          </div>

          {/* RIGHT CONTENT */}
          <div className="bg-white w-3/5 p-14 overflow-y-auto">

            <h1 className="text-6xl font-bold mb-4">Hello</h1>

            <p className="text-gray-600 mb-8 text-lg">
              I’m an Electronic Computer Technology student passionate about
              backend development, intelligent systems, and building software
              that connects technology with real-world applications.
            </p>

            {/* BUTTONS */}
            <div className="flex gap-5 mb-12">

              <Link
                to="/resume"
                className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold
                hover:bg-blue-700 hover:-translate-y-1 transition"
              >
                RESUME
              </Link>

              <Link
                to="/projects"
                className="border border-black px-8 py-3 rounded-full font-semibold
                hover:bg-black hover:text-white hover:-translate-y-1 transition"
              >
                PROJECTS
              </Link>

            </div>

            {/* TECH STACK */}
            <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>

            <div className="flex flex-wrap gap-3 mb-10">

              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm">Python</span>
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm">FastAPI</span>
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm">React</span>
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm">PostgreSQL</span>
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm">Flutter</span>
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm">Firebase</span>

            </div>

            {/* SKILLS */}
            <h2 className="text-2xl font-bold mb-4">Skills</h2>

            <ul className="grid grid-cols-2 gap-3 text-gray-700 mb-10">

              <li>Backend Development</li>
              <li>API Design</li>
              <li>Database Management</li>
              <li>Web Development</li>
              <li>Mobile App Development</li>
              <li>System Design</li>

            </ul>

            {/* PROJECTS */}
            <h2 className="text-2xl font-bold mb-4">Featured Projects</h2>

            <div className="space-y-4">

              <div className="p-5 border rounded-xl hover:shadow-lg transition">

                <h3 className="text-lg font-bold mb-1">
                  AI Poultry Farm System
                </h3>

                <p className="text-gray-600 text-sm">
                  Web-based system for poultry farm management featuring
                  AI-driven raising plans, disease analysis, and farm data
                  tracking. Built with React, FastAPI, and PostgreSQL.
                </p>

              </div>

              <div className="p-5 border rounded-xl hover:shadow-lg transition">

                <h3 className="text-lg font-bold mb-1">
                  Cocktail Community App
                </h3>

                <p className="text-gray-600 text-sm">
                  Flutter mobile application for cocktail enthusiasts with
                  cocktail API integration, Firebase authentication,
                  favorites, achievements, and drink progression system.
                </p>

              </div>

            </div>

          </div>

        </div>

      </main>

      {/* FOOTER */}
      <footer className="flex justify-between items-center px-16 py-6 text-sm border-t bg-white">

        <div>© 2026 Kuntida Wattana</div>

        <div className="flex gap-12">

          <div>
            <p className="font-semibold">Call</p>
            <p>000000</p>
          </div>

          <div>
            <p className="font-semibold">Email</p>
            <p>email@example.com</p>
          </div>

        </div>

      </footer>

    </div>
  );
}