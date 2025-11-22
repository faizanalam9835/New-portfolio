import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            className="text-4xl md:text-6xl font-display mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            About <span className="gradient-text">Me</span>
          </motion.h2>
          
          <div className="space-y-6 text-center max-w-3xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
               Proactive full-stack web developer skilled in JavaScript and MERN stack (MongoDB, Express.js, 
                React.js, Node.js). Collaborative team player translating project requirements into scalable 
                web applications. Exceptional problem-solving and attention to detail, continuously updated 
                with web dev trends for software excellence.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              I believe in writing clean, maintainable code and creating intuitive user 
              experiences. I'm eager to contribute to meaningful projects and grow as a 
              developer while working with experienced professionals.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              When I'm not coding, you'll find me exploring new frameworks, contributing 
              to open-source projects, or learning from the developer community through 
              blogs and tutorials.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};