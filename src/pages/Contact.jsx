import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp, FaInstagram, FaDownload, FaPaperPlane } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:tamiloffc@gmail.com?subject=Message from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${encodeURIComponent(formData.email)}`;
    window.location.href = mailtoLink;
    setIsSent(true);
    setTimeout(() => setIsSent(false), 3000);
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/my-resume.pdf"; // Ensure this file is in the "public" folder
    link.download = "Karthick_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="bg-gradient-to-b from-black to-gray-900 text-white py-16 px-6 md:px-20">
      <motion.h2 className="text-5xl font-bold text-center text-blue-400 mb-12" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        Let's Connect
      </motion.h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-12">
        {/* Contact Info */}
        <motion.div className="bg-black p-6 rounded-2xl shadow-2xl max-w-md w-full border border-gray-700" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <h3 className="text-2xl font-semibold text-blue-400 mb-4">Get in Touch</h3>
          <p className="text-gray-300 mb-6">Looking for a developer? Let's build something amazing together!</p>
          <div className="space-y-4">
            <p className="flex items-center gap-3 text-gray-300">
              <FaEnvelope className="text-blue-400" /> <a href="mailto:tamiloffc@gmail.com" className="hover:underline">tamiloffc@gmail.com</a>
            </p>
            <p className="flex items-center gap-3 text-gray-300"><FaPhone className="text-blue-400" /> 9345966193</p>
            <p className="flex items-center gap-3 text-gray-300"><FaMapMarkerAlt className="text-blue-400" /> Madurai, Tamil Nadu</p>
            <div className="flex gap-6 mt-4 text-3xl">
              <a href="https://wa.me/919345966193" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-500 transition-all">
                <FaWhatsapp />
              </a>
              <a href="https://instagram.com/draken.__x_" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-500 transition-all">
                <FaInstagram />
              </a>
            </div>
          </div>
          {/* <motion.button onClick={downloadResume} className="mt-6 flex items-center justify-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md w-full hover:bg-blue-600 transition duration-300" whileHover={{ scale: 1.1 }}>
            <FaDownload /> Download Resume
          </motion.button> */}
        </motion.div>

        {/* Contact Form */}
        <motion.form onSubmit={handleSubmit} className="bg-black p-8 rounded-2xl shadow-2xl w-full max-w-lg border border-gray-700" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <h3 className="text-2xl font-semibold text-blue-400 mb-6">Send a Message</h3>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2">Your Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-400 focus:outline-none" placeholder="Enter your name" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2">Your Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-400 focus:outline-none" placeholder="Enter your email" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2">Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-400 focus:outline-none" rows="4" placeholder="Write your message..." required></textarea>
          </div>
          <motion.button type="submit" className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 text-lg" whileHover={{ scale: 1.1 }}>
            <FaPaperPlane /> Send Message
          </motion.button>
          {isSent && <p className="text-green-400 mt-4">Message sent successfully!</p>}
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
