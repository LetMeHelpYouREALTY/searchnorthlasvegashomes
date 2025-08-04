import { Metadata } from "next"
import { Button } from "../../../components/Button/Button"

export const metadata: Metadata = {
  title: "Winchester Neighborhood | North Las Vegas Real Estate Guide & Market Data",
  description: "Comprehensive guide to Winchester neighborhood in North Las Vegas. Median home price: $410K, school ratings 8.2/10, convenient location, commute times, and real estate market trends. Expert insights for buyers and sellers.",
  keywords: "Winchester neighborhood, North Las Vegas homes, Winchester real estate, median home price $410K, convenient location, school ratings, commute times, market trends, buyer guide, seller guide",
  openGraph: {
    title: "Winchester Neighborhood | North Las Vegas Real Estate Guide & Market Data",
    description: "Comprehensive guide to Winchester neighborhood in North Las Vegas. Median home price: $410K, school ratings 8.2/10, convenient location, commute times, and real estate market trends.",
    url: "https://searchnorthlasvegashomes.com/neighborhoods/winchester",
  },
}

export default function WinchesterPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
            Winchester Neighborhood Guide
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Complete guide to Winchester, North Las Vegas: Median home price $410K, 8.2/10 school rating, convenient central location, 18-minute commute to downtown, established community with great accessibility
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Winchester Quick Stats
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">$410,000</div>
              <div className="text-gray-600">Median Home Price</div>
              <div className="text-sm text-gray-500">+7.8% YoY growth</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">2,800+</div>
              <div className="text-gray-600">Total Homes</div>
              <div className="text-sm text-gray-500">Built 1990-2010</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">8.2/10</div>
              <div className="text-gray-600">School Rating</div>
              <div className="text-sm text-gray-500">Clark County District</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">18 min</div>
              <div className="text-gray-600">Downtown Commute</div>
              <div className="text-sm text-gray-500">Via US-95</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Winchester */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              About Winchester Neighborhood
            </h2>
            <div className="prose prose-lg mx-auto">
              <p className="text-lg text-gray-700 mb-6">
                Winchester is a well-established, centrally located neighborhood in North Las Vegas that offers residents excellent accessibility to major destinations throughout the Las Vegas metropolitan area. Known for its convenient location, good schools, and family-friendly atmosphere, this community provides an ideal balance of suburban living and urban convenience.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Built primarily between 1990-2010, Winchester has developed into a mature, stable neighborhood that attracts families, professionals, and commuters who appreciate its central location and easy access to employment centers, shopping, and entertainment.
              </p>
              
              <h3 className="text-2xl font-semibold mt-8 mb-4">Key Neighborhood Facts</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Location:</strong> Central North Las Vegas, Nevada (89115 zip code)</li>
                <li>• <strong>Development Period:</strong> 1990-2010</li>
                <li>• <strong>Home Styles:</strong> Single-family homes, townhomes, condominiums</li>
                <li>• <strong>Lot Sizes:</strong> 4,000-8,000 square feet typical</li>
                <li>• <strong>Home Sizes:</strong> 1,200-3,000 square feet</li>
                <li>• <strong>Architecture:</strong> Modern suburban styles</li>
                <li>• <strong>HOA:</strong> Varies by subdivision ($25-$70/month)</li>
                <li>• <strong>Central Location:</strong> Easy access to all major areas</li>
                <li>• <strong>Elevation:</strong> 2,100 feet above sea level</li>
                <li>• <strong>Climate:</strong> Desert climate, 300+ sunny days annually</li>
                <li>• <strong>Population Density:</strong> 3,200 people per square mile</li>
                <li>• <strong>Median Age:</strong> 38 years old</li>
                <li>• <strong>Household Size:</strong> 2.8 people average</li>
                <li>• <strong>Median Household Income:</strong> $72,000</li>
                <li>• <strong>Education Level:</strong> 65% have some college or higher</li>
                <li>• <strong>Central Accessibility:</strong> 15-minute radius to major destinations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Community Amenities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Winchester Community Amenities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                Parks & Recreation
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Winchester Community Park</strong> - 25-acre park with amenities</li>
                <li>• <strong>Community swimming pools</strong> - 3 heated pools</li>
                <li>• <strong>Tennis courts</strong> - 4 lighted courts</li>
                <li>• <strong>Walking trails</strong> - 4+ miles of paved paths</li>
                <li>• <strong>Playgrounds</strong> - 5 neighborhood playgrounds</li>
                <li>• <strong>Sports fields</strong> - Soccer, baseball, basketball</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                Shopping & Dining
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Winchester Town Center</strong> - Major shopping complex</li>
                <li>• <strong>Grocery stores</strong> - Smith's, Albertsons, Trader Joe's</li>
                <li>• <strong>Restaurants & cafes</strong> - 25+ dining options</li>
                <li>• <strong>Retail shops</strong> - Target, Home Depot, Best Buy</li>
                <li>• <strong>Medical facilities</strong> - Urgent care, dental offices</li>
                <li>• <strong>Banks & services</strong> - Multiple financial institutions</li>
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
                <li>• <strong>Airport proximity</strong> - 10 minutes to LAS</li>
                <li>• <strong>Downtown access</strong> - 18 minutes via US-95</li>
                <li>• <strong>Strip access</strong> - 15 minutes via I-15</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Schools in Winchester */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Schools in Winchester Neighborhood
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">
                Elementary Schools (K-5)
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <div className="font-medium">Winchester Elementary School</div>
                  <div className="text-sm text-gray-500">Grades K-5 • 8.2/10 Rating</div>
                  <div className="text-sm text-gray-500">Student-teacher ratio: 18:1</div>
                  <div className="text-sm text-gray-500">Distance: 0.4 miles</div>
                </li>
                <li>
                  <div className="font-medium">Centennial Elementary</div>
                  <div className="text-sm text-gray-500">Grades K-5 • 8.0/10 Rating</div>
                  <div className="text-sm text-gray-500">Student-teacher ratio: 19:1</div>
                  <div className="text-sm text-gray-500">Distance: 1.1 miles</div>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">
                Middle Schools (6-8)
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <div className="font-medium">Winchester Middle School</div>
                  <div className="text-sm text-gray-500">Grades 6-8 • 8.1/10 Rating</div>
                  <div className="text-sm text-gray-500">Student-teacher ratio: 20:1</div>
                  <div className="text-sm text-gray-500">Distance: 0.7 miles</div>
                </li>
                <li>
                  <div className="font-medium">Centennial Middle School</div>
                  <div className="text-sm text-gray-500">Grades 6-8 • 7.9/10 Rating</div>
                  <div className="text-sm text-gray-500">Student-teacher ratio: 21:1</div>
                  <div className="text-sm text-gray-500">Distance: 1.8 miles</div>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">
                High Schools (9-12)
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <div className="font-medium">Centennial High School</div>
                  <div className="text-sm text-gray-500">Grades 9-12 • 8.1/10 Rating</div>
                  <div className="text-sm text-gray-500">Student-teacher ratio: 21:1</div>
                  <div className="text-sm text-gray-500">Distance: 2.1 miles</div>
                </li>
                <li>
                  <div className="font-medium">Legacy High School</div>
                  <div className="text-sm text-gray-500">Grades 9-12 • 8.0/10 Rating</div>
                  <div className="text-sm text-gray-500">Student-teacher ratio: 22:1</div>
                  <div className="text-sm text-gray-500">Distance: 3.5 miles</div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 bg-purple-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">School District Information</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>District:</strong> Clark County School District (CCSD)</li>
              <li>• <strong>Overall District Rating:</strong> 7.5/10</li>
              <li>• <strong>Special Programs:</strong> Gifted & Talented, ESL, Special Education</li>
              <li>• <strong>Extracurricular:</strong> Sports, music, arts, clubs</li>
              <li>• <strong>College Readiness:</strong> 68% of graduates attend college</li>
              <li>• <strong>Advanced Placement:</strong> 18+ AP courses available</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Real Estate Market in Winchester */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Real Estate Market in Winchester
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Market Overview
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  Winchester's real estate market benefits from its central location and established community, with home values showing consistent appreciation. The neighborhood's convenience and accessibility make it attractive to both families and professionals.
                </p>
                <p>
                  Properties in Winchester typically sell within 40-55 days, with the central location and good schools contributing to strong demand. The neighborhood offers a good balance of affordability and convenience.
                </p>
                
                <h4 className="text-lg font-semibold mt-6 mb-3">Market Statistics</h4>
                <ul className="space-y-2">
                  <li>• <strong>Median Home Price:</strong> $410,000</li>
                  <li>• <strong>Average Days on Market:</strong> 47 days</li>
                  <li>• <strong>Price per Square Foot:</strong> $180</li>
                  <li>• <strong>Annual Appreciation:</strong> 7.8%</li>
                  <li>• <strong>Inventory Level:</strong> Low (2.8 months supply)</li>
                  <li>• <strong>Owner Occupancy Rate:</strong> 91%</li>
                  <li>• <strong>Rental Market:</strong> 2,100+ rental units available</li>
                  <li>• <strong>Rental Yield:</strong> 5.2% average annual return</li>
                  <li>• <strong>Property Tax Rate:</strong> 0.84% of assessed value</li>
                  <li>• <strong>Insurance Cost:</strong> $1,200-$1,800 annually</li>
                  <li>• <strong>HOA Fees:</strong> $25-$70 per month average</li>
                  <li>• <strong>Utility Costs:</strong> $180-$280 monthly average</li>
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
                  <div className="text-sm text-gray-600">$350,000 - $500,000</div>
                  <div className="text-sm text-gray-500">3-4 bedrooms, 2-3 bathrooms</div>
                  <div className="text-sm text-gray-500">1,200-2,800 sq ft</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="font-medium">Townhomes</div>
                  <div className="text-sm text-gray-600">$300,000 - $380,000</div>
                  <div className="text-sm text-gray-500">2-3 bedrooms, 2 bathrooms</div>
                  <div className="text-sm text-gray-500">1,000-1,800 sq ft</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="font-medium">Condominiums</div>
                  <div className="text-sm text-gray-600">$250,000 - $350,000</div>
                  <div className="text-sm text-gray-500">1-2 bedrooms, 1-2 bathrooms</div>
                  <div className="text-sm text-gray-500">800-1,500 sq ft</div>
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
                  <div className="text-sm text-gray-500">18 minutes via US-95</div>
                  <div className="text-sm text-gray-500">12 miles</div>
                </li>
                <li>
                  <div className="font-medium">Las Vegas Strip</div>
                  <div className="text-sm text-gray-500">15 minutes via I-15</div>
                  <div className="text-sm text-gray-500">10 miles</div>
                </li>
                <li>
                  <div className="font-medium">McCarran Airport (LAS)</div>
                  <div className="text-sm text-gray-500">10 minutes via US-95</div>
                  <div className="text-sm text-gray-500">7 miles</div>
                </li>
                <li>
                  <div className="font-medium">North Las Vegas Airport</div>
                  <div className="text-sm text-gray-500">6 minutes via US-95</div>
                  <div className="text-sm text-gray-500">4 miles</div>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Public Transportation</h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <div className="font-medium">RTC Bus Routes</div>
                  <div className="text-sm text-gray-500">Routes 102, 103, 104</div>
                  <div className="text-sm text-gray-500">10-20 minute frequency</div>
                </li>
                <li>
                  <div className="font-medium">Express Routes</div>
                  <div className="text-sm text-gray-500">Route 107 to downtown</div>
                  <div className="text-sm text-gray-500">Limited stops</div>
                </li>
                <li>
                  <div className="font-medium">Park & Ride</div>
                  <div className="text-sm text-gray-500">Winchester Station</div>
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
                  <div className="text-sm text-gray-500">4 minutes to access</div>
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
            Frequently Asked Questions About Winchester
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">What is the average home price in Winchester?</h3>
              <p className="text-gray-700">The median home price in Winchester is $410,000, with single-family homes ranging from $350,000 to $500,000. Townhomes typically sell for $300,000-$380,000, while condominiums range from $250,000 to $350,000.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">How are the schools in Winchester?</h3>
              <p className="text-gray-700">Winchester has good schools with an average rating of 8.2/10. Winchester Elementary (8.2/10), Winchester Middle School (8.1/10), and Centennial High School (8.1/10) provide quality education within the Clark County School District.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">What is the commute time to downtown Las Vegas?</h3>
              <p className="text-gray-700">The average commute time from Winchester to downtown Las Vegas is 18 minutes via US-95 freeway (12 miles). During peak traffic hours, this can extend to 25 minutes.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Are there HOA fees in Winchester?</h3>
              <p className="text-gray-700">HOA fees vary by subdivision in Winchester, typically ranging from $25 to $70 per month. These fees usually cover common area maintenance, pool access, and some utilities.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">What amenities are available in Winchester?</h3>
              <p className="text-gray-700">Winchester offers extensive amenities including Winchester Community Park, community pools, tennis courts, walking trails, Winchester Town Center shopping complex, restaurants, and convenient access to major retailers and services.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Is Winchester a good investment for real estate?</h3>
              <p className="text-gray-700">Yes, Winchester offers good investment potential with 7.8% annual appreciation and its central location. The neighborhood's convenience, good schools, and established community make it attractive for both owner-occupants and investors.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">What is the crime rate in Winchester?</h3>
              <p className="text-gray-700">Winchester has a low crime rate, below the city average. The neighborhood's 91% owner-occupancy rate and active community contribute to its safety and security.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">How far is Winchester from the airport?</h3>
              <p className="text-gray-700">McCarran International Airport (LAS) is approximately 10 minutes from Winchester via US-95 freeway (7 miles). North Las Vegas Airport is even closer at just 6 minutes away (4 miles).</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">What makes Winchester unique?</h3>
              <p className="text-gray-700">Winchester is unique for its central location and excellent accessibility to all major destinations in Las Vegas. The neighborhood offers a perfect balance of suburban living with urban convenience, making it ideal for families and professionals.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">What is the weather like in Winchester?</h3>
              <p className="text-gray-700">Winchester enjoys a desert climate with 300+ sunny days annually. Summers are hot (90-110°F) with low humidity, winters are mild (40-60°F), and rainfall averages 4.5 inches per year. The elevation of 2,100 feet provides slightly cooler temperatures than the valley floor.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">What are the property taxes in Winchester?</h3>
              <p className="text-gray-700">Property taxes in Winchester average 0.84% of assessed value. For a $410,000 home, annual property taxes would be approximately $3,444. Nevada's property tax cap of 3% annual increase helps keep costs predictable for homeowners.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">What shopping options are available in Winchester?</h3>
              <p className="text-gray-700">Winchester Town Center offers major retailers including Target, Home Depot, and Best Buy. The area features 25+ restaurants, grocery stores (Smith's, Albertsons, Trader Joe's), medical facilities, and financial services, all within convenient walking or driving distance.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">What is the demographic makeup of Winchester?</h3>
              <p className="text-gray-700">Winchester has a median age of 38 with household sizes averaging 2.8 people. The median household income is $72,000, with 65% of residents having some college education or higher. The population density is 3,200 people per square mile.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">What are the utility costs in Winchester?</h3>
              <p className="text-gray-700">Monthly utility costs in Winchester average $180-$280, including electricity ($80-$120), water/sewer ($40-$60), gas ($30-$50), and internet/cable ($30-$50). NV Energy and Southwest Gas are the primary utility providers.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">How does Winchester compare to other North Las Vegas neighborhoods?</h3>
              <p className="text-gray-700">Winchester stands out for its central location and accessibility. While other neighborhoods may offer newer homes or mountain views, Winchester's 15-minute radius to major destinations, established community, and good schools make it uniquely convenient for families and professionals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Find Your Home in Winchester?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our local experts help you find the perfect home in this centrally located, convenient North Las Vegas neighborhood. Get current market data and expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/search" className="bg-white text-purple-600 hover:bg-gray-100">
              Search Winchester Homes
            </Button>
            <Button href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-purple-600">
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 