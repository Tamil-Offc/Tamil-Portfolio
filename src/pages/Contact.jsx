import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp, FaInstagram, FaDownload, FaPaperPlane } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate sending delay
    setTimeout(() => {
      const mailtoLink = `mailto:tamiloffc@gmail.com?subject=Message from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${encodeURIComponent(formData.email)}`;
      window.location.href = mailtoLink;
      setIsSent(true);
      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
      
      setTimeout(() => setIsSent(false), 3000);
    }, 1500);
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/my-resume.pdf";
    link.download = "Karthick_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const buttonHover = {
    scale: 1.03,
    transition: { duration: 0.2 }
  };

  const buttonTap = {
    scale: 0.98
  };

  return (
    <section id="contact" className="bg-gradient-to-b from-black to-gray-900 text-white py-16 px-4 sm:px-6 lg:px-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <motion.h2 
          className="text-4xl sm:text-5xl font-bold text-center text-blue-400 mb-10 sm:mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Let's Connect
        </motion.h2>

        <motion.div 
          className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Contact Info */}
          <motion.div 
            className="bg-gray-900 p-6 rounded-xl sm:rounded-2xl shadow-xl w-full max-w-md border border-gray-800 hover:border-blue-400 transition-colors duration-300"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-400 mb-4">Get in Touch</h3>
            <p className="text-gray-300 mb-6 text-sm sm:text-base">Looking for a developer? Let's build something amazing together!</p>
            
            <motion.div className="space-y-4" variants={containerVariants}>
              <motion.p className="flex items-center gap-3 text-gray-300 text-sm sm:text-base" variants={itemVariants}>
                <FaEnvelope className="text-blue-400 text-lg" /> 
                <a href="mailto:tamiloffc@gmail.com" className="hover:underline hover:text-blue-300 transition-colors">tamiloffc@gmail.com</a>
              </motion.p>
              <motion.p className="flex items-center gap-3 text-gray-300 text-sm sm:text-base" variants={itemVariants}>
                <FaPhone className="text-blue-400 text-lg" /> 
                <span>+91 93459 66193</span>
              </motion.p>
              <motion.p className="flex items-center gap-3 text-gray-300 text-sm sm:text-base" variants={itemVariants}>
                <FaMapMarkerAlt className="text-blue-400 text-lg" /> 
                <span>Madurai, Tamil Nadu</span>
              </motion.p>
              
              <motion.div 
                className="flex gap-6 mt-6 text-2xl"
                variants={itemVariants}
              >
                <a href="https://wa.me/919345966193" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition-colors">
                  <FaWhatsapp />
                </a>
                <a href="https://instagram.com/draken.__x_" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300 transition-colors">
                  <FaInstagram />
                </a>
              </motion.div>
            </motion.div>

            {/* <motion.button 
              onClick={downloadResume}
              className="mt-8 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md w-full transition-colors duration-300 text-sm sm:text-base"
              whileHover={buttonHover}
              whileTap={buttonTap}
            >
              <FaDownload /> Download Resume
            </motion.button> */}
          </motion.div>

          {/* Contact Form */}
          <motion.form 
            onSubmit={handleSubmit}
            className="bg-gray-900 p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-xl w-full max-w-lg border border-gray-800 hover:border-blue-400 transition-colors duration-300"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-400 mb-6">Send a Message</h3>
            
            <motion.div className="space-y-4" variants={containerVariants}>
              <motion.div className="mb-4" variants={itemVariants}>
                <label className="block text-gray-300 mb-2 text-sm sm:text-base">Your Name</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-blue-400 focus:border-transparent focus:outline-none text-sm sm:text-base" 
                  placeholder="Enter your name" 
                  required 
                />
              </motion.div>
              
              <motion.div className="mb-4" variants={itemVariants}>
                <label className="block text-gray-300 mb-2 text-sm sm:text-base">Your Email</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-blue-400 focus:border-transparent focus:outline-none text-sm sm:text-base" 
                  placeholder="Enter your email" 
                  required 
                />
              </motion.div>
              
              <motion.div className="mb-4" variants={itemVariants}>
                <label className="block text-gray-300 mb-2 text-sm sm:text-base">Message</label>
                <textarea 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-blue-400 focus:border-transparent focus:outline-none text-sm sm:text-base" 
                  rows="4" 
                  placeholder="Write your message..." 
                  required
                ></textarea>
              </motion.div>
            </motion.div>

            <motion.button 
              type="submit" 
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-md transition-colors duration-300 text-sm sm:text-base mt-4"
              whileHover={buttonHover}
              whileTap={buttonTap}
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Sending...
                </div>
              ) : (
                <>
                  <FaPaperPlane /> Send Message
                </>
              )}
            </motion.button>

            <AnimatePresence>
              {isSent && (
                <motion.p 
                  className="text-green-400 mt-4 text-sm sm:text-base text-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  Message sent successfully!
                </motion.p>
              )}
            </AnimatePresence>
          </motion.form>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Contact;