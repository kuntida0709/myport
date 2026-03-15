import Navbar from "../components/Navbar";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

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
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="max-w-5xl mx-auto py-20 px-8">

        <h1 className="text-5xl font-bold mb-12 text-center">
          Contact Me
        </h1>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Info */}
          <div className="bg-white p-8 rounded-xl shadow">

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
                <p>oing1602@gmail.com</p>
              </div>

              <div>
                <p className="font-semibold">GitHub</p>
                <p>github.com/kuntida0709</p>
              </div>

              <div>
                <p className="font-semibold">Location</p>
                <p>Thailand</p>
              </div>

            </div>

          </div>

          {/* Contact Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-white p-8 rounded-xl shadow flex flex-col gap-4"
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="border p-3 rounded"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="border p-3 rounded"
            />

            <textarea
              name="message"
              placeholder="Message"
              required
              className="border p-3 rounded h-32"
            />

            <button
              type="submit"
              className="bg-black text-white py-3 rounded hover:bg-gray-800 transition"
            >
              Send Message
            </button>

            {sent && (
              <p className="text-green-600 font-semibold">
                ✅ Message sent successfully!
              </p>
            )}

          </form>

        </div>

      </div>

    </div>
  );
}