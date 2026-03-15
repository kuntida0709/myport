import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Resume() {
  return (
    <div className="min-h-screen bg-[#f8f8f8] font-sans">
      <Navbar />

      <div className="max-w-6xl mx-auto px-8 py-20">
        {/* HEADER */}
        <div className="mb-20">
          <h1 className="text-6xl font-bold mb-4">Resume</h1>

          <div className="w-20 h-1 bg-blue-600 mb-6"></div>

          <p className="text-gray-600 max-w-xl">
            My background in Electronic Computer Technology including education,
            development skills and software projects.
          </p>
        </div>

        {/* PROFILE */}
        <section className="grid md:grid-cols-3 gap-10 mb-20">
          <div className="text-2xl font-semibold">Profile</div>

          <div className="md:col-span-2 text-gray-600 leading-relaxed">
            Electronic Computer Technology student seeking a Full-Stack
            Developer internship. Currently interested in web and application
            development, including both frontend and backend development.
            Experienced in building web applications using Python, FastAPI,
            PostgreSQL, and React.
          </div>
        </section>

        {/* EDUCATION */}
        <section className="mt-20">
          <h2 className="text-2xl font-semibold mb-8">Education</h2>

          <div className="space-y-8">
            {/* ที่เรียน 1 */}
            <div className="border-l-2 border-gray-300 pl-6">
              <p className="text-sm text-gray-500">2024 – 2026</p>
              <h3 className="text-lg font-semibold">
                Electronic Computer Technology
              </h3>
              <p className="text-gray-600">
                King Mongkut's University of Technology North Bangkok
              </p>
            </div>

            {/* ที่เรียน 2 */}
            <div className="border-l-2 border-gray-300 pl-6">
              <p className="text-sm text-gray-500">2022 – 2024</p>
              <h3 className="text-lg font-semibold">
                Diploma in Computer Technology
              </h3>
              <p className="text-gray-600">chanthaburi technical collage</p>
            </div>

            {/* ที่เรียน 3 */}
            <div className="border-l-2 border-gray-300 pl-6">
              <p className="text-sm text-gray-500">2020 – 2022</p>
              <h3 className="text-lg font-semibold">
                Vocational Certificate in Computer Technology
              </h3>
              <p className="text-gray-600">chanthaburi technical collage</p>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="mb-20 mt-20">
          <h2 className="text-3xl font-bold mb-10">Skills</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition text-center">
              Python
            </div>

            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition text-center">
              FastAPI
            </div>

            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition text-center">
              React
            </div>

            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition text-center">
              PostgreSQL
            </div>
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition text-center">
                HTML/CSS
            </div>
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition text-center">
              java
            </div>
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition text-center">
              mySQL
            </div>
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition text-center">
              C++
            </div>
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition text-center">
              PHP
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10">Projects</h2>

          <div className="space-y-10">
            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
              <p className="text-xl font-semibold mb-2">
                AI Poultry Farm Planning System
              </p>

              <p className="text-gray-600 mb-4">
                AI system that generates poultry farming plans based on farm
                data and knowledge documents.
              </p>

              <p className="text-sm text-gray-500">
                Python • FastAPI • React • PostgreSQL
              </p>
            </div>
          </div>
        </section>

        {/* DOCUMENTS */}
        <div className="flex gap-6 mt-8">
          {/* ปุ่มซ้าย */}
          <a
            href="/kuntida-resume.pdf"
            download
            className="px-6 py-3 border border-black rounded-lg
    hover:bg-black hover:text-white
    hover:-translate-y-1 hover:shadow-lg
    transition duration-300"
          >
            Download Resume
          </a>

          {/* ปุ่มขวา */}
          <Link
            to="/transcript"
            className="px-6 py-3 border border-gray-400 rounded-lg
    hover:bg-gray-900 hover:text-white
    hover:-translate-y-1 hover:shadow-lg
    transition duration-300"
          >
            Transcript
          </Link>
        </div>
      </div>
    </div>
  );
}
