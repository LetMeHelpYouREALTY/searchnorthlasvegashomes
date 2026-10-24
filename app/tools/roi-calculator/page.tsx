import { Metadata } from "next"
import { Button } from "../../../components/Button/Button"

export const metadata: Metadata = {
  title: "ROI Calculator",
  description: "Calculate potential returns on investment properties in North Las Vegas. Analyze cash flow, appreciation, and total ROI.",
}

export default function ROICalculatorPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
            ROI Calculator
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Calculate potential returns on investment properties in North Las Vegas. Analyze cash flow, appreciation, and total ROI.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Investment Property Analysis
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Calculator Form */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                Property Investment Calculator
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    suppressHydrationWarning
                  />
                </div>
                <div>
                  <label htmlFor="monthly-rent" className="block text-sm font-medium text-gray-700 mb-2">
                    Monthly Rental Income
                  </label>
                  <input
                    id="monthly-rent"
                    name="monthly-rent"
                    type="number"
                    placeholder="Enter expected monthly rent"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    suppressHydrationWarning
                  />
                </div>
                <div>
                  <label htmlFor="monthly-expenses" className="block text-sm font-medium text-gray-700 mb-2">
                    Monthly Expenses
                  </label>
                  <input
                    id="monthly-expenses"
                    name="monthly-expenses"
                    type="number"
                    placeholder="Enter monthly expenses (mortgage, taxes, insurance, maintenance)"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    suppressHydrationWarning
                  />
                </div>
                <div>
                  <label htmlFor="appreciation-rate" className="block text-sm font-medium text-gray-700 mb-2">
                    Annual Appreciation Rate (%)
                  </label>
                  <input
                    id="appreciation-rate"
                    name="appreciation-rate"
                    type="number"
                    step="0.1"
                    placeholder="Enter expected annual appreciation"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    suppressHydrationWarning
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-semibold"
                >
                  Calculate ROI
                </Button>
              </form>
            </div>

            {/* Results Display */}
            <div className="bg-green-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                Investment Analysis Results
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">Monthly Cash Flow</span>
                  <span className="text-2xl font-bold text-green-600">$567</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">Annual Cash Flow</span>
                  <span className="text-lg font-semibold text-gray-900">$6,804</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">Cash-on-Cash ROI</span>
                  <span className="text-lg font-semibold text-gray-900">8.5%</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">Annual Appreciation</span>
                  <span className="text-lg font-semibold text-gray-900">$12,500</span>
                </div>
                <div className="flex justify-between items-center py-4 bg-green-100 rounded-lg px-4">
                  <span className="text-lg font-semibold text-gray-900">Total Annual Return</span>
                  <span className="text-2xl font-bold text-green-600">$19,304</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">Total ROI (5 years)</span>
                  <span className="text-lg font-semibold text-gray-900">12.3%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Strategies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Investment Strategies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Buy and Hold
              </h3>
              <p className="text-gray-600 mb-4">
                Purchase properties for long-term appreciation and rental income. Ideal for building wealth over time.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• Long-term appreciation</p>
                <p>• Steady rental income</p>
                <p>• Tax benefits</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Fix and Flip
              </h3>
              <p className="text-gray-600 mb-4">
                Purchase distressed properties, renovate them, and sell for a profit. Requires more active involvement.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• Quick profits</p>
                <p>• Value appreciation</p>
                <p>• Higher risk/reward</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Short-term Rentals
              </h3>
              <p className="text-gray-600 mb-4">
                Rent properties on platforms like Airbnb for higher nightly rates. Popular in tourist areas.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• Higher rental rates</p>
                <p>• Flexible usage</p>
                <p>• More management required</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* North Las Vegas Market Analysis */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            North Las Vegas Investment Market
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-green-600">
                Market Overview
              </h3>
              <p className="text-gray-600 mb-4">
                North Las Vegas offers excellent investment opportunities with strong population growth, 
                affordable property prices, and increasing rental demand.
              </p>
              <div className="space-y-2 text-gray-600">
                <p>• Population growth: +15% over 5 years</p>
                <p>• Average rental yield: 6-8%</p>
                <p>• Property appreciation: 8-12% annually</p>
                <p>• Strong job market growth</p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">
                Investment Hotspots
              </h3>
              <p className="text-gray-600 mb-4">
                Several neighborhoods in North Las Vegas are particularly attractive for real estate investors.
              </p>
              <div className="space-y-2 text-gray-600">
                <p>• Aliante: Master-planned community</p>
                <p>• Centennial Hills: Northwest valley, mountain views</p>
                <p>• Skye Canyon: New development</p>
                <p>• Downtown North Las Vegas: Revitalization</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Analysis */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Investment Risk Analysis
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 text-2xl">⚠️</span>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                Market Risk
              </h3>
              <p className="text-gray-600 text-sm">
                Property values can fluctuate based on market conditions and economic factors.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 text-2xl">🏠</span>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                Vacancy Risk
              </h3>
              <p className="text-gray-600 text-sm">
                Periods without tenants can impact cash flow and overall returns.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-yellow-600 text-2xl">🔧</span>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                Maintenance Risk
              </h3>
              <p className="text-gray-600 text-sm">
                Unexpected repairs and maintenance costs can reduce profitability.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 text-2xl">📈</span>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                Interest Rate Risk
              </h3>
              <p className="text-gray-600 text-sm">
                Rising interest rates can increase mortgage payments and reduce cash flow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Investment Tips for North Las Vegas
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Research Neighborhoods
              </h3>
              <p className="text-gray-600">
                Focus on areas with strong job growth, new amenities, and planned infrastructure improvements.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Calculate All Costs
              </h3>
              <p className="text-gray-600">
                Include property management fees, maintenance reserves, and vacancy allowances in your calculations.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Build a Team
              </h3>
              <p className="text-gray-600">
                Work with experienced real estate agents, property managers, and contractors in the area.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Investing?
          </h2>
          <p className="text-xl mb-8">
            Connect with our investment specialists and discover the best opportunities in North Las Vegas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/search" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3">
              Search Investment Properties
            </Button>
            <Button href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3">
              Contact Investment Specialist
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 