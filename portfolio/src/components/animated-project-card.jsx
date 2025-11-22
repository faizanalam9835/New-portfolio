import { motion } from "framer-motion";

export const AnimatedProjectCard = ({
  title,
  description,
  image,
  tags = [],       // ← your data has "tags", not "tech"
  liveUrl,         // ← your data uses liveUrl
  githubUrl,       // ← your data uses githubUrl
  index
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      className="bg-white/5 rounded-2xl overflow-hidden shadow-lg border border-white/10 backdrop-blur-xl flex flex-col"
    >
      
      {/* IMAGE + Hover Overlay */}
      <div className="relative group w-full h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
        />

        {/* Buttons on hover */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              className="px-4 py-2 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition"
            >
              Live Demo
            </a>
          )}

          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              className="px-4 py-2 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition"
            >
              GitHub
            </a>
          )}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>

        <p className="text-muted-foreground text-sm flex-grow">
          {description}
        </p>

        {/* TECH STACK — bottom aligned */}
        <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap gap-2">
          {Array.isArray(tags) &&
            tags.map((item, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-sm rounded-full"
              >
                {item}
              </span>
            ))}
        </div>
      </div>

    </motion.div>
  );
};
