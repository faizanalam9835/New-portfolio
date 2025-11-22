import { motion } from "framer-motion";
import { AnimatedProjectCard } from "../components/animated-project-card";
import { projects } from "../data/constants";

export const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4 max-w-5xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-4 px-6 py-2 rounded-full border"
            style={{
              background: "#d7e2dc40",
              borderColor: "#d7e2dc80",
            }}
          >
            <span className="font-medium" style={{ color: "#000" }}>
              💼 My Work
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-display mb-3">
            Featured{" "}
            <span style={{ color: "#6a7c75" }}>
              Projects
            </span>
          </h2>

          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "#333" }}
          >
            A showcase of my recent work and learning projects that demonstrate my skills.
          </p>
        </motion.div>

        {/* ⭐ FIXED GRID — ALL CARDS SAME HEIGHT & ALIGNED */}
        <div
          className="
            grid 
            grid-cols-1 
            md:grid-cols-2 
            gap-10
            mx-auto
            items-stretch            /* Makes all cards same height */
          "
        >
          {projects.map((project, index) => (
            <div key={index} className="h-full flex"> 
              {/* Forces wrapper to stretch */}
              <AnimatedProjectCard 
                {...project} 
                index={index} 
                className="h-full flex flex-col"  /* ensures uniform height inside */
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
