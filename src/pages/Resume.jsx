import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { FaGithub, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
};

export default function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen font-sans relative overflow-hidden"
    >

      {/* Background gradient */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#d6c9bb] via-[#eee7df] to-[#f4f4f4]" />

      {/* Floating blobs */}
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 left-20 w-72 h-72 bg-blue-200 opacity-20 blur-3xl rounded-full"
      />

      <motion.div
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-20 right-20 w-80 h-80 bg-blue-100 opacity-20 blur-3xl rounded-full"
      />

      <Navbar />

      <div className="max-w-6xl mx-auto px-8 py-20">

        {/* HEADER */}
        <motion.div
          variants={item}
          initial="hidden"
          animate="show"
          className="mb-24"
        >

          <h1 className="text-5xl font-bold mb-4">
            Resume
          </h1>

          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mb-6" />

          <p className="text-gray-600 max-w-xl text-lg">
            Overview of my education, development experience and software
            projects related to backend development and intelligent systems.
          </p>

        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
        >

          {/* PROFILE */}
          <motion.section
            variants={item}
            className="grid md:grid-cols-3 gap-12 mb-24"
          >

            <div className="text-2xl font-semibold">
              Profile
            </div>

            <motion.div
              whileHover={{ y: -6 }}
              className="md:col-span-2 bg-white p-8 rounded-xl shadow text-gray-700 leading-relaxed"
            >

              Electronic Computer Technology student interested in backend
              development, intelligent systems and full-stack web applications.

              <br /><br />

              Experienced in building applications using Python, FastAPI,
              PostgreSQL and React with focus on practical real-world systems.

            </motion.div>

          </motion.section>

          {/* STATS */}
          <section className="grid grid-cols-3 gap-6 mb-24">

            {[
              { num: "3+", label: "Projects" },
              { num: "6+", label: "Technologies" },
              { num: "2+", label: "Years Coding" }
            ].map((s, i) => (

              <motion.div
                key={i}
                variants={item}
                whileHover={{ y: -6 }}
                className="bg-white p-6 rounded-xl shadow text-center"
              >

                <p className="text-3xl font-bold text-blue-600">
                  {s.num}
                </p>

                <p className="text-gray-500 text-sm mt-1">
                  {s.label}
                </p>

              </motion.div>

            ))}

          </section>

          {/* EDUCATION */}
          <motion.section
            variants={item}
            className="mb-24"
          >

            <h2 className="text-3xl font-bold mb-12">
              Education
            </h2>

            <div className="border-l-2 border-gray-300 pl-10 space-y-10">

              {[
                {
                  year: "2024 – 2026",
                  title: "Electronic Computer Technology",
                  school: "King Mongkut's University of Technology North Bangkok"
                },
                {
                  year: "2022 – 2024",
                  title: "Diploma in Computer Technology",
                  school: "Chanthaburi Technical College"
                },
                {
                  year: "2020 – 2022",
                  title: "Vocational Certificate in Computer Technology",
                  school: "Chanthaburi Technical College"
                }
              ].map((e, i) => (

                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="relative"
                >

                  <div className="absolute -left-[18px] top-2 w-4 h-4 bg-blue-600 rounded-full"></div>

                  <p className="text-sm text-gray-500">{e.year}</p>

                  <h3 className="text-lg font-semibold">
                    {e.title}
                  </h3>

                  <p className="text-gray-600">
                    {e.school}
                  </p>

                </motion.div>

              ))}

            </div>

          </motion.section>

          {/* TECH STACK */}
          <motion.section
            variants={item}
            className="mb-24"
          >

            <h2 className="text-3xl font-bold mb-12">
              Tech Stack
            </h2>

            <div className="flex flex-wrap gap-3">

              {[
                "Python",
                "FastAPI",
                "React",
                "PostgreSQL",
                "HTML",
                "CSS",
                "Java",
                "MySQL",
                "C++",
                "PHP"
              ].map((skill) => (

                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.08 }}
                  className="px-4 py-2 bg-white rounded-full border border-gray-200 text-gray-700 text-sm hover:border-blue-500 hover:text-blue-600"
                >

                  {skill}

                </motion.span>

              ))}

            </div>

          </motion.section>

          {/* PROJECTS */}
          <motion.section
            variants={item}
            className="mb-24"
          >

            <h2 className="text-3xl font-bold mb-12">
              Projects
            </h2>

            <div className="grid md:grid-cols-2 gap-8">

              <motion.div
                whileHover={{ y: -8, rotateX: 3 }}
                className="bg-white p-8 rounded-xl shadow"
              >

                <h3 className="text-xl font-semibold mb-2">
                  AI Poultry Farm Planning System
                </h3>

                <p className="text-gray-600 mb-4">
                  Intelligent system that generates poultry farm plans
                  based on farm data and knowledge documents.
                </p>

                <p className="text-sm text-gray-500 mb-4">
                  Python • FastAPI • React • PostgreSQL
                </p>

                <a
                  href="https://github.com/kuntida0709"
                  className="flex items-center gap-2 text-blue-600 font-semibold hover:translate-x-1 transition"
                >

                  <FaGithub />
                  View Source →

                </a>

              </motion.div>

              <motion.div
                whileHover={{ y: -8, rotateX: 3 }}
                className="bg-white p-8 rounded-xl shadow"
              >

                <h3 className="text-xl font-semibold mb-2">
                  Cocktail Community App
                </h3>

                <p className="text-gray-600 mb-4">
                  Flutter mobile application for cocktail enthusiasts
                  featuring recipes, favorites and achievements.
                </p>

                <p className="text-sm text-gray-500">
                  Flutter • Firebase • REST API
                </p>

              </motion.div>

            </div>

          </motion.section>

        </motion.div>

        {/* BUTTONS */}
        <div className="flex gap-6">

          <motion.a
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 30px rgba(0,0,0,0.25)"
            }}
            href="/kuntida-resume.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg"
          >

            <FaDownload />
            Download Resume

          </motion.a>

          <Link
            to="/transcript"
            className="px-6 py-3 border border-gray-400 rounded-lg
            hover:bg-gray-900 hover:text-white
            hover:-translate-y-1 hover:shadow-lg transition"
          >

            Transcript →

          </Link>

        </div>

      </div>

    </motion.div>
  );
}