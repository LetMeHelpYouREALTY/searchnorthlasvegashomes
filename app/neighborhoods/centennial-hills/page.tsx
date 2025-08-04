import { Metadata } from "next"
import { Button } from "../../../components/Button/Button"

export const metadata: Metadata = {
  title: "Centennial Hills Neighborhood - North Las Vegas Family Community",
  description: "Discover Centennial Hills, a family-friendly neighborhood in North Las Vegas with mountain views, excellent schools, and abundant amenities. Learn about real estate opportunities and community features.",
}

export default function CentennialHillsNeighborhoodPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
            Centennial Hills
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            A family-friendly neighborhood in North Las Vegas offering stunning mountain views, excellent schools, and a peaceful suburban lifestyle.
          </p>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">$420,000</div>
              <div className="text-gray-600">Median Home Price</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">38</div>
              <div className="text-gray-600">Avg. Days on Market</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">12%</div>
              <div className="text-gray-600">Annual Appreciation</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">9/10</div>
              <div className="text-gray-600">Family-Friendly Score</div>
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
                About Centennial Hills
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Centennial Hills is a picturesque neighborhood nestled against the Spring Mountains in the northwestern part of North Las Vegas. Known for its family-friendly atmosphere, excellent schools, and breathtaking mountain views, this community offers residents a perfect balance of suburban tranquility and modern convenience.
              </p>
              <p className="text-gray-600 mb-6">
                Developed primarily in the 1990s and 2000s, Centennial Hills has become one of the most sought-after areas in North Las Vegas, attracting families, professionals, and outdoor enthusiasts who appreciate the area's natural beauty and strong sense of community.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Stunning mountain views and natural beauty</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Family-oriented community with excellent schools</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Abundant parks, trails, and outdoor recreation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Convenient access to shopping and amenities</span>
                </div>
              </div>
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
            Community Amenities
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
                <li>• Walking and hiking trails</li>
                <li>• Playgrounds and sports fields</li>
                <li>• Picnic areas and shelters</li>
                <li>• Mountain views and natural beauty</li>
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
                <li>• Extensive book and media collections</li>
                <li>• Computer and internet access</li>
                <li>• Educational programs and events</li>
                <li>• Study rooms and meeting spaces</li>
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
                <li>• Fitness centers and pools</li>
                <li>• Youth and senior programs</li>
                <li>• Social activities and clubs</li>
                <li>• Event spaces and meeting rooms</li>
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
                <li>• Centennial Hills Shopping Center</li>
                <li>• Grocery stores and pharmacies</li>
                <li>• Diverse dining options</li>
                <li>• Entertainment and services</li>
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
                <li>• Low crime rates</li>
                <li>• Active neighborhood watch</li>
                <li>• Well-lit streets and sidewalks</li>
                <li>• Community safety programs</li>
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
                <li>• Hiking and biking trails</li>
                <li>• Mountain access and views</li>
                <li>• Outdoor sports and activities</li>
                <li>• Nature and wildlife viewing</li>
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
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Elementary Schools</h3>
              <div className="space-y-4">
                <div>
                  <div className="font-medium text-gray-900">Centennial Hills Elementary</div>
                  <div className="text-sm text-gray-600">Grades K-5 • Rating: 9/10</div>
                  <div className="text-sm text-gray-500">Strong academic programs and community involvement</div>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Hayden Elementary School</div>
                  <div className="text-sm text-gray-600">Grades K-5 • Rating: 8/10</div>
                  <div className="text-sm text-gray-500">Focus on technology and innovation</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Middle Schools</h3>
              <div className="space-y-4">
                <div>
                  <div className="font-medium text-gray-900">Centennial Hills Middle School</div>
                  <div className="text-sm text-gray-600">Grades 6-8 • Rating: 8/10</div>
                  <div className="text-sm text-gray-500">Comprehensive academic and athletic programs</div>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Sawyer Middle School</div>
                  <div className="text-sm text-gray-600">Grades 6-8 • Rating: 7/10</div>
                  <div className="text-sm text-gray-500">Strong arts and music programs</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">High Schools</h3>
              <div className="space-y-4">
                <div>
                  <div className="font-medium text-gray-900">Centennial High School</div>
                  <div className="text-sm text-gray-600">Grades 9-12 • Rating: 8/10</div>
                  <div className="text-sm text-gray-500">Advanced placement and career technical programs</div>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Shadow Ridge High School</div>
                  <div className="text-sm text-gray-600">Grades 9-12 • Rating: 8/10</div>
                  <div className="text-sm text-gray-500">Comprehensive academic and athletic offerings</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              All schools in the Centennial Hills area are part of the Clark County School District, providing quality education for students.
            </p>
            <Button href="/contact" className="bg-green-600 text-white hover:bg-green-700">
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
                </div>
                <div>
                  <div className="font-medium text-gray-900">Luxury Homes</div>
                  <div className="text-sm text-gray-600">$550,000 - $800,000</div>
                  <div className="text-sm text-gray-500">4-6 bedrooms, premium features</div>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Townhomes</div>
                  <div className="text-sm text-gray-600">$320,000 - $400,000</div>
                  <div className="text-sm text-gray-500">2-3 bedrooms, 2-3 bathrooms</div>
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

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Find Your Home in Centennial Hills?
          </h2>
          <p className="text-xl mb-8">
            Explore available properties in this beautiful North Las Vegas neighborhood and discover why families love the mountain views and peaceful atmosphere of Centennial Hills.
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