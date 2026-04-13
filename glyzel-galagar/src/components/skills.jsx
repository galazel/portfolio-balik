import React from "react"

const softSkills = [
  {
    name: "Active Listening",
    src: "/src/assets/6225106.jpg",
  },
  {
    name: "Time Management",
    src: "/src/assets/19197107.jpg",
  },
  {
    name: "Team Work",
    src: "/src/assets/20944999.jpg",
  },
]

const technicalSkills = [
  {
    name: "AWS",
    src: "/src/assets/aws.png",
    category: "Cloud",
  },
  {
    name: "CSS",
    src: "/src/assets/css.png",
    category: "Frontend",
  },
  {
    name: "Docker",
    src: "/src/assets/docker.png",
    category: "DevOps",
  },
  {
    name: "Git",
    src: "/src/assets/git.png",
    category: "DevOps",
  },
  {
    name: "GitHub",
    src: "/src/assets/github.png",
    category: "DevOps",
  },
  {
    name: "HTML",
    src: "/src/assets/html.png",
    category: "Frontend",
  },
  {
    name: "Java",
    src: "/src/assets/java.png",
    category: "Backend",
  },
  {
    name: "JavaScript",
    src: "/src/assets/js.png",
    category: "Frontend",
  },
  {
    name: "MySQL",
    src: "/src/assets/mysql.png",
    category: "Database",
  },
  {
    name: "PostgreSQL",
    src: "/src/assets/postgress.png",
    category: "Database",
  },
  {
    name: "Python",
    src: "/src/assets/python.png",
    category: "Backend",
  },
  {
    name: "React",
    src: "/src/assets/react.png",
    category: "Frontend",
  },
  {
    name: "Spring Boot",
    src: "/src/assets/spring boot.png",
    category: "Backend",
  },
  {
    name: "Tailwind CSS",
    src: "/src/assets/tailwind.png",
    category: "Frontend",
  },
]

function Skills() {
  return (
    <section id="skills" className="py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>

      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-6 text-center">Technical Skills</h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 justify-items-center">
          {technicalSkills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 group"
            >
              <div className="w-16 h-16 p-2 rounded-xl bg-white shadow-md group-hover:shadow-lg transition-shadow">
                <img
                  src={skill.src}
                  alt={skill.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-sm font-medium text-center">{skill.name}</span>
              <span className="text-xs text-gray-400">{skill.category}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-6 text-center">Soft Skills</h3>
        <div className="flex flex-wrap justify-center gap-8">
          {softSkills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 group "
            >
              <div className="w-30 h-30 rounded-full overflow-hidden shadow-md group-hover:shadow-lg transition-shadow">
                <img
                  src={skill.src}
                  alt={skill.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm font-medium text-center">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills