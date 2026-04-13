import { useState } from "react"
import About from "./components/about.jsx"
import Education from "./components/education.jsx"
import Skills from "./components/skills.jsx"
import Projects from "./components/projects.jsx"
import AwardsAndCertifications from "./components/awards-certifications.jsx"
import {
  faUser,
  faGraduationCap,
  faScrewdriverWrench,
  faDiagramProject,
  faAward,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const navigations = [
  {
    name: "About",
    component: <About />,
    logo: <FontAwesomeIcon icon={faUser} size="2x" className="text-white" />,
  },
  {
    name: "Education",
    component: <Education />,
    logo: (
      <FontAwesomeIcon
        icon={faGraduationCap}
        size="2x"
        className="text-white"
      />
    ),
  },
  {
    name: "Skills",
    component: <Skills />,
    logo: (
      <FontAwesomeIcon
        icon={faScrewdriverWrench}
        size="2x"
        className="text-white"
      />
    ),
  },
  {
    name: "Projects",
    component: <Projects />,
    logo: (
      <FontAwesomeIcon
        icon={faDiagramProject}
        size="2x"
        className="text-white"
      />
    ),
  },
  {
    name: "Awards and Certifications",
    component: <AwardsAndCertifications />,
    logo: <FontAwesomeIcon icon={faAward} size="2x" className="text-white" />,
  },
]

export function App() {
  const [showDialog, setShowDialog] = useState(false)
  const [navigate, setNavigate] = useState(<></>)

  return (
    <main className="relative flex h-screen w-screen items-center justify-center bg-red-400 bg-[url(/src/assets/macos-tahoe-26-5120x2880-22674.jpg)] bg-cover bg-no-repeat">
      <div className="flex min-w-[280px] flex-col items-center justify-center px-14 py-10 text-center">
        <p className="text-2xl font-semibold tracking-widest text-white/80">
          FRIDAY 31 MAY
        </p>
        <p className="text-9xl font-semibold text-white">16:33</p>
      </div>

{showDialog && (
  <div className="absolute z-10 flex h-[68%] w-[60%] flex-col gap-5 rounded-2xl border border-gray-200 bg-gradient-to-b from-white to-gray-100 p-5 shadow-2xl overflow-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
    <div className="flex gap-2 border-b border-gray-200 pb-3">
      <div className="h-4 w-4 rounded-full bg-red-500" onClick={() => setShowDialog(false)}></div>
      <div className="h-4 w-4 rounded-full bg-yellow-400"></div>
      <div className="h-4 w-4 rounded-full bg-green-500"></div>
    </div>
    {navigate}
  </div>
)}

      <div className="absolute bottom-6 flex w-auto justify-center gap-4 rounded-2xl border border-white/20 bg-white/10 px-6 py-3 shadow-2xl backdrop-blur-xl">
        {navigations.map((item, index) => {
          return (
            <Tooltip key={index}>
              <TooltipTrigger>
                <div
                  
                  className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/30 bg-white/20 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:scale-125"
                  onClick={() => {
                    setNavigate(item.component)
                    setShowDialog(true)

                  }}
                >
                  {item.logo}
                </div>
              </TooltipTrigger>
              <TooltipContent>{item.name}</TooltipContent>
            </Tooltip>
          )
        })}
      </div>
    </main>
  )
}

export default App
