import Navbar from "../components/Navbar";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

export default function Contact() {

  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jnrf4eq",
        "template_m8g1u2i",
        form.current,
        "9oylJwWBvpcbZdNaV"
      )
      .then(
        () => {
          setSent(true);
          form.current.reset();
        },
        (error) => {
          console.log(error);
          alert("Failed to send message.");
        }
      );
  };

  return (
    <div className="min-h-screen relative overflow-hidden font-sans">

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10">

        <div className="absolute inset-0 bg-gradient-to-br 
        from-[#f8f8f8] via-[#f1f3f7] to-[#ececec]" />

        <div className="absolute inset-0 
        bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),
        linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)]
        bg-[size:60px_60px]" />

        <div className="absolute w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20 top-20 left-20"></div>
        <div className="absolute w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-20 bottom-20 right-20"></div>

      </div>

      <Navbar />

      <div className="max-w-5xl mx-auto py-20 px-8">

        {/* TITLE */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-5xl font-bold mb-12 text-center"
        >
          Contact Me
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-10">

          {/* CONTACT INFO */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="bg-white/90 backdrop-blur p-8 rounded-xl shadow-lg hover:shadow-2xl transition"
          >

            <h2 className="text-2xl font-semibold mb-6">
              Get in Touch
            </h2>

            <p className="text-gray-600 mb-6">
              If you have any questions, project ideas, or just want to
              connect, feel free to send me a message.
            </p>

            <div className="space-y-4 text-gray-700">

              <div>
                <p className="font-semibold">Email</p>
                <p className="hover:text-blue-600 transition">
                  oing1602@gmail.com
                </p>
              </div>

              <div>
                <p className="font-semibold">GitHub</p>
                <a
                  href="https://github.com/kuntida0709"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-600 transition"
                >
                  github.com/kuntida0709
                </a>
              </div>

              <div>
                <p className="font-semibold">Location</p>
                <p>Thailand</p>
              </div>

            </div>

          </motion.div>

          {/* CONTACT FORM */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-white/90 backdrop-blur p-8 rounded-xl shadow-lg flex flex-col gap-4"
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />

            <textarea
              name="message"
              placeholder="Message"
              required
              className="border p-3 rounded h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />

            <button
              type="submit"
              className="bg-black text-white py-3 rounded hover:bg-gray-800 hover:-translate-y-1 hover:shadow-lg transition duration-300"
            >
              Send Message →
            </button>

            {sent && (
              <motion.p
                initial={{ opacity:0 }}
                animate={{ opacity:1 }}
                className="text-green-600 font-semibold"
              >
                ✅ Message sent successfully!
              </motion.p>
            )}

          </motion.form>

        </div>

      </div>

    </div>
  );
}