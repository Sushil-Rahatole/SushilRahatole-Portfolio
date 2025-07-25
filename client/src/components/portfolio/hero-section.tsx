import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

interface HeroSectionProps {
  onScrollToSection: (section: string) => void;
}

export function HeroSection({ onScrollToSection }: HeroSectionProps) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Floating Shapes Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="floating-shape w-64 h-64 absolute top-10 left-10"
        />
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="floating-shape w-32 h-32 absolute top-1/3 right-20"
        />
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="floating-shape w-48 h-48 absolute bottom-20 left-1/4"
        />
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="floating-shape w-40 h-40 absolute bottom-1/3 right-1/3"
        />
      </div>
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Professional Profile Photo */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="ml-[16px] mr-[16px] mt-[30px] mb-[30px]"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary p-1 shadow-2xl"
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-800">
                {/* Professional Photo Placeholder - Replace with your actual photo */}
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 flex items-center justify-center">
                  <svg
                    className="w-20 h-20 text-gray-600 dark:text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                {/* 
                  To add your photo, replace the div above with:
                  <img 
                    src="/path-to-your-photo.jpg" 
                    alt="Sushil Rahatole - Full Stack Developer"
                    className="w-full h-full object-cover"
                  />
                */}
              </div>
            </motion.div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="block mb-2">Hi, I'm</span>
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "auto" }}
              transition={{ duration: 2, delay: 0.8 }}
              className="gradient-text inline-block overflow-hidden whitespace-nowrap border-r-4 border-primary"
            >
              Sushil Rahatole
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
          >
            Full Stack Web Developer & Tech Explorer
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Passionate about building elegant, user-focused applications with modern technologies. 
            Currently pursuing Computer Engineering and exploring the endless possibilities of code.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button
              onClick={() => onScrollToSection("projects")}
              className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white px-8 py-4 rounded-full font-semibold transform transition-all duration-300 hover:scale-105 animate-glow"
            >
              View Projects
            </Button>
            <Button
              variant="outline"
              onClick={() => onScrollToSection("contact")}
              className="glass border-white/20 text-foreground px-8 py-4 rounded-full font-semibold transform transition-all duration-300 hover:scale-105 hover:bg-white/10"
            >
              Let's Connect
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex justify-center space-x-6"
          >
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href="https://github.com/Sushil-Rahatole"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-primary transition-colors duration-300"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href="http://www.linkedin.com/in/sushil-rahatole-347182263"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-primary transition-colors duration-300"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href="mailto:sushilrahatole@gmail.com"
              className="text-2xl hover:text-primary transition-colors duration-300"
            >
              <FaEnvelope />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="text-2xl text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}
