import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

const projects = [
  {
    title: "Netflix-Static",
    description:
      "A static Netflix-themed website built using React and CSS, designed specifically for desktop.",
    img: "/image.png",
  },
  {
    title: "Pickle E-Commerce Platform",
    description:
      "An e-commerce platform with seamless payment integration and a user-friendly interface.",
    img: "/Screenshot 2025-01-25 123707.png",
  },
  {
    title: "School-Project",
    description: "A static school management website built with Vite and Tailwind CSS, showcasing a modern UI for visual presentation .",
    img: "/Screenshot 2025-03-16 002554.png",
  },
  // {
  //   title: " Nova  Clothing ",
  //   description: "A complete hotel booking and management solution.",
  //   img: "/Screenshot 2025-03-16 004214.png",
  // },
  {
    title: "Queuing System",
    description: "An automated queuing system for efficient customer service.",
    img: "/Supermarket queue on cash register.jpeg",
  },
  {
    title: "Microfinance System",
    description: "A microfinance application for loan and credit management.",
    img: "/Screenshot 2025-03-16 004800.png",
  },
];

// Project details mapped by title
const projectDetails = {
  "Netflix-Static": {
    technologies: ["React", "CSS"],
    description: [
      "Developed a static Netflix-themed website using React and CSS.",
      "Designed a visually appealing UI optimized for desktop screens.",
      "Implemented structured component-based architecture for maintainability.",
      "Integrated Firebase Authentication for user login and authentication.",
      "Fetched movie data using TheMovieDB API with secure token authentication.",
    ],
  },
  "Pickle E-Commerce Platform": {
    technologies: ["Vite", "Bootstrap", "Strapi (Headless CMS)", "MySQL"],
    description: [
      "Developed a scalable e-commerce platform using Vite and Bootstrap for a responsive frontend.",
      "Implemented Strapi (Headless CMS) for backend content management.",
      "Integrated MySQL for efficient product and order management.",
    "Built an admin panel for tracking sales and analytics."
    ], 
  },
  "School-Project": {
  "technologies": ["Vite", "Tailwind CSS"],
  "description": [
    "Developed a static school management website using Vite and Tailwind CSS.",
    "Designed a clean and modern UI for showcasing school-related information.",
    "Structured the project with reusable components for scalability."
  ]
},
//  "Nova Clothing": {
//   "technologies": ["HTML", "CSS", "JavaScript"],
//   "description": [
//     "Developed a static clothing store website using HTML, CSS, and JavaScript.",
//     "Designed a visually appealing and responsive layout for showcasing products.",
//     "Implemented interactive elements for an engaging user experience."
//   ]
// },

  "Queuing System": {
  "technologies": ["Java", "Spring Boot", "Hibernate", "React Native", "Expo Go"],
  "description": [
    "Developed a mobile-based queue management system using React Native and Expo Go.",
    "Implemented real-time appointment scheduling and queue tracking for improved customer service.",
    "Optimized user experience with a smooth and responsive mobile interface.",
    "Integrated backend services with Spring Boot and Hibernate for secure and efficient data management."
  ]
},

  "Microfinance System": {
  "technologies": [
    "Java", 
    "Spring Boot", 
    "Hibernate",
    "Mysql", 
    "Microservices Architecture", 
    "Vite", 
    "MUI"
  ],
  "description": [
    "Developed a dynamic and responsive microfinance system with separate applications for Field Officers, Customers, and Admin.",
    "Implemented loan application, approval workflows, and repayment tracking.",
    "Designed an intuitive UI using Vite and MUI for seamless user interaction.",
    "Integrated microservices for enhanced scalability and performance.",
    "Ensured role-based access control for secure and efficient system management."
  ]
},
};

function Project() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedProject) {
      setLoading(true);
      setTimeout(() => setLoading(false), 500); // Simulate loading delay
    }
  }, [selectedProject]);

  return (
    <section
      id="projects"
      className="bg-black text-white py-20 px-6 md:px-20 overflow-hidden"
    >
     <div className="w-full text-center mb-12">
  <motion.h1
    className="text-5xl font-bold mb-4 text-blue-400 tracking-wider"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
   My Projects
  </motion.h1>
  <motion.p
    className="text-gray-400 max-w-2xl mx-auto"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.2, duration: 1 }}
  >
    Showcasing my expertise in frontend and backend development,  
    problem-solving, and DevOps automation with hands-on projects.
  </motion.p>
</div>


      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {projects.map((project, index) => (
          <Tilt key={index} tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.02}>
            <motion.div
              className="relative bg-opacity-30 bg-black-800 backdrop-blur-lg border border-black-700 rounded-xl shadow-lg p-4 transition-all duration-500 hover:shadow-blue-500/70 min-h-[350px] cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedProject(project.title)}
            >
              <motion.img
                src={project.img}
                alt={project.title}
                className="w-full h-40 sm:h-40 md:h-30 my-3 object-cover shadow-lg rounded-md transition-transform duration-300 hover:scale-105"
              />
              <h3 className="text-xl font-semibold mt-2 text-blue-400 transition-transform duration-300 hover:scale-105">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm mt-1 leading-relaxed">
                {project.description}
              </p>
              <motion.button
                className="mt-3 px-4 py-1 bg-gray-800 text-white border border-gray-600 rounded-md hover:bg-blue-500 hover:border-blue-500 transition-all duration-300 shadow-md"
                whileHover={{ scale: 1.1 }}
              >
                More
              </motion.button>
            </motion.div>
          </Tilt>
        ))}
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto z-50 p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-gray-900 p-6 rounded-lg shadow-2xl overflow-y-auto max-w-md sm:max-w-lg w-full border border-blue-500 relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              {loading ? (
                <motion.p
                  className="text-center text-white"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  Loading...
                </motion.p>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-blue-400">
                    {selectedProject}
                  </h2>

                  <h3 className="text-xl font-semibold mt-4 text-white">
                    📌 Description
                  </h3>
                  <ul className="list-disc pl-5 mt-2 text-gray-300">
                    {projectDetails[selectedProject]?.description?.map(
                      (point, index) => <li key={index}>{point}</li>
                    ) || <li>No additional details available.</li>}
                  </ul>

                  <h3 className="text-xl font-semibold mt-4 text-white">
                    🛠 Technologies Used
                  </h3>
                  <ul className="list-disc pl-5 mt-2 text-gray-300">
                    {projectDetails[selectedProject]?.technologies?.map(
                      (tech, index) => <li key={index}>{tech}</li>
                    ) || <li>N/A</li>}
                  </ul>

                  <motion.button
                    className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition duration-300"
                    whileHover={{ scale: 1.2, rotate: 90 }}
                    onClick={() => setSelectedProject(null)}
                  >
                    <FaTimes size={24} />
                  </motion.button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Project;