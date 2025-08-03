import { useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Star, Code, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

interface ProjectModalProps {
  project: {
    title: string;
    description: string;
    fullDescription: string;
    techStack: string[];
    liveUrl?: string;
    githubUrl?: string;
    features: string[];
    images: string[];
    rating: number;
    colors: string;
    iconColor: string;
    icon?: React.ElementType;
  };
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const techColors: Record<string, string> = {
    "Next.js": "bg-gradient-to-r from-black/20 to-gray-800/20 text-white dark:text-gray-200 border border-gray-600/30",
    "Firebase": "bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-600 dark:text-orange-400 border border-orange-500/30",
    "Gemini Pro": "bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-600 dark:text-purple-400 border border-purple-500/30",
    "AI": "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-600 dark:text-blue-400 border border-blue-500/30",
    "MERN": "bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-600 dark:text-green-400 border border-green-500/30",
    "Mapbox": "bg-gradient-to-r from-blue-500/20 to-indigo-500/20 text-blue-600 dark:text-blue-400 border border-blue-500/30",
    "Express": "bg-gradient-to-r from-gray-500/20 to-slate-500/20 text-gray-600 dark:text-gray-400 border border-gray-500/30",
    "MongoDB": "bg-gradient-to-r from-green-600/20 to-green-700/20 text-green-700 dark:text-green-400 border border-green-600/30",
    "React": "bg-gradient-to-r from-blue-400/20 to-blue-600/20 text-blue-600 dark:text-blue-400 border border-blue-400/30",
    "Node.js": "bg-gradient-to-r from-green-500/20 to-lime-500/20 text-green-600 dark:text-green-400 border border-green-500/30",
    "Java": "bg-gradient-to-r from-red-500/20 to-orange-500/20 text-red-600 dark:text-red-400 border border-red-500/30",
    "Android": "bg-gradient-to-r from-green-600/20 to-green-700/20 text-green-700 dark:text-green-400 border border-green-600/30",
    "SQLite": "bg-gradient-to-r from-blue-600/20 to-blue-700/20 text-blue-700 dark:text-blue-400 border border-blue-600/30",
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[95vh] overflow-y-auto bg-gradient-to-br from-background/95 to-background/90 backdrop-blur-2xl border border-white/20 shadow-2xl">
        <DialogHeader className="relative overflow-hidden pb-6">
          {/* Animated Background Effects */}
          <motion.div
            animate={{
              background: [
                "radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3), transparent 50%)",
                "radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3), transparent 50%)",
                "radial-gradient(circle at 40% 70%, rgba(120, 255, 198, 0.3), transparent 50%)",
              ],
            }}
            transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
            className="absolute inset-0 opacity-40"
          />

          <div className="relative z-10 text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <DialogTitle className="text-4xl md:text-5xl font-bold gradient-text mb-4">
                {project.title}
              </DialogTitle>
              <DialogDescription className="sr-only">
                Detailed view of {project.title} project
              </DialogDescription>
            </motion.div>
          </div>
        </DialogHeader>

        <div className="space-y-8">
          {/* Hero Project Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className={`h-80 bg-gradient-to-br ${project.colors} rounded-3xl overflow-hidden relative shadow-2xl transform-gpu`}>
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    rotateY: 10,
                    rotateX: 5,
                    z: 50,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="text-center transform-gpu perspective-1000"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotateY: [0, 5, 0],
                      rotateZ: [0, 2, 0],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className={`text-9xl ${project.iconColor} mb-6 opacity-90 drop-shadow-2xl transform-gpu`}
                    style={{ filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.5))" }}
                  >
                    {project.icon && <project.icon />}
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-3xl font-bold text-white/95 mb-3 drop-shadow-lg"
                  >
                    Interactive Experience
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-white/80 max-w-md mx-auto leading-relaxed text-lg"
                  >
                    {project.description}
                  </motion.p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="text-2xl font-bold mb-4 flex items-center text-foreground dark:text-white">
              <Code className="w-5 h-5 mr-3" />
              About This Project
            </h3>
            <p className="text-muted-foreground dark:text-gray-300 leading-relaxed text-lg">
              {project.fullDescription}
            </p>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center text-foreground dark:text-white">
              <Zap className="w-5 h-5 mr-3" />
              Technology Stack
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {project.techStack.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`${techColors[tech] || "bg-gradient-to-r from-primary/20 to-secondary/20 text-primary border border-primary/30"} 
                  rounded-xl px-4 py-3 font-mono text-sm font-medium text-center cursor-default 
                  shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm`}
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center text-foreground dark:text-white">
              <Star className="w-5 h-5 mr-3" />
              Key Features
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ x: 5, scale: 1.02 }}
                  className="flex items-start space-x-4 p-3 rounded-lg bg-white/5 dark:bg-black/20 hover:bg-white/10 dark:hover:bg-black/30 transition-all duration-300 border border-white/10"
                >
                  <div className="w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full mt-1.5 flex-shrink-0" />
                  <span className="text-muted-foreground dark:text-gray-300 leading-relaxed">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            {project.liveUrl && (
              <Button asChild className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white px-6 py-3 rounded-lg font-semibold transform transition-all duration-300 hover:scale-105">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  <ExternalLink className="mr-2 w-5 h-5" />
                  View Live Project
                </motion.a>
              </Button>
            )}
            {project.githubUrl && (
              <Button asChild variant="outline" className="glass border-white/20 text-foreground dark:text-white px-6 py-3 rounded-lg font-semibold transform transition-all duration-300 hover:scale-105 hover:bg-white/10">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  <Github className="mr-2 w-5 h-5" />
                  View Source Code
                </motion.a>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
