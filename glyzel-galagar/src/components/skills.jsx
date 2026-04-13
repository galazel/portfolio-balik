import React from "react"

const softSkills = [
  { name: "Active Listening", src: "/6225106.jpg" },
  { name: "Time Management", src: "/19197107.jpg" },
  { name: "Team Work", src: "/20944999.jpg" },
]

const technicalSkills = [
  { name: "AWS", src: "/aws.png", category: "Cloud" },
  { name: "CSS", src: "/css.png", category: "Frontend" },
  { name: "Docker", src: "/docker.png", category: "DevOps" },
  { name: "Git", src: "/git.png", category: "DevOps" },
  { name: "GitHub", src: "/github.png", category: "DevOps" },
  { name: "HTML", src: "/html.png", category: "Frontend" },
  { name: "Java", src: "/java.png", category: "Backend" },
  { name: "JavaScript", src: "/js.png", category: "Frontend" },
  { name: "MySQL", src: "/mysql.png", category: "Database" },
  { name: "PostgreSQL", src: "/postgress.png", category: "Database" },
  { name: "Python", src: "/python.png", category: "Backend" },
  { name: "React", src: "/react.png", category: "Frontend" },
  { name: "Spring Boot", src: "/spring boot.png", category: "Backend" },
  { name: "Tailwind CSS", src: "/tailwind.png", category: "Frontend" },
]

function Skills() {
  return (
    <section id="skills" className="py-8 sm:py-12 px-4 sm:px-6">
    <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
          MY <span className="text-green-500">SKILLS</span>
        </h1>

      {/* Technical Skills */}
      <div className="mb-8 sm:mb-12">
        <h3 className="text-lg sm:text-2xl font-semibold mb-4 sm:mb-6 text-center">
          Technical Skills
        </h3>
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-3 sm:gap-6 justify-items-center">
          {technicalSkills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center gap-1 sm:gap-2 group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 p-1.5 sm:p-2 rounded-xl bg-white shadow-md group-hover:shadow-lg transition-shadow">
                <img
                  src={skill.src}
                  alt={skill.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-[10px] sm:text-sm font-medium text-center leading-tight">
                {skill.name}
              </span>
              <span className="text-[9px] sm:text-xs text-gray-400 text-center">
                {skill.category}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Soft Skills */}
      <div>
        <h3 className="text-lg sm:text-2xl font-semibold mb-4 sm:mb-6 text-center">
          Soft Skills
        </h3>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
          {softSkills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center gap-2 group">
              <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden shadow-md group-hover:shadow-lg transition-shadow">
                <img
                  src={skill.src}
                  alt={skill.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xs sm:text-sm font-medium text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills