import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { FaFilePdf, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

export default function Transcript() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f8f8] to-[#ececec] font-sans">

      <Navbar />

      <div className="max-w-5xl mx-auto px-8 py-20">

        {/* HEADER */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mb-16"
        >
          <h1 className="text-5xl font-bold mb-4">
            Transcript
          </h1>

          <div className="w-16 h-1 bg-blue-600 mb-6"></div>

          <p className="text-gray-600 max-w-xl text-lg">
            Academic transcript showing completed coursework and academic
            performance during my studies in Electronic Computer Technology.
          </p>
        </motion.div>


        {/* PREVIEW CARD */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          whileHover={{ y: -6 }}
          className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition mb-12"
        >

          <div className="flex items-center gap-3 mb-4 text-gray-700">
            <FaFilePdf className="text-red-500" />
            <span className="font-semibold">Transcript Preview</span>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="border rounded-lg overflow-hidden"
          >
            <iframe
              src="/kuntida-transcript.pdf"
              className="w-full h-[700px]"
            ></iframe>
          </motion.div>

        </motion.div>


        {/* BUTTONS */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap gap-6 items-center"
        >

          <Link
            to="/resume"
            className="px-6 py-3 border border-gray-400 rounded-lg
            hover:bg-gray-900 hover:text-white
            hover:-translate-y-1 hover:shadow-lg
            transition duration-300"
          >
            ← Resume
          </Link>

          <motion.a
            whileHover={{ y: -3 }}
            href="/kuntida-transcript.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 border border-black rounded-lg
            hover:bg-black hover:text-white
            hover:shadow-lg transition"
          >
            <FaDownload />
            Download Transcript
          </motion.a>

        </motion.div>


        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-sm text-gray-500 mt-6"
        >
          If the preview does not load, please download the transcript using
          the button above.
        </motion.p>

      </div>

    </div>
  );
}