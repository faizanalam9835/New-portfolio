import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "../components/ui/button";
import { FloatingOrbs } from "../components/floating-orbs";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { socialLinks } from "../data/constants";
import * as LucideIcons from "lucide-react";
import aboutImg from '../assets/image.png'

const themeColor = "#7b8e86"

export const Hero = ({ opacity, scale }) => {
  const handleDownloadResume = () => {
    window.open(resumePDF, "_blank");
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "Faizan_Alam_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <FloatingOrbs />

      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ opacity, scale }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4 px-4 py-2 rounded-full"
              style={{
                background: `${themeColor}20`,
                border: `1px solid ${themeColor}50`,
              }}
            >
              <span style={{ color: themeColor }}>👋 Welcome to my portfolio</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-display mb-6 leading-tight">
              Hi, I'm{" "}
              <motion.span
                className="font-bold"
                style={{
                  background: `linear-gradient(90deg, #9fb3ac, #e6f2ee)`,
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  display: "inline-block",
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                Faizan Alam
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl mb-2"
              style={{ color: themeColor }}
            >
              Aspiring Full Stack Developer
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg mb-8 max-w-lg"
              style={{ color: "#cccccc" }}
            >
              Passionate about building modern, fast, and scalable web applications
              with clean architecture and beautiful UI. I grow by learning every day.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4 flex-wrap"
            >
              {/* DOWNLOAD RESUME */}
              <Button
                 onClick={handleDownloadResume}
                size="lg"
                className="group"
                style={{
                  background: themeColor,
                  color: "#111",
                  border: `1px solid ${themeColor}`,
                }}
                asChild
              >
                <a href="/Faizan_Alam_Resume.pdf" download="Faizan_Alam_Resume">
                  Download Resume
                  <motion.span
                    animate={{ y: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="ml-2"
                  >
                    <ArrowDown className="size-5" />
                  </motion.span>
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                style={{
                  borderColor: themeColor,
                  color: themeColor,
                }}
                asChild
              >
                <a href="#projects">View Projects</a>
              </Button>
            </motion.div>

            {/* SOCIAL ICONS */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex gap-4 mt-8"
            >
              {socialLinks.map((social, idx) => {
                const LucideIcon = LucideIcons[social.icon];
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full"
                      style={{ color: themeColor }}
                      asChild
                    >
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                      >
                        <LucideIcon className="size-5" />
                      </a>
                    </Button>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT — BIGGER IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center"
          >
            <motion.div
              animate={{ rotate: [0, 2.5, 0, -2.5, 0] }}
              transition={{ duration: 10, repeat: Infinity }}
            >
              <div
                className="relative rounded-3xl overflow-hidden shadow-2xl"
                style={{
                  width: "520px", // ⭐ INCREASED IMAGE SIZE
                  border: `4px solid ${themeColor}70`,
                }}
              >
                <motion.div whileHover={{ scale: 1.04 }}>
                  <ImageWithFallback
                    src={aboutImg}
                    alt="Faizan Alam"
                    className="w-full object-cover"
                    style={{ aspectRatio: "1/1.1" }}
                  />
                </motion.div>

                <motion.div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to top right, ${themeColor}40, transparent)`,
                  }}
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full flex justify-center pt-2"
          style={{
            border: `2px solid ${themeColor}`,
          }}
        >
          <motion.div
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: themeColor }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
