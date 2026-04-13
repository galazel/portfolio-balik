import { useState, useEffect } from "react"
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
  faTimes,
  faMusic,
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
    logo: <FontAwesomeIcon icon={faUser} />,
  },
  {
    name: "Education",
    component: <Education />,
    logo: <FontAwesomeIcon icon={faGraduationCap} />,
  },
  {
    name: "Skills",
    component: <Skills />,
    logo: <FontAwesomeIcon icon={faScrewdriverWrench} />,
  },
  {
    name: "Projects",
    component: <Projects />,
    logo: <FontAwesomeIcon icon={faDiagramProject} />,
  },
  {
    name: "Awards and Certifications",
    component: <AwardsAndCertifications />,
    logo: <FontAwesomeIcon icon={faAward} />,
  },
]

export function App() {
  const [showDialog, setShowDialog] = useState(false)
  const [navigate, setNavigate] = useState(<></>)
  const [activeIndex, setActiveIndex] = useState(null)
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (showDialog) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [showDialog])

  const dateStr = now.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  })

  const timeStr = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  })

  const handleNavClick = (item, index) => {
    setNavigate(item.component)
    setActiveIndex(index)
    setShowDialog(true)
  }

  const handleClose = () => {
    setShowDialog(false)
    setActiveIndex(null)
  }

  return (
    <main className="relative flex h-screen w-screen items-center justify-center bg-[url(/macos-tahoe-26-5120x2880-22674.jpg)] bg-cover bg-center bg-no-repeat">
      {/* Clock */}
      <div
        className={`flex flex-col items-center justify-center px-6 py-8 text-center transition-opacity duration-300 ${showDialog ? "pointer-events-none opacity-0 sm:pointer-events-auto sm:opacity-100" : "opacity-100"}`}
      >
        <p className="text-lg font-semibold tracking-widest text-white/80 sm:text-2xl">
          {dateStr}
        </p>
        <p className="text-7xl font-semibold text-white sm:text-9xl">
          {timeStr}
        </p>
      </div>

      {/* Dialog */}
      {showDialog && (
        <>
          <div
            className="absolute inset-0 z-10 bg-black/40 sm:hidden"
            onClick={handleClose}
          />
          <div className="absolute inset-x-0 top-0 bottom-[88px] z-20 flex flex-col gap-4 overflow-y-auto rounded-none border-0 bg-gradient-to-b from-white to-gray-100 p-4 shadow-2xl [-ms-overflow-style:none] [scrollbar-width:none] sm:inset-auto sm:top-1/2 sm:left-1/2 sm:h-[68%] sm:w-[80%] sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-2xl sm:border sm:border-gray-200 sm:p-5 md:w-[70%] lg:w-[60%] [&::-webkit-scrollbar]:hidden">
            <div className="flex items-center gap-2 border-b border-gray-200 pb-3">
              <div
                className="h-3.5 w-3.5 cursor-pointer rounded-full bg-red-500 sm:h-4 sm:w-4"
                onClick={handleClose}
              />
              <div className="h-3.5 w-3.5 rounded-full bg-yellow-400 sm:h-4 sm:w-4" />
              <div className="h-3.5 w-3.5 rounded-full bg-green-500 sm:h-4 sm:w-4" />
              <button
                className="ml-auto flex items-center gap-1.5 text-sm text-gray-500 sm:hidden"
                onClick={handleClose}
              >
                <FontAwesomeIcon icon={faTimes} />
                Close
              </button>
            </div>
            {navigate}
          </div>
        </>
      )}

      {/* Dock */}
      <div className="absolute right-2 bottom-4 left-2 flex justify-center gap-2 overflow-x-auto rounded-2xl border border-white/20 bg-white/10 px-3 py-2 shadow-2xl backdrop-blur-xl sm:right-auto sm:bottom-6 sm:left-auto sm:gap-4 sm:px-6 sm:py-3 [&::-webkit-scrollbar]:hidden">
        {navigations.map((item, index) => (
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              <button
                aria-label={item.name}
                onClick={() => handleNavClick(item, index)}
                className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-white/30 text-base text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:scale-125 sm:h-14 sm:w-14 sm:text-xl ${activeIndex === index ? "-translate-y-1 scale-110 bg-white/40" : "bg-white/20"} `}
              >
                {item.logo}
              </button>
            </TooltipTrigger>
            <TooltipContent>{item.name}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </main>
  )
}

export default App
