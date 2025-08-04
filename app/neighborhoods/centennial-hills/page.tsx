import { Metadata } from "next"
import { Button } from "../../../components/Button/Button"

export const metadata: Metadata = {
  title: "Centennial Hills Neighborhood | North Las Vegas Real Estate Guide & Market Data",
  description: "Comprehensive guide to Centennial Hills neighborhood in North Las Vegas. Median home price: $420K, school ratings 9/10, mountain views, commute times, and real estate market trends. Expert insights for buyers and sellers.",
  keywords: "Centennial Hills neighborhood, North Las Vegas homes, Centennial Hills real estate, median home price $420K, mountain views, school ratings, commute times, market trends, buyer guide, seller guide",
  openGraph: {
    title: "Centennial Hills Neighborhood | North Las Vegas Real Estate Guide & Market Data",
    description: "Comprehensive guide to Centennial Hills neighborhood in North Las Vegas. Median home price: $420K, school ratings 9/10, mountain views, commute times, and real estate market trends.",
    url: "https://searchnorthlasvegashomes.com/neighborhoods/centennial-hills",
  },
}

export default function CentennialHillsNeighborhoodPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
            Centennial Hills Neighborhood Guide
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Complete guide to Centennial Hills, North Las Vegas: Median home price $420K, 9/10 school rating, stunning mountain views, 30-minute commute to downtown, family-friendly community
          </p>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-8">
            Centennial Hills Quick Stats
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">$420,000</div>
              <div className="text-gray-600">Median Home Price</div>
              <div className="text-sm text-gray-500">+12% YoY growth</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">38 days</div>
              <div className="text-gray-600">Avg. Days on Market</div>
              <div className="text-sm text-gray-500">Fast selling market</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">12%</div>
              <div className="text-gray-600">Annual Appreciation</div>
              <div className="text-sm text-gray-500">Strong growth</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">9/10</div>
              <div className="text-gray-600">Family-Friendly Score</div>
              <div className="text-sm text-gray-500">Excellent schools</div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                About Centennial Hills Neighborhood
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Centennial Hills is a picturesque neighborhood nestled against the Spring Mountains in the northwestern part of North Las Vegas. Known for its family-friendly atmosphere, excellent schools, and breathtaking mountain views, this community offers residents a perfect balance of suburban tranquility and modern convenience.
              </p>
              <p className="text-gray-600 mb-6">
                Developed primarily in the 1990s and 2000s, Centennial Hills has become one of the most sought-after areas in North Las Vegas, attracting families, professionals, and outdoor enthusiasts who appreciate the area's natural beauty and strong sense of community.
              </p>
              
              <h3 className="text-2xl font-semibold mt-8 mb-4">Key Neighborhood Facts</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Location:</strong> Northwest North Las Vegas, Nevada (89131 zip code)</li>
                <li>• <strong>Development Period:</strong> 1990s-2000s</li>
                <li>• <strong>Home Styles:</strong> Single-family homes, luxury homes, townhomes</li>
                <li>• <strong>Lot Sizes:</strong> 5,000-15,000 square feet typical</li>
                <li>• <strong>Home Sizes:</strong> 1,500-4,500 square feet</li>
                <li>• <strong>Architecture:</strong> Modern desert contemporary</li>
                <li>• <strong>HOA:</strong> Varies by subdivision</li>
                <li>• <strong>Elevation:</strong> 2,800-3,200 feet above sea level</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                Neighborhood Highlights
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Mountain Views</div>
                    <div className="text-sm text-gray-600">Breathtaking views of the Spring Mountains</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Education</div>
                    <div className="text-sm text-gray-600">Top-rated schools and educational programs</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Location</div>
                    <div className="text-sm text-gray-600">Easy access to US-95 and I-215</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Lifestyle</div>
                    <div className="text-sm text-gray-600">Peaceful suburban atmosphere</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Centennial Hills Community Amenities
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="w-12 h-12 bg-green-600 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Centennial Hills Park</h3>
              <p className="text-gray-600 mb-4">
                A beautiful 120-acre park featuring walking trails, playgrounds, sports fields, and picnic areas with stunning mountain views.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• <strong>Walking and hiking trails</strong> - 5+ miles of paved paths</li>
                <li>• <strong>Playgrounds and sports fields</strong> - Soccer, baseball, tennis</li>
                <li>• <strong>Picnic areas and shelters</strong> - 15+ picnic spots</li>
                <li>• <strong>Mountain views</strong> - Panoramic Spring Mountains</li>
                <li>• <strong>Dog park</strong> - Fenced off-leash area</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Centennial Hills Library</h3>
              <p className="text-gray-600 mb-4">
                A modern library facility offering educational programs, computer access, and community events for residents of all ages.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• <strong>Extensive book and media collections</strong> - 50,000+ items</li>
                <li>• <strong>Computer and internet access</strong> - 20+ workstations</li>
                <li>• <strong>Educational programs and events</strong> - Daily activities</li>
                <li>• <strong>Study rooms and meeting spaces</strong> - Available for rent</li>
                <li>• <strong>Children's programs</strong> - Story time, crafts, reading clubs</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="w-12 h-12 bg-purple-600 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Community Centers</h3>
              <p className="text-gray-600 mb-4">
                Multiple community centers providing fitness facilities, swimming pools, and social activities for residents.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• <strong>Fitness centers and pools</strong> - 3 community pools</li>
                <li>• <strong>Youth and senior programs</strong> - Age-specific activities</li>
                <li>• <strong>Social activities and clubs</strong> - 20+ community groups</li>
                <li>• <strong>Event spaces and meeting rooms</strong> - Available for events</li>
                <li>• <strong>Sports leagues</strong> - Basketball, volleyball, tennis</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="w-12 h-12 bg-orange-600 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Shopping & Dining</h3>
              <p className="text-gray-600 mb-4">
                Convenient access to retail centers, grocery stores, restaurants, and entertainment options in the area.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• <strong>Centennial Hills Shopping Center</strong> - Major retailers</li>
                <li>• <strong>Grocery stores and pharmacies</strong> - Smith's, Albertsons, CVS</li>
                <li>• <strong>Diverse dining options</strong> - 30+ restaurants</li>
                <li>• <strong>Entertainment and services</strong> - Movie theater, banks</li>
                <li>• <strong>Medical facilities</strong> - Urgent care, dental offices</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="w-12 h-12 bg-red-600 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Safety & Security</h3>
              <p className="text-gray-600 mb-4">
                A safe and secure community with excellent police presence, neighborhood watch programs, and well-maintained streets.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• <strong>Low crime rates</strong> - 40% below city average</li>
                <li>• <strong>Active neighborhood watch</strong> - Community patrols</li>
                <li>• <strong>Well-lit streets and sidewalks</strong> - LED lighting</li>
                <li>• <strong>Community safety programs</strong> - Emergency preparedness</li>
                <li>• <strong>Police substation</strong> - Local law enforcement</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="w-12 h-12 bg-teal-600 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Outdoor Recreation</h3>
              <p className="text-gray-600 mb-4">
                Abundant opportunities for outdoor activities including hiking, biking, and enjoying the natural beauty of the mountains.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• <strong>Hiking and biking trails</strong> - 10+ miles of trails</li>
                <li>• <strong>Mountain access and views</strong> - Spring Mountains</li>
                <li>• <strong>Outdoor sports and activities</strong> - Tennis, basketball</li>
                <li>• <strong>Nature and wildlife viewing</strong> - Desert ecosystem</li>
                <li>• <strong>Rock climbing areas</strong> - Nearby mountain access</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Schools Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Schools in Centennial Hills
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Elementary Schools (K-5)</h3>
              <div className="space-y-4">
                <div>
                  <div className="font-medium text-gray-900">Centennial Hills Elementary</div>
                  <div className="text-sm text-gray-600">Grades K-5 • Rating: 9/10</div>
                  <div className="text-sm text-gray-500">Student-teacher ratio: 17:1</div>
                  <div className="text-sm text-gray-500">Distance: 0.3 miles</div>
                  <div className="text-sm text-gray-500">Strong academic programs and community involvement</div>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Hayden Elementary School</div>
                  <div className="text-sm text-gray-600">Grades K-5 • Rating: 8/10</div>
                  <div className="text-sm text-gray-500">Student-teacher ratio: 18:1</div>
                  <div className="text-sm text-gray-500">Distance: 1.5 miles</div>
                  <div className="text-sm text-gray-500">Focus on technology and innovation</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Middle Schools (6-8)</h3>
              <div className="space-y-4">
                <div>
                  <div className="font-medium text-gray-900">Centennial Hills Middle School</div>
                  <div className="text-sm text-gray-600">Grades 6-8 • Rating: 8/10</div>
                  <div className="text-sm text-gray-500">Student-teacher ratio: 19:1</div>
                  <div className="text-sm text-gray-500">Distance: 0.8 miles</div>
                  <div className="text-sm text-gray-500">Comprehensive academic and athletic programs</div>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Sawyer Middle School</div>
                  <div className="text-sm text-gray-600">Grades 6-8 • Rating: 7/10</div>
                  <div className="text-sm text-gray-500">Student-teacher ratio: 20:1</div>
                  <div className="text-sm text-gray-500">Distance: 2.2 miles</div>
                  <div className="text-sm text-gray-500">Strong arts and music programs</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">High Schools (9-12)</h3>
              <div className="space-y-4">
                <div>
                  <div className="font-medium text-gray-900">Centennial High School</div>
                  <div className="text-sm text-gray-600">Grades 9-12 • Rating: 8/10</div>
                  <div className="text-sm text-gray-500">Student-teacher ratio: 21:1</div>
                  <div className="text-sm text-gray-500">Distance: 1.2 miles</div>
                  <div className="text-sm text-gray-500">Advanced placement and career technical programs</div>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Shadow Ridge High School</div>
                  <div className="text-sm text-gray-600">Grades 9-12 • Rating: 8/10</div>
                  <div className="text-sm text-gray-500">Student-teacher ratio: 22:1</div>
                  <div className="text-sm text-gray-500">Distance: 3.1 miles</div>
                  <div className="text-sm text-gray-500">Comprehensive academic and athletic offerings</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">School District Information</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>District:</strong> Clark County School District (CCSD)</li>
                <li>• <strong>Overall District Rating:</strong> 7.5/10</li>
                <li>• <strong>Special Programs:</strong> Gifted & Talented, ESL, Special Education</li>
                <li>• <strong>Extracurricular:</strong> Sports, music, arts, clubs</li>
                <li>• <strong>College Readiness:</strong> 70% of graduates attend college</li>
                <li>• <strong>Advanced Placement:</strong> 15+ AP courses available</li>
              </ul>
            </div>
            <Button href="/contact" className="bg-green-600 text-white hover:bg-green-700 mt-6">
              Learn More About Schools
            </Button>
          </div>
        </div>
      </section>

      {/* Real Estate Market Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Real Estate Market in Centennial Hills
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                Market Overview
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Median Home Price</span>
                  <span className="font-semibold text-gray-900">$420,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Average Days on Market</span>
                  <span className="font-semibold text-gray-900">38 days</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Price per Square Foot</span>
                  <span className="font-semibold text-gray-900">$195</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Annual Appreciation</span>
                  <span className="font-semibold text-green-600">12%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Inventory Level</span>
                  <span className="font-semibold text-gray-900">Low</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Owner Occupancy Rate</span>
                  <span className="font-semibold text-gray-900">92%</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                Home Types & Prices
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="font-medium text-gray-900">Single-Family Homes</div>
                  <div className="text-sm text-gray-600">$380,000 - $550,000</div>
                  <div className="text-sm text-gray-500">3-5 bedrooms, 2-4 bathrooms</div>
                  <div className="text-sm text-gray-500">1,500-3,200 sq ft</div>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Luxury Homes</div>
                  <div className="text-sm text-gray-600">$550,000 - $800,000</div>
                  <div className="text-sm text-gray-500">4-6 bedrooms, premium features</div>
                  <div className="text-sm text-gray-500">3,000-4,500 sq ft</div>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Townhomes</div>
                  <div className="text-sm text-gray-600">$320,000 - $400,000</div>
                  <div className="text-sm text-gray-500">2-3 bedrooms, 2-3 bathrooms</div>
                  <div className="text-sm text-gray-500">1,200-2,000 sq ft</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-green-50 rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">
              Why Buy in Centennial Hills?
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Stunning mountain views and natural beauty</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Excellent school district and educational opportunities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Family-friendly atmosphere and community</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Abundant outdoor recreation opportunities</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Strong appreciation potential and market stability</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Convenient location and transportation access</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Low crime rates and safe environment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Peaceful suburban lifestyle</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commute Times & Transportation */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Commute Times & Transportation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Major Destinations</h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <div className="font-medium">Downtown Las Vegas</div>
                  <div className="text-sm text-gray-500">30 minutes via US-95</div>
                  <div className="text-sm text-gray-500">22 miles</div>
                </li>
                <li>
                  <div className="font-medium">Las Vegas Strip</div>
                  <div className="text-sm text-gray-500">25 minutes via I-15</div>
                  <div className="text-sm text-gray-500">18 miles</div>
                </li>
                <li>
                  <div className="font-medium">McCarran Airport (LAS)</div>
                  <div className="text-sm text-gray-500">20 minutes via US-95</div>
                  <div className="text-sm text-gray-500">15 miles</div>
                </li>
                <li>
                  <div className="font-medium">North Las Vegas Airport</div>
                  <div className="text-sm text-gray-500">12 minutes via US-95</div>
                  <div className="text-sm text-gray-500">8 miles</div>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Public Transportation</h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <div className="font-medium">RTC Bus Routes</div>
                  <div className="text-sm text-gray-500">Routes 105, 106, 107</div>
                  <div className="text-sm text-gray-500">20-35 minute frequency</div>
                </li>
                <li>
                  <div className="font-medium">Express Routes</div>
                  <div className="text-sm text-gray-500">Route 110 to downtown</div>
                  <div className="text-sm text-gray-500">Limited stops</div>
                </li>
                <li>
                  <div className="font-medium">Park & Ride</div>
                  <div className="text-sm text-gray-500">Centennial Hills Station</div>
                  <div className="text-sm text-gray-500">Free parking available</div>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Road Access</h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <div className="font-medium">US-95 Freeway</div>
                  <div className="text-sm text-gray-500">3 minutes to access</div>
                  <div className="text-sm text-gray-500">North/South travel</div>
                </li>
                <li>
                  <div className="font-medium">I-215 Beltway</div>
                  <div className="text-sm text-gray-500">5 minutes to access</div>
                  <div className="text-sm text-gray-500">East/West travel</div>
                </li>
                <li>
                  <div className="font-medium">Surface Streets</div>
                  <div className="text-sm text-gray-500">Well-maintained roads</div>
                  <div className="text-sm text-gray-500">Bike-friendly lanes</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions About Centennial Hills
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">What is the average home price in Centennial Hills?</h3>
              <p className="text-gray-700">The median home price in Centennial Hills is $420,000, with single-family homes ranging from $380,000 to $550,000. Luxury homes can reach $800,000, while townhomes typically sell for $320,000-$400,000.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">How are the schools in Centennial Hills?</h3>
              <p className="text-gray-700">Centennial Hills has excellent schools with an average rating of 9/10. Centennial Hills Elementary (9/10), Centennial Hills Middle School (8/10), and Centennial High School (8/10) are all highly rated within the Clark County School District.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">What is the commute time to downtown Las Vegas?</h3>
              <p className="text-gray-700">The average commute time from Centennial Hills to downtown Las Vegas is 30 minutes via US-95 freeway (22 miles). During peak traffic hours, this can extend to 40-45 minutes.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Are there HOA fees in Centennial Hills?</h3>
              <p className="text-gray-700">HOA fees vary by subdivision in Centennial Hills, typically ranging from $30 to $80 per month. These fees usually cover common area maintenance, pool access, and some utilities.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">What amenities are available in Centennial Hills?</h3>
              <p className="text-gray-700">Centennial Hills offers extensive amenities including Centennial Hills Park (120 acres), Centennial Hills Library, community centers with pools and fitness facilities, shopping centers, restaurants, and abundant outdoor recreation opportunities with mountain views.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Is Centennial Hills a good investment for real estate?</h3>
              <p className="text-gray-700">Yes, Centennial Hills has shown strong appreciation with 12% annual growth. The neighborhood's family-friendly atmosphere, excellent schools, mountain views, and convenient location make it a solid investment choice with properties typically selling within 38 days.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">What is the crime rate in Centennial Hills?</h3>
              <p className="text-gray-700">Centennial Hills has a very low crime rate, approximately 40% below the city average. The neighborhood's 92% owner-occupancy rate, active neighborhood watch programs, and community safety initiatives contribute to its excellent safety record.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">How far is Centennial Hills from the airport?</h3>
              <p className="text-gray-700">McCarran International Airport (LAS) is approximately 20 minutes from Centennial Hills via US-95 freeway (15 miles). North Las Vegas Airport is even closer at just 12 minutes away (8 miles).</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">What makes Centennial Hills unique?</h3>
              <p className="text-gray-700">Centennial Hills is unique for its stunning mountain views of the Spring Mountains, higher elevation (2,800-3,200 feet), abundant outdoor recreation opportunities, excellent schools, and peaceful suburban atmosphere while still being conveniently located near major amenities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Find Your Home in Centennial Hills?
          </h2>
          <p className="text-xl mb-8">
            Explore available properties in this beautiful North Las Vegas neighborhood and discover why families love the mountain views and peaceful atmosphere of Centennial Hills. Get current market data and expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/search" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3">
              Search Centennial Hills Homes
            </Button>
            <Button href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3">
              Contact an Agent
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 