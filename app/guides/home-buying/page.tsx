import { Metadata } from "next"
import { Button } from "../../../components/Button/Button"

export const metadata: Metadata = {
  title: "Home Buying Guide - North Las Vegas Real Estate",
  description: "Complete guide to buying a home in North Las Vegas. Learn about the buying process, financing options, and tips for first-time homebuyers.",
}

export default function HomeBuyingGuidePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
            Home Buying Guide
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Your complete guide to buying a home in North Las Vegas. From pre-approval to closing, we'll walk you through every step.
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
              <h3 className="text-lg font-semibold text-blue-600">Getting Started</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Assess Your Finances</li>
                <li>• Get Pre-Approved</li>
                <li>• Determine Your Budget</li>
                <li>• Choose Your Location</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-green-600">The Search Process</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Working with an Agent</li>
                <li>• Property Search Strategies</li>
                <li>• Home Inspections</li>
                <li>• Making an Offer</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-purple-600">Closing & Beyond</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Closing Process</li>
                <li>• Moving In</li>
                <li>• Home Maintenance</li>
                <li>• Building Equity</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Getting Started: Your Home Buying Journey
          </h2>
          
          <div className="space-y-12">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold mb-6 text-blue-600">
                Step 1: Assess Your Finances
              </h3>
              <p className="text-gray-600 mb-6">
                Before you start looking at homes, it's crucial to understand your financial situation and what you can afford.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Check Your Credit Score</h4>
                  <p className="text-gray-600 mb-4">
                    Your credit score significantly impacts your mortgage rate. Aim for a score of 740 or higher for the best rates.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Get free credit reports from annualcreditreport.com</li>
                    <li>• Dispute any errors on your credit report</li>
                    <li>• Pay down high-interest debt</li>
                    <li>• Avoid opening new credit accounts</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Calculate Your Debt-to-Income Ratio</h4>
                  <p className="text-gray-600 mb-4">
                    Lenders typically want your total monthly debt payments to be less than 43% of your gross monthly income.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Formula:</strong> (Monthly Debt Payments ÷ Gross Monthly Income) × 100
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold mb-6 text-green-600">
                Step 2: Get Pre-Approved for a Mortgage
              </h3>
              <p className="text-gray-600 mb-6">
                A pre-approval letter shows sellers you're serious and gives you a clear budget to work with.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">What You'll Need</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• W-2 forms from the past 2 years</li>
                    <li>• Pay stubs from the past 30 days</li>
                    <li>• Bank statements from the past 2-3 months</li>
                    <li>• Tax returns from the past 2 years</li>
                    <li>• List of current debts and monthly payments</li>
                    <li>• Proof of down payment funds</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Types of Mortgages</h4>
                  <div className="space-y-3">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h5 className="font-semibold text-gray-900">Conventional Loans</h5>
                      <p className="text-sm text-gray-600">Require 3-20% down payment, good credit</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h5 className="font-semibold text-gray-900">FHA Loans</h5>
                      <p className="text-sm text-gray-600">Require 3.5% down, more flexible credit</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h5 className="font-semibold text-gray-900">VA Loans</h5>
                      <p className="text-sm text-gray-600">For veterans, often 0% down payment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold mb-6 text-purple-600">
                Step 3: Determine Your Budget
              </h3>
              <p className="text-gray-600 mb-6">
                Your budget should include not just the purchase price, but all associated costs of homeownership.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Monthly Housing Costs</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Principal and interest payment</li>
                    <li>• Property taxes (typically 1% of home value)</li>
                    <li>• Homeowners insurance</li>
                    <li>• Private mortgage insurance (if applicable)</li>
                    <li>• HOA fees (if applicable)</li>
                    <li>• Utilities and maintenance</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">One-Time Costs</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Down payment (3-20% of purchase price)</li>
                    <li>• Closing costs (2-5% of purchase price)</li>
                    <li>• Moving expenses</li>
                    <li>• Furniture and appliances</li>
                    <li>• Immediate repairs or improvements</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Search Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            The Search Process: Finding Your Perfect Home
          </h2>
          
          <div className="space-y-12">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-blue-600">
                Working with a Real Estate Agent
              </h3>
              <p className="text-gray-600 mb-6">
                A good real estate agent can save you time, money, and stress throughout the home buying process.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">What to Look For</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Experience in North Las Vegas market</li>
                    <li>• Strong communication skills</li>
                    <li>• Availability and responsiveness</li>
                    <li>• Knowledge of local neighborhoods</li>
                    <li>• Positive reviews and referrals</li>
                    <li>• Professional credentials</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Questions to Ask</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• How long have you worked in this area?</li>
                    <li>• What's your average days on market?</li>
                    <li>• How do you handle multiple offers?</li>
                    <li>• What's your negotiation strategy?</li>
                    <li>• Can you provide references?</li>
                    <li>• What's your commission structure?</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-green-600">
                Property Search Strategies
              </h3>
              <p className="text-gray-600 mb-6">
                Use multiple strategies to find the best properties in your price range and preferred locations.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Online Search Tips</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Set up alerts for new listings</li>
                    <li>• Use multiple search criteria</li>
                    <li>• Check recently sold properties</li>
                    <li>• Research neighborhood statistics</li>
                    <li>• Look at property history</li>
                    <li>• Compare similar properties</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Offline Search Methods</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Drive through target neighborhoods</li>
                    <li>• Attend open houses</li>
                    <li>• Network with local residents</li>
                    <li>• Check local newspapers</li>
                    <li>• Contact property management companies</li>
                    <li>• Look for "For Sale by Owner" signs</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-purple-600">
                Home Inspections and Due Diligence
              </h3>
              <p className="text-gray-600 mb-6">
                Never skip the home inspection - it's your best protection against buying a home with hidden problems.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">What Inspectors Check</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Structural integrity</li>
                    <li>• Electrical systems</li>
                    <li>• Plumbing systems</li>
                    <li>• HVAC systems</li>
                    <li>• Roof condition</li>
                    <li>• Foundation issues</li>
                    <li>• Pest infestations</li>
                    <li>• Safety hazards</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Additional Inspections</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Radon testing</li>
                    <li>• Mold inspection</li>
                    <li>• Sewer line inspection</li>
                    <li>• Pool/spa inspection</li>
                    <li>• Chimney inspection</li>
                    <li>• Asbestos testing (older homes)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Making an Offer Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Making an Offer: Negotiation and Closing
          </h2>
          
          <div className="space-y-12">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold mb-6 text-blue-600">
                Crafting Your Offer
              </h3>
              <p className="text-gray-600 mb-6">
                Your offer should be competitive while protecting your interests and budget.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Offer Components</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Purchase price</li>
                    <li>• Earnest money deposit</li>
                    <li>• Financing contingency</li>
                    <li>• Inspection contingency</li>
                    <li>• Appraisal contingency</li>
                    <li>• Closing date</li>
                    <li>• Personal property included</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Negotiation Strategies</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Research comparable sales</li>
                    <li>• Consider market conditions</li>
                    <li>• Factor in needed repairs</li>
                    <li>• Be prepared to walk away</li>
                    <li>• Don't get emotionally attached</li>
                    <li>• Work with your agent's advice</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold mb-6 text-green-600">
                The Closing Process
              </h3>
              <p className="text-gray-600 mb-6">
                Closing is the final step where ownership transfers from seller to buyer.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Pre-Closing Checklist</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Final walkthrough</li>
                    <li>• Review closing disclosure</li>
                    <li>• Arrange homeowners insurance</li>
                    <li>• Set up utilities transfer</li>
                    <li>• Plan moving logistics</li>
                    <li>• Bring required documents</li>
                    <li>• Bring certified funds</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Closing Day</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Sign all documents</li>
                    <li>• Pay closing costs</li>
                    <li>• Receive keys and garage door openers</li>
                    <li>• Get copies of all documents</li>
                    <li>• Understand your payment schedule</li>
                    <li>• Ask questions about anything unclear</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* North Las Vegas Specific Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Buying in North Las Vegas: Local Insights
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">
                Market Overview
              </h3>
              <p className="text-gray-600 mb-4">
                North Las Vegas offers excellent value for homebuyers with strong growth potential and affordable prices compared to other Las Vegas areas.
              </p>
              <div className="space-y-2 text-gray-600">
                <p>• Median home price: $350,000</p>
                <p>• Average days on market: 45 days</p>
                <p>• Annual appreciation: 8-12%</p>
                <p>• Strong job market growth</p>
              </div>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4 text-green-600">
                Popular Neighborhoods
              </h3>
              <p className="text-gray-600 mb-4">
                Each neighborhood in North Las Vegas offers unique benefits for different types of buyers.
              </p>
              <div className="space-y-2 text-gray-600">
                <p>• <strong>Aliante:</strong> Master-planned community, great schools</p>
                <p>• <strong>Centennial Hills:</strong> Family-friendly, mountain views</p>
                <p>• <strong>Skye Canyon:</strong> New development, modern amenities</p>
                <p>• <strong>Downtown:</strong> Revitalization, investment potential</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Pro Tips for First-Time Homebuyers
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Start Early
              </h3>
              <p className="text-gray-600">
                Begin saving for your down payment and improving your credit score at least 6-12 months before you plan to buy.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Get Multiple Quotes
              </h3>
              <p className="text-gray-600">
                Compare mortgage rates from at least 3-4 lenders. Even a small difference in rate can save thousands over time.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Don't Skip the Inspection
              </h3>
              <p className="text-gray-600">
                A home inspection can reveal costly problems that aren't visible during a walkthrough. It's worth every penny.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Consider Future Resale
              </h3>
              <p className="text-gray-600">
                Even if you plan to stay forever, buy a home that would appeal to other buyers. You never know what life brings.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Build an Emergency Fund
              </h3>
              <p className="text-gray-600">
                Homeownership comes with unexpected expenses. Aim to have 3-6 months of expenses saved after closing.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Understand All Costs
              </h3>
              <p className="text-gray-600">
                Factor in property taxes, insurance, maintenance, and utilities when determining what you can afford.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Home Buying Journey?
          </h2>
          <p className="text-xl mb-8">
            Connect with our experienced real estate agents and get started on finding your perfect North Las Vegas home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/search" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
              Search Homes
            </Button>
            <Button href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
              Contact an Agent
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 