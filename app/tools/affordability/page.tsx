import { Metadata } from "next"
import { Button } from "../../../components/Button/Button"

export const metadata: Metadata = {
  title: "Affordability Calculator",
  description: "Determine how much house you can afford based on your income and expenses in North Las Vegas.",
}

export default function AffordabilityCalculatorPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
            Affordability Calculator
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Determine how much house you can afford based on your income and expenses in North Las Vegas.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Calculate Your Home Affordability
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Calculator Form */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                Income & Expenses Calculator
              </h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="annual-income" className="block text-sm font-medium text-gray-700 mb-2">
                    Annual Income
                  </label>
                  <input
                    id="annual-income"
                    name="annual-income"
                    type="number"
                    placeholder="Enter your annual income"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    suppressHydrationWarning
                  />
                </div>
                <div>
                  <label htmlFor="monthly-debts" className="block text-sm font-medium text-gray-700 mb-2">
                    Monthly Debts
                  </label>
                  <input
                    id="monthly-debts"
                    name="monthly-debts"
                    type="number"
                    placeholder="Enter monthly debt payments (car, credit cards, etc.)"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    suppressHydrationWarning
                  />
                </div>
                <div>
                  <label htmlFor="down-payment" className="block text-sm font-medium text-gray-700 mb-2">
                    Down Payment
                  </label>
                  <input
                    id="down-payment"
                    name="down-payment"
                    type="number"
                    placeholder="Enter your down payment amount"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                    placeholder="Enter current interest rate"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    suppressHydrationWarning
                  />
                </div>
                <div>
                  <label htmlFor="loan-term" className="block text-sm font-medium text-gray-700 mb-2">
                    Loan Term
                  </label>
                  <select
                    id="loan-term"
                    name="loan-term"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    suppressHydrationWarning
                  >
                    <option value="30">30 Years</option>
                    <option value="20">20 Years</option>
                    <option value="15">15 Years</option>
                  </select>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 text-lg font-semibold"
                >
                  Calculate Affordability
                </Button>
              </form>
            </div>

            {/* Results Display */}
            <div className="bg-purple-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                Your Affordability Results
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">Maximum Home Price</span>
                  <span className="text-2xl font-bold text-purple-600">$485,000</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">Maximum Loan Amount</span>
                  <span className="text-lg font-semibold text-gray-900">$388,000</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">Monthly Payment (P&I)</span>
                  <span className="text-lg font-semibold text-gray-900">$1,847</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">Property Tax (Monthly)</span>
                  <span className="text-lg font-semibold text-gray-900">$404</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">Insurance (Monthly)</span>
                  <span className="text-lg font-semibold text-gray-900">$202</span>
                </div>
                <div className="flex justify-between items-center py-4 bg-purple-100 rounded-lg px-4">
                  <span className="text-lg font-semibold text-gray-900">Total Monthly Payment</span>
                  <span className="text-2xl font-bold text-purple-600">$2,453</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">Debt-to-Income Ratio</span>
                  <span className="text-lg font-semibold text-gray-900">28%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Affordability Guidelines */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Affordability Guidelines
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                28/36 Rule
              </h3>
              <p className="text-gray-600 mb-4">
                Lenders typically use the 28/36 rule to determine affordability.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• 28% of gross income for housing</p>
                <p>• 36% of gross income for total debt</p>
                <p>• Includes mortgage, taxes, insurance</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Down Payment Impact
              </h3>
              <p className="text-gray-600 mb-4">
                Your down payment significantly affects your buying power.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• 20% down: No PMI required</p>
                <p>• 10% down: PMI typically required</p>
                <p>• 3.5% down: FHA loans available</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Credit Score Impact
              </h3>
              <p className="text-gray-600 mb-4">
                Your credit score affects your interest rate and buying power.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• 760+: Best rates available</p>
                <p>• 700-759: Good rates</p>
                <p>• 650-699: Higher rates</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* North Las Vegas Market */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            North Las Vegas Market Overview
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-purple-600">
                Price Ranges by Neighborhood
              </h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Aliante</h4>
                  <p className="text-gray-600">$350,000 - $550,000</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Centennial Hills</h4>
                  <p className="text-gray-600">$400,000 - $650,000</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Skye Canyon</h4>
                  <p className="text-gray-600">$450,000 - $750,000</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">
                Affordability Factors
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                  <span className="text-gray-600">Lower property taxes than many states</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                  <span className="text-gray-600">No state income tax</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                  <span className="text-gray-600">Competitive interest rates</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                  <span className="text-gray-600">Various loan programs available</span>
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
            Tips for Home Affordability
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Save for a Larger Down Payment
              </h3>
              <p className="text-gray-600">
                A larger down payment reduces your loan amount and monthly payment, 
                potentially eliminating the need for PMI.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Pay Off Existing Debts
              </h3>
              <p className="text-gray-600">
                Reducing your monthly debt payments increases the amount you can 
                afford to spend on housing.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Improve Your Credit Score
              </h3>
              <p className="text-gray-600">
                A higher credit score can qualify you for better interest rates, 
                reducing your monthly payment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Calculators */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            More Financial Tools
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Mortgage Calculator
              </h3>
              <p className="text-gray-600 mb-4">
                Calculate your monthly mortgage payments and see the breakdown.
              </p>
              <Button href="/tools/mortgage-calculator" className="text-purple-600 hover:text-purple-700">
                Calculate Mortgage →
              </Button>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Closing Cost Calculator
              </h3>
              <p className="text-gray-600 mb-4">
                Estimate all the costs associated with closing on your new home.
              </p>
              <Button href="/tools/closing-costs" className="text-green-600 hover:text-green-700">
                Calculate Closing Costs →
              </Button>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Refinance Calculator
              </h3>
              <p className="text-gray-600 mb-4">
                See if refinancing your mortgage makes financial sense.
              </p>
              <Button href="/tools/refinance" className="text-blue-600 hover:text-blue-700">
                Calculate Refinance →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Home Search?
          </h2>
          <p className="text-xl mb-8">
            Now that you know your budget, let's find your perfect home in North Las Vegas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/search" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3">
              Search Properties
            </Button>
            <Button href="/lenders" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3">
              Find Lenders
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 