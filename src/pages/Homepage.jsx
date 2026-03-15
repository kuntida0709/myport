import Navbar from "../components/Navbar";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Homepage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col font-sans relative overflow-hidden"
    >

      {/* Background gradient */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#d6c9bb] via-[#eee7df] to-[#f4f4f4]"></div>

      {/* Blur decorations */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-100 opacity-20 blur-3xl rounded-full"></div>

      <Navbar />

      <main className="flex-grow flex items-center justify-center px-10 py-10">

        <div className="flex w-full max-w-6xl rounded-3xl overflow-hidden shadow-2xl">

          {/* LEFT PROFILE */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-b from-[#e8ded4] to-[#dfd2c5] w-2/5 p-12 flex flex-col items-center text-center gap-5"
          >

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="w-56 h-56 rounded-full overflow-hidden shadow-xl ring-4 ring-white/50"
            >
              <img
                src="/dddd.png"
                alt="profile"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <h2 className="text-3xl font-bold leading-tight tracking-wide">
              Kuntida <br /> Wattana
            </h2>

            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded"></div>

            <p className="text-sm tracking-widest text-gray-600">
              ELECTRONIC COMPUTER TECHNOLOGY
            </p>

            <div className="flex gap-4 mt-4">

              <motion.a
                whileHover={{ y: -3, scale: 1.1 }}
                href="https://github.com/kuntida0709"
                className="w-10 h-10 flex items-center justify-center bg-white shadow rounded-full hover:bg-black hover:text-white transition"
              >
                <FaGithub />
              </motion.a>

              <motion.a
                whileHover={{ y: -3, scale: 1.1 }}
                href="https://www.instagram.com/mch0x_.cxre/"
                className="w-10 h-10 flex items-center justify-center bg-white shadow rounded-full hover:bg-pink-500 hover:text-white transition"
              >
                <FaInstagram />
              </motion.a>

            </div>

          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white w-3/5 p-14 overflow-y-auto"
          >

            <h1 className="text-6xl font-bold mb-4 tracking-tight">
              Hello
            </h1>

            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              I’m an Electronic Computer Technology student passionate about
              backend development, intelligent systems, and building software
              that connects technology with real-world applications.
            </p>

            {/* BUTTONS */}
            <div className="flex gap-5 mb-12">

              <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/resume"
                  className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-3 rounded-full font-semibold"
                >
                  RESUME
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/projects"
                  className="border border-gray-800 px-8 py-3 rounded-full font-semibold hover:bg-black hover:text-white transition"
                >
                  PROJECTS
                </Link>
              </motion.div>

            </div>

            {/* TECH STACK */}
            <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>

            <div className="flex flex-wrap gap-3 mb-10">

              {[
                "Python",
                "FastAPI",
                "React",
                "PostgreSQL",
                "Flutter",
                "Firebase"
              ].map((tech) => (

                <motion.span
                  whileHover={{ scale: 1.1 }}
                  key={tech}
                  className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm cursor-default"
                >
                  {tech}
                </motion.span>

              ))}

            </div>

            {/* SKILLS */}
            <h2 className="text-2xl font-bold mb-4">Skills</h2>

            <ul className="grid grid-cols-2 gap-3 text-gray-700 mb-10">

              {[
                "Backend Development",
                "API Design",
                "Database Management",
                "Web Development",
                "Mobile App Development",
                "System Design"
              ].map((skill) => (

                <motion.li
                  whileHover={{ x: 5 }}
                  key={skill}
                  className="bg-gray-50 px-4 py-2 rounded-lg"
                >
                  {skill}
                </motion.li>

              ))}

            </ul>

            {/* PROJECTS */}
            <h2 className="text-2xl font-bold mb-4">Featured Projects</h2>

            <div className="space-y-4">

              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="p-5 border rounded-xl hover:shadow-lg"
              >

                <h3 className="text-lg font-bold mb-1">
                  AI Poultry Farm System
                </h3>

                <p className="text-gray-600 text-sm">
                  Web-based system for poultry farm management featuring
                  AI-driven raising plans, disease analysis, and farm data
                  tracking. Built with React, FastAPI, and PostgreSQL.
                </p>

              </motion.div>

              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="p-5 border rounded-xl hover:shadow-lg"
              >

                <h3 className="text-lg font-bold mb-1">
                  Cocktail Community App
                </h3>

                <p className="text-gray-600 text-sm">
                  Flutter mobile application for cocktail enthusiasts with
                  cocktail API integration, Firebase authentication,
                  favorites, achievements, and drink progression system.
                </p>

              </motion.div>

            </div>

          </motion.div>

        </div>

      </main>

      {/* FOOTER */}
      <footer className="flex justify-between items-center px-16 py-6 text-sm border-t bg-white">

        <div>© 2026 Kuntida Wattana</div>

        <div className="flex gap-12">

          <div>
            <p className="font-semibold">Call</p>
            <p>091-818-3845</p>
          </div>

          <div>
            <p className="font-semibold">Email</p>
            <p>oing1602@gmail.com</p>
          </div>

        </div>

      </footer>

    </motion.div>
  );
}