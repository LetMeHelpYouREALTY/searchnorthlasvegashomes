"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Button } from './Button/Button'

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  
  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const closeDropdowns = () => {
    setActiveDropdown(null)
    setIsMenuOpen(false)
  }

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-900">
              Search North Las Vegas Homes
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Home */}
            <Link href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Home
            </Link>

            {/* Search */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('search')}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium flex items-center"
              >
                Search
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'search' && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  <Link href="/search" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Property Search
                  </Link>
                  <Link href="/valuation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Home Valuation
                  </Link>
                </div>
              )}
            </div>

            {/* Neighborhoods */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('neighborhoods')}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium flex items-center"
              >
                Neighborhoods
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'neighborhoods' && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  <Link href="/neighborhoods" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    All Neighborhoods
                  </Link>
                  <Link href="/neighborhoods/aliante" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Aliante
                  </Link>
                  <Link href="/neighborhoods/centennial-hills" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Centennial Hills
                  </Link>
                  <Link href="/neighborhoods/skye-canyon" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Skye Canyon
                  </Link>
                  <Link href="/neighborhoods/sunrise-manor" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Sunrise Manor
                  </Link>
                  <Link href="/neighborhoods/winchester" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Winchester
                  </Link>
                </div>
              )}
            </div>

            {/* Tools */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('tools')}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium flex items-center"
              >
                Tools
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'tools' && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  <Link href="/tools/mortgage-calculator" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Mortgage Calculator
                  </Link>
                  <Link href="/tools/roi-calculator" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    ROI Calculator
                  </Link>
                  <Link href="/tools/affordability" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Affordability Calculator
                  </Link>
                  <Link href="/tools/closing-costs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Closing Costs Calculator
                  </Link>
                  <Link href="/tools/refinance" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Refinance Calculator
                  </Link>
                  <Link href="/tools/rent-vs-buy" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Rent vs Buy Calculator
                  </Link>
                </div>
              )}
            </div>

            {/* Resources */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('resources')}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium flex items-center"
              >
                Resources
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'resources' && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  <Link href="/guides" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Buying & Selling Guides
                  </Link>
                  <Link href="/guides/first-time-buyer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    First-Time Buyer Guide
                  </Link>
                  <Link href="/market-insights" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Market Insights
                  </Link>
                  <Link href="/reports" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Market Reports
                  </Link>
                  <Link href="/blog" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Blog
                  </Link>
                  <Link href="/videos" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Videos
                  </Link>
                  <Link href="/webinars" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Webinars
                  </Link>
                </div>
              )}
            </div>

            {/* Services */}
            <Link href="/services" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Services
            </Link>

            {/* About */}
            <Link href="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              About
            </Link>

            {/* Contact */}
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <Link href="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50" onClick={closeDropdowns}>
              Home
            </Link>
            
            <div className="space-y-1">
              <button
                onClick={() => toggleDropdown('mobile-search')}
                className="w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 flex items-center justify-between"
              >
                Search
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'mobile-search' && (
                <div className="pl-4 space-y-1">
                  <Link href="/search" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600" onClick={closeDropdowns}>
                    Property Search
                  </Link>
                  <Link href="/valuation" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600" onClick={closeDropdowns}>
                    Home Valuation
                  </Link>
                </div>
              )}
            </div>

            <div className="space-y-1">
              <button
                onClick={() => toggleDropdown('mobile-neighborhoods')}
                className="w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 flex items-center justify-between"
              >
                Neighborhoods
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'mobile-neighborhoods' && (
                <div className="pl-4 space-y-1">
                  <Link href="/neighborhoods" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600" onClick={closeDropdowns}>
                    All Neighborhoods
                  </Link>
                  <Link href="/neighborhoods/aliante" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600" onClick={closeDropdowns}>
                    Aliante
                  </Link>
                  <Link href="/neighborhoods/centennial-hills" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600" onClick={closeDropdowns}>
                    Centennial Hills
                  </Link>
                  <Link href="/neighborhoods/skye-canyon" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600" onClick={closeDropdowns}>
                    Skye Canyon
                  </Link>
                  <Link href="/neighborhoods/sunrise-manor" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600" onClick={closeDropdowns}>
                    Sunrise Manor
                  </Link>
                  <Link href="/neighborhoods/winchester" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600" onClick={closeDropdowns}>
                    Winchester
                  </Link>
                </div>
              )}
            </div>

            <div className="space-y-1">
              <button
                onClick={() => toggleDropdown('mobile-tools')}
                className="w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 flex items-center justify-between"
              >
                Tools
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'mobile-tools' && (
                <div className="pl-4 space-y-1">
                  <Link href="/tools/mortgage-calculator" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600" onClick={closeDropdowns}>
                    Mortgage Calculator
                  </Link>
                  <Link href="/tools/roi-calculator" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600" onClick={closeDropdowns}>
                    ROI Calculator
                  </Link>
                  <Link href="/tools/affordability" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600" onClick={closeDropdowns}>
                    Affordability Calculator
                  </Link>
                  <Link href="/tools/closing-costs" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600" onClick={closeDropdowns}>
                    Closing Costs Calculator
                  </Link>
                  <Link href="/tools/refinance" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600" onClick={closeDropdowns}>
                    Refinance Calculator
                  </Link>
                  <Link href="/tools/rent-vs-buy" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600" onClick={closeDropdowns}>
                    Rent vs Buy Calculator
                  </Link>
                </div>
              )}
            </div>

            <div className="space-y-1">
              <button
                onClick={() => toggleDropdown('mobile-resources')}
                className="w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 flex items-center justify-between"
              >
                Resources
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'mobile-resources' && (
                <div className="pl-4 space-y-1">
                  <Link href="/guides" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600" onClick={closeDropdowns}>
                    Buying & Selling Guides
                  </Link>
                  <Link href="/guides/first-time-buyer" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600" onClick={closeDropdowns}>
                    First-Time Buyer Guide
                  </Link>
                  <Link href="/market-insights" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600" onClick={closeDropdowns}>
                    Market Insights
                  </Link>
                  <Link href="/reports" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600" onClick={closeDropdowns}>
                    Market Reports
                  </Link>
                  <Link href="/blog" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600" onClick={closeDropdowns}>
                    Blog
                  </Link>
                  <Link href="/videos" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600" onClick={closeDropdowns}>
                    Videos
                  </Link>
                  <Link href="/webinars" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600" onClick={closeDropdowns}>
                    Webinars
                  </Link>
                </div>
              )}
            </div>

            <Link href="/services" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50" onClick={closeDropdowns}>
              Services
            </Link>
            <Link href="/about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50" onClick={closeDropdowns}>
              About
            </Link>
            <Link href="/contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50" onClick={closeDropdowns}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
} 