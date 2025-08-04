import { Metadata } from "next"
import { Button } from "../../../components/Button/Button"

export const metadata: Metadata = {
  title: "Closing Cost Calculator",
  description: "Estimate all the costs associated with closing on your new home in North Las Vegas.",
}

export default function ClosingCostsCalculatorPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
            Closing Cost Calculator
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Estimate all the costs associated with closing on your new home in North Las Vegas.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Calculate Your Closing Costs
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Calculator Form */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                Property & Loan Information
              </h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="purchase-price" className="block text-sm font-medium text-gray-700 mb-2">
                    Purchase Price
                  </label>
                  <input
                    id="purchase-price"
                    name="purchase-price"
                    type="number"
                    placeholder="Enter purchase price"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    suppressHydrationWarning
                  />
                </div>
                <div>
                  <label htmlFor="loan-amount" className="block text-sm font-medium text-gray-700 mb-2">
                    Loan Amount
                  </label>
                  <input
                    id="loan-amount"
                    name="loan-amount"
                    type="number"
                    placeholder="Enter loan amount"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    suppressHydrationWarning
                  />
                </div>
                <div>
                  <label htmlFor="interest-rate" className="block text-sm font-medium text-gray-700 mb-2">
                    Interest Rate (%)
                  </label>
                  <input
                    id="interest-rate"
                    name="interest-rate"
                    type="number"
                    step="0.01"
                    placeholder="Enter interest rate"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    suppressHydrationWarning
                  />
                </div>
                <div>
                  <label htmlFor="loan-type" className="block text-sm font-medium text-gray-700 mb-2">
                    Loan Type
                  </label>
                  <select
                    id="loan-type"
                    name="loan-type"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    suppressHydrationWarning
                  >
                    <option value="conventional">Conventional</option>
                    <option value="fha">FHA</option>
                    <option value="va">VA</option>
                    <option value="usda">USDA</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="property-tax" className="block text-sm font-medium text-gray-700 mb-2">
                    Annual Property Tax
                  </label>
                  <input
                    id="property-tax"
                    name="property-tax"
                    type="number"
                    placeholder="Enter annual property tax"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    suppressHydrationWarning
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 text-lg font-semibold"
                >
                  Calculate Closing Costs
                </Button>
              </form>
            </div>

            {/* Results Display */}
            <div className="bg-orange-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                Estimated Closing Costs
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">Loan Origination Fee</span>
                  <span className="text-lg font-semibold text-gray-900">$1,940</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">Appraisal Fee</span>
                  <span className="text-lg font-semibold text-gray-900">$500</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">Credit Report</span>
                  <span className="text-lg font-semibold text-gray-900">$35</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">Title Insurance</span>
                  <span className="text-lg font-semibold text-gray-900">$1,200</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">Escrow Fee</span>
                  <span className="text-lg font-semibold text-gray-900">$800</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">Recording Fees</span>
                  <span className="text-lg font-semibold text-gray-900">$150</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">Prepaid Property Tax</span>
                  <span className="text-lg font-semibold text-gray-900">$2,000</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">Prepaid Insurance</span>
                  <span className="text-lg font-semibold text-gray-900">$1,200</span>
                </div>
                <div className="flex justify-between items-center py-4 bg-orange-100 rounded-lg px-4">
                  <span className="text-lg font-semibold text-gray-900">Total Closing Costs</span>
                  <span className="text-2xl font-bold text-orange-600">$7,825</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">As % of Purchase Price</span>
                  <span className="text-lg font-semibold text-gray-900">1.57%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Cost Breakdown */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Understanding Closing Costs
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Lender Fees
              </h3>
              <p className="text-gray-600 mb-4">
                Fees charged by your mortgage lender for processing your loan.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• Loan origination fee</p>
                <p>• Application fee</p>
                <p>• Credit report fee</p>
                <p>• Processing fee</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Third-Party Fees
              </h3>
              <p className="text-gray-600 mb-4">
                Fees charged by third-party service providers.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• Appraisal fee</p>
                <p>• Title insurance</p>
                <p>• Survey fee</p>
                <p>• Pest inspection</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Government Fees
              </h3>
              <p className="text-gray-600 mb-4">
                Fees required by government entities.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• Recording fees</p>
                <p>• Transfer taxes</p>
                <p>• Notary fees</p>
                <p>• Document stamps</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nevada-Specific Costs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Nevada Closing Costs
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-orange-600">
                State-Specific Fees
              </h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Transfer Tax</h4>
                  <p className="text-gray-600">$1.95 per $500 of purchase price</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Recording Fees</h4>
                  <p className="text-gray-600">$14 for first page, $1 for each additional page</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Title Insurance</h4>
                  <p className="text-gray-600">Varies by property value, typically 0.5-1%</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">
                Average Closing Costs
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">$200,000 home</span>
                  <span className="font-semibold text-gray-900">$3,500 - $5,000</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">$400,000 home</span>
                  <span className="font-semibold text-gray-900">$6,000 - $8,500</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">$600,000 home</span>
                  <span className="font-semibold text-gray-900">$8,500 - $12,000</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">$800,000 home</span>
                  <span className="font-semibold text-gray-900">$11,000 - $15,500</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Tips to Reduce Closing Costs
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Shop Around
              </h3>
              <p className="text-gray-600">
                Compare closing costs from multiple lenders. Some lenders offer 
                lower fees or may be willing to negotiate.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Negotiate with Seller
              </h3>
              <p className="text-gray-600">
                Ask the seller to pay some or all of the closing costs as part 
                of the purchase agreement.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Choose the Right Loan
              </h3>
              <p className="text-gray-600">
                Some loan programs have lower closing costs. VA loans, for example, 
                have limits on certain fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Loan Type Comparison */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Closing Costs by Loan Type
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                Conventional
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Standard closing costs, no government backing
              </p>
              <p className="text-orange-600 font-semibold">2-5% of loan amount</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                FHA
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Higher upfront mortgage insurance premium
              </p>
              <p className="text-orange-600 font-semibold">3-6% of loan amount</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                VA
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Lower closing costs, funding fee applies
              </p>
              <p className="text-orange-600 font-semibold">1-4% of loan amount</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                USDA
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Guarantee fee, typically lower closing costs
              </p>
              <p className="text-orange-600 font-semibold">2-4% of loan amount</p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Calculators */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            More Financial Tools
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Mortgage Calculator
              </h3>
              <p className="text-gray-600 mb-4">
                Calculate your monthly mortgage payments and see the breakdown.
              </p>
              <Button href="/tools/mortgage-calculator" className="text-blue-600 hover:text-blue-700">
                Calculate Mortgage →
              </Button>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Affordability Calculator
              </h3>
              <p className="text-gray-600 mb-4">
                Determine how much house you can afford based on your income.
              </p>
              <Button href="/tools/affordability" className="text-purple-600 hover:text-purple-700">
                Calculate Affordability →
              </Button>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Refinance Calculator
              </h3>
              <p className="text-gray-600 mb-4">
                See if refinancing your mortgage makes financial sense.
              </p>
              <Button href="/tools/refinance" className="text-green-600 hover:text-green-700">
                Calculate Refinance →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8">
            Connect with our trusted lenders and get pre-approved for your North Las Vegas home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/lenders" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3">
              Find Lenders
            </Button>
            <Button href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 