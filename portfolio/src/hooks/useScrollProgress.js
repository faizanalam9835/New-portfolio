import { useScroll, useTransform } from "framer-motion";

export const useScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  
  return { scrollYProgress, opacity, scale };
};