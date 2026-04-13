import React from "react"

const COLOR_MAP = {
  purple: {
    tab: "bg-purple-300",
    body: "from-purple-100 to-purple-300",
    text: "text-purple-900",
    badge: "bg-purple-200 text-purple-800",
  },
  pink: {
    tab: "bg-pink-300",
    body: "from-pink-100 to-pink-300",
    text: "text-pink-900",
    badge: "bg-pink-200 text-pink-800",
  },
  green: {
    tab: "bg-green-300",
    body: "from-green-100 to-green-300",
    text: "text-green-900",
    badge: "bg-green-200 text-green-800",
  },
  blue: {
    tab: "bg-blue-300",
    body: "from-blue-100 to-blue-300",
    text: "text-blue-900",
    badge: "bg-blue-200 text-blue-800",
  },
  yellow: {
    tab: "bg-yellow-300",
    body: "from-yellow-100 to-yellow-300",
    text: "text-yellow-900",
    badge: "bg-yellow-200 text-yellow-800",
  },
}

const projectsData = [
  {
    title: "Ethereal Vision",
    description:
      "A creative platform that showcases and supports digital arts and custom craft collaborations.",
    year: "2025",
    color: "purple",
    tech: ["React", "Spring Boot", "MySQL"],
    link: "https://github.com/galazel/ethereal-vision.git",
  },
  {
    title: "eBoto",
    description:
      "An AI-powered skincare assistant that analyzes skin concerns and provides personalized recommendations.",
    year: "2025",
    color: "pink",
    tech: ["React", "Spring Boot", "AI API"],
    link: "https://github.com/galazel/WindowsFormsApp1.git",
  },
  {
    title: "Infrastrack",
    description:
      "A system designed to monitor and manage infrastructure assets efficiently and reliably.",
    year: "2024",
    color: "green",
    tech: ["C#", ".NET", "SQL Server"],
    link: "https://github.com/galazel/infrastrack.git",
  },
  {
    title: "Chatmate",
    description:
      "A real-time messaging application for seamless communication between users.",
    year: "2024",
    color: "blue",
    tech: ["React", "WebSocket", "Spring Boot"],
    link: "https://github.com/galazel/chatmate.git",
  },
  {
    title: "Cancan",
    description:
      "A collaborative space where users can share ideas and build creative concepts together.",
    year: "2024",
    color: "yellow",
    tech: ["React", "Node.js"],
    link: "https://github.com/galazel/cencen.git",
  },
  {
    title: "Springboot Roadmap",
    description:
      "A structured learning guide to help developers master Spring Boot step by step.",
    year: "2024",
    color: "purple",
    tech: ["Spring Boot", "Java", "MySQL"],
    link: "https://github.com/galazel/spring-boot-roadmap.git",
  },
  {
    title: "Rebyu",
    description:
      "A platform for users to share reviews and rate experiences in a structured system.",
    year: "2024",
    color: "pink",
    tech: ["React", "Spring Boot"],
    link: "https://github.com/galazel/rebyu.git",
  },
]

function Projects() {
  return (
    <div className="flex h-full flex-col gap-6 p-4 sm:p-6">
      <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
          SCHOOL <span className="text-green-500">PROJECTS</span>
        </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-2 sm:p-5">
        {projectsData.map((project, index) => {
          const colors = COLOR_MAP[project.color]

          return (
            <div key={index} className="relative pt-3 cursor-pointer">
              <a href={project.link} target="_blank" rel="noreferrer">
                <div
                  className={`absolute top-0 left-4 h-6 w-24 rounded-t-md ${colors.tab}`}
                />
                <div
                  className={`relative flex h-full min-h-[180px] flex-col justify-between rounded-xl border border-gray-200 bg-gradient-to-b p-4 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl ${colors.body}`}
                >
                  <div className="flex flex-col gap-2">
                    <p className={`font-semibold ${colors.text}`}>
                      {project.title}
                    </p>
                    <p className={`text-sm leading-snug ${colors.text} opacity-80`}>
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-3 flex items-center justify-between flex-wrap gap-2">
                    <p className={`text-xs ${colors.text} opacity-70`}>
                      {project.year}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((t, i) => (
                        <span
                          key={i}
                          className={`text-xs px-2 py-0.5 rounded-full ${colors.badge}`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects