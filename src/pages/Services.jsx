import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaDatabase, FaCode, FaBug, FaTools, FaLaptopCode } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";

const services = [
  {
    title: "Frontend Development",
    description:
      "Building modern and responsive frontend applications using Vite, React Native (Expo Go), Tailwind CSS, MUI, and Bootstrap. \n- Implementing reusable and scalable UI components. \n- Ensuring accessibility, performance, and mobile-first design principles. \n- Creating smooth animations and interactive UI with Framer Motion.",
    icon: <FaLaptopCode className="text-blue-500 text-4xl md:text-5xl" />,
  },
  {
    title: "System Design",
    description:
      "Designing scalable and efficient systems for creating new products. \n- Defining entities, relationships, and data flow. \n- Ensuring scalability and performance optimization. \n- Managing one-way and two-way data binding constraints in relationships.",
    icon: <FaProjectDiagram className="text-green-500 text-4xl md:text-5xl" />,
  },
  {
    title: "Solving Critical Problems & Providing Solutions",
    description:
      "Identifying, analyzing, and solving complex problems to optimize business processes. \n- Debugging and troubleshooting production issues. \n- Enhancing system performance and reliability.",
    icon: <FaBug className="text-yellow-500 text-4xl md:text-5xl" />,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    }
  },
  hover: {
    y: -10,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const Services = () => {
  return (
    <section id="services" className="py-12 md:py-16 lg:py-20 bg-black text-white px-4 sm:px-6">
      <div className="container mx-auto text-center mb-12 lg:mb-16">
        <motion.h1 
          className="text-4xl sm:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Services
        </motion.h1>
        <motion.p 
          className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Offering top-tier skills in frontend and backend development, system design, problem-solving, and DevOps automation.
        </motion.p>
      </div>
      
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover="hover"
            className="flex"
          >
            <Tilt 
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              scale={1.03}
              glareEnable={true}
              glareMaxOpacity={0.1}
              glareColor="#ffffff"
              glarePosition="all"
              transitionSpeed={1500}
              className="w-full h-full"
            >
              <motion.div 
                className="bg-gray-900 p-5 md:p-6 rounded-xl md:rounded-2xl shadow-lg flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 w-full h-full min-h-[280px] md:min-h-[320px] border border-gray-800 hover:border-gray-600"
                whileTap={{ scale: 0.98 }}
              >
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-300 text-xs sm:text-sm whitespace-pre-line">
                  {service.description}
                </p>
              </motion.div>
            </Tilt>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;