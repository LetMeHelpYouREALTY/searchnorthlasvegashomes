import { Metadata } from "next"
import { Button } from "../../../components/Button/Button"

export const metadata: Metadata = {
  title: "Refinance Calculator",
  description: "See if refinancing your mortgage makes financial sense. Calculate potential savings and break-even analysis.",
}

export default function RefinanceCalculatorPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
            Refinance Calculator
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            See if refinancing your mortgage makes financial sense. Calculate potential savings and break-even analysis.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Calculate Your Refinance Savings
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Calculator Form */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                Current Mortgage Information
              </h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="current-balance" className="block text-sm font-medium text-gray-700 mb-2">
                    Current Loan Balance
                  </label>
                  <input
                    id="current-balance"
                    name="current-balance"
                    type="number"
                    placeholder="Enter current loan balance"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    suppressHydrationWarning
                  />
                </div>
                <div>
                  <label htmlFor="current-rate" className="block text-sm font-medium text-gray-700 mb-2">
                    Current Interest Rate (%)
                  </label>
                  <input
                    id="current-rate"
                    name="current-rate"
                    type="number"
                    step="0.01"
                    placeholder="Enter current interest rate"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    suppressHydrationWarning
                  />
                </div>
                <div>
                  <label htmlFor="current-payment" className="block text-sm font-medium text-gray-700 mb-2">
                    Current Monthly Payment
                  </label>
                  <input
                    id="current-payment"
                    name="current-payment"
                    type="number"
                    placeholder="Enter current monthly payment"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    suppressHydrationWarning
                  />
                </div>
                <div>
                  <label htmlFor="remaining-term" className="block text-sm font-medium text-gray-700 mb-2">
                    Remaining Term (Years)
                  </label>
                  <input
                    id="remaining-term"
                    name="remaining-term"
                    type="number"
                    placeholder="Enter remaining loan term"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    suppressHydrationWarning
                  />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  New Loan Information
                </h3>
                <div>
                  <label htmlFor="new-rate" className="block text-sm font-medium text-gray-700 mb-2">
                    New Interest Rate (%)
                  </label>
                  <input
                    id="new-rate"
                    name="new-rate"
                    type="number"
                    step="0.01"
                    placeholder="Enter new interest rate"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    suppressHydrationWarning
                  />
                </div>
                <div>
                  <label htmlFor="new-term" className="block text-sm font-medium text-gray-700 mb-2">
                    New Loan Term (Years)
                  </label>
                  <select
                    id="new-term"
                    name="new-term"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    suppressHydrationWarning
                  >
                    <option value="30">30 Years</option>
                    <option value="20">20 Years</option>
                    <option value="15">15 Years</option>
                    <option value="10">10 Years</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="closing-costs" className="block text-sm font-medium text-gray-700 mb-2">
                    Refinance Closing Costs
                  </label>
                  <input
                    id="closing-costs"
                    name="closing-costs"
                    type="number"
                    placeholder="Enter estimated closing costs"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    suppressHydrationWarning
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 text-lg font-semibold"
                >
                  Calculate Refinance Savings
                </Button>
              </form>
            </div>

            {/* Results Display */}
            <div className="bg-indigo-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                Refinance Analysis Results
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">Current Monthly Payment</span>
                  <span className="text-lg font-semibold text-gray-900">$1,847</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">New Monthly Payment</span>
                  <span className="text-lg font-semibold text-gray-900">$1,234</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">Monthly Savings</span>
                  <span className="text-2xl font-bold text-green-600">$613</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">Annual Savings</span>
                  <span className="text-lg font-semibold text-gray-900">$7,356</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">Closing Costs</span>
                  <span className="text-lg font-semibold text-gray-900">$3,500</span>
                </div>
                <div className="flex justify-between items-center py-4 bg-indigo-100 rounded-lg px-4">
                  <span className="text-lg font-semibold text-gray-900">Break-Even Time</span>
                  <span className="text-2xl font-bold text-indigo-600">5.7 months</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">Total Interest Savings (30 years)</span>
                  <span className="text-lg font-semibold text-gray-900">$45,200</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">New Loan Amount</span>
                  <span className="text-lg font-semibold text-gray-900">$388,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Refinance Scenarios */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Common Refinance Scenarios
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Rate and Term Refinance
              </h3>
              <p className="text-gray-600 mb-4">
                Lower your interest rate and/or change your loan term to reduce monthly payments.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• Lower monthly payments</p>
                <p>• Reduced interest costs</p>
                <p>• Same loan amount</p>
                <p>• Shorter or longer term</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Cash-Out Refinance
              </h3>
              <p className="text-gray-600 mb-4">
                Borrow against your home equity for home improvements, debt consolidation, or other expenses.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• Access to home equity</p>
                <p>• Lower rates than other loans</p>
                <p>• Tax-deductible interest</p>
                <p>• Higher loan amount</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Streamline Refinance
              </h3>
              <p className="text-gray-600 mb-4">
                Simplified refinancing for existing FHA, VA, or USDA loans with minimal documentation.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• Less paperwork</p>
                <p>• Lower closing costs</p>
                <p>• Faster processing</p>
                <p>• No appraisal required</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When to Refinance */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            When to Consider Refinancing
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-indigo-600">
                Good Reasons to Refinance
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-3 mt-2"></span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Lower Interest Rates</h4>
                    <p className="text-gray-600 text-sm">Current rates are significantly lower than your existing rate</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-3 mt-2"></span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Improved Credit Score</h4>
                    <p className="text-gray-600 text-sm">Your credit has improved since getting your original loan</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-3 mt-2"></span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Need Cash</h4>
                    <p className="text-gray-600 text-sm">You need funds for home improvements or other expenses</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-3 mt-2"></span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Remove PMI</h4>
                    <p className="text-gray-600 text-sm">Your home has appreciated enough to eliminate PMI</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-red-600">
                When Not to Refinance
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-3 mt-2"></span>
                  <div>
                    <h4 className="font-semibold text-gray-900">High Closing Costs</h4>
                    <p className="text-gray-600 text-sm">Closing costs exceed potential savings</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-3 mt-2"></span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Short-Term Plans</h4>
                    <p className="text-gray-600 text-sm">You plan to move within a few years</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-3 mt-2"></span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Credit Issues</h4>
                    <p className="text-gray-600 text-sm">Your credit score has declined significantly</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-3 mt-2"></span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Low Equity</h4>
                    <p className="text-gray-600 text-sm">You have less than 20% equity in your home</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Break-Even Analysis */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Understanding Break-Even Analysis
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                What is Break-Even?
              </h3>
              <p className="text-gray-600 mb-4">
                The break-even point is when your monthly savings equal the total cost of refinancing.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• Closing costs ÷ Monthly savings = Break-even months</p>
                <p>• Example: $3,500 ÷ $613 = 5.7 months</p>
                <p>• After 5.7 months, you start saving money</p>
                <p>• Shorter break-even = Better refinance</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Factors Affecting Break-Even
              </h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Closing costs</span>
                  <span className="font-semibold">Higher = Longer break-even</span>
                </div>
                <div className="flex justify-between">
                  <span>Monthly savings</span>
                  <span className="font-semibold">Higher = Shorter break-even</span>
                </div>
                <div className="flex justify-between">
                  <span>Interest rate difference</span>
                  <span className="font-semibold">Larger = Better deal</span>
                </div>
                <div className="flex justify-between">
                  <span>Loan amount</span>
                  <span className="font-semibold">Larger = More savings</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Refinancing Tips
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Shop Multiple Lenders
              </h3>
              <p className="text-gray-600">
                Compare rates and fees from at least 3-4 lenders to ensure you're getting the best deal.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Consider the Break-Even
              </h3>
              <p className="text-gray-600">
                Make sure you'll stay in the home long enough to recoup your closing costs.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Check Your Credit
              </h3>
              <p className="text-gray-600">
                Review your credit report and score before applying to ensure you qualify for the best rates.
              </p>
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
                Closing Cost Calculator
              </h3>
              <p className="text-gray-600 mb-4">
                Estimate all the costs associated with closing on your new home.
              </p>
              <Button href="/tools/closing-costs" className="text-orange-600 hover:text-orange-700">
                Calculate Closing Costs →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Refinance?
          </h2>
          <p className="text-xl mb-8">
            Connect with our trusted lenders and see if refinancing makes sense for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/lenders" className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3">
              Find Lenders
            </Button>
            <Button href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-3">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 