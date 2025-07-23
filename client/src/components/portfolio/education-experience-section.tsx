import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Calendar, MapPin, Award } from "lucide-react";

const education = [
  {
    degree: "Bachelor's in Computer Engineering",
    institution: "Engineering College",
    location: "India",
    duration: "2022 - 2026",
    status: "Currently Pursuing",
    description: "Focusing on software development, data structures, algorithms, and modern web technologies. Active participant in college hackathons and coding competitions.",
    achievements: [
      "Dean's List for Academic Excellence",
      "Active member of Coding Club",
      "Participant in multiple hackathons"
    ]
  }
];

const experience = [
  {
    title: "Full Stack Developer",
    company: "Freelance Projects",
    location: "Remote",
    duration: "2023 - Present",
    type: "Freelance",
    description: "Working on various full-stack web development projects, specializing in MERN stack applications, AI integration, and modern UI/UX design. Successfully delivered multiple client projects including e-commerce platforms, rental listing systems, and AI-powered applications.",
    achievements: [
      "Built 10+ full-stack web applications",
      "Integrated AI technologies like Gemini Pro API",
      "Delivered projects with 100% client satisfaction",
      "Specialized in React.js, Node.js, and MongoDB"
    ],
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Firebase", "AI/ML"]
  }
];

export function EducationExperienceSection() {
  return (
    <section id="education" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Education & <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground dark:text-gray-300 max-w-3xl mx-auto mb-6">
            My educational background and professional journey in software development
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mr-4">
                <GraduationCap className="text-blue-500 dark:text-blue-400 w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold text-foreground dark:text-white">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-foreground dark:text-white mb-2">
                        {edu.degree}
                      </h4>
                      <p className="text-lg text-primary dark:text-blue-400 font-semibold">
                        {edu.institution}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-muted-foreground dark:text-gray-400 mb-1">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span className="text-sm">{edu.duration}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground dark:text-gray-400">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm">{edu.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="inline-block bg-green-500/20 text-green-600 dark:text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                      {edu.status}
                    </span>
                  </div>

                  <p className="text-muted-foreground dark:text-gray-300 mb-4 leading-relaxed">
                    {edu.description}
                  </p>

                  <div>
                    <h5 className="text-sm font-semibold text-foreground dark:text-white mb-2 flex items-center">
                      <Award className="w-4 h-4 mr-2" />
                      Key Achievements
                    </h5>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, achIndex) => (
                        <li
                          key={achIndex}
                          className="flex items-start text-sm text-muted-foreground dark:text-gray-300"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mr-4">
                <Briefcase className="text-green-500 dark:text-green-400 w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold text-foreground dark:text-white">Experience</h3>
            </div>

            <div className="space-y-6">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-foreground dark:text-white mb-2">
                        {exp.title}
                      </h4>
                      <p className="text-lg text-primary dark:text-blue-400 font-semibold">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-muted-foreground dark:text-gray-400 mb-1">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span className="text-sm">{exp.duration}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground dark:text-gray-400">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="inline-block bg-blue-500/20 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                      {exp.type}
                    </span>
                  </div>

                  <p className="text-muted-foreground dark:text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="mb-4">
                    <h5 className="text-sm font-semibold text-foreground dark:text-white mb-2 flex items-center">
                      <Award className="w-4 h-4 mr-2" />
                      Key Achievements
                    </h5>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li
                          key={achIndex}
                          className="flex items-start text-sm text-muted-foreground dark:text-gray-300"
                        >
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-sm font-semibold text-foreground dark:text-white mb-2">
                      Technologies Used
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-primary/20 text-primary dark:text-blue-400 px-2 py-1 rounded text-xs font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}