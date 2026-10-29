import { Metadata } from "next"
import { Button } from "../../../components/Button/Button"

export const metadata: Metadata = {
  title: "Aliante Neighborhood | North Las Vegas Real Estate Guide & Market Data",
  description: "Comprehensive guide to Aliante neighborhood in North Las Vegas. Median home price: $450K, school ratings 8.5/10, commute times, amenities, and real estate market trends. Expert insights for buyers and sellers.",
  keywords: "Aliante neighborhood, North Las Vegas homes, Aliante real estate, median home price $450K, Aliante schools, commute times, market trends, buyer guide, seller guide",
  openGraph: {
    title: "Aliante Neighborhood | North Las Vegas Real Estate Guide & Market Data",
    description: "Comprehensive guide to Aliante neighborhood in North Las Vegas. Median home price: $450K, school ratings 8.5/10, commute times, amenities, and real estate market trends.",
    url: "https://searchnorthlasvegashomes.com/neighborhoods/aliante",
  },
}

export default function AliantePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
            Aliante Neighborhood Guide
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Complete guide to Aliante, North Las Vegas: Median home price $450K, 8.5/10 school rating, 25-minute commute to downtown, master-planned community
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Aliante Neighborhood Quick Stats
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">$450,000</div>
              <div className="text-gray-600">Median Home Price</div>
              <div className="text-sm text-gray-500">+8.2% YoY growth</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">2,500+</div>
              <div className="text-gray-600">Total Homes</div>
              <div className="text-sm text-gray-500">Built 2000-2010</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">8.5/10</div>
              <div className="text-gray-600">School Rating</div>
              <div className="text-sm text-gray-500">Clark County District</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">25 min</div>
              <div className="text-gray-600">Downtown Commute</div>
              <div className="text-sm text-gray-500">Via US-95</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Aliante */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              About Aliante Neighborhood
            </h2>
            <div className="prose prose-lg mx-auto">
              <p className="text-lg text-gray-700 mb-6">
                Aliante is a master-planned community located in North Las Vegas, Nevada, offering a perfect blend of suburban tranquility and urban convenience. This well-designed neighborhood features modern architecture, tree-lined streets, and a strong sense of community.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Built between 2000-2010, Aliante has grown into one of North Las Vegas's most desirable neighborhoods, attracting families, professionals, and retirees who appreciate the area's amenities, schools, and quality of life.
              </p>
              
              <h3 className="text-2xl font-semibold mt-8 mb-4">Key Neighborhood Facts</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Location:</strong> North Las Vegas, Nevada (89184 zip code)</li>
                <li>• <strong>Development Period:</strong> 2000-2010</li>
                <li>• <strong>Home Styles:</strong> Single-family homes, townhomes, condominiums</li>
                <li>• <strong>Lot Sizes:</strong> 4,000-8,000 square feet typical</li>
                <li>• <strong>Home Sizes:</strong> 1,200-3,500 square feet</li>
                <li>• <strong>Architecture:</strong> Modern desert contemporary</li>
                <li>• <strong>HOA:</strong> Yes, typical fees $25-50/month</li>
                <li>• <strong>Elevation:</strong> 2,400 feet above sea level</li>
                <li>• <strong>Climate:</strong> Desert climate with 300+ sunny days annually</li>
                <li>• <strong>Population Density:</strong> 2,800 residents per square mile</li>
                <li>• <strong>Median Age:</strong> 38 years old</li>
                <li>• <strong>Household Size:</strong> 2.8 people average</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Community Amenities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Aliante Community Amenities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                Parks & Recreation
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Aliante Nature Discovery Park</strong> - 20-acre park with trails</li>
                <li>• <strong>Community swimming pools</strong> - 3 heated pools</li>
                <li>• <strong>Tennis courts</strong> - 4 lighted courts</li>
                <li>• <strong>Walking trails</strong> - 5+ miles of paved paths</li>
                <li>• <strong>Playgrounds</strong> - 6 neighborhood playgrounds</li>
                <li>• <strong>Sports fields</strong> - Soccer and baseball fields</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                Shopping & Dining
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Aliante Casino + Hotel</strong> - Entertainment complex</li>
                <li>• <strong>Aliante Marketplace</strong> - Shopping center</li>
                <li>• <strong>Grocery stores</strong> - Smith's, Albertsons</li>
                <li>• <strong>Restaurants & cafes</strong> - 20+ dining options</li>
                <li>• <strong>Retail shops</strong> - Target, Home Depot</li>
                <li>• <strong>Medical facilities</strong> - Urgent care, pharmacies</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                Transportation & Access
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Freeway access</strong> - US-95 (2 minutes)</li>
                <li>• <strong>Public transportation</strong> - RTC bus routes</li>
                <li>• <strong>Bike-friendly streets</strong> - Dedicated bike lanes</li>
                <li>• <strong>Airport proximity</strong> - 15 minutes to LAS</li>
                <li>• <strong>Downtown access</strong> - 25 minutes via US-95</li>
                <li>• <strong>Strip access</strong> - 20 minutes via I-15</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Schools in Aliante */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Schools in Aliante Neighborhood
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">
                Elementary Schools (K-5)
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <div className="font-medium">Aliante Elementary School</div>
                  <div className="text-sm text-gray-500">Grades K-5 • 8.2/10 Rating</div>
                  <div className="text-sm text-gray-500">Student-teacher ratio: 18:1</div>
                  <div className="text-sm text-gray-500">Distance: 0.5 miles</div>
                </li>
                <li>
                  <div className="font-medium">Cox Elementary School</div>
                  <div className="text-sm text-gray-500">Grades K-5 • 7.8/10 Rating</div>
                  <div className="text-sm text-gray-500">Student-teacher ratio: 19:1</div>
                  <div className="text-sm text-gray-500">Distance: 1.2 miles</div>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">
                Middle Schools (6-8)
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <div className="font-medium">Aliante Middle School</div>
                  <div className="text-sm text-gray-500">Grades 6-8 • 8.0/10 Rating</div>
                  <div className="text-sm text-gray-500">Student-teacher ratio: 20:1</div>
                  <div className="text-sm text-gray-500">Distance: 0.8 miles</div>
                </li>
                <li>
                  <div className="font-medium">Canyon Springs Middle</div>
                  <div className="text-sm text-gray-500">Grades 6-8 • 7.5/10 Rating</div>
                  <div className="text-sm text-gray-500">Student-teacher ratio: 21:1</div>
                  <div className="text-sm text-gray-500">Distance: 2.1 miles</div>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">
                High Schools (9-12)
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <div className="font-medium">Canyon Springs High School</div>
                  <div className="text-sm text-gray-500">Grades 9-12 • 7.8/10 Rating</div>
                  <div className="text-sm text-gray-500">Student-teacher ratio: 22:1</div>
                  <div className="text-sm text-gray-500">Distance: 2.3 miles</div>
                </li>
                <li>
                  <div className="font-medium">Legacy High School</div>
                  <div className="text-sm text-gray-500">Grades 9-12 • 8.1/10 Rating</div>
                  <div className="text-sm text-gray-500">Student-teacher ratio: 21:1</div>
                  <div className="text-sm text-gray-500">Distance: 3.5 miles</div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 bg-blue-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">School District Information</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>District:</strong> Clark County School District (CCSD)</li>
              <li>• <strong>Overall District Rating:</strong> 7.5/10</li>
              <li>• <strong>Special Programs:</strong> Gifted & Talented, ESL, Special Education</li>
              <li>• <strong>Extracurricular:</strong> Sports, music, arts, clubs</li>
              <li>• <strong>College Readiness:</strong> 65% of graduates attend college</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Real Estate Market in Aliante */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Real Estate Market in Aliante
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Market Overview
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  Aliante's real estate market has shown consistent growth over the past decade, with home values appreciating steadily at an average of 8.2% annually. The neighborhood offers a mix of single-family homes, townhomes, and condominiums to suit various lifestyles and budgets.
                </p>
                <p>
                  Recent market data shows strong demand for homes in Aliante, with properties typically selling within 30-45 days and often receiving multiple offers, especially for well-maintained homes in desirable locations.
                </p>
                
                <h4 className="text-lg font-semibold mt-6 mb-3">Market Statistics</h4>
                <ul className="space-y-2">
                  <li>• <strong>Median Home Price:</strong> $450,000</li>
                  <li>• <strong>Average Days on Market:</strong> 35 days</li>
                  <li>• <strong>Price per Square Foot:</strong> $185</li>
                  <li>• <strong>Annual Appreciation:</strong> 8.2%</li>
                  <li>• <strong>Inventory Level:</strong> Low (2.1 months supply)</li>
                  <li>• <strong>Owner Occupancy Rate:</strong> 95%</li>
                  <li>• <strong>Rental Market:</strong> Median rent $2,200/month</li>
                  <li>• <strong>Rental Yield:</strong> 5.9% average</li>
                  <li>• <strong>Property Tax Rate:</strong> 1.1% of assessed value</li>
                  <li>• <strong>Insurance Cost:</strong> $1,200-1,800 annually</li>
                  <li>• <strong>HOA Fees:</strong> $25-50/month average</li>
                  <li>• <strong>Utility Costs:</strong> $150-250/month average</li>
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
                  <div className="text-sm text-gray-600">$400,000 - $600,000</div>
                  <div className="text-sm text-gray-500">3-5 bedrooms, 2-4 bathrooms</div>
                  <div className="text-sm text-gray-500">1,200-3,500 sq ft</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="font-medium">Townhomes</div>
                  <div className="text-sm text-gray-600">$350,000 - $450,000</div>
                  <div className="text-sm text-gray-500">2-3 bedrooms, 2-3 bathrooms</div>
                  <div className="text-sm text-gray-500">1,000-2,200 sq ft</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="font-medium">Condominiums</div>
                  <div className="text-sm text-gray-600">$250,000 - $400,000</div>
                  <div className="text-sm text-gray-500">1-3 bedrooms, 1-2 bathrooms</div>
                  <div className="text-sm text-gray-500">800-1,800 sq ft</div>
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
                  <div className="text-sm text-gray-500">25 minutes via US-95</div>
                  <div className="text-sm text-gray-500">18 miles</div>
                </li>
                <li>
                  <div className="font-medium">Las Vegas Strip</div>
                  <div className="text-sm text-gray-500">20 minutes via I-15</div>
                  <div className="text-sm text-gray-500">15 miles</div>
                </li>
                <li>
                  <div className="font-medium">McCarran Airport (LAS)</div>
                  <div className="text-sm text-gray-500">15 minutes via US-95</div>
                  <div className="text-sm text-gray-500">12 miles</div>
                </li>
                <li>
                  <div className="font-medium">North Las Vegas Airport</div>
                  <div className="text-sm text-gray-500">8 minutes via US-95</div>
                  <div className="text-sm text-gray-500">6 miles</div>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Public Transportation</h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <div className="font-medium">RTC Bus Routes</div>
                  <div className="text-sm text-gray-500">Routes 106, 107, 108</div>
                  <div className="text-sm text-gray-500">15-30 minute frequency</div>
                </li>
                <li>
                  <div className="font-medium">Express Routes</div>
                  <div className="text-sm text-gray-500">Route 109 to downtown</div>
                  <div className="text-sm text-gray-500">Limited stops</div>
                </li>
                <li>
                  <div className="font-medium">Park & Ride</div>
                  <div className="text-sm text-gray-500">Aliante Station</div>
                  <div className="text-sm text-gray-500">Free parking available</div>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Road Access</h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <div className="font-medium">US-95 Freeway</div>
                  <div className="text-sm text-gray-500">2 minutes to access</div>
                  <div className="text-sm text-gray-500">North/South travel</div>
                </li>
                <li>
                  <div className="font-medium">I-15 Freeway</div>
                  <div className="text-sm text-gray-500">8 minutes to access</div>
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
            Frequently Asked Questions About Aliante
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">What is the average home price in Aliante?</h3>
              <p className="text-gray-700">The median home price in Aliante is $450,000, with single-family homes ranging from $400,000 to $600,000. Townhomes typically sell for $350,000-$450,000, while condominiums range from $250,000 to $400,000.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">How are the schools in Aliante?</h3>
              <p className="text-gray-700">Aliante has nearby public schools with an average rating of 8.5/10. Aliante Elementary (8.2/10), Aliante Middle School (8.0/10), and Legacy High School (8.1/10) are all highly rated within the Clark County School District.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">What is the commute time to downtown Las Vegas?</h3>
              <p className="text-gray-700">The average commute time from Aliante to downtown Las Vegas is 25 minutes via US-95 freeway (18 miles). During peak traffic hours, this can extend to 35-40 minutes.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Are there HOA fees in Aliante?</h3>
              <p className="text-gray-700">Yes, most homes in Aliante have HOA fees ranging from $25 to $50 per month. These fees typically cover common area maintenance, pool access, and some utilities.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">What amenities are available in Aliante?</h3>
              <p className="text-gray-700">Aliante offers extensive amenities including Aliante Nature Discovery Park, community pools, tennis courts, walking trails, Aliante Casino + Hotel, Aliante Marketplace shopping center, and numerous restaurants and retail options.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Is Aliante a good investment for real estate?</h3>
              <p className="text-gray-700">Yes, Aliante has shown strong appreciation with 8.2% annual growth. The neighborhood's parks and community amenities, nearby schools, and convenient location make it a solid investment choice with properties typically selling within 30-45 days.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Where can I see crime data for Aliante?</h3>
              <p className="text-gray-700">North Las Vegas Police publish crime data for Aliante online. The neighborhood has a 95% owner-occupancy rate.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">How far is Aliante from the airport?</h3>
              <p className="text-gray-700">McCarran International Airport (LAS) is approximately 15 minutes from Aliante via US-95 freeway (12 miles). North Las Vegas Airport is even closer at just 8 minutes away (6 miles).</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">What is the weather like in Aliante?</h3>
              <p className="text-gray-700">Aliante enjoys a desert climate with over 300 sunny days annually. Summers are hot (90-110°F) with low humidity, winters are mild (40-60°F), and rainfall averages 4.5 inches per year. The elevation of 2,400 feet provides slightly cooler temperatures than the valley floor.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">What are the property taxes in Aliante?</h3>
              <p className="text-gray-700">Property taxes in Aliante are approximately 1.1% of the assessed value annually. For a $450,000 home, this equals about $4,950 per year. Nevada has no state income tax, making it attractive for retirees and investors.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">What shopping and dining options are available?</h3>
              <p className="text-gray-700">Aliante offers Aliante Marketplace with major retailers, Aliante Casino + Hotel with restaurants, and numerous local dining options. The neighborhood is also close to Centennial Hills shopping centers and the Las Vegas Premium Outlets (20 minutes away).</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">What is the demographic makeup of Aliante?</h3>
              <p className="text-gray-700">Aliante has a diverse population with a median age of 38. The neighborhood attracts families, professionals, and retirees. The area has a strong sense of community with 95% owner-occupancy rate and active neighborhood associations.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">What utilities and services are available?</h3>
              <p className="text-gray-700">Aliante has full utility services including NV Energy (electricity), Southwest Gas (natural gas), Las Vegas Valley Water District, and Republic Services (trash/recycling). Internet providers include Cox Communications and CenturyLink with fiber optic options available.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">What makes Aliante unique compared to other North Las Vegas neighborhoods?</h3>
              <p className="text-gray-700">Aliante stands out for its master-planned community design, nearby schools, parks and community amenities, and convenient location. The neighborhood offers a perfect balance of suburban tranquility with easy access to major employment centers, shopping, and entertainment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Find Your Home in Aliante?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our local experts help you find the perfect home in this desirable North Las Vegas neighborhood. Get current market data and expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/search" className="bg-white text-blue-900 hover:bg-gray-100">
              Search Aliante Homes
            </Button>
            <Button href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-blue-900">
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 