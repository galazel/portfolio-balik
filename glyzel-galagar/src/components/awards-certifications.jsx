import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrophy, faCertificate } from "@fortawesome/free-solid-svg-icons"

const awards = [
  {
    title: "Second Place, General Information Technology Quiz",
    org: "11th ICT Congress 2025, SM Seaside Cebu",
    date: "April 2025",
  },
  {
    title: "Champion, General Information Technology Quiz",
    org: "UCLM CCS Days 2025, Mandaue City, Cebu",
    date: "February 2025",
  },
  {
    title: "OWWA Education for Development Scholarship Program Scholar",
    org: "Overseas Workers Welfare Administration",
    date: "July 2023 - Present",
  },
]

const trainings = [
  {
    title: "Blockchain Technology Workshop on Coding Smart Contracts in CashScript",
    org: "Certificate of Participation, Mandaue City, Cebu",
    date: "November 2025",
  },
]

function AwardsAndCertifications() {
  return (
    <div className="flex h-full flex-col gap-6 p-4 sm:p-6">
      <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
        AWARDS <span className="text-green-500">&amp; CERTIFICATIONS</span>
      </h1>

      <div>
        <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold sm:text-2xl">
          <FontAwesomeIcon icon={faTrophy} className="text-green-500" />
          Awards &amp; Scholarships
        </h3>
        <div className="flex flex-col gap-3">
          {awards.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-1 rounded-xl border border-gray-200 bg-gradient-to-b from-white to-gray-50 p-4 shadow-sm transition hover:shadow-md sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex flex-col gap-1">
                <p className="text-sm font-semibold sm:text-base">{item.title}</p>
                <p className="text-xs text-gray-600 sm:text-sm">{item.org}</p>
              </div>
              <p className="text-xs text-gray-500 sm:whitespace-nowrap sm:text-sm">
                {item.date}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold sm:text-2xl">
          <FontAwesomeIcon icon={faCertificate} className="text-green-500" />
          Training &amp; Workshops
        </h3>
        <div className="flex flex-col gap-3">
          {trainings.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-1 rounded-xl border border-gray-200 bg-gradient-to-b from-white to-gray-50 p-4 shadow-sm transition hover:shadow-md sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex flex-col gap-1">
                <p className="text-sm font-semibold sm:text-base">{item.title}</p>
                <p className="text-xs text-gray-600 sm:text-sm">{item.org}</p>
              </div>
              <p className="text-xs text-gray-500 sm:whitespace-nowrap sm:text-sm">
                {item.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AwardsAndCertifications
