import Navbar from "../components/Navbar";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function Homepage() {

  const [text, setText] = useState("");
  const fullText = "Backend Developer";

  // typing effect
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 40);

    return () => clearInterval(interval);
  }, []);

  // mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [6, -6]);
  const rotateY = useTransform(mouseX, [-300, 300], [-6, 6]);

  function handleMouseMove(e) {
    mouseX.set(e.clientX - window.innerWidth / 2);
    mouseY.set(e.clientY - window.innerHeight / 2);
  }

  const tech = [
    "Python",
    "FastAPI",
    "React",
    "PostgreSQL",
    "Flutter",
    "Firebase",
    "Docker",
    "Machine Learning"
  ];

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex flex-col font-sans relative overflow-hidden"
    >

      {/* gradient background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#d6c9bb] via-[#eee7df] to-[#f4f4f4]" />

      {/* floating blobs */}
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 left-20 w-72 h-72 bg-blue-200 opacity-20 blur-3xl rounded-full"
      />

      <motion.div
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-10 right-10 w-80 h-80 bg-blue-100 opacity-20 blur-3xl rounded-full"
      />

      <Navbar />

      <main className="flex-grow flex items-center justify-center px-10 py-10">

        <motion.div
          style={{ rotateX, rotateY }}
          className="flex w-full max-w-6xl rounded-3xl overflow-hidden shadow-2xl bg-white"
        >

          {/* LEFT PROFILE */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="bg-gradient-to-b from-[#e8ded4] to-[#dfd2c5] w-2/5 p-12 flex flex-col items-center text-center gap-6"
          >

            <motion.div
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-56 h-56 rounded-full overflow-hidden shadow-xl ring-4 ring-white/60"
            >
              <img
                src="/dddd.png"
                alt="profile"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <h2 className="text-3xl font-bold">
              Kuntida <br /> Wattana
            </h2>

            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded" />

            <p className="text-sm tracking-widest text-gray-600">
              ELECTRONIC COMPUTER TECHNOLOGY
            </p>

            <div className="flex gap-4">

              <motion.a
                whileHover={{ y: -5, scale: 1.1 }}
                href="https://github.com/kuntida0709"
                className="w-10 h-10 flex items-center justify-center bg-white shadow rounded-full hover:bg-black hover:text-white"
              >
                <FaGithub />
              </motion.a>

              <motion.a
                whileHover={{ y: -5, scale: 1.1 }}
                href="https://www.instagram.com/mch0x_.cxre/"
                className="w-10 h-10 flex items-center justify-center bg-white shadow rounded-full hover:bg-pink-500 hover:text-white"
              >
                <FaInstagram />
              </motion.a>

            </div>

          </motion.div>

          {/* RIGHT SIDE */}
          <div className="w-3/5 p-14">

            <h1 className="text-6xl font-bold mb-4">Hello</h1>

            {/* typing intro */}
            <p className="text-blue-600 font-medium mb-6 h-6">
              {text}
            </p>

            <p className="text-gray-600 mb-10 text-lg">
              I build backend systems, intelligent tools, and applications
              that bridge software with real-world systems.
            </p>

            {/* buttons */}
            <div className="flex gap-5 mb-12">

              <motion.div
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0px 10px 30px rgba(59,130,246,0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/resume"
                  className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold"
                >
                  RESUME
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/projects"
                  className="border border-black px-8 py-3 rounded-full font-semibold hover:bg-black hover:text-white"
                >
                  PROJECTS
                </Link>
              </motion.div>

            </div>

            {/* TECH STACK marquee */}
            <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>

            <div className="overflow-hidden mb-12">

              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="flex gap-4 w-max"
              >

                {[...tech, ...tech].map((t, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm"
                  >
                    {t}
                  </span>
                ))}

              </motion.div>

            </div>

            {/* PROJECTS */}
            <h2 className="text-2xl font-bold mb-4">Featured Projects</h2>

            <div className="space-y-4">

              <motion.div
                whileHover={{ y: -10, rotateX: 4 }}
                className="p-5 border rounded-xl hover:shadow-lg"
              >
                <h3 className="font-bold mb-1">
                  AI Poultry Farm System
                </h3>

                <p className="text-gray-600 text-sm">
                  Web platform for poultry farm planning, disease analysis,
                  and intelligent farm data tracking.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -10, rotateX: 4 }}
                className="p-5 border rounded-xl hover:shadow-lg"
              >
                <h3 className="font-bold mb-1">
                  Cocktail Community App
                </h3>

                <p className="text-gray-600 text-sm">
                  Flutter mobile app with cocktail API, Firebase auth,
                  achievements and drink progression.
                </p>
              </motion.div>

            </div>

          </div>

        </motion.div>

      </main>

      {/* footer */}
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