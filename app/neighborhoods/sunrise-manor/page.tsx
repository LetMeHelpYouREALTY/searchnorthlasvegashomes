import { Metadata } from "next"
import { Button } from "../../../components/Button/Button"

export const metadata: Metadata = {
  title: "Sunrise Manor Neighborhood | North Las Vegas Real Estate Guide & Market Data",
  description: "Comprehensive guide to Sunrise Manor neighborhood in North Las Vegas. Median home price: $380K, school ratings 7.8/10, family-friendly community, commute times, and real estate market trends. Expert insights for buyers and sellers.",
  keywords: "Sunrise Manor neighborhood, North Las Vegas homes, Sunrise Manor real estate, median home price $380K, family-friendly, school ratings, commute times, market trends, buyer guide, seller guide",
  openGraph: {
    title: "Sunrise Manor Neighborhood | North Las Vegas Real Estate Guide & Market Data",
    description: "Comprehensive guide to Sunrise Manor neighborhood in North Las Vegas. Median home price: $380K, school ratings 7.8/10, family-friendly community, commute times, and real estate market trends.",
    url: "https://searchnorthlasvegashomes.com/neighborhoods/sunrise-manor",
  },
}

export default function SunriseManorPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
            Sunrise Manor Neighborhood Guide
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Complete guide to Sunrise Manor, North Las Vegas: Median home price $380K, 7.8/10 school rating, family-friendly community, 20-minute commute to downtown, established neighborhood with great value
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Sunrise Manor Quick Stats
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">$380,000</div>
              <div className="text-gray-600">Median Home Price</div>
              <div className="text-sm text-gray-500">+6.5% YoY growth</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">3,200+</div>
              <div className="text-gray-600">Total Homes</div>
              <div className="text-sm text-gray-500">Built 1980-2000</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">7.8/10</div>
              <div className="text-gray-600">School Rating</div>
              <div className="text-sm text-gray-500">Clark County District</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">20 min</div>
              <div className="text-gray-600">Downtown Commute</div>
              <div className="text-sm text-gray-500">Via US-95</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Sunrise Manor */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              About Sunrise Manor Neighborhood
            </h2>
            <div className="prose prose-lg mx-auto">
              <p className="text-lg text-gray-700 mb-6">
                Sunrise Manor is an established, family-friendly neighborhood located in the eastern part of North Las Vegas. Known for its affordable housing, good schools, and convenient location, this community offers residents a great value proposition in the Las Vegas metropolitan area.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Built primarily between 1980-2000, Sunrise Manor has matured into a stable, well-maintained neighborhood that attracts families, first-time homebuyers, and investors looking for affordable real estate opportunities in a growing market.
              </p>
              
              <h3 className="text-2xl font-semibold mt-8 mb-4">Key Neighborhood Facts</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Location:</strong> East North Las Vegas, Nevada (89110 zip code)</li>
                <li>• <strong>Development Period:</strong> 1980-2000</li>
                <li>• <strong>Home Styles:</strong> Single-family homes, townhomes, condominiums</li>
                <li>• <strong>Lot Sizes:</strong> 3,500-7,000 square feet typical</li>
                <li>• <strong>Home Sizes:</strong> 1,000-2,800 square feet</li>
                <li>• <strong>Architecture:</strong> Traditional suburban styles</li>
                <li>• <strong>HOA:</strong> Varies by subdivision</li>
                <li>• <strong>Mature Trees:</strong> Well-established landscaping</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Community Amenities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Sunrise Manor Community Amenities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                Parks & Recreation
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Sunrise Manor Park</strong> - 15-acre community park</li>
                <li>• <strong>Community swimming pools</strong> - 2 heated pools</li>
                <li>• <strong>Tennis courts</strong> - 3 lighted courts</li>
                <li>• <strong>Walking trails</strong> - 3+ miles of paved paths</li>
                <li>• <strong>Playgrounds</strong> - 4 neighborhood playgrounds</li>
                <li>• <strong>Sports fields</strong> - Soccer and baseball fields</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                Shopping & Dining
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Sunrise Manor Shopping Center</strong> - Local retail</li>
                <li>• <strong>Grocery stores</strong> - Smith's, Albertsons</li>
                <li>• <strong>Restaurants & cafes</strong> - 15+ dining options</li>
                <li>• <strong>Retail shops</strong> - Walmart, Home Depot</li>
                <li>• <strong>Medical facilities</strong> - Urgent care, pharmacies</li>
                <li>• <strong>Banks & services</strong> - Multiple financial institutions</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                Transportation & Access
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Freeway access</strong> - US-95 (3 minutes)</li>
                <li>• <strong>Public transportation</strong> - RTC bus routes</li>
                <li>• <strong>Bike-friendly streets</strong> - Dedicated bike lanes</li>
                <li>• <strong>Airport proximity</strong> - 12 minutes to LAS</li>
                <li>• <strong>Downtown access</strong> - 20 minutes via US-95</li>
                <li>• <strong>Strip access</strong> - 18 minutes via I-15</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Schools in Sunrise Manor */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Schools in Sunrise Manor Neighborhood
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">
                Elementary Schools (K-5)
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <div className="font-medium">Sunrise Manor Elementary</div>
                  <div className="text-sm text-gray-500">Grades K-5 • 7.8/10 Rating</div>
                  <div className="text-sm text-gray-500">Student-teacher ratio: 19:1</div>
                  <div className="text-sm text-gray-500">Distance: 0.6 miles</div>
                </li>
                <li>
                  <div className="font-medium">East Career Academy</div>
                  <div className="text-sm text-gray-500">Grades K-5 • 7.5/10 Rating</div>
                  <div className="text-sm text-gray-500">Student-teacher ratio: 20:1</div>
                  <div className="text-sm text-gray-500">Distance: 1.3 miles</div>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">
                Middle Schools (6-8)
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <div className="font-medium">Sunrise Manor Middle School</div>
                  <div className="text-sm text-gray-500">Grades 6-8 • 7.6/10 Rating</div>
                  <div className="text-sm text-gray-500">Student-teacher ratio: 21:1</div>
                  <div className="text-sm text-gray-500">Distance: 0.9 miles</div>
                </li>
                <li>
                  <div className="font-medium">East Career Academy Middle</div>
                  <div className="text-sm text-gray-500">Grades 6-8 • 7.3/10 Rating</div>
                  <div className="text-sm text-gray-500">Student-teacher ratio: 22:1</div>
                  <div className="text-sm text-gray-500">Distance: 1.5 miles</div>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">
                High Schools (9-12)
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <div className="font-medium">East Career Academy High</div>
                  <div className="text-sm text-gray-500">Grades 9-12 • 7.9/10 Rating</div>
                  <div className="text-sm text-gray-500">Student-teacher ratio: 23:1</div>
                  <div className="text-sm text-gray-500">Distance: 1.7 miles</div>
                </li>
                <li>
                  <div className="font-medium">Canyon Springs High School</div>
                  <div className="text-sm text-gray-500">Grades 9-12 • 7.8/10 Rating</div>
                  <div className="text-sm text-gray-500">Student-teacher ratio: 22:1</div>
                  <div className="text-sm text-gray-500">Distance: 3.2 miles</div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 bg-orange-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">School District Information</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>District:</strong> Clark County School District (CCSD)</li>
              <li>• <strong>Overall District Rating:</strong> 7.5/10</li>
              <li>• <strong>Special Programs:</strong> Gifted & Talented, ESL, Special Education</li>
              <li>• <strong>Extracurricular:</strong> Sports, music, arts, clubs</li>
              <li>• <strong>College Readiness:</strong> 60% of graduates attend college</li>
              <li>• <strong>Career Technical Education:</strong> East Career Academy programs</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Real Estate Market in Sunrise Manor */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Real Estate Market in Sunrise Manor
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Market Overview
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  Sunrise Manor's real estate market offers excellent value for buyers, with home prices below the Las Vegas metro average while maintaining steady appreciation. The neighborhood's established nature and family-friendly atmosphere make it attractive to first-time homebuyers and families.
                </p>
                <p>
                  Properties in Sunrise Manor typically offer good returns on investment, with homes selling within 45-60 days and providing solid rental income potential for investors.
                </p>
                
                <h4 className="text-lg font-semibold mt-6 mb-3">Market Statistics</h4>
                <ul className="space-y-2">
                  <li>• <strong>Median Home Price:</strong> $380,000</li>
                  <li>• <strong>Average Days on Market:</strong> 52 days</li>
                  <li>• <strong>Price per Square Foot:</strong> $165</li>
                  <li>• <strong>Annual Appreciation:</strong> 6.5%</li>
                  <li>• <strong>Inventory Level:</strong> Moderate (3.2 months supply)</li>
                  <li>• <strong>Owner Occupancy Rate:</strong> 88%</li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Home Types & Prices
              </h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="font-medium">Single-Family Homes</div>
                  <div className="text-sm text-gray-600">$320,000 - $450,000</div>
                  <div className="text-sm text-gray-500">3-4 bedrooms, 2-3 bathrooms</div>
                  <div className="text-sm text-gray-500">1,000-2,200 sq ft</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="font-medium">Townhomes</div>
                  <div className="text-sm text-gray-600">$280,000 - $350,000</div>
                  <div className="text-sm text-gray-500">2-3 bedrooms, 2 bathrooms</div>
                  <div className="text-sm text-gray-500">900-1,600 sq ft</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="font-medium">Condominiums</div>
                  <div className="text-sm text-gray-600">$220,000 - $320,000</div>
                  <div className="text-sm text-gray-500">1-2 bedrooms, 1-2 bathrooms</div>
                  <div className="text-sm text-gray-500">700-1,400 sq ft</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commute Times & Transportation */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Commute Times & Transportation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Major Destinations</h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <div className="font-medium">Downtown Las Vegas</div>
                  <div className="text-sm text-gray-500">20 minutes via US-95</div>
                  <div className="text-sm text-gray-500">14 miles</div>
                </li>
                <li>
                  <div className="font-medium">Las Vegas Strip</div>
                  <div className="text-sm text-gray-500">18 minutes via I-15</div>
                  <div className="text-sm text-gray-500">12 miles</div>
                </li>
                <li>
                  <div className="font-medium">McCarran Airport (LAS)</div>
                  <div className="text-sm text-gray-500">12 minutes via US-95</div>
                  <div className="text-sm text-gray-500">8 miles</div>
                </li>
                <li>
                  <div className="font-medium">North Las Vegas Airport</div>
                  <div className="text-sm text-gray-500">8 minutes via US-95</div>
                  <div className="text-sm text-gray-500">5 miles</div>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Public Transportation</h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <div className="font-medium">RTC Bus Routes</div>
                  <div className="text-sm text-gray-500">Routes 103, 104, 105</div>
                  <div className="text-sm text-gray-500">15-25 minute frequency</div>
                </li>
                <li>
                  <div className="font-medium">Express Routes</div>
                  <div className="text-sm text-gray-500">Route 106 to downtown</div>
                  <div className="text-sm text-gray-500">Limited stops</div>
                </li>
                <li>
                  <div className="font-medium">Park & Ride</div>
                  <div className="text-sm text-gray-500">Sunrise Manor Station</div>
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
                  <div className="font-medium">I-15 Freeway</div>
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
            Frequently Asked Questions About Sunrise Manor
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">What is the average home price in Sunrise Manor?</h3>
              <p className="text-gray-700">The median home price in Sunrise Manor is $380,000, with single-family homes ranging from $320,000 to $450,000. Townhomes typically sell for $280,000-$350,000, while condominiums range from $220,000 to $320,000.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">How are the schools in Sunrise Manor?</h3>
              <p className="text-gray-700">Sunrise Manor has good schools with an average rating of 7.8/10. Sunrise Manor Elementary (7.8/10), Sunrise Manor Middle School (7.6/10), and East Career Academy High (7.9/10) provide quality education within the Clark County School District.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">What is the commute time to downtown Las Vegas?</h3>
              <p className="text-gray-700">The average commute time from Sunrise Manor to downtown Las Vegas is 20 minutes via US-95 freeway (14 miles). During peak traffic hours, this can extend to 25-30 minutes.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Are there HOA fees in Sunrise Manor?</h3>
              <p className="text-gray-700">HOA fees vary by subdivision in Sunrise Manor, typically ranging from $20 to $60 per month. Some areas have no HOA fees, making it attractive for budget-conscious buyers.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">What amenities are available in Sunrise Manor?</h3>
              <p className="text-gray-700">Sunrise Manor offers community amenities including Sunrise Manor Park, community pools, tennis courts, walking trails, shopping centers, restaurants, and convenient access to major retailers and services.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Is Sunrise Manor a good investment for real estate?</h3>
              <p className="text-gray-700">Yes, Sunrise Manor offers good investment potential with 6.5% annual appreciation and affordable entry prices. The neighborhood's established nature and family-friendly atmosphere make it attractive for both owner-occupants and investors.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">What is the crime rate in Sunrise Manor?</h3>
              <p className="text-gray-700">Sunrise Manor has a moderate crime rate, typical for established suburban areas. The neighborhood's 88% owner-occupancy rate and community involvement contribute to its overall safety.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">How far is Sunrise Manor from the airport?</h3>
              <p className="text-gray-700">McCarran International Airport (LAS) is approximately 12 minutes from Sunrise Manor via US-95 freeway (8 miles). North Las Vegas Airport is even closer at just 8 minutes away (5 miles).</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">What makes Sunrise Manor unique?</h3>
              <p className="text-gray-700">Sunrise Manor is unique for its excellent value proposition, established community with mature landscaping, family-friendly atmosphere, and convenient location that offers easy access to major destinations while maintaining affordable housing prices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Find Your Home in Sunrise Manor?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our local experts help you find the perfect home in this affordable, family-friendly North Las Vegas neighborhood. Get current market data and expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/search" className="bg-white text-orange-600 hover:bg-gray-100">
              Search Sunrise Manor Homes
            </Button>
            <Button href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-orange-600">
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 