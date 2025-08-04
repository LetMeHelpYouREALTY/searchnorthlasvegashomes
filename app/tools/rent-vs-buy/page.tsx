import { Metadata } from "next"
import { Button } from "../../../components/Button/Button"

export const metadata: Metadata = {
  title: "Rent vs Buy Calculator | North Las Vegas Real Estate",
  description: "Compare the costs of renting vs buying a home in North Las Vegas. Use our calculator to determine which option makes more financial sense for your situation.",
  keywords: "rent vs buy calculator, North Las Vegas real estate, home buying calculator, rent vs buy comparison, mortgage calculator",
  openGraph: {
    title: "Rent vs Buy Calculator | North Las Vegas Real Estate",
    description: "Compare the costs of renting vs buying a home in North Las Vegas. Use our calculator to determine which option makes more financial sense for your situation.",
    url: "https://searchnorthlasvegashomes.com/tools/rent-vs-buy",
  },
}

export default function RentVsBuyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
            Rent vs Buy Calculator
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Compare the costs of renting versus buying a home in North Las Vegas. Make an informed decision about your housing future with our comprehensive calculator.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Rent vs Buy Comparison Calculator
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Calculator Form */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-semibold mb-6">Enter Your Information</h3>
                
                <div className="space-y-6">
                  {/* Rent Information */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Rent Information</h4>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="monthly-rent" className="block text-sm font-medium text-gray-700 mb-2">
                          Monthly Rent
                        </label>
                        <input
                          type="number"
                          id="monthly-rent"
                          name="monthly-rent"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                          placeholder="2000"
                          suppressHydrationWarning
                        />
                      </div>
                      <div>
                        <label htmlFor="rent-increase" className="block text-sm font-medium text-gray-700 mb-2">
                          Annual Rent Increase (%)
                        </label>
                        <input
                          type="number"
                          id="rent-increase"
                          name="rent-increase"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                          placeholder="3"
                          suppressHydrationWarning
                        />
                      </div>
                    </div>
                  </div>

                  {/* Home Purchase Information */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Home Purchase Information</h4>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="home-price" className="block text-sm font-medium text-gray-700 mb-2">
                          Home Price
                        </label>
                        <input
                          type="number"
                          id="home-price"
                          name="home-price"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                          placeholder="400000"
                          suppressHydrationWarning
                        />
                      </div>
                      <div>
                        <label htmlFor="down-payment" className="block text-sm font-medium text-gray-700 mb-2">
                          Down Payment (%)
                        </label>
                        <input
                          type="number"
                          id="down-payment"
                          name="down-payment"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                          placeholder="20"
                          suppressHydrationWarning
                        />
                      </div>
                      <div>
                        <label htmlFor="interest-rate" className="block text-sm font-medium text-gray-700 mb-2">
                          Interest Rate (%)
                        </label>
                        <input
                          type="number"
                          id="interest-rate"
                          name="interest-rate"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                          placeholder="6.5"
                          step="0.1"
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
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                          suppressHydrationWarning
                        >
                          <option value="30">30 Years</option>
                          <option value="20">20 Years</option>
                          <option value="15">15 Years</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Additional Costs */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Additional Costs</h4>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="property-tax" className="block text-sm font-medium text-gray-700 mb-2">
                          Annual Property Tax (%)
                        </label>
                        <input
                          type="number"
                          id="property-tax"
                          name="property-tax"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                          placeholder="1.1"
                          step="0.1"
                          suppressHydrationWarning
                        />
                      </div>
                      <div>
                        <label htmlFor="insurance" className="block text-sm font-medium text-gray-700 mb-2">
                          Annual Insurance (%)
                        </label>
                        <input
                          type="number"
                          id="insurance"
                          name="insurance"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                          placeholder="0.5"
                          step="0.1"
                          suppressHydrationWarning
                        />
                      </div>
                      <div>
                        <label htmlFor="hoa-fees" className="block text-sm font-medium text-gray-700 mb-2">
                          Monthly HOA Fees
                        </label>
                        <input
                          type="number"
                          id="hoa-fees"
                          name="hoa-fees"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                          placeholder="50"
                          suppressHydrationWarning
                        />
                      </div>
                      <div>
                        <label htmlFor="maintenance" className="block text-sm font-medium text-gray-700 mb-2">
                          Annual Maintenance (%)
                        </label>
                        <input
                          type="number"
                          id="maintenance"
                          name="maintenance"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                          placeholder="1"
                          step="0.1"
                          suppressHydrationWarning
                        />
                      </div>
                    </div>
                  </div>

                  {/* Analysis Period */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Analysis Period</h4>
                    <div>
                      <label htmlFor="analysis-years" className="block text-sm font-medium text-gray-700 mb-2">
                        Years to Compare
                      </label>
                      <select
                        id="analysis-years"
                        name="analysis-years"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                        suppressHydrationWarning
                      >
                        <option value="5">5 Years</option>
                        <option value="10">10 Years</option>
                        <option value="15">15 Years</option>
                        <option value="20">20 Years</option>
                        <option value="30">30 Years</option>
                      </select>
                    </div>
                  </div>

                  <Button className="w-full bg-teal-600 text-white hover:bg-teal-700">
                    Calculate Comparison
                  </Button>
                </div>
              </div>

              {/* Results Display */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-semibold mb-6">Comparison Results</h3>
                
                <div className="space-y-6">
                  {/* Summary */}
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h4 className="text-lg font-semibold mb-4">Financial Summary</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-red-600">$120,000</div>
                        <div className="text-sm text-gray-600">Total Rent Cost</div>
                        <div className="text-xs text-gray-500">(5 years)</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">$180,000</div>
                        <div className="text-sm text-gray-600">Total Buy Cost</div>
                        <div className="text-xs text-gray-500">(5 years)</div>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-800">
                        <strong>Recommendation:</strong> Renting is more cost-effective in the short term, but buying builds equity over time.
                      </p>
                    </div>
                  </div>

                  {/* Monthly Comparison */}
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h4 className="text-lg font-semibold mb-4">Monthly Cost Breakdown</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Rent Payment:</span>
                        <span className="font-semibold">$2,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Mortgage Payment:</span>
                        <span className="font-semibold">$2,025</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Property Tax:</span>
                        <span className="font-semibold">$367</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Insurance:</span>
                        <span className="font-semibold">$167</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">HOA Fees:</span>
                        <span className="font-semibold">$50</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Maintenance:</span>
                        <span className="font-semibold">$333</span>
                      </div>
                      <hr className="my-3" />
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total Monthly Cost:</span>
                        <span>$2,942</span>
                      </div>
                    </div>
                  </div>

                  {/* Equity Building */}
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h4 className="text-lg font-semibold mb-4">Equity Building</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Principal Paid (5 years):</span>
                        <span className="font-semibold text-green-600">$45,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Home Appreciation (3%):</span>
                        <span className="font-semibold text-green-600">$60,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Closing Costs:</span>
                        <span className="font-semibold text-red-600">-$12,000</span>
                      </div>
                      <hr className="my-3" />
                      <div className="flex justify-between text-lg font-bold">
                        <span>Net Equity Gain:</span>
                        <span className="text-green-600">$93,000</span>
                      </div>
                    </div>
                  </div>

                  {/* Break-Even Analysis */}
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h4 className="text-lg font-semibold mb-4">Break-Even Analysis</h4>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-2">7.2 Years</div>
                      <div className="text-sm text-gray-600">Time to break even</div>
                      <p className="text-xs text-gray-500 mt-2">
                        This is when the total cost of buying equals the total cost of renting
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Considerations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Key Considerations Beyond the Numbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-green-600">Benefits of Buying</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Build equity</strong> - Your payments go toward ownership</li>
                <li>• <strong>Tax benefits</strong> - Deduct mortgage interest and property taxes</li>
                <li>• <strong>Stable payments</strong> - Fixed-rate mortgages don't increase</li>
                <li>• <strong>Freedom to customize</strong> - Paint, renovate, landscape</li>
                <li>• <strong>Investment potential</strong> - Homes typically appreciate over time</li>
                <li>• <strong>Sense of ownership</strong> - Pride in your own property</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Benefits of Renting</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Lower upfront costs</strong> - No down payment required</li>
                <li>• <strong>Flexibility</strong> - Easy to move when lease ends</li>
                <li>• <strong>No maintenance costs</strong> - Landlord handles repairs</li>
                <li>• <strong>No property taxes</strong> - Included in rent</li>
                <li>• <strong>Lower insurance costs</strong> - Renter's insurance is cheaper</li>
                <li>• <strong>Investment flexibility</strong> - Money can go to other investments</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Market Factors */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            North Las Vegas Market Factors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">8.2%</div>
              <div className="text-gray-600">Average Annual Appreciation</div>
              <div className="text-sm text-gray-500">North Las Vegas homes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">$2,200</div>
              <div className="text-gray-600">Average Monthly Rent</div>
              <div className="text-sm text-gray-500">3-bedroom home</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">$420,000</div>
              <div className="text-gray-600">Median Home Price</div>
              <div className="text-sm text-gray-500">North Las Vegas</div>
            </div>
          </div>
          
          <div className="mt-12 bg-teal-50 rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-4">Current Market Insights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Why Buy Now:</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Strong appreciation potential</li>
                  <li>• Growing job market</li>
                  <li>• New development projects</li>
                  <li>• Affordable compared to other markets</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Why Rent Now:</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• High interest rates</li>
                  <li>• Limited inventory</li>
                  <li>• Uncertain market conditions</li>
                  <li>• Need for flexibility</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">How accurate is this calculator?</h3>
              <p className="text-gray-700">This calculator provides estimates based on typical market conditions in North Las Vegas. Actual costs may vary based on specific properties, loan terms, and market conditions. We recommend consulting with a real estate professional for personalized advice.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">What's included in the "buy" costs?</h3>
              <p className="text-gray-700">The calculator includes mortgage payments, property taxes, homeowners insurance, HOA fees (if applicable), maintenance costs, and closing costs. It also factors in potential home appreciation and equity building.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">How do I know if I'm ready to buy?</h3>
              <p className="text-gray-700">Consider your financial stability, credit score, down payment savings, job security, and long-term plans. You should have a stable income, good credit, and be prepared to stay in the home for at least 3-5 years to make buying worthwhile.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">What if I can't afford a 20% down payment?</h3>
              <p className="text-gray-700">Many loan programs allow lower down payments. FHA loans require only 3.5% down, and conventional loans can go as low as 3%. However, lower down payments typically mean higher monthly payments and PMI costs.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">How do property taxes work in North Las Vegas?</h3>
              <p className="text-gray-700">Property taxes in North Las Vegas are approximately 1.1% of the assessed value annually. The assessed value is typically lower than market value and increases are capped at 3% per year for primary residences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Need Help Making Your Decision?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our experienced team can help you analyze your specific situation and determine whether renting or buying makes more sense for you in North Las Vegas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" className="bg-white text-teal-600 hover:bg-gray-100">
              Get Expert Advice
            </Button>
            <Button href="/search" className="border-2 border-white text-white hover:bg-white hover:text-teal-600">
              Browse Homes
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 