import React, { useState } from "react"

const COLOR_MAP = {
  purple: {
    tab: "bg-purple-300",
    body: "from-purple-200 to-purple-300",
  },
  pink: {
    tab: "bg-pink-300",
    body: "from-pink-200 to-pink-300",
  },
  green: {
    tab: "bg-green-300",
    body: "from-green-200 to-green-300",
  },
  blue: {
    tab: "bg-blue-300",
    body: "from-blue-200 to-blue-300",
  },
  yellow: {
    tab: "bg-yellow-300",
    body: "from-yellow-200 to-yellow-300",
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
  },
  {
    title: "eBoto",
    description:
      "An AI-powered skincare assistant that analyzes skin concerns and provides personalized recommendations.",
    year: "2025",
    color: "pink",
    tech: ["React", "Spring Boot", "AI API"],
  },
  {
    title: "Infrastrack",
    description:
      "A system designed to monitor and manage infrastructure assets efficiently and reliably.",
    year: "2024",
    color: "green",
    tech: ["C#", ".NET", "SQL Server"],
  },
  {
    title: "Chatmate",
    description:
      "A real-time messaging application for seamless communication between users.",
    year: "2024",
    color: "blue",
    tech: ["React", "WebSocket", "Spring Boot"],
  },
  {
    title: "Cancan",
    description:
      "A collaborative space where users can share ideas and build creative concepts together.",
    year: "2024",
    color: "yellow",
    tech: ["React", "Node.js"],
  },
  {
    title: "Springboot Roadmap",
    description:
      "A structured learning guide to help developers master Spring Boot step by step.",
    year: "2024",
    color: "purple",
    tech: ["Spring Boot", "Java", "MySQL"],
  },
  {
    title: "Rebyu",
    description:
      "A platform for users to share reviews and rate experiences in a structured system.",
    year: "2024",
    color: "pink",
    tech: ["React", "Spring Boot"],
  },
]

function Projects() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div className="flex h-full flex-col gap-6 p-6">
      <h1 className="text-2xl font-semibold">Projects</h1>

      <div className="flex flex-wrap gap-6 p-5">
        {projectsData.map((project, index) => {
          const colors = COLOR_MAP[project.color]

          return (
            <div
              key={index}
              className="relative h-[220px] w-[300px] cursor-pointer"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div
                className={`absolute -top-3 left-4 h-6 w-24 rounded-t-md shadow-sm ${colors.tab}`}
              />

              <div
                className={`relative flex h-full flex-col justify-between rounded-xl border border-gray-200 bg-gradient-to-b p-4 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${colors.body}`}
              >
                <div className="flex flex-col gap-2">
                  <p className="font-semibold text-gray-800">{project.title}</p>

                  <p className="text-sm leading-snug text-gray-700">
                    {project.description}
                  </p>
                </div>

                <p className="text-xs text-gray-600">{project.year}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Projects
