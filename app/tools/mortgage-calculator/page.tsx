import { Metadata } from "next"
import { Button } from "../../../components/Button/Button"

export const metadata: Metadata = {
  title: "Mortgage Calculator",
  description: "Calculate your monthly mortgage payments, estimate closing costs, and understand your buying power in North Las Vegas.",
}

export default function MortgageCalculatorPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
            Mortgage Calculator
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Calculate your monthly payments, estimate closing costs, and understand your buying power in North Las Vegas.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Calculate Your Mortgage
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Calculator Form */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                Mortgage Payment Calculator
              </h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="home-price" className="block text-sm font-medium text-gray-700 mb-2">
                    Home Price
                  </label>
                  <input
                    id="home-price"
                    name="home-price"
                    type="number"
                    placeholder="Enter home price"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                    placeholder="Enter down payment amount"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    suppressHydrationWarning
                  />
                </div>
                <div>
                  <label htmlFor="loan-term" className="block text-sm font-medium text-gray-700 mb-2">
                    Loan Term (Years)
                  </label>
                  <select
                    id="loan-term"
                    name="loan-term"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    suppressHydrationWarning
                  >
                    <option value="30">30 Years</option>
                    <option value="20">20 Years</option>
                    <option value="15">15 Years</option>
                    <option value="10">10 Years</option>
                  </select>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold"
                >
                  Calculate Payment
                </Button>
              </form>
            </div>

            {/* Results Display */}
            <div className="bg-blue-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                Your Payment Breakdown
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">Principal & Interest</span>
                  <span className="text-2xl font-bold text-blue-600">$1,234</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">Property Tax</span>
                  <span className="text-lg font-semibold text-gray-900">$167</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">Home Insurance</span>
                  <span className="text-lg font-semibold text-gray-900">$83</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">PMI (if applicable)</span>
                  <span className="text-lg font-semibold text-gray-900">$0</span>
                </div>
                <div className="flex justify-between items-center py-4 bg-blue-100 rounded-lg px-4">
                  <span className="text-lg font-semibold text-gray-900">Total Monthly Payment</span>
                  <span className="text-2xl font-bold text-blue-600">$1,484</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Calculators */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            More Calculators
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Affordability Calculator
              </h3>
              <p className="text-gray-600 mb-4">
                Determine how much house you can afford based on your income and expenses.
              </p>
              <Button href="/tools/affordability" className="text-blue-600 hover:text-blue-700">
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
              <Button href="/tools/closing-costs" className="text-green-600 hover:text-green-700">
                Calculate Closing Costs →
              </Button>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Refinance Calculator
              </h3>
              <p className="text-gray-600 mb-4">
                See if refinancing your mortgage makes financial sense.
              </p>
              <Button href="/tools/refinance" className="text-purple-600 hover:text-purple-700">
                Calculate Refinance →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Understanding Your Mortgage
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">
                Principal & Interest
              </h3>
              <p className="text-gray-600 mb-4">
                This is the core of your mortgage payment. The principal is the amount you borrowed, 
                and the interest is what the lender charges you for borrowing the money.
              </p>
              <p className="text-gray-600">
                In the early years of your mortgage, most of your payment goes toward interest. 
                As time goes on, more of your payment goes toward the principal.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-green-600">
                Property Taxes
              </h3>
              <p className="text-gray-600 mb-4">
                Property taxes in North Las Vegas are typically around 1% of your home's assessed value. 
                These taxes help fund local services like schools, roads, and emergency services.
              </p>
              <p className="text-gray-600">
                Your lender usually collects property taxes as part of your monthly payment and 
                pays them on your behalf to ensure they're paid on time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Mortgage Tips for North Las Vegas
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Save for a Larger Down Payment
              </h3>
              <p className="text-gray-600">
                A larger down payment can help you avoid PMI and get better interest rates. 
                Aim for at least 20% down if possible.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Shop Around for Rates
              </h3>
              <p className="text-gray-600">
                Compare rates from multiple lenders. Even a small difference in interest rate 
                can save you thousands over the life of your loan.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Consider Your Long-term Plans
              </h3>
              <p className="text-gray-600">
                Choose a loan term that aligns with your financial goals. A 15-year loan has 
                higher payments but builds equity faster.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Pre-Approved?
          </h2>
          <p className="text-xl mb-8">
            Connect with our trusted mortgage lenders and get pre-approved for your North Las Vegas home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/lenders" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
              Find Lenders
            </Button>
            <Button href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 