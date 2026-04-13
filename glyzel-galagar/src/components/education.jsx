import React from "react"

function Education() {
  return (
    <div className="flex h-full flex-col gap-4 sm:gap-6 p-4 sm:p-6">

      <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
          EDUCATIONAL <span className="text-green-500">BACKGROUND</span>
        </h1>
      {/* Item */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between 
        gap-2 sm:gap-4 rounded-xl border border-gray-200 
        bg-gradient-to-b from-white to-gray-50 p-4 sm:p-5 
        shadow-sm hover:shadow-md transition">

        <div className="flex flex-col gap-2">
          <p className="text-base sm:text-lg font-semibold">
            Bachelor of Science in Information Technology
          </p>

          <p className="text-gray-600 text-sm">
            University of Cebu Lapu-Lapu and Mandaue
          </p>

          <span className="w-fit rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
            Dean's Lister
          </span>
        </div>

        <p className="text-sm text-gray-500 sm:whitespace-nowrap">
          2022 - Present
        </p>
      </div>

      {/* Item */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between 
        gap-2 sm:gap-4 rounded-xl border border-gray-200 
        bg-gradient-to-b from-white to-gray-50 p-4 sm:p-5 
        shadow-sm hover:shadow-md transition">

        <div className="flex flex-col gap-2">
          <p className="text-base sm:text-lg font-semibold">
            Science, Technology, Engineering, and Mathematics
          </p>

          <p className="text-gray-600 text-sm">
            University of Cebu Lapu-Lapu and Mandaue
          </p>

          <span className="w-fit rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
            Academic Scholar
          </span>
        </div>

        <p className="text-sm text-gray-500 sm:whitespace-nowrap">
          2020 - 2022
        </p>
      </div>

    </div>
  )
}

export default Education