import React from "react"

function Education() {
  return (
    <div className="flex h-full flex-col gap-6 p-6">

      <h1 className="text-2xl font-semibold">Educational Background</h1>

      {/* Item */}
      <div className="flex items-start justify-between rounded-xl border border-gray-200 
        bg-gradient-to-b from-white to-gray-50 p-5 shadow-sm hover:shadow-md transition">

        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold">
            Bachelor of Science in Information Technology
          </p>

          <p className="text-gray-600 text-sm">
            University of Cebu Lapu-Lapu and Mandaue
          </p>

          <span className="w-fit rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
            Dean’s Lister
          </span>
        </div>

        <p className="text-sm text-gray-500 whitespace-nowrap">
          2022 - Present
        </p>
      </div>

      {/* Item */}
      <div className="flex items-start justify-between rounded-xl border border-gray-200 
        bg-gradient-to-b from-white to-gray-50 p-5 shadow-sm hover:shadow-md transition">

        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold">
            Science, Technology, Engineering, and Mathematics
          </p>

          <p className="text-gray-600 text-sm">
            University of Cebu Lapu-Lapu and Mandaue
          </p>

          <span className="w-fit rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
            Academic Scholar
          </span>
        </div>

        <p className="text-sm text-gray-500 whitespace-nowrap">
          2020 - 2022
        </p>
      </div>

    </div>
  )
}

export default Education