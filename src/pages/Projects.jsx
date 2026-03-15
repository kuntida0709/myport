import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#f8f8f8] font-sans">

      <Navbar />

      <div className="max-w-6xl mx-auto px-8 py-20">

        {/* TITLE */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mb-16"
        >
          <h1 className="text-5xl font-bold mb-4">
            Projects
          </h1>

          <div className="w-20 h-1 bg-blue-600"></div>
        </motion.div>


        <div className="grid md:grid-cols-2 gap-10">


          {/* PROJECT 1 */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-white p-8 rounded-xl shadow hover:shadow-2xl transition duration-300"
          >

            <h2 className="text-2xl font-semibold mb-4">
              AI-Driven Poultry Farm Management System
            </h2>

            <p className="text-gray-600 mb-6">
              A web application designed to assist poultry farmers using AI.
              The system answers farm questions, analyzes chicken diseases
              and generates raising plans such as feed schedules, vaccines
              and water management.
            </p>

            <ul className="text-gray-600 space-y-2 mb-6 list-disc pl-5">
              <li>AI chatbot for poultry farming questions</li>
              <li>Disease analysis from symptoms</li>
              <li>Automatic raising plan generation</li>
              <li>Farm data tracking and dashboard</li>
            </ul>


            {/* TECH STACK */}
            <div className="flex flex-wrap gap-2 mb-6">

              {["React","FastAPI","PostgreSQL","AI","ChromaDB"].map((tech,i)=>(
                <motion.span
                  key={tech}
                  initial={{ opacity:0, scale:0.8 }}
                  whileInView={{ opacity:1, scale:1 }}
                  transition={{ delay:i*0.05 }}
                  whileHover={{ y:-3 }}
                  className="px-3 py-1 bg-gray-100 rounded-md text-sm
                  hover:bg-blue-100 hover:text-blue-700"
                >
                  {tech}
                </motion.span>
              ))}

            </div>


            {/* BUTTON */}
            <a
              href="https://github.com/kuntida0709/project68demo4.git"
              target="_blank"
              className="inline-block px-5 py-2 border border-black rounded-lg
              hover:bg-black hover:text-white
              hover:-translate-y-1 hover:shadow-lg
              transition duration-300"
            >
              View Code →
            </a>

          </motion.div>



          {/* PROJECT 2 */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-white p-8 rounded-xl shadow hover:shadow-2xl transition duration-300"
          >

            <h2 className="text-2xl font-semibold mb-4">
              Cocktail Community Mobile App
            </h2>

            <p className="text-gray-600 mb-6">
              Community-based mobile application for cocktail enthusiasts.
              Users explore cocktail recipes from an API, track drinks
              they tried and interact with other users with gamification.
            </p>

            <ul className="text-gray-600 space-y-2 mb-6 list-disc pl-5">
              <li>Browse cocktail recipes from external API</li>
              <li>Firebase authentication system</li>
              <li>Like and comment system</li>
              <li>Track cocktails users have tried</li>
              <li>Achievement badge and leveling system</li>
            </ul>


            {/* TECH STACK */}
            <div className="flex flex-wrap gap-2 mb-6">

              {["Flutter","Dart","Firebase","REST API"].map((tech,i)=>(
                <motion.span
                  key={tech}
                  initial={{ opacity:0, scale:0.8 }}
                  whileInView={{ opacity:1, scale:1 }}
                  transition={{ delay:i*0.05 }}
                  whileHover={{ y:-3 }}
                  className="px-3 py-1 bg-gray-100 rounded-md text-sm
                  hover:bg-blue-100 hover:text-blue-700"
                >
                  {tech}
                </motion.span>
              ))}

            </div>

          </motion.div>

        </div>

      </div>

    </div>
  );
}