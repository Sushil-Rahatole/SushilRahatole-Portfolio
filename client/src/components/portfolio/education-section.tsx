import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award, Book } from "lucide-react";

const education = [
  {
    degree: "Bachelor's in Computer Engineering",
    institution: "Savitribai Phule Pune University",
    location: "India",
    duration: "2024 - 2027",
    status: "Pre-Final Year Student",
    description: "Focusing on software development, data structures & algorithms, and modern web technologies. Active participant in college hackathons and coding competitions.",
    achievements: [
      "OSCI'25 Contributor",
      "Active member of Google Developers's Group",
      "Participant in multiple hackathons"
    ],
    type: "Bachelor's Degree"
  },
  {
    degree: "Diploma in Computer Engineering",
    institution: "Government Polytechnic College",
    location: "India", 
    duration: "2021 - 2024",
    status: "Completed",
    description: "Completed diploma with focus on programming fundamentals, database management, and web development technologies. Built strong foundation in computer science core concepts.",
    achievements: [
      "1st prize winner in start-up project",
      "First Class with Distinction",
      "Led technical projects team"
    ],
    type: "Diploma"
  }
];

export function EducationSection() {
  return (
    <section id="education" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground dark:text-gray-300 max-w-3xl mx-auto mb-6">
            My educational journey in computer science and engineering
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-secondary rounded-full" />
          
          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg"
                  />
                </div>

                {/* Content Card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <motion.div
                    whileHover={{ 
                      y: -5,
                      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
                    }}
                    className="glass rounded-2xl p-6 relative group"
                  >
                    {/* Arrow pointing to timeline */}
                    <div className={`absolute top-8 ${index % 2 === 0 ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'} w-0 h-0 border-t-8 border-b-8 border-transparent ${index % 2 === 0 ? 'border-l-8 border-l-white/10' : 'border-r-8 border-r-white/10'}`} />
                    
                    {/* Education Type Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                        edu.type === "Bachelor's Degree" 
                          ? "bg-blue-500/20 text-blue-600 dark:text-blue-400" 
                          : "bg-green-500/20 text-green-600 dark:text-green-400"
                      }`}>
                        {edu.type}
                      </span>
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        edu.type === "Bachelor's Degree" 
                          ? "bg-blue-500/20" 
                          : "bg-green-500/20"
                      }`}>
                        {edu.type === "Bachelor's Degree" ? (
                          <GraduationCap className={`w-6 h-6 ${
                            edu.type === "Bachelor's Degree" 
                              ? "text-blue-500 dark:text-blue-400" 
                              : "text-green-500 dark:text-green-400"
                          }`} />
                        ) : (
                          <Book className="w-6 h-6 text-green-500 dark:text-green-400" />
                        )}
                      </div>
                    </div>

                    {/* Degree Title */}
                    <h3 className="text-xl font-bold text-foreground dark:text-white mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-primary dark:text-blue-400 font-semibold mb-3">
                      {edu.institution}
                    </p>

                    {/* Duration and Location */}
                    <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground dark:text-gray-400">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{edu.location}</span>
                      </div>
                    </div>

                    {/* Status */}
                    <div className="mb-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                        edu.status === "Currently Pursuing" 
                          ? "bg-orange-500/20 text-orange-600 dark:text-orange-400" 
                          : "bg-green-500/20 text-green-600 dark:text-green-400"
                      }`}>
                        {edu.status}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground dark:text-gray-300 mb-4 leading-relaxed">
                      {edu.description}
                    </p>

                    {/* Achievements */}
                    <div>
                      <h5 className="text-sm font-semibold text-foreground dark:text-white mb-2 flex items-center">
                        <Award className="w-4 h-4 mr-2" />
                        Key Achievements
                      </h5>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, achIndex) => (
                          <motion.li
                            key={achIndex}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: achIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start text-sm text-muted-foreground dark:text-gray-300"
                          >
                            <div className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${
                              edu.type === "Bachelor's Degree" ? "bg-blue-500" : "bg-green-500"
                            }`} />
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>

                {/* Empty space for opposite side */}
                <div className="w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}