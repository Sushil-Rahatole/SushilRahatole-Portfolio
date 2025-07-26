import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Award, Building } from "lucide-react";

const experience = [
  {
    title: "Frontend Developer Intern",
    company: "Microspectra Pvt Ltd",
    location: "Shegaon, Maharashtra",
    duration: "June 2023 - August 2023",
    type: "Internship",
    description: "Working as a Frontend Developer Intern focusing on Javascript development, UI/UX implementation, and modern web technologies. Collaborating with the development team to build responsive and user-friendly web applications.",
    achievements: [
      "Developed responsive web applications using Javascript",
      "Implemented modern UI/UX designs with Tailwind CSS",
      "Collaborated with senior developers on project architecture",
      "Improved application performance and user experience",
      "Gained hands-on experience with industry best practices"
    ],
    technologies: ["Java", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Git"]
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground dark:text-gray-300 max-w-3xl mx-auto mb-6">
            My professional journey in software development
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Company Logo/Icon */}
              <div className="flex items-start space-x-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <Building className="text-white w-8 h-8" />
                </motion.div>

                <div className="flex-1">
                  <motion.div
                    whileHover={{ 
                      y: -5,
                      boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)"
                    }}
                    className="glass rounded-2xl p-8 group"
                  >
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground dark:text-white mb-2">
                          {exp.title}
                        </h3>
                        <p className="text-xl text-primary dark:text-blue-400 font-semibold mb-2">
                          {exp.company}
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground dark:text-gray-400">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 md:mt-0">
                        <span className="inline-block bg-blue-500/20 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground dark:text-gray-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Key Achievements */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-foreground dark:text-white mb-4 flex items-center">
                        <Award className="w-5 h-5 mr-2" />
                        Key Achievements & Responsibilities
                      </h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {exp.achievements.map((achievement, achIndex) => (
                          <motion.div
                            key={achIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: achIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start text-sm text-muted-foreground dark:text-gray-300"
                          >
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                            {achievement}
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies Used */}
                    <div>
                      <h4 className="text-lg font-semibold text-foreground dark:text-white mb-3">
                        Technologies & Tools
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ delay: techIndex * 0.05 }}
                            viewport={{ once: true }}
                            className="bg-primary/20 text-primary dark:text-blue-400 px-3 py-1 rounded-full text-sm font-mono hover:bg-primary/30 transition-colors cursor-default"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                      <Briefcase className="w-12 h-12 text-primary" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground dark:text-white mb-4">
              Looking for New Opportunities
            </h3>
            <p className="text-muted-foreground dark:text-gray-300 mb-6">
              I'm actively seeking full-time opportunities where I can contribute my skills in 
              Full-Stack development and continue growing as a software engineer.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white px-8 py-3 rounded-full font-semibold transform transition-all duration-300"
              >
                Let's Connect
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}