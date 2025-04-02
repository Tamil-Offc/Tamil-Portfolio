import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { Link } from "react-scroll";

function Footer() {
  const socialLinks = [
    { 
      icon: <FaGithub />, 
      link: "https://github.com/Tamil-Offc/Tamil-Portfolio",
      color: "hover:text-gray-300",
      tooltip: "GitHub"
    },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/tamil-arasan-091539325/",
      color: "hover:text-blue-500",
      tooltip: "LinkedIn"
    },
    { 
      icon: <FaEnvelope />, 
      link: "mailto:tamiloffc@gmail.com",
      color: "hover:text-red-400",
      tooltip: "Email"
    }
  ];

  const navItems = ["About", "Skill", "Projects", "Services", "Contact"];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const hoverEffect = {
    scale: 1.05,
    transition: { duration: 0.2 }
  };

  const socialHover = {
    scale: [1, 1.2, 1.2, 1.2, 1],
    rotate: [0, 10, -10, 10, 0],
    transition: { duration: 0.8 }
  };

  return (
    <motion.footer
      className="bg-black text-white py-12 px-4 sm:px-6 lg:px-20 border-t border-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Logo / Name */}
        <motion.div
          className="mb-6"
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3 }
          }}
        >
          <Link 
            to="home" 
            smooth={true} 
            duration={600}
            className="text-3xl sm:text-4xl font-bold text-blue-400 cursor-pointer"
          >
            Tamil Portfolio
          </Link>
        </motion.div>

        {/* Social Icons */}
        <motion.div 
          className="flex gap-6 mb-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {socialLinks.map((social, index) => (
            <motion.div
              key={index}
              className="relative group"
              variants={item}
              whileHover="hover"
            >
              <motion.a
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-2xl text-gray-400 ${social.color} transition-colors duration-300`}
                whileHover={socialHover}
                whileTap={{ scale: 0.9 }}
                aria-label={social.tooltip}
              >
                {social.icon}
              </motion.a>
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                {social.tooltip}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Navigation Links */}
        <motion.nav
          className="mb-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.ul className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base">
            {navItems.map((item, index) => (
              <motion.li
                key={index}
                variants={item}
                whileHover={{
                  y: -3,
                  color: "#60a5fa",
                  transition: { duration: 0.2 }
                }}
              >
                <Link
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={600}
                  offset={-80}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 cursor-pointer px-2 py-1"
                  activeClass="text-blue-400 font-medium"
                  spy={true}
                >
                  {item}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </motion.nav>

        {/* Divider Line */}
        <motion.div
          className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent my-4"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />

        {/* Copyright */}
        <motion.div
          className="mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 text-xs sm:text-sm">
            &copy; {new Date().getFullYear()} Tamilarasan Saravanan. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-1">
            Crafted with React, Tailwind CSS, and Framer Motion
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;