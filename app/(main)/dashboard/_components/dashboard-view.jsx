"use client"
import React from 'react'

const DashboardView = ({ insights }) => {
  
const salaryData=insights.salaryRanges.map((range)=>({
  name :  range.role,
  min:range.min/1000,
  max:range.max/1000,
  median:range.median/1000
}))

  return (
    <div>
      <h2 className="text-4xl font-bold mb-4">Industry Insights</h2>
      <pre className="bg-gray-100 p-4 rounded">{JSON.stringify(insights, null, 2)}</pre>
      </div>
  )
}

export default DashboardView