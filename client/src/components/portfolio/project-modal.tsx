import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

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
  };
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [userRating, setUserRating] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);

  const handleRating = (rating: number) => {
    setUserRating(rating);
  };

  const techColors: Record<string, string> = {
    "Next.js": "bg-black/20 text-white dark:bg-gray-800/40 dark:text-gray-200",
    "Firebase": "bg-orange-500/20 text-orange-600 dark:text-orange-400",
    "Gemini Pro": "bg-purple-500/20 text-purple-600 dark:text-purple-400",
    "AI": "bg-blue-500/20 text-blue-600 dark:text-blue-400",
    "MERN": "bg-green-500/20 text-green-600 dark:text-green-400",
    "Mapbox": "bg-blue-500/20 text-blue-600 dark:text-blue-400",
    "Express": "bg-gray-500/20 text-gray-600 dark:text-gray-400",
    "MongoDB": "bg-green-600/20 text-green-700 dark:text-green-400",
    "React": "bg-blue-400/20 text-blue-600 dark:text-blue-400",
    "Node.js": "bg-green-500/20 text-green-600 dark:text-green-400",
    "Java": "bg-red-500/20 text-red-600 dark:text-red-400",
    "Android": "bg-green-600/20 text-green-700 dark:text-green-400",
    "SQLite": "bg-blue-600/20 text-blue-700 dark:text-blue-400",
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-background/95 backdrop-blur-xl border border-white/10">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold gradient-text mb-4">
            {project.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Project Images/Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`h-64 bg-gradient-to-br ${project.colors} rounded-xl flex items-center justify-center`}
          >
            <div className="text-center">
              <div className={`text-6xl ${project.iconColor} mb-4 opacity-60`}>
                🚀
              </div>
              <p className="text-lg font-semibold text-white/80">
                Project Preview
              </p>
            </div>
          </motion.div>

          {/* Description */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-foreground dark:text-white">
              About This Project
            </h3>
            <p className="text-muted-foreground dark:text-gray-300 leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-foreground dark:text-white">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className={`${techColors[tech] || "bg-primary/20 text-primary"} font-mono text-sm py-1 px-3`}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-foreground dark:text-white">
              Key Features
            </h3>
            <ul className="grid md:grid-cols-2 gap-2">
              {project.features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground dark:text-gray-300">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Rating System */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-foreground dark:text-white">
              Rate This Project
            </h3>
            <div className="flex items-center space-x-4">
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => handleRating(star)}
                    onMouseEnter={() => setHoveredStar(star)}
                    onMouseLeave={() => setHoveredStar(0)}
                    className="transition-colors"
                  >
                    <Star
                      className={`w-6 h-6 ${
                        star <= (hoveredStar || userRating)
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-400 dark:text-gray-600"
                      }`}
                    />
                  </button>
                ))}
              </div>
              <span className="text-sm text-muted-foreground dark:text-gray-400">
                Current Rating: {project.rating}/5
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            {project.liveUrl && (
              <Button
                asChild
                className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white px-6 py-3 rounded-lg font-semibold transform transition-all duration-300 hover:scale-105"
              >
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
              <Button
                asChild
                variant="outline"
                className="glass border-white/20 text-foreground dark:text-white px-6 py-3 rounded-lg font-semibold transform transition-all duration-300 hover:scale-105 hover:bg-white/10"
              >
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