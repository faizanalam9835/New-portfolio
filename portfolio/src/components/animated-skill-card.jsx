import { motion } from "framer-motion";

export const AnimatedSkillCard = ({ name, icon, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: index * 0.07, duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.05,
        rotateX: 5,
        rotateY: -5,
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
      }}
      className="
        bg-white/30 
        backdrop-blur-xl 
        rounded-2xl 
        shadow-[0_8px_20px_rgba(0,0,0,0.1)] 
        p-6 
        flex 
        flex-col 
        items-center 
        justify-center
        transition-all 
        duration-300 
        border 
        border-white/40 
        hover:border-white 
        hover:shadow-[0_15px_40px_rgba(0,0,0,0.2)]
      "
    >
      {/* Icon Container */}
      <div
        className="
          w-24 
          h-24 
          md:w-28 
          md:h-28 
          flex 
          items-center 
          justify-center 
          rounded-xl 
          bg-white/50 
          backdrop-blur-md 
          shadow-inner
        "
      >
        <img
          src={icon}
          alt={name}
          className="w-20 h-20 object-contain md:w-24 md:h-24"
        />
      </div>

      {/* Skill Name */}
      <p className="mt-4 text-lg md:text-xl font-semibold text-gray-800">
        {name}
      </p>
    </motion.div>
  );
};
