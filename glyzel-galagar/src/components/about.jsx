import React from "react"

function About() {
  return (
    <div className="grid h-full grid-cols-2 gap-6 p-6">
      {/* Image */}
      <div className="flex items-center justify-center">
        <img
          src="/src/assets/glyzel.jpg"
          alt="Glyzel"
          className="h-[300px] w-[300px] rounded-2xl object-cover shadow-lg"
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col justify-center gap-4">
        <p className="text-2xl font-semibold">Hi! I am Glyzel Galagar</p>

        <p className="text-gray-600">
          An aspiring Software Developer with a strong passion for coding and
          continuous learning. I have experience developing both desktop and web
          applications through academic projects using C#, JavaScript, and Java.
        </p>
        <p className="text-gray-600">
          I have a solid foundation in object-oriented programming and hands-on
          experience with frameworks such as Spring Boot, ReactJS, and
          Bootstrap. I am eager to join a company that values growth and
          well-being, where I can contribute, learn, and continuously improve as
          a developer.
        </p>
      </div>
    </div>
  )
}

export default About
