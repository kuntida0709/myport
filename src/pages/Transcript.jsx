import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
export default function Transcript() {
  return (
    <div className="min-h-screen bg-[#f8f8f8] font-sans">
      <Navbar />

      <div className="max-w-5xl mx-auto px-8 py-20">
        <h1 className="text-5xl font-bold mb-10">Transcript</h1>

        {/* preview */}
        <div className="bg-white p-6 rounded-xl shadow mb-10">
          <iframe src="/kuntida-transcript.pdf" className="w-full h-[700px]"></iframe>
        </div>

        {/* download */}
        <div className="flex gap-6 mt-8">
          {/* ปุ่มซ้าย */}
          <Link
            to="/resume"
            className="px-6 py-3 border border-gray-400 rounded-lg
    hover:bg-gray-900 hover:text-white
    hover:-translate-y-1 hover:shadow-lg
    transition duration-300"
          >
            Resume
          </Link>

          {/* ปุ่มขวา */}
          <a
            href="/kuntida-transcript.pdf"
            download
            className="px-6 py-3 border border-black rounded-lg
    hover:bg-black hover:text-white
    hover:-translate-y-1 hover:shadow-lg
    transition duration-300"
          >
            Download Transcript
          </a>
        </div>
      </div>
    </div>
  );
}
