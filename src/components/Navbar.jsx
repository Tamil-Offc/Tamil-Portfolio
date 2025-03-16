import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["About", "Skill", "Projects", "Services", "Contact"];

  return (
    <nav className="bg-black text-white fixed w-full top-0 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <motion.h1
          className="text-2xl font-bold hover:text-blue-400 cursor-pointer"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          Tamil-Portfolio
        </motion.h1>

        {/* Hamburger Menu Button (for mobile) */}
        <motion.button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
        >
          ☰
        </motion.button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          {navItems.map((item, index) => (
            <motion.li
              key={index}
              className="hover:text-blue-400 cursor-pointer"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link
                to={item.toLowerCase()}
                smooth={true}
                duration={600}
                offset={-50}
                className="cursor-pointer"
              >
                {item}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu (Animated) */}
      <motion.div
        className={`fixed top-0 right-0 w-2/3 h-full ${
          isOpen ? "bg-black" : "bg-black"
        } p-6 shadow-lg md:hidden`}
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? "0%" : "100%" }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      >
        <motion.button
          className="text-white text-2xl mb-4"
          onClick={() => setIsOpen(false)}
          whileHover={{ rotate: 90 }}
        >
          ✕
        </motion.button>
        <ul className="flex flex-col gap-4 text-lg">
          {navItems.map((item, index) => (
            <motion.li
              key={index}
              className="hover:text-blue-400 cursor-pointer"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link
                to={item.toLowerCase()}
                smooth={true}
                duration={600}
                offset={-50}
                className="cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </nav>
  );
}

export default Navbar;
