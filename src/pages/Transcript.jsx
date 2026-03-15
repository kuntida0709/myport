import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { FaFilePdf, FaDownload } from "react-icons/fa";

export default function Transcript() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f8f8] to-[#ececec] font-sans">
      <Navbar />

      <div className="max-w-5xl mx-auto px-8 py-20">
        {/* HEADER */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4">Transcript</h1>

          <div className="w-16 h-1 bg-blue-600 mb-6"></div>

          <p className="text-gray-600 max-w-xl">
            Academic transcript showing completed coursework and academic
            performance during my studies in Electronic Computer Technology.
          </p>
        </div>

        {/* PREVIEW CARD */}
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition mb-10">
          <div className="flex items-center gap-3 mb-4 text-gray-700">
            <FaFilePdf className="text-red-500" />
            <span className="font-semibold">Transcript Preview</span>
          </div>

          <div className="border rounded-lg overflow-hidden">
            <iframe
              src="/kuntida-transcript.pdf"
              className="w-full h-[700px]"
            ></iframe>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex gap-6 mt-8">
          <Link
            to="/resume"
            className="px-6 py-3 border border-gray-400 rounded-lg
            hover:bg-gray-900 hover:text-white
            hover:-translate-y-1 hover:shadow-lg
            transition duration-300"
          >
            ← Resume
          </Link>

          <a
            href="/kuntida-transcript.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 border border-black rounded-lg
            hover:bg-black hover:text-white
            hover:-translate-y-1 hover:shadow-lg
            transition duration-300"
          >
            <FaDownload />
            Download Transcript
          </a>
          <p className="text-sm text-gray-500 mt-4">
            If the preview does not load, please download the transcript using
            the button above.
          </p>
        </div>
      </div>
    </div>
  );
}
