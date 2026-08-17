import React from "react"
import { faCode, faBookOpenReader, faGamepad } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function About() {
  return (
    <div className="flex h-full flex-col gap-6 p-4">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
          ABOUT <span className="text-green-500">ME</span>
        </h1>
        <p className="text-xs sm:text-sm">ALLOW ME TO INTRODUCE MYSELF</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex items-center justify-center">
          <img
            src="/glyzel.jpg"
            alt="Glyzel"
            className="h-40 w-40 rounded-2xl object-cover shadow-lg sm:h-56 sm:w-56 md:h-[300px] md:w-[300px]"
          />
        </div>

        <div className="flex flex-col justify-center gap-3 sm:gap-4">
          <p className="text-center text-xl font-semibold sm:text-left sm:text-2xl">
            Hi! I am Glyzel
          </p>
          <p className="text-center text-sm text-gray-600 sm:text-left sm:text-base">
            A backend-focused <i>full-stack developer</i> with hands-on experience
            building and architecting end-to-end software systems using Java,
            Spring Boot, Python, FastAPI, React, PostgreSQL, and AWS.
          </p>
          <p className="text-center text-sm text-gray-600 sm:text-left sm:text-base">
            I have independently architected and shipped multiple AI-powered
            platforms, implementing RAG pipelines, LLM integrations, AI agents,
            vector search, and secure role-based REST APIs. I'm eager to join a
            company that values growth and well-being, where I can contribute,
            learn, and continuously improve as a developer.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-2">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-xl font-bold sm:text-2xl">
            THINGS I <span className="text-green-500">LOVE</span>
          </p>
          <div className="flex items-center justify-center gap-6 text-xl sm:text-2xl">
            <FontAwesomeIcon icon={faCode} />
            <FontAwesomeIcon icon={faBookOpenReader} />
            <FontAwesomeIcon icon={faGamepad} />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-center text-xl font-bold sm:text-left sm:text-2xl">
            LOOK WHAT I CAN <span className="text-green-500">DO</span>
          </p>
          <ul className="list-disc px-6 text-sm sm:text-base">
            <li>Backend Architecture &amp; REST API Design</li>
            <li>AI Engineering (RAG, LLM Integrations, AI Agents)</li>
            <li>Fullstack Web Development</li>
            <li>Cloud Infrastructure (AWS)</li>
            <li>Desktop Development</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About