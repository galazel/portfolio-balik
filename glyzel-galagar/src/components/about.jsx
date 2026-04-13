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
            An aspiring <i>Software Developer</i> with a strong passion for coding and
            continuous learning. I have experience developing both desktop and
            web applications through academic projects using C#, JavaScript, and
            Java.
          </p>
          <p className="text-center text-sm text-gray-600 sm:text-left sm:text-base">
            I have a solid foundation in object-oriented programming and
            hands-on experience with frameworks such as Spring Boot, ReactJS,
            and Bootstrap. I am eager to join a company that values growth and
            well-being, where I can contribute, learn, and continuously improve
            as a developer.
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
            <li>Web Development</li>
            <li>Desktop Development</li>
            <li>Fullstack Development</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About