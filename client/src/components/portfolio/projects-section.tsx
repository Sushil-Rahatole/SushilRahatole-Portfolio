import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FaMicrophone, FaHome, FaChartLine, FaMobile } from "react-icons/fa";
import { ProjectModal } from "./project-modal";

const projects = [
  {
    title: "InterviewPrep",
    description: "AI-powered interview preparation platform with Gemini Pro integration. Practice interviews with personalized feedback and improve your skills.",
    fullDescription: "InterviewPrep is a comprehensive AI-powered interview preparation platform that leverages Google's Gemini Pro API to provide personalized interview experiences. The platform simulates real interview scenarios across various domains including technical, behavioral, and domain-specific questions. Users can practice with adaptive difficulty levels, receive instant feedback on their responses, and track their improvement over time.",
    techStack: ["Next.js", "Firebase", "Gemini Pro", "AI"],
    features: [
      "AI-powered interview simulation with Gemini Pro",
      "Real-time speech recognition and analysis",
      "Personalized feedback and improvement suggestions",
      "Multiple interview types (Technical, HR, Behavioral)",
      "Progress tracking and performance analytics",
      "Adaptive difficulty based on user performance"
    ],
    images: [],
    rating: 4.8,
    liveUrl: "https://interviews-with-ai.vercel.app/",
    githubUrl: undefined,
    icon: FaMicrophone,
    colors: "from-blue-500/20 to-purple-500/20",
    iconColor: "text-blue-500",
  },
  {
    title: "StayFinder",
    description: "Full-featured rental listing platform with interactive maps, user authentication, and real-time booking system.",
    fullDescription: "StayFinder is a full-stack rental listing platform built with the MERN stack, featuring interactive maps powered by Mapbox, comprehensive user authentication, and a real-time booking system. The platform allows property owners to list their spaces with detailed descriptions, photos, and pricing, while travelers can search, filter, and book accommodations with ease.",
    techStack: ["MERN", "Mapbox", "Express", "MongoDB"],
    features: [
      "Interactive map-based property search using Mapbox",
      "Comprehensive user authentication and authorization",
      "Real-time booking and availability management",
      "Advanced search filters (price, location, amenities)",
      "Photo upload and management system",
      "Review and rating system for properties",
      "Responsive design for all devices"
    ],
    images: [],
    rating: 4.6,
    liveUrl: "https://wanderlust-renting-houses.onrender.com/listing",
    githubUrl: undefined,
    icon: FaHome,
    colors: "from-green-500/20 to-blue-500/20",
    iconColor: "text-green-500",
  },
  {
    title: "Zerodha Clone",
    description: "Complete trading platform clone with real-time data visualization, portfolio management, and interactive charts.",
    fullDescription: "A comprehensive clone of the popular trading platform Zerodha, built using the MERN stack. This application features real-time stock data visualization, portfolio management tools, interactive charts, and a complete trading interface. The platform includes advanced charting capabilities, watchlist management, and detailed analytics for informed trading decisions.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    features: [
      "Real-time stock data visualization and charts",
      "Complete portfolio management system",
      "Advanced charting with technical indicators",
      "Watchlist creation and management",
      "Order placement simulation",
      "Detailed profit/loss analytics",
      "Mobile-responsive trading interface"
    ],
    images: [],
    rating: 4.7,
    liveUrl: undefined,
    githubUrl: "https://github.com/Sushil-Rahatole",
    icon: FaChartLine,
    colors: "from-green-500/20 to-blue-500/20",
    iconColor: "text-green-600",
  },
  {
    title: "E-Commerce Shoe App",
    description: "Native Android e-commerce application for shoe retail with cart management, user authentication, and payment integration.",
    fullDescription: "A native Android e-commerce application specifically designed for shoe retail, built with Java and Firebase. The app features a comprehensive product catalog, advanced filtering options, secure user authentication, shopping cart management, and integrated payment processing. The application provides a seamless mobile shopping experience with offline capabilities and push notifications.",
    techStack: ["Java", "Firebase", "Android", "SQLite"],
    features: [
      "Native Android application with smooth performance",
      "Comprehensive product catalog with detailed views",
      "Advanced filtering by size, brand, color, and price",
      "Secure user authentication with Firebase Auth",
      "Shopping cart and wishlist functionality",
      "Integrated payment processing",
      "Push notifications for offers and updates",
      "Offline data caching with SQLite"
    ],
    images: [],
    rating: 4.5,
    liveUrl: undefined,
    githubUrl: "https://github.com/Sushil-Rahatole/E-Commerce-Shoes-Android-app",
    icon: FaMobile,
    colors: "from-orange-500/20 to-red-500/20",
    iconColor: "text-orange-500",
  },
];

const techColors: Record<string, string> = {
  "Next.js": "bg-black/20 text-white",
  "Firebase": "bg-orange-500/20 text-orange-400",
  "Gemini Pro": "bg-purple-500/20 text-purple-400",
  "AI": "bg-blue-500/20 text-blue-400",
  "MERN": "bg-green-500/20 text-green-400",
  "Mapbox": "bg-blue-500/20 text-blue-400",
  "Express": "bg-gray-500/20 text-gray-400",
  "MongoDB": "bg-green-600/20 text-green-400",
  "React": "bg-blue-400/20 text-blue-400",
  "Node.js": "bg-green-500/20 text-green-400",
  "Java": "bg-red-500/20 text-red-400",
  "Android": "bg-green-600/20 text-green-400",
  "SQLite": "bg-blue-600/20 text-blue-400",
};

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProjectModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            Here are some of my recent projects that showcase my skills in full-stack development, 
            AI integration, and modern web technologies.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)"
              }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                hover: { duration: 0.3 }
              }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-8 group cursor-pointer"
              onClick={() => openProjectModal(project)}
            >
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <div className="flex space-x-3">
                    {project.liveUrl && (
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-primary transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    )}
                    {project.githubUrl && (
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-primary transition-colors"
                        title="GitHub"
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                    )}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className={`${techColors[tech] || "bg-primary/20 text-primary"} font-mono text-xs`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className={`h-48 bg-gradient-to-br ${project.colors} rounded-xl mb-4 flex items-center justify-center`}
              >
                <project.icon className={`text-6xl ${project.iconColor} opacity-60`} />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View More Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            asChild
            className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white px-8 py-4 rounded-full font-semibold transform transition-all duration-300 hover:scale-105"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/Sushil-Rahatole"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <Github className="mr-2 w-5 h-5" />
              View More on GitHub
            </motion.a>
          </Button>
        </motion.div>

        {/* Project Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            isOpen={isModalOpen}
            onClose={closeProjectModal}
          />
        )}
      </div>
    </section>
  );
}
