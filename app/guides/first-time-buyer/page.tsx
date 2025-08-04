import { Metadata } from "next"
import { Button } from "../../../components/Button/Button"

export const metadata: Metadata = {
  title: "First-Time Homebuyer Guide | North Las Vegas Real Estate",
  description: "Complete first-time homebuyer guide for North Las Vegas. Learn about down payments, mortgages, closing costs, and the home buying process. Expert tips and resources for new buyers.",
  keywords: "first-time homebuyer, North Las Vegas real estate, home buying guide, down payment, mortgage, closing costs, first-time buyer tips",
  openGraph: {
    title: "First-Time Homebuyer Guide | North Las Vegas Real Estate",
    description: "Complete first-time homebuyer guide for North Las Vegas. Learn about down payments, mortgages, closing costs, and the home buying process.",
    url: "https://searchnorthlasvegashomes.com/guides/first-time-buyer",
  },
}

export default function FirstTimeBuyerGuidePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
            First-Time Homebuyer Guide
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Your complete guide to buying your first home in North Las Vegas. Learn about down payments, mortgages, closing costs, and the entire home buying process.
          </p>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            First-Time Homebuyer Quick Facts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">3.5%</div>
              <div className="text-gray-600">Minimum Down Payment</div>
              <div className="text-sm text-gray-500">FHA Loans</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">2-3%</div>
              <div className="text-gray-600">Closing Costs</div>
              <div className="text-sm text-gray-500">Of purchase price</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">30-45</div>
              <div className="text-gray-600">Days to Close</div>
              <div className="text-sm text-gray-500">Average timeline</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">$8,000</div>
              <div className="text-gray-600">Tax Credit Available</div>
              <div className="text-sm text-gray-500">First-time buyers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            The Home Buying Process: Step by Step
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">1</div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Assess Your Financial Situation</h3>
                  <p className="text-gray-700 mb-4">
                    Before you start looking at homes, it's crucial to understand your financial position and what you can afford.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Check your credit score</strong> - Aim for 620+ for conventional loans, 580+ for FHA</li>
                    <li>• <strong>Calculate your debt-to-income ratio</strong> - Should be below 43%</li>
                    <li>• <strong>Determine your down payment</strong> - Save 3.5-20% of purchase price</li>
                    <li>• <strong>Budget for closing costs</strong> - Typically 2-3% of purchase price</li>
                    <li>• <strong>Consider ongoing expenses</strong> - Property taxes, insurance, maintenance</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">2</div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Get Pre-Approved for a Mortgage</h3>
                  <p className="text-gray-700 mb-4">
                    A pre-approval letter shows sellers you're serious and helps you understand your budget.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Shop multiple lenders</strong> - Compare rates and terms</li>
                    <li>• <strong>Gather required documents</strong> - W-2s, tax returns, bank statements</li>
                    <li>• <strong>Understand loan types</strong> - Conventional, FHA, VA, USDA</li>
                    <li>• <strong>Lock in your rate</strong> - Protect against rate increases</li>
                    <li>• <strong>Get pre-approval letter</strong> - Valid for 60-90 days</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">3</div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Find a Real Estate Agent</h3>
                  <p className="text-gray-700 mb-4">
                    A good agent will guide you through the process and help you find the right home.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Ask for referrals</strong> - Friends, family, colleagues</li>
                    <li>• <strong>Interview multiple agents</strong> - Experience, communication style</li>
                    <li>• <strong>Check credentials</strong> - Licenses, certifications, reviews</li>
                    <li>• <strong>Discuss expectations</strong> - Communication preferences, timeline</li>
                    <li>• <strong>Understand commission</strong> - Typically paid by seller</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">4</div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Start House Hunting</h3>
                  <p className="text-gray-700 mb-4">
                    With your agent, begin searching for homes that meet your criteria and budget.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Define your must-haves</strong> - Location, size, features</li>
                    <li>• <strong>Set your budget</strong> - Stick to your pre-approval amount</li>
                    <li>• <strong>Research neighborhoods</strong> - Schools, amenities, commute</li>
                    <li>• <strong>Attend open houses</strong> - Get a feel for different homes</li>
                    <li>• <strong>Keep detailed notes</strong> - Compare properties systematically</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">5</div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Make an Offer</h3>
                  <p className="text-gray-700 mb-4">
                    When you find the right home, your agent will help you craft a competitive offer.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Research comparable sales</strong> - Understand market value</li>
                    <li>• <strong>Consider market conditions</strong> - Buyer's vs. seller's market</li>
                    <li>• <strong>Include contingencies</strong> - Inspection, financing, appraisal</li>
                    <li>• <strong>Write earnest money check</strong> - Shows serious intent</li>
                    <li>• <strong>Negotiate terms</strong> - Price, closing date, repairs</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">6</div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Complete Due Diligence</h3>
                  <p className="text-gray-700 mb-4">
                    After your offer is accepted, conduct thorough inspections and research.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Schedule home inspection</strong> - Identify potential issues</li>
                    <li>• <strong>Review inspection report</strong> - Understand findings</li>
                    <li>• <strong>Request repairs</strong> - Negotiate with seller</li>
                    <li>• <strong>Research property history</strong> - Permits, liens, disputes</li>
                    <li>• <strong>Verify property boundaries</strong> - Survey if needed</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">7</div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Finalize Your Mortgage</h3>
                  <p className="text-gray-700 mb-4">
                    Work with your lender to complete the loan process and get final approval.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Submit additional documents</strong> - Lender requirements</li>
                    <li>• <strong>Complete appraisal</strong> - Verify property value</li>
                    <li>• <strong>Review loan estimate</strong> - Understand all costs</li>
                    <li>• <strong>Get final approval</strong> - Clear to close</li>
                    <li>• <strong>Review closing disclosure</strong> - Final cost breakdown</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">8</div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Close on Your Home</h3>
                  <p className="text-gray-700 mb-4">
                    The final step - sign documents, pay closing costs, and get your keys!
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Schedule closing</strong> - Coordinate with all parties</li>
                    <li>• <strong>Bring required funds</strong> - Cashier's check or wire transfer</li>
                    <li>• <strong>Review documents</strong> - Read everything carefully</li>
                    <li>• <strong>Sign paperwork</strong> - Deed, mortgage, disclosures</li>
                    <li>• <strong>Get your keys</strong> - Congratulations, you're a homeowner!</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Considerations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Financial Considerations for First-Time Buyers
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Down Payment Options</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">FHA Loans</h4>
                  <p className="text-gray-700">Minimum 3.5% down payment with credit score of 580+</p>
                  <p className="text-sm text-gray-500">Good for buyers with lower credit scores</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">Conventional Loans</h4>
                  <p className="text-gray-700">Minimum 3% down payment with excellent credit</p>
                  <p className="text-sm text-gray-500">Avoid PMI with 20% down payment</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">VA Loans</h4>
                  <p className="text-gray-700">0% down payment for eligible veterans</p>
                  <p className="text-sm text-gray-500">No PMI required</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">USDA Loans</h4>
                  <p className="text-gray-700">0% down payment for rural areas</p>
                  <p className="text-sm text-gray-500">Income restrictions apply</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Additional Costs to Consider</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">Closing Costs</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Loan origination fees</li>
                    <li>• Appraisal and inspection fees</li>
                    <li>• Title insurance</li>
                    <li>• Escrow fees</li>
                    <li>• Recording fees</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">Ongoing Expenses</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Property taxes</li>
                    <li>• Homeowners insurance</li>
                    <li>• HOA fees (if applicable)</li>
                    <li>• Utilities</li>
                    <li>• Maintenance and repairs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips and Resources */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            First-Time Buyer Tips & Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Before You Buy</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Save for down payment and closing costs</li>
                <li>• Improve your credit score</li>
                <li>• Pay off high-interest debt</li>
                <li>• Research neighborhoods thoroughly</li>
                <li>• Get pre-approved for a mortgage</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">During the Process</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Don't make major purchases</li>
                <li>• Keep your job stable</li>
                <li>• Respond quickly to lender requests</li>
                <li>• Attend all inspections</li>
                <li>• Ask questions when unsure</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">After Closing</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Set up utilities and services</li>
                <li>• Change your address</li>
                <li>• Keep maintenance records</li>
                <li>• Build emergency fund</li>
                <li>• Consider home warranty</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">How much do I need for a down payment?</h3>
              <p className="text-gray-700">Down payment requirements vary by loan type. FHA loans require 3.5% minimum, conventional loans can be as low as 3%, and VA/USDA loans may require 0% down. However, putting 20% down helps you avoid private mortgage insurance (PMI).</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">What credit score do I need?</h3>
              <p className="text-gray-700">For FHA loans, you need a minimum credit score of 580 for 3.5% down payment, or 500-579 for 10% down. Conventional loans typically require 620+, while VA loans have more flexible requirements for eligible veterans.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">How long does the home buying process take?</h3>
              <p className="text-gray-700">The entire process typically takes 30-45 days from contract to closing. This includes time for inspections, appraisals, loan processing, and finalizing all paperwork. The timeline can vary based on market conditions and loan type.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">What are closing costs?</h3>
              <p className="text-gray-700">Closing costs typically range from 2-3% of the purchase price and include loan origination fees, appraisal fees, title insurance, escrow fees, and other administrative costs. Your lender will provide a detailed breakdown.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Should I get a home inspection?</h3>
              <p className="text-gray-700">Yes, absolutely! A home inspection is crucial for identifying potential issues with the property. It's typically a contingency in your offer and can help you negotiate repairs or price adjustments if problems are found.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">What's the difference between pre-qualification and pre-approval?</h3>
              <p className="text-gray-700">Pre-qualification is a basic assessment based on information you provide. Pre-approval involves a thorough review of your financial documents and credit report, resulting in a conditional commitment from the lender for a specific loan amount.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Home Buying Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our experienced team guide you through the first-time homebuyer process in North Las Vegas. We'll help you find the perfect home and navigate every step of the journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" className="bg-white text-blue-600 hover:bg-gray-100">
              Get Started Today
            </Button>
            <Button href="/tools/mortgage-calculator" className="border-2 border-white text-white hover:bg-white hover:text-blue-600">
              Calculate Your Payment
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 