import { Metadata } from "next"
import { Button } from "../../../components/Button/Button"

export const metadata: Metadata = {
  title: "Real Estate Investment Guide - North Las Vegas",
  description: "Complete guide to real estate investing in North Las Vegas. Learn about investment strategies, market analysis, and maximizing returns in the North Las Vegas market.",
}

export default function InvestmentGuidePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
            Real Estate Investment Guide
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Your complete guide to building wealth through real estate investment in North Las Vegas. Learn proven strategies and market insights.
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
              <h3 className="text-lg font-semibold text-indigo-600">Investment Fundamentals</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Investment Strategies</li>
                <li>• Market Analysis</li>
                <li>• Financial Planning</li>
                <li>• Risk Assessment</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-blue-600">North Las Vegas Market</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Market Overview</li>
                <li>• Investment Hotspots</li>
                <li>• Growth Projections</li>
                <li>• Local Regulations</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-green-600">Advanced Strategies</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Property Management</li>
                <li>• Tax Benefits</li>
                <li>• Portfolio Building</li>
                <li>• Exit Strategies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Invest in Real Estate Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Why Invest in Real Estate?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-indigo-600 text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Cash Flow
              </h3>
              <p className="text-gray-600">
                Generate monthly rental income that can provide passive income and cover expenses.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Appreciation
              </h3>
              <p className="text-gray-600">
                Property values typically increase over time, building long-term wealth.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl">🏦</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Leverage
              </h3>
              <p className="text-gray-600">
                Use other people's money (mortgages) to control larger assets with less capital.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Tax Benefits
              </h3>
              <p className="text-gray-600">
                Deduct expenses, depreciation, and potentially defer capital gains taxes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Strategies Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Real Estate Investment Strategies
          </h2>
          
          <div className="space-y-12">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-indigo-600">
                Buy and Hold Strategy
              </h3>
              <p className="text-gray-600 mb-6">
                The most common and reliable investment strategy involves purchasing properties and holding them for long-term appreciation and rental income.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Advantages</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Steady rental income</li>
                    <li>• Long-term appreciation</li>
                    <li>• Tax benefits and deductions</li>
                    <li>• Lower risk than flipping</li>
                    <li>• Builds equity over time</li>
                    <li>• Hedge against inflation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Considerations</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Requires property management</li>
                    <li>• Need for maintenance reserves</li>
                    <li>• Potential vacancy periods</li>
                    <li>• Market cycle risks</li>
                    <li>• Illiquid investment</li>
                    <li>• Requires significant capital</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-blue-600">
                Fix and Flip Strategy
              </h3>
              <p className="text-gray-600 mb-6">
                Purchase distressed properties, renovate them, and sell for a profit. This strategy requires more active involvement but can generate quick returns.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Advantages</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Potential for quick profits</li>
                    <li>• Active involvement and control</li>
                    <li>• Less ongoing management</li>
                    <li>• Can be done part-time</li>
                    <li>• Immediate cash returns</li>
                    <li>• Creative outlet</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Considerations</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Higher risk and volatility</li>
                    <li>• Requires renovation skills</li>
                    <li>• Market timing critical</li>
                    <li>• Potential for cost overruns</li>
                    <li>• Tax implications on short-term gains</li>
                    <li>• Need for reliable contractors</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-green-600">
                Short-Term Rentals (Airbnb)
              </h3>
              <p className="text-gray-600 mb-6">
                Rent properties on platforms like Airbnb for higher nightly rates. Popular in tourist areas and business travel destinations.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Advantages</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Higher nightly rates than long-term rentals</li>
                    <li>• Flexible usage of property</li>
                    <li>• Can be managed remotely</li>
                    <li>• Potential for premium pricing</li>
                    <li>• Seasonal rate adjustments</li>
                    <li>• Personal use flexibility</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Considerations</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• More intensive management</li>
                    <li>• Regulatory restrictions in some areas</li>
                    <li>• Higher turnover and maintenance</li>
                    <li>• Seasonal fluctuations</li>
                    <li>• Guest screening and support</li>
                    <li>• Platform fees and commissions</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-purple-600">
                Real Estate Investment Trusts (REITs)
              </h3>
              <p className="text-gray-600 mb-6">
                Invest in real estate without directly owning property through publicly traded REITs or private REITs.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Advantages</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Lower capital requirements</li>
                    <li>• Professional management</li>
                    <li>• Diversification across properties</li>
                    <li>• Liquidity (public REITs)</li>
                    <li>• Passive investment</li>
                    <li>• Regular dividend income</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Considerations</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Less control over investments</li>
                    <li>• Management fees and expenses</li>
                    <li>• Market volatility</li>
                    <li>• Limited tax benefits</li>
                    <li>• Potential for lower returns</li>
                    <li>• Interest rate sensitivity</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* North Las Vegas Market Analysis Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            North Las Vegas Investment Market Analysis
          </h2>
          
          <div className="space-y-12">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold mb-6 text-indigo-600">
                Market Overview and Trends
              </h3>
              <p className="text-gray-600 mb-6">
                North Las Vegas offers excellent investment opportunities with strong fundamentals and growth potential.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Market Statistics</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Median home price: $350,000</li>
                    <li>• Average rental yield: 6-8%</li>
                    <li>• Annual appreciation: 8-12%</li>
                    <li>• Population growth: +15% over 5 years</li>
                    <li>• Job growth: +20% in key sectors</li>
                    <li>• Days on market: 45 average</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Growth Drivers</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Strong job market expansion</li>
                    <li>• Affordable housing compared to Las Vegas</li>
                    <li>• New infrastructure development</li>
                    <li>• Proximity to major employers</li>
                    <li>• Master-planned communities with parks and trails</li>
                    <li>• Investment in public services</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold mb-6 text-blue-600">
                Investment Hotspots and Neighborhoods
              </h3>
              <p className="text-gray-600 mb-6">
                Certain areas in North Las Vegas offer particularly attractive investment opportunities based on growth potential and rental demand.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Top Investment Areas</h4>
                  <div className="space-y-4">
                    <div className="border-l-4 border-indigo-500 pl-4">
                      <h5 className="font-semibold text-gray-900">Aliante</h5>
                      <p className="text-sm text-gray-600">Master-planned community with golf, parks and trails</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h5 className="font-semibold text-gray-900">Centennial Hills</h5>
                      <p className="text-sm text-gray-600">Northwest valley area with mountain views</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h5 className="font-semibold text-gray-900">Skye Canyon</h5>
                      <p className="text-sm text-gray-600">New development with modern amenities and strong growth</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h5 className="font-semibold text-gray-900">Downtown North Las Vegas</h5>
                      <p className="text-sm text-gray-600">Revitalization area with investment potential</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Investment Criteria</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Strong job market proximity</li>
                    <li>• Good school districts</li>
                    <li>• Planned infrastructure improvements</li>
                    <li>• Proximity to job centers and the 215 Beltway</li>
                    <li>• Rental demand indicators</li>
                    <li>• Price appreciation potential</li>
                    <li>• Property tax rates</li>
                    <li>• HOA fees and restrictions</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold mb-6 text-green-600">
                Market Risks and Considerations
              </h3>
              <p className="text-gray-600 mb-6">
                Understanding the risks and challenges in the North Las Vegas market helps make informed investment decisions.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Market Risks</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Economic dependency on gaming/tourism</li>
                    <li>• Interest rate sensitivity</li>
                    <li>• Seasonal market fluctuations</li>
                    <li>• Competition from new developments</li>
                    <li>• Regulatory changes</li>
                    <li>• Natural disaster risks</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Mitigation Strategies</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Diversify across neighborhoods</li>
                    <li>• Maintain adequate reserves</li>
                    <li>• Focus on long-term holds</li>
                    <li>• Research local regulations</li>
                    <li>• Build strong property management</li>
                    <li>• Monitor market trends closely</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Planning Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Financial Planning and Analysis
          </h2>
          
          <div className="space-y-12">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-indigo-600">
                Investment Property Analysis
              </h3>
              <p className="text-gray-600 mb-6">
                Thorough financial analysis is crucial for making profitable real estate investment decisions.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Key Metrics to Calculate</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Cash-on-cash return</li>
                    <li>• Cap rate (capitalization rate)</li>
                    <li>• Gross rent multiplier</li>
                    <li>• Debt service coverage ratio</li>
                    <li>• Total return on investment</li>
                    <li>• Break-even analysis</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Expense Considerations</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Mortgage payments</li>
                    <li>• Property taxes and insurance</li>
                    <li>• Property management fees</li>
                    <li>• Maintenance and repairs</li>
                    <li>• Vacancy allowance</li>
                    <li>• Utilities and HOA fees</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-blue-600">
                Financing Options for Investors
              </h3>
              <p className="text-gray-600 mb-6">
                Understanding different financing options helps investors maximize their purchasing power and returns.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Conventional Financing</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 20-25% down payment required</li>
                    <li>• Competitive interest rates</li>
                    <li>• Good credit score needed</li>
                    <li>• Limited to 4-10 properties</li>
                    <li>• 30-year fixed terms available</li>
                    <li>• Private mortgage insurance</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Alternative Financing</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Hard money loans</li>
                    <li>• Private money lenders</li>
                    <li>• Seller financing</li>
                    <li>• Portfolio loans</li>
                    <li>• Commercial loans</li>
                    <li>• Cash-out refinancing</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-green-600">
                Tax Benefits and Strategies
              </h3>
              <p className="text-gray-600 mb-6">
                Real estate investing offers significant tax advantages that can improve overall returns.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Tax Deductions</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Mortgage interest</li>
                    <li>• Property taxes</li>
                    <li>• Depreciation</li>
                    <li>• Repairs and maintenance</li>
                    <li>• Property management fees</li>
                    <li>• Travel and education expenses</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Tax Strategies</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 1031 exchanges</li>
                    <li>• Cost segregation studies</li>
                    <li>• Opportunity zone investments</li>
                    <li>• Self-directed IRAs</li>
                    <li>• LLC structuring</li>
                    <li>• Estate planning benefits</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Management Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Property Management and Operations
          </h2>
          
          <div className="space-y-12">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold mb-6 text-indigo-600">
                Self-Management vs. Professional Management
              </h3>
              <p className="text-gray-600 mb-6">
                Deciding whether to manage properties yourself or hire professionals depends on your time, skills, and investment goals.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Self-Management</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Lower costs (no management fees)</li>
                    <li>• Direct control over decisions</li>
                    <li>• Personal relationship with tenants</li>
                    <li>• Learning experience</li>
                    <li>• Immediate response to issues</li>
                    <li>• Better understanding of operations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Professional Management</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Time savings and convenience</li>
                    <li>• Professional expertise</li>
                    <li>• 24/7 tenant support</li>
                    <li>• Established vendor relationships</li>
                    <li>• Legal compliance knowledge</li>
                    <li>• Scalability for multiple properties</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold mb-6 text-blue-600">
                Tenant Screening and Management
              </h3>
              <p className="text-gray-600 mb-6">
                Effective tenant screening and management are crucial for successful rental property investment.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Screening Process</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Credit check and history</li>
                    <li>• Income verification</li>
                    <li>• Rental history and references</li>
                    <li>• Criminal background check</li>
                    <li>• Employment verification</li>
                    <li>• Pet policies and deposits</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Management Best Practices</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Clear lease agreements</li>
                    <li>• Regular property inspections</li>
                    <li>• Prompt maintenance response</li>
                    <li>• Professional communication</li>
                    <li>• Rent collection systems</li>
                    <li>• Legal compliance maintenance</li>
                  </ul>
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
            Pro Tips for Real Estate Investors
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Start Small
              </h3>
              <p className="text-gray-600">
                Begin with one property to learn the ropes before expanding your portfolio. Experience is the best teacher.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Build a Team
              </h3>
              <p className="text-gray-600">
                Surround yourself with professionals: real estate agents, property managers, contractors, and accountants.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Focus on Cash Flow
              </h3>
              <p className="text-gray-600">
                Prioritize properties that generate positive cash flow over those that rely solely on appreciation.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Maintain Reserves
              </h3>
              <p className="text-gray-600">
                Keep 3-6 months of expenses in reserve for unexpected repairs, vacancies, or market downturns.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Stay Educated
              </h3>
              <p className="text-gray-600">
                Continuously learn about market trends, regulations, and investment strategies to stay competitive.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Think Long-Term
              </h3>
              <p className="text-gray-600">
                Real estate is a long-term investment. Focus on building sustainable wealth rather than quick profits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Investment Journey?
          </h2>
          <p className="text-xl mb-8">
            Connect with our investment specialists and discover the best opportunities in North Las Vegas real estate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/search" className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3">
              Search Investment Properties
            </Button>
            <Button href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-3">
              Contact Investment Specialist
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 