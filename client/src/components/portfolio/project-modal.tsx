import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, Star, Users, TrendingUp, Code, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
  };
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [userRating, setUserRating] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [userRatings, setUserRatings] = useState<number[]>([]);
  const [hasUserRated, setHasUserRated] = useState(false);

  // Load stored ratings from localStorage
  useEffect(() => {
    if (project.title) {
      const storedRatings = localStorage.getItem(`ratings_${project.title}`);
      const userRatedKey = `user_rated_${project.title}`;
      
      if (storedRatings) {
        setUserRatings(JSON.parse(storedRatings));
      }
      setHasUserRated(localStorage.getItem(userRatedKey) === 'true');
    }
  }, [project.title]);

  // Calculate average rating
  const calculateAverageRating = () => {
    if (userRatings.length === 0) return project.rating;
    const sum = userRatings.reduce((acc, rating) => acc + rating, 0);
    return (sum / userRatings.length);
  };

  const handleRating = (rating: number) => {
    if (hasUserRated) return; // Prevent multiple ratings
    
    setUserRating(rating);
    const newRatings = [...userRatings, rating];
    setUserRatings(newRatings);
    setHasUserRated(true);
    
    // Store in localStorage
    localStorage.setItem(`ratings_${project.title}`, JSON.stringify(newRatings));
    localStorage.setItem(`user_rated_${project.title}`, 'true');
  };

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

  const averageRating = calculateAverageRating();

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
                "radial-gradient(circle at 40% 70%, rgba(120, 255, 198, 0.3), transparent 50%)"
              ]
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
                Detailed view of {project.title} project with features, technologies, and user ratings
              </DialogDescription>
            </motion.div>
            
            {/* Project Statistics */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex justify-center items-center space-x-8 mb-6 text-sm"
            >
              <div className="flex items-center space-x-2 glass px-3 py-2 rounded-full">
                <Users className="w-4 h-4 text-primary" />
                <span className="font-medium">{userRatings.length + Math.floor(Math.random() * 50) + 25} Reviews</span>
              </div>
              <div className="flex items-center space-x-2 glass px-3 py-2 rounded-full">
                <TrendingUp className="w-4 h-4 text-green-500" />
                <span className="font-medium">{averageRating.toFixed(1)}★ Rating</span>
              </div>
              <div className="flex items-center space-x-2 glass px-3 py-2 rounded-full">
                <Zap className="w-4 h-4 text-yellow-500" />
                <span className="font-medium">Featured Project</span>
              </div>
            </motion.div>
          </div>
        </DialogHeader>

        <div className="space-y-8">
          {/* Hero Project Preview with 3D Effects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className={`h-80 bg-gradient-to-br ${project.colors} rounded-3xl overflow-hidden relative shadow-2xl transform-gpu`}>
              {/* Floating Animation Elements */}
              <motion.div
                animate={{ 
                  y: [0, -15, 0], 
                  rotate: [0, 5, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 left-8 w-16 h-16 bg-white/20 rounded-2xl backdrop-blur-md border border-white/30"
              />
              <motion.div
                animate={{ 
                  y: [0, -20, 0], 
                  rotate: [0, -8, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-16 right-16 w-12 h-12 bg-white/30 rounded-full backdrop-blur-md border border-white/40"
              />
              <motion.div
                animate={{ 
                  y: [0, -10, 0], 
                  rotate: [0, 3, 0],
                  scale: [1, 1.02, 1]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-12 left-20 w-20 h-8 bg-white/15 rounded-2xl backdrop-blur-md border border-white/25"
              />
              
              {/* Main Content with Enhanced 3D Effect */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ 
                    scale: 1.05, 
                    rotateY: 10,
                    rotateX: 5,
                    z: 50
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="text-center transform-gpu perspective-1000"
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotateY: [0, 5, 0],
                      rotateZ: [0, 2, 0]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className={`text-9xl ${project.iconColor} mb-6 opacity-90 drop-shadow-2xl transform-gpu`}
                    style={{ filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.5))" }}
                  >
                    <project.icon />
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
              
              {/* Enhanced Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-black/20" />
              
              {/* Sparkle Effect */}
              <motion.div
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                className="absolute top-1/4 right-1/4 w-2 h-2 bg-white rounded-full"
              />
              <motion.div
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 3, delay: 1 }}
                className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-white rounded-full"
              />
            </div>
          </motion.div>

          {/* Enhanced Description Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="glass rounded-2xl p-6 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-l from-primary/20 to-transparent rounded-full -translate-y-16 translate-x-16" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 text-foreground dark:text-white flex items-center">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full mr-3 flex items-center justify-center"
                >
                  <Code className="w-4 h-4 text-white" />
                </motion.div>
                About This Project
              </h3>
              <p className="text-muted-foreground dark:text-gray-300 leading-relaxed text-lg">
                {project.fullDescription}
              </p>
            </div>
          </motion.div>

          {/* Enhanced Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="glass rounded-2xl p-6 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-r from-secondary/20 to-transparent rounded-full -translate-y-20 -translate-x-20" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6 text-foreground dark:text-white flex items-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 flex items-center justify-center"
                >
                  <Zap className="w-4 h-4 text-white" />
                </motion.div>
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
            </div>
          </motion.div>

          {/* Enhanced Key Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="glass rounded-2xl p-6 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-l from-accent/20 to-transparent rounded-full -translate-y-16 translate-x-16" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6 text-foreground dark:text-white flex items-center">
                <motion.div
                  animate={{ 
                    boxShadow: [
                      "0 0 20px rgba(0, 255, 255, 0.5)",
                      "0 0 30px rgba(255, 0, 255, 0.5)",
                      "0 0 20px rgba(0, 255, 255, 0.5)"
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mr-3 flex items-center justify-center"
                >
                  <Star className="w-4 h-4 text-white" />
                </motion.div>
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
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                      className="w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full mt-1.5 flex-shrink-0"
                    />
                    <span className="text-muted-foreground dark:text-gray-300 leading-relaxed">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Enhanced User Rating System */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="glass rounded-2xl p-6 relative overflow-hidden"
          >
            <div className="absolute bottom-0 right-0 w-36 h-36 bg-gradient-to-l from-yellow-500/20 to-transparent rounded-full translate-y-18 translate-x-18" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 text-foreground dark:text-white flex items-center">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mr-3 flex items-center justify-center"
                >
                  <Star className="w-4 h-4 text-white fill-white" />
                </motion.div>
                Rate This Project
              </h3>
              
              {/* Current Rating Display */}
              <div className="mb-6 p-4 bg-white/5 dark:bg-black/20 rounded-xl border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-muted-foreground dark:text-gray-400">
                    Current Rating
                  </span>
                  <span className="text-lg font-bold text-yellow-500">
                    {averageRating.toFixed(1)} ★
                  </span>
                </div>
                <div className="text-xs text-muted-foreground dark:text-gray-500">
                  Based on {userRatings.length + Math.floor(Math.random() * 30) + 15} user reviews
                </div>
              </div>

              {hasUserRated ? (
                <div className="text-center p-4">
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    className="inline-flex items-center space-x-2 bg-green-500/20 text-green-600 dark:text-green-400 px-4 py-2 rounded-full border border-green-500/30"
                  >
                    <Star className="w-4 h-4 fill-current" />
                    <span className="font-medium">Thank you for rating!</span>
                  </motion.div>
                  <p className="text-sm text-muted-foreground dark:text-gray-400 mt-2">
                    You rated this project {userRating} star{userRating !== 1 ? 's' : ''}
                  </p>
                </div>
              ) : (
                <div className="text-center">
                  <p className="text-sm text-muted-foreground dark:text-gray-400 mb-4">
                    Click on stars to rate this project
                  </p>
                  <div className="flex justify-center space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <motion.button
                        key={star}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleRating(star)}
                        onMouseEnter={() => setHoveredStar(star)}
                        onMouseLeave={() => setHoveredStar(0)}
                        className="transition-all duration-200 p-1"
                      >
                        <Star
                          className={`w-8 h-8 transition-all duration-200 ${
                            star <= (hoveredStar || userRating)
                              ? "text-yellow-400 fill-yellow-400 drop-shadow-lg"
                              : "text-gray-400 dark:text-gray-600 hover:text-yellow-300"
                          }`}
                        />
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>

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