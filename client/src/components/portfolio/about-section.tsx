import { motion } from "framer-motion";
import { 
  SiReact, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiFirebase, 
  SiTailwindcss,
  SiGit
} from "react-icons/si";
import { Code, Database } from "lucide-react";

const techStack = [
  { name: "React.js", icon: SiReact, color: "text-blue-400" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
  { name: "Express.js", icon: SiExpress, color: "text-gray-400" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
  { name: "Firebase", icon: SiFirebase, color: "text-orange-500" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
  { name: "REST APIs", icon: Code, color: "text-purple-400" },
  { name: "Git", icon: SiGit, color: "text-red-500" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="text-lg leading-relaxed text-muted-foreground dark:text-gray-300 space-y-4">
              <p>
                Hi, I'm <strong className="text-foreground dark:text-white">Sushil Rahatole</strong>, a passionate{" "}
                <strong className="text-primary dark:text-blue-400">Full Stack Developer</strong> and lifelong tech explorer 
                currently pursuing my Bachelor's in Computer Engineering. I've always believed that{" "}
                <strong className="text-foreground dark:text-white">great code isn't just functional — it's thoughtful, elegant, and user-focused.</strong>
              </p>

              <p>
                My journey began with curiosity and a love for solving real-world problems. From building{" "}
                <strong className="text-accent dark:text-green-400">AI-powered interview platforms</strong> to crafting full-fledged{" "}
                <strong className="text-accent dark:text-green-400">E-commerce and rental web apps</strong>, I've explored a wide range of 
                technologies — including <strong className="text-primary dark:text-blue-400">React.js, Node.js, MongoDB, Firebase</strong>, 
                and more. I'm constantly learning and pushing my boundaries with every project I take on.
              </p>

              <p>
                I'm currently working on <strong className="text-secondary dark:text-purple-400">creative MERN-based clones</strong> and 
                building tools that improve user experience, speed, and interactivity. Whether it's integrating voice AI, 
                managing state-heavy applications, or refining user journeys, I love bringing ideas to life through code.
              </p>

              <p>
                Beyond just writing code, I'm driven by the desire to{" "}
                <strong className="text-foreground dark:text-white">create things that people love to use.</strong> That's why I care 
                deeply about clean UI/UX, performance, and user-centric design.
              </p>

              <p>
                When I'm not coding, you'll find me exploring new tech trends, participating in college hackathons, 
                or helping others learn programming.
              </p>
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">
                <span className="gradient-text">Tech Stack I Love</span>
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -2,
                      boxShadow: "0 10px 25px rgba(99, 102, 241, 0.3)"
                    }}
                    transition={{ 
                      duration: 0.3, 
                      delay: index * 0.1 
                    }}
                    viewport={{ once: true }}
                    className="glass rounded-xl p-4 text-center group cursor-pointer"
                  >
                    <tech.icon className={`text-3xl ${tech.color} mb-2 mx-auto group-hover:scale-110 transition-transform`} />
                    <p className="font-mono text-sm">{tech.name}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-6 text-center"
              >
                <h4 className="text-3xl font-bold gradient-text">10+</h4>
                <p className="text-muted-foreground">Projects Built</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-6 text-center"
              >
                <h4 className="text-3xl font-bold gradient-text">2+</h4>
                <p className="text-muted-foreground">Years Coding</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
