import { motion } from "framer-motion";
import { AnimatedSkillCard } from "../components/animated-skill-card";

export const Skills = () => {
  const skills = [
    { name: "HTML5", icon: "https://i.pinimg.com/736x/8c/9a/9a/8c9a9ad529e3e94059189b12ccd70ac9.jpg" },
    { name: "CSS3", icon: "https://i.pinimg.com/736x/69/9e/3b/699e3b329647db00a7e8519c58f5771f.jpg" },
    { name: "JavaScript", icon: "https://i.pinimg.com/1200x/0e/4f/dc/0e4fdce8ac22e09688c580e5bc4dcd7d.jpg" },
    { name: "React.js", icon: "https://i.pinimg.com/736x/f5/b9/91/f5b9918f76b778e799b6aa54c270061e.jpg" },
    { name: "Next.js", icon: "https://i.pinimg.com/736x/3f/f5/f9/3ff5f96fafaf0dacf5e6a8e69072f2dc.jpg" },
    { name: "Node.js", icon: "https://i.pinimg.com/1200x/a4/22/c1/a422c15025eb156516c67e0bbdd2f382.jpg" },
    { name: "Express.js", icon: "https://i.pinimg.com/736x/40/e9/7a/40e97aae3a908371bbd98e3fa4cc845c.jpg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "REST APIs", icon: "https://i.pinimg.com/736x/a2/6f/ad/a26fadd01c4a7cc59dc4f9b6cd08cc90.jpg" },
    { name: "Tailwind CSS", icon: "https://i.pinimg.com/736x/cd/00/4b/cd004b701e51ee32dd3225b910575320.jpg" },
    { name: "Bootstrap", icon: "https://i.pinimg.com/736x/28/55/4d/28554d154d62417398fdc9b062464263.jpg" },
    { name: "npm", icon: "https://i.pinimg.com/736x/7e/90/00/7e9000bb633f4f9dcde4b5b2f4e47bba.jpg" },
    { name: "Vite", icon: "https://i.pinimg.com/736x/17/6e/07/176e07a5cd42bc0765062d16eea24c48.jpg" },
    { name: "Git", icon: "https://i.pinimg.com/1200x/a9/5a/ad/a95aadde4325065401dc6942ea5dad90.jpg" },
    { name: "GitHub", icon: "https://i.pinimg.com/736x/64/88/0b/64880b9b0fe5b53bbe3f7280d262b33f.jpg" },
  ];

  return (
    <section id="skills" className="py-32 relative">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display mb-4">
            Skills &{" "}
            <span style={{ color: "#6a7c75" }}>Technologies</span>
          </h2>

          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "#333" }}
          >
            Constantly learning and mastering technologies to build modern web applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto"
        >
          {skills.map((skill, index) => (
            <AnimatedSkillCard key={index} {...skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
