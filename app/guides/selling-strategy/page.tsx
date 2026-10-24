import { Metadata } from "next"
import { Button } from "../../../components/Button/Button"

export const metadata: Metadata = {
  title: "Home Selling Strategy Guide - North Las Vegas Real Estate",
  description: "Complete guide to selling your home in North Las Vegas. Learn pricing strategies, staging tips, and how to maximize your home's value.",
}

export default function SellingStrategyGuidePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
            Home Selling Strategy Guide
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Your complete guide to selling your home in North Las Vegas. Learn proven strategies to maximize your sale price and minimize time on market.
          </p>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Table of Contents
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-green-600">Preparing to Sell</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Market Analysis</li>
                <li>• Home Preparation</li>
                <li>• Pricing Strategy</li>
                <li>• Choosing an Agent</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-blue-600">Marketing & Showings</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Professional Photography</li>
                <li>• Virtual Tours</li>
                <li>• Open Houses</li>
                <li>• Online Marketing</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-purple-600">Negotiation & Closing</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Handling Offers</li>
                <li>• Negotiation Tactics</li>
                <li>• Closing Process</li>
                <li>• Moving Out</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Preparing to Sell Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Preparing to Sell: Setting the Foundation for Success
          </h2>
          
          <div className="space-y-12">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold mb-6 text-green-600">
                Step 1: Market Analysis and Timing
              </h3>
              <p className="text-gray-600 mb-6">
                Understanding the current market conditions in North Las Vegas is crucial for setting realistic expectations and timing your sale.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Market Research</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Analyze recent sales in your neighborhood</li>
                    <li>• Check current inventory levels</li>
                    <li>• Review days on market trends</li>
                    <li>• Understand seasonal patterns</li>
                    <li>• Monitor interest rate impacts</li>
                    <li>• Research buyer preferences</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Best Time to Sell</h4>
                  <div className="space-y-3">
                    <div className="border-l-4 border-green-500 pl-4">
                      <h5 className="font-semibold text-gray-900">Spring (March-May)</h5>
                      <p className="text-sm text-gray-600">Peak selling season, most buyers active</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h5 className="font-semibold text-gray-900">Summer (June-August)</h5>
                      <p className="text-sm text-gray-600">Good activity, families want to move before school</p>
                    </div>
                    <div className="border-l-4 border-orange-500 pl-4">
                      <h5 className="font-semibold text-gray-900">Fall (September-November)</h5>
                      <p className="text-sm text-gray-600">Moderate activity, motivated buyers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold mb-6 text-blue-600">
                Step 2: Home Preparation and Staging
              </h3>
              <p className="text-gray-600 mb-6">
                First impressions matter. Proper preparation and staging can significantly impact your sale price and time on market.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Essential Repairs</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Fix any structural issues</li>
                    <li>• Repair plumbing and electrical problems</li>
                    <li>• Replace broken fixtures and appliances</li>
                    <li>• Address HVAC issues</li>
                    <li>• Fix roof and gutter problems</li>
                    <li>• Repair driveway and walkway damage</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Curb Appeal Improvements</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Fresh paint on exterior</li>
                    <li>• Landscaping and lawn care</li>
                    <li>• Clean windows and gutters</li>
                    <li>• Update front door and hardware</li>
                    <li>• Add outdoor lighting</li>
                    <li>• Power wash siding and driveway</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold mb-6 text-purple-600">
                Step 3: Interior Staging and Decluttering
              </h3>
              <p className="text-gray-600 mb-6">
                Professional staging helps buyers visualize themselves living in your home and can increase your sale price by 5-15%.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Decluttering Tips</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Remove personal items and photos</li>
                    <li>• Clear countertops and surfaces</li>
                    <li>• Organize closets and storage spaces</li>
                    <li>• Remove excess furniture</li>
                    <li>• Clean and organize garage</li>
                    <li>• Consider renting storage if needed</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Staging Strategies</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Use neutral colors and decor</li>
                    <li>• Maximize natural light</li>
                    <li>• Create focal points in each room</li>
                    <li>• Add fresh flowers and plants</li>
                    <li>• Ensure proper furniture placement</li>
                    <li>• Highlight architectural features</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Strategy Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Pricing Strategy: Maximizing Your Sale Price
          </h2>
          
          <div className="space-y-12">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-green-600">
                Comparative Market Analysis (CMA)
              </h3>
              <p className="text-gray-600 mb-6">
                A thorough CMA is the foundation of your pricing strategy and helps you understand your home's true market value.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">What to Analyze</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Recently sold comparable properties</li>
                    <li>• Current active listings</li>
                    <li>• Pending sales</li>
                    <li>• Expired listings</li>
                    <li>• Price per square foot trends</li>
                    <li>• Days on market data</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Adjustment Factors</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Square footage differences</li>
                    <li>• Number of bedrooms/bathrooms</li>
                    <li>• Lot size and features</li>
                    <li>• Age and condition</li>
                    <li>• Location and views</li>
                    <li>• Upgrades and amenities</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-blue-600">
                Pricing Strategies
              </h3>
              <p className="text-gray-600 mb-6">
                Different pricing strategies work for different market conditions and seller timelines.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Competitive Pricing</h4>
                  <p className="text-gray-600 mb-4">
                    Price slightly below market value to attract multiple offers and create bidding competition.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm text-green-800">
                      <strong>Best for:</strong> Sellers who want to sell quickly and maximize offers
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Market Value Pricing</h4>
                  <p className="text-gray-600 mb-4">
                    Price at fair market value based on comparable sales and current market conditions.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Best for:</strong> Sellers with no rush to sell and well-maintained homes
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-purple-600">
                Price Adjustments and Market Response
              </h3>
              <p className="text-gray-600 mb-6">
                Monitor market response and be prepared to adjust your pricing strategy based on feedback and market conditions.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">When to Consider Price Reductions</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• No showings after 2-3 weeks</li>
                    <li>• Negative feedback from buyers</li>
                    <li>• New comparable listings at lower prices</li>
                    <li>• Market conditions have changed</li>
                    <li>• Personal timeline requires faster sale</li>
                    <li>• Competition has increased</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Price Reduction Strategy</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Make meaningful reductions (5-10%)</li>
                    <li>• Time reductions strategically</li>
                    <li>• Update marketing materials</li>
                    <li>• Re-engage with previous prospects</li>
                    <li>• Consider additional incentives</li>
                    <li>• Re-evaluate staging and presentation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing and Showings Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Marketing and Showings: Attracting Qualified Buyers
          </h2>
          
          <div className="space-y-12">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold mb-6 text-green-600">
                Professional Photography and Virtual Tours
              </h3>
              <p className="text-gray-600 mb-6">
                High-quality visuals are essential in today's digital-first real estate market. Most buyers start their search online.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Photography Essentials</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Professional real estate photographer</li>
                    <li>• Wide-angle lenses for room shots</li>
                    <li>• Proper lighting and staging</li>
                    <li>• Exterior shots in good weather</li>
                    <li>• Highlight key features and upgrades</li>
                    <li>• Include neighborhood amenities</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Virtual Tour Options</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 360-degree virtual tours</li>
                    <li>• Matterport 3D tours</li>
                    <li>• Video walkthroughs</li>
                    <li>• Drone photography for exteriors</li>
                    <li>• Interactive floor plans</li>
                    <li>• Social media-friendly content</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold mb-6 text-blue-600">
                Online Marketing and Listing Optimization
              </h3>
              <p className="text-gray-600 mb-6">
                Optimize your listing for maximum online visibility and engagement across all major real estate platforms.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Listing Optimization</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Compelling headline with key features</li>
                    <li>• Detailed property description</li>
                    <li>• Highlight unique selling points</li>
                    <li>• Include neighborhood information</li>
                    <li>• List recent upgrades and improvements</li>
                    <li>• Use relevant keywords for SEO</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Marketing Channels</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Multiple Listing Service (MLS)</li>
                    <li>• Zillow, Realtor.com, Trulia</li>
                    <li>• Social media platforms</li>
                    <li>• Agent's website and email lists</li>
                    <li>• Local real estate websites</li>
                    <li>• Print advertising (if applicable)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold mb-6 text-purple-600">
                Open Houses and Private Showings
              </h3>
              <p className="text-gray-600 mb-6">
                Well-executed showings can make the difference between a quick sale and a property that sits on the market.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Open House Preparation</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Deep clean entire home</li>
                    <li>• Remove pets and personal items</li>
                    <li>• Set comfortable temperature</li>
                    <li>• Turn on all lights</li>
                    <li>• Open curtains and blinds</li>
                    <li>• Add subtle background music</li>
                    <li>• Prepare refreshments</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Private Showing Tips</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Be flexible with showing times</li>
                    <li>• Leave the home during showings</li>
                    <li>• Provide showing instructions</li>
                    <li>• Keep home "show-ready" at all times</li>
                    <li>• Collect feedback from showings</li>
                    <li>• Follow up with interested buyers</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Negotiation and Closing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Negotiation and Closing: Sealing the Deal
          </h2>
          
          <div className="space-y-12">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-green-600">
                Handling Offers and Multiple Offers
              </h3>
              <p className="text-gray-600 mb-6">
                Understanding how to evaluate and respond to offers is crucial for maximizing your sale price and terms.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Evaluating Offers</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Purchase price and terms</li>
                    <li>• Buyer's financing and pre-approval</li>
                    <li>• Earnest money amount</li>
                    <li>• Closing timeline</li>
                    <li>• Contingencies and conditions</li>
                    <li>• Buyer's motivation and timeline</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Multiple Offer Strategies</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Set a deadline for best and final offers</li>
                    <li>• Ask for highest and best offers</li>
                    <li>• Consider escalation clauses</li>
                    <li>• Evaluate all terms, not just price</li>
                    <li>• Be prepared for quick decisions</li>
                    <li>• Work with your agent's guidance</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-blue-600">
                Negotiation Tactics and Counteroffers
              </h3>
              <p className="text-gray-600 mb-6">
                Effective negotiation can help you achieve better terms while maintaining a positive relationship with the buyer.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Negotiation Strategies</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Know your bottom line</li>
                    <li>• Understand buyer motivations</li>
                    <li>• Be willing to compromise</li>
                    <li>• Consider non-price concessions</li>
                    <li>• Stay professional and calm</li>
                    <li>• Don't take negotiations personally</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Common Negotiation Points</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Purchase price adjustments</li>
                    <li>• Closing cost contributions</li>
                    <li>• Repairs and credits</li>
                    <li>• Closing date flexibility</li>
                    <li>• Personal property inclusion</li>
                    <li>• Rent-back agreements</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-purple-600">
                Closing Process and Moving Out
              </h3>
              <p className="text-gray-600 mb-6">
                The closing process involves several steps to ensure a smooth transfer of ownership and possession.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Pre-Closing Checklist</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Complete any agreed-upon repairs</li>
                    <li>• Schedule final walkthrough</li>
                    <li>• Cancel utilities and services</li>
                    <li>• Forward mail and change address</li>
                    <li>• Plan moving logistics</li>
                    <li>• Prepare closing documents</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Closing Day</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Sign all closing documents</li>
                    <li>• Pay any remaining costs</li>
                    <li>• Hand over keys and garage door openers</li>
                    <li>• Provide appliance manuals and warranties</li>
                    <li>• Complete final walkthrough</li>
                    <li>• Celebrate your successful sale!</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* North Las Vegas Market Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Selling in North Las Vegas: Market Insights
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-semibold mb-4 text-green-600">
                Current Market Conditions
              </h3>
              <p className="text-gray-600 mb-4">
                North Las Vegas offers strong selling opportunities with growing demand and competitive pricing.
              </p>
              <div className="space-y-2 text-gray-600">
                <p>• Average days on market: 45 days</p>
                <p>• Median sale price: $350,000</p>
                <p>• Price per square foot: $180</p>
                <p>• Inventory levels: 2.5 months</p>
                <p>• Buyer demand: Strong</p>
                <p>• Market trend: Appreciating</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">
                Seller Advantages
              </h3>
              <p className="text-gray-600 mb-4">
                North Las Vegas sellers benefit from several market advantages that can help maximize their sale price.
              </p>
              <div className="space-y-2 text-gray-600">
                <p>• <strong>Strong Job Market:</strong> Growing employment opportunities</p>
                <p>• <strong>Affordable Housing:</strong> Attracts first-time buyers</p>
                <p>• <strong>New Development:</strong> Increasing property values</p>
                <p>• <strong>Proximity to Las Vegas:</strong> Commuter appeal</p>
                <p>• <strong>Amenities:</strong> Parks, trails and community centers</p>
                <p>• <strong>Investment Potential:</strong> Attracts investors</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Pro Tips for Maximizing Your Sale Price
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Start Early
              </h3>
              <p className="text-gray-600">
                Begin preparing your home 2-3 months before listing. This gives you time to make repairs, stage properly, and research the market.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Invest in Staging
              </h3>
              <p className="text-gray-600">
                Professional staging can increase your sale price by 5-15% and reduce time on market. It's one of the best investments you can make.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Price Right from the Start
              </h3>
              <p className="text-gray-600">
                Overpricing can lead to longer market time and lower final sale price. Price competitively to attract multiple offers.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Be Flexible with Showings
              </h3>
              <p className="text-gray-600">
                Make your home available for showings at convenient times for buyers. The more accessible, the more interest you'll generate.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Consider Incentives
              </h3>
              <p className="text-gray-600">
                Offering closing cost assistance, home warranties, or other incentives can make your home more attractive to buyers.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Work with a Local Expert
              </h3>
              <p className="text-gray-600">
                Choose an agent with deep knowledge of the North Las Vegas market who can provide accurate pricing and marketing strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Sell Your North Las Vegas Home?
          </h2>
          <p className="text-xl mb-8">
            Connect with our experienced listing agents and get a free market analysis for your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/valuation" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3">
              Get Free Valuation
            </Button>
            <Button href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3">
              Contact Listing Agent
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 