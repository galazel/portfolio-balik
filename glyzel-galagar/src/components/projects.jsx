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
  orange: {
    tab: "bg-orange-300",
    body: "from-orange-100 to-orange-300",
    text: "text-orange-900",
    badge: "bg-orange-200 text-orange-800",
  },
  red: {
    tab: "bg-red-300",
    body: "from-red-100 to-red-300",
    text: "text-red-900",
    badge: "bg-red-200 text-red-800",
  },
  gray: {
    tab: "bg-gray-300",
    body: "from-gray-100 to-gray-300",
    text: "text-gray-900",
    badge: "bg-gray-200 text-gray-800",
  },
  cyan: {
    tab: "bg-cyan-400",
    body: "from-cyan-100 to-cyan-300",
    text: "text-cyan-900",
    badge: "bg-cyan-200 text-cyan-800",
  },
}

const projectsData = [
  {
    title: "Ethereal Vision",
    description:
      "This is an e-commerce website for art, where clients can purchase artworks and commission custom pieces from our talented artists.",
    year: "2023",
    color: "red",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/galazel/ethereal-vision.git",
  },
  {
    title: "ArtStream",
    description:
      "This is a commission system where clients can send requests to different artists",
    year: "2023",
    color: "cyan",
    tech: ["Java","JavaFX"],
    link: "https://github.com/galazel/Revised-Artstream-Project.git",
  },
  {
    title: "eBoto",
    description:
      "This is a c# application where students can vote for their new trusted officers",
    year: "2025",
    color: "pink",
    tech: ["C#", "SQL", "Entity Framework"],
    link: "https://github.com/galazel/WindowsFormsApp1.git",
  },
  {
    title: "Infrastrack",
    description: "An AI-powered house contruction progress monitoring system",
    year: "2026",
    color: "green",
    tech: [
      "React",
      "Spring Boot",
      "Langchain4j",
      "Cloudflare R2",
      "AWS Cognito",
    ],
    link: "https://github.com/galazel/infrastrack.git",
  },
  {
    title: "Chatmate",
    description: "A Contructor Bot assistant for house monitoring",
    year: "2026",
    color: "blue",
    tech: ["React", "Spring Boot"],
    link: "https://github.com/galazel/chatmate.git",
  },
  {
    title: "Cancan",
    description: "My first fullstack e-commerece application",
    year: "2025",
    color: "yellow",
    tech: ["React", "Spring Boot"],
    link: "https://github.com/galazel/cencen.git",
  },
  {
    title: "Pizzeria",
    description: "My first frontend design using Reactjs and TailwindCSS",
    year: "2025",
    color: "orange",
    tech: ["React", "Spring Boot"],
    link: "https://github.com/galazel/pizzeria.git",
  },
  {
    title: "Springboot Roadmap",
    description: "A repository for my spring boot roadmap projects",
    year: "2025",
    color: "purple",
    tech: ["React", "Spring Boot", "AWS S3", "AWS EC2", "AWS RDS", "Keycloak"],
    link: "https://github.com/galazel/spring-boot-roadmap.git",
  },
  {
    title: "Rebyu",
    description: "A centralized platform for studying entrance examinations",
    year: "2024",
    color: "gray",
    tech: ["React", "Spring Boot"],
    link: "https://github.com/galazel/rebyu.git",
  },
]

function Projects() {
  return (
    <div className="flex h-full flex-col gap-6 p-4 sm:p-6">
      <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
        SCHOOL <span className="text-green-500  ">PROJECTS</span>
      </h1>

      <div className="grid grid-cols-1 gap-6 p-2 sm:grid-cols-2 sm:p-5 lg:grid-cols-3">
        {projectsData.map((project, index) => {
          const colors = COLOR_MAP[project.color]

          return (
            <div key={index} className="relative cursor-pointer pt-3">
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
                    <p
                      className={`text-sm leading-snug ${colors.text} opacity-80`}
                    >
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
                    <p className={`text-xs ${colors.text} opacity-70`}>
                      {project.year}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((t, i) => (
                        <span
                          key={i}
                          className={`rounded-full px-2 py-0.5 text-xs ${colors.badge}`}
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
