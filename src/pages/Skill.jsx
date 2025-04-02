import { motion } from "framer-motion";
import {
  FaReact,
  FaJsSquare,
  FaCss3Alt,
  FaHtml5,
  FaNodeJs,
  FaGitAlt,
  FaVuejs,
  FaDatabase,
  FaDocker,
  FaJenkins,
  FaLinux,
  FaAws,
  FaCloud,
  FaCogs,
} from "react-icons/fa";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import Tilt from "react-parallax-tilt";
import { SiVite, SiTailwindcss, SiMui } from "react-icons/si";
import { SiStrapi } from "react-icons/si";
import { SiExpo } from "react-icons/si";
import { Tooltip } from "react-tooltip";

const skills = [
  {
    name: "Vite ( React )",
    icon: <SiVite className="text-green-400 text-3xl" />,
    percentage: 90,
  },
  {
    name: "Expo go",
    icon: <SiExpo className=" text-3xl" />,
    percentage: 80,
  },
  {
    name: "Strapi CMS",
    icon: <SiStrapi className="text-blue-400 text-3xl" />,
    percentage: 75,
  },
  {
    name: "Git & GitHub",
    icon: <FaGitAlt className="text-red-500 text-3xl" />,
    percentage: 75,
    tooltip: ["Version Control", "GitHub Actions", "Deployment Strategies"],
  },
  {
    name: "Java & Spring Boot",
    icon: <FaCogs className="text-blue-600 text-3xl" />,
    percentage: 80,
    tooltip: [
      "Microservices Architecture",
      "Memory Management",
      "REST API Development",
      "Complex Logic Implementation",
    ],
  },
  {
    name: "MySQL ",
    icon: <FaDatabase className="text-yellow-600 text-3xl" />,
    percentage: 75,
    tooltip: [
      "Database Constraints",
      "Joins & Relationships",
      "Query Optimization",
    ],
  },
  {
    name: "Algorithms",
    icon: <FaCogs className="text-blue-500 text-3xl" />,
    percentage: 70,
    tooltip: [
      "Leases Algorithm",
      "Round Robin Algorithm",
      "Optimized Data Structures",
    ],
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-cyan-400 text-3xl" />,
    percentage: 50,
    tooltip: ["Utility-first CSS", "Responsive Design", "Custom Configurations"],
  },
  {
    name: "Material UI",
    icon: <SiMui className="text-blue-500 text-3xl" />,
    percentage: 60,
    tooltip: ["Component Library", "Theming", "Custom Components"],
  },
];

function Skill() {
  return (
    <section className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-4">
      <div className="mt-10 w-full max-w-4xl text-center">
        <h2 className="text-3xl font-semibold text-blue-400 mb-4">
          My Skill Set
        </h2>
        <p className="text-base text-gray-300 mb-6">
          As a frontend developer skilled in <span className="text-blue-400">React, MUI, Bootstrap, and Expo CLI</span>,  
          I also specialize in backend technologies like <span className="text-blue-400">Java, Spring Boot, and DevOps</span>,  
          enabling me to build robust and scalable applications.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, index) => (
            <Tilt
              key={index}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              scale={1.05}
              className="p-2 bg-black rounded-lg shadow-md w-28 transition duration-300 ease-in-out hover:brightness-125 relative group"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex flex-col items-center gap-1"
              >
                {skill.icon}
                <p className="text-white text-xs font-medium text-center">
                  {skill.name}
                </p>
                <div className="w-full bg-gray-700 rounded-full h-1.5 mt-1">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.percentage}%` }}
                    transition={{ duration: 1, delay: index * 0.3 }}
                    className="bg-blue-400 h-1.5 rounded-full"
                  ></motion.div>
                </div>
                <p className="text-gray-400 text-xs">{skill.percentage}%</p>

                {skill.tooltip && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 -top-12 hidden group-hover:block bg-gray-800 z-[6000] text-white text-xs px-3 py-2 rounded-md shadow-lg w-48 text-center">
                    {skill.tooltip.map((line, i) => (
                      <div key={i} className="py-0.5">
                        {line}
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skill;