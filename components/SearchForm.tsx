"use client"

import { useEffect, useState } from "react"
import { Button } from "./Button/Button"

export function SearchForm() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Don't render form inputs on the server to prevent hydration mismatches
  if (!isClient) {
    return (
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
          <div className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 h-10"></div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Min Price</label>
            <div className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 h-10"></div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Max Price</label>
            <div className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 h-10"></div>
          </div>
        </div>
        <div>
          <label htmlFor="property-type" className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
          <div className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 h-10"></div>
        </div>
        <Button href="/search" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
          Search Properties
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
        <input 
          type="text" 
          placeholder="Enter address, neighborhood, or zip code"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          suppressHydrationWarning
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Min Price</label>
          <input 
            type="number" 
            placeholder="$200,000"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            suppressHydrationWarning
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Max Price</label>
          <input 
            type="number" 
            placeholder="$500,000"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            suppressHydrationWarning
          />
        </div>
      </div>
      <div>
        <label htmlFor="property-type" className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
        <select 
          id="property-type"
          name="property-type"
          aria-label="Select property type"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          suppressHydrationWarning
        >
          <option value="">Any Type</option>
          <option value="single-family">Single Family</option>
          <option value="townhouse">Townhouse</option>
          <option value="condo">Condo</option>
        </select>
      </div>
      <Button href="/search" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
        Search Properties
      </Button>
    </div>
  )
} 