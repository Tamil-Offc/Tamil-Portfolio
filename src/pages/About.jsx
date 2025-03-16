import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import profileImage from "../assets/image.png";

function About() {
  return (
    <section id="about" className="bg-black text-white py-16 px-6 md:px-20 lg:px-0">
      <div className="text-center mb-12">
        <motion.h1
          className="text-5xl font-bold text-blue-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hi, I'm Tamilarasan
        </motion.h1>
        <motion.p
          className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1.5 }}
        >
          A <span className="text-blue-400">22-year-old</span> Backend Developer
          and DevOps Engineer with <span className="text-blue-400">1 Year</span> of Experience.
        </motion.p>
      </div>

      <div className="w-full px-0 flex flex-col lg:flex-row items-center gap-16 lg:gap-6 px-15">
      {/* Profile Image Section */}
        <Tilt
          tiltMaxAngleX={15}
          tiltMaxAngleY={15}
          glareEnable={true}
          glareMaxOpacity={0.3}
          scale={1.05}
        >
          <motion.img
            src={profileImage}
            alt="Profile"
            className="w-60 h-60 lg:w-72 lg:h-72 rounded-full shadow-lg border-4 border-blue-400 object-cover"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 3 }}
          />
        </Tilt>

        {/* About Content Section */}
        <motion.div
          className="max-w-3xl text-center lg:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 3 }}
        >
          <h2 className="text-4xl font-bold text-blue-400 mb-4">About Me</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            I am a <span className="text-blue-400 font-semibold">Full-Stack Developer </span>  
            with <span className="text-blue-400">1 year</span> of experience in building  
            <span className="text-blue-400"> responsive web and mobile applications</span>.  
       
            I specialize in <span className="text-blue-400">React, MUI, Bootstrap, and Expo CLI </span>  
            for frontend development and <span className="text-blue-400">Java, Spring Boot, Hibernate,  
            and Strapi</span> for backend development.
          </p>

          {/* Leadership & Mentorship */}
          <h3 className="text-2xl font-semibold text-blue-400 mt-6">Leadership & Mentorship</h3>
          <p className="text-gray-300 text-lg">
            I have been a <span className="text-blue-400">Team Leader</span> and  
            <span className="text-blue-400"> React Mentor</span> for over a year, mentoring developers  
            and helping them improve their skills.
          </p>

          {/* Problem-Solving & Competitive Programming */}
          <h3 className="text-2xl font-semibold text-blue-400 mt-6">Problem-Solving & Competitive Programming</h3>
          <p className="text-gray-300 text-lg">
            I have solved <span className="text-blue-400">250+ W3Resource problems</span> in React,  
            enhancing my problem-solving skills and expertise in building dynamic and efficient web applications.
          </p>

          {/* DevOps & Cloud Technologies */}
          <h3 className="text-2xl font-semibold text-blue-400 mt-6">DevOps & Cloud Technologies</h3>
          <ul className="text-gray-300 text-lg list-disc list-inside">
            <li>Docker, Kubernetes, Jenkins for CI/CD and containerization</li>
            <li>Linux & AWS for cloud infrastructure management</li>
          </ul>

          {/* Advanced System Automation */}
          {/* <h3 className="text-2xl font-semibold text-blue-400 mt-6">Advanced System Automation</h3>
          <p className="text-gray-300 text-lg">
            Worked with <span className="text-blue-400">Kafka, Rule and Drools</span> for  
            automating complex systems.
          </p> */}
        </motion.div>
      </div>
    </section>
  );
}

export default About;
