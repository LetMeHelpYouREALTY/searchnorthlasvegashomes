import { Metadata } from "next"
import { Button } from "../../../components/Button/Button"

export const metadata: Metadata = {
  title: "Real Estate Tax Benefits - North Las Vegas Tax Guide",
  description: "Complete guide to real estate tax benefits in Nevada and North Las Vegas. Learn about deductions, exemptions, and tax strategies for homeowners and investors.",
}

export default function TaxBenefitsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
            Real Estate Tax Benefits
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Maximize your tax savings with our comprehensive guide to real estate tax benefits in Nevada and North Las Vegas.
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
              <h3 className="text-lg font-semibold text-emerald-600">Homeowner Tax Benefits</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Mortgage Interest Deduction</li>
                <li>• Property Tax Deductions</li>
                <li>• Capital Gains Exclusions</li>
                <li>• Energy Efficiency Credits</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-blue-600">Investment Property Benefits</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Depreciation Deductions</li>
                <li>• Operating Expense Deductions</li>
                <li>• 1031 Exchanges</li>
                <li>• Passive Loss Rules</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-green-600">Nevada Tax Advantages</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• No State Income Tax</li>
                <li>• Property Tax Caps</li>
                <li>• Transfer Tax Benefits</li>
                <li>• Business Tax Incentives</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Homeowner Tax Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Homeowner Tax Benefits
          </h2>
          
          <div className="space-y-12">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold mb-6 text-emerald-600">
                Mortgage Interest Deduction
              </h3>
              <p className="text-gray-600 mb-6">
                One of the most significant tax benefits for homeowners is the ability to deduct mortgage interest from your taxable income.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">What You Can Deduct</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Interest on primary residence mortgage</li>
                    <li>• Interest on second home mortgage</li>
                    <li>• Points paid at closing</li>
                    <li>• Mortgage insurance premiums (PMI)</li>
                    <li>• Home equity loan interest (limited)</li>
                    <li>• Refinancing costs</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Current Limits</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Mortgage Debt Limit:</strong> $750,000 (married filing jointly)</li>
                    <li>• <strong>Single Filers:</strong> $375,000 limit</li>
                    <li>• <strong>Grandfathered Loans:</strong> $1 million (pre-2018)</li>
                    <li>• <strong>Home Equity:</strong> $100,000 limit</li>
                    <li>• <strong>Standard Deduction:</strong> May be more beneficial</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold mb-6 text-blue-600">
                Property Tax Deductions
              </h3>
              <p className="text-gray-600 mb-6">
                Property taxes paid on your primary residence and second home are generally deductible on your federal tax return.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Deductible Property Taxes</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• State and local property taxes</li>
                    <li>• County property taxes</li>
                    <li>• School district taxes</li>
                    <li>• Special assessments for improvements</li>
                    <li>• Transfer taxes (in some cases)</li>
                    <li>• HOA fees (if for property taxes)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">SALT Deduction Limit</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Combined Limit:</strong> $10,000 total</li>
                    <li>• <strong>Includes:</strong> State income tax, property tax, sales tax</li>
                    <li>• <strong>Married Filing Separately:</strong> $5,000 each</li>
                    <li>• <strong>Business Property:</strong> No limit for business use</li>
                    <li>• <strong>Rental Property:</strong> Fully deductible as business expense</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold mb-6 text-green-600">
                Capital Gains Exclusion
              </h3>
              <p className="text-gray-600 mb-6">
                When you sell your primary residence, you may be able to exclude a significant portion of the capital gains from taxation.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Exclusion Limits</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Single Filers:</strong> $250,000 exclusion</li>
                    <li>• <strong>Married Filing Jointly:</strong> $500,000 exclusion</li>
                    <li>• <strong>Qualifying Period:</strong> 2 out of 5 years</li>
                    <li>• <strong>Ownership Test:</strong> Must own for 2 years</li>
                    <li>• <strong>Use Test:</strong> Must live in home for 2 years</li>
                    <li>• <strong>Frequency Limit:</strong> Once every 2 years</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Qualifying Requirements</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Must be your primary residence</li>
                    <li>• Cannot be investment property</li>
                    <li>• Must meet ownership and use tests</li>
                    <li>• Cannot have used exclusion recently</li>
                    <li>• Exceptions for military, health, job changes</li>
                    <li>• Partial exclusion available in some cases</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold mb-6 text-purple-600">
                Energy Efficiency Tax Credits
              </h3>
              <p className="text-gray-600 mb-6">
                Federal tax credits are available for energy-efficient home improvements and renewable energy systems.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Available Credits</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Solar Panels:</strong> 30% of cost</li>
                    <li>• <strong>Solar Water Heaters:</strong> 30% of cost</li>
                    <li>• <strong>Geothermal Heat Pumps:</strong> 30% of cost</li>
                    <li>• <strong>Wind Turbines:</strong> 30% of cost</li>
                    <li>• <strong>Fuel Cells:</strong> 30% of cost</li>
                    <li>• <strong>Battery Storage:</strong> 30% of cost</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Energy Efficiency Improvements</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Insulation:</strong> Up to $1,200 credit</li>
                    <li>• <strong>Windows/Doors:</strong> Up to $600 credit</li>
                    <li>• <strong>Heat Pumps:</strong> Up to $2,000 credit</li>
                    <li>• <strong>Central Air:</strong> Up to $300 credit</li>
                    <li>• <strong>Water Heaters:</strong> Up to $300 credit</li>
                    <li>• <strong>Furnaces:</strong> Up to $150 credit</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Property Tax Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Investment Property Tax Benefits
          </h2>
          
          <div className="space-y-12">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-emerald-600">
                Depreciation Deductions
              </h3>
              <p className="text-gray-600 mb-6">
                Depreciation allows you to deduct the cost of your investment property over time, even while the property may be appreciating in value.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Depreciation Basics</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Residential Property:</strong> 27.5 years</li>
                    <li>• <strong>Commercial Property:</strong> 39 years</li>
                    <li>• <strong>Land:</strong> Not depreciable</li>
                    <li>• <strong>Improvements:</strong> Separate depreciation</li>
                    <li>• <strong>Personal Property:</strong> 5-7 years</li>
                    <li>• <strong>Bonus Depreciation:</strong> Available for certain assets</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Depreciation Benefits</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Reduces taxable income</li>
                    <li>• Provides cash flow benefits</li>
                    <li>• Can offset rental income</li>
                    <li>• Available even with appreciation</li>
                    <li>• Can be accelerated in some cases</li>
                    <li>• Recaptured only on sale</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-blue-600">
                Operating Expense Deductions
              </h3>
              <p className="text-gray-600 mb-6">
                Most expenses related to operating and maintaining your investment property are deductible against rental income.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Deductible Expenses</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Mortgage Interest:</strong> Fully deductible</li>
                    <li>• <strong>Property Taxes:</strong> Fully deductible</li>
                    <li>• <strong>Insurance:</strong> Property and liability</li>
                    <li>• <strong>Repairs & Maintenance:</strong> Current expenses</li>
                    <li>• <strong>Property Management:</strong> Management fees</li>
                    <li>• <strong>Utilities:</strong> If paid by owner</li>
                    <li>• <strong>Advertising:</strong> Marketing costs</li>
                    <li>• <strong>Legal & Professional:</strong> Attorney, CPA fees</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Capital vs. Current Expenses</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Current Expenses:</strong> Immediately deductible</li>
                    <li>• <strong>Capital Improvements:</strong> Depreciated over time</li>
                    <li>• <strong>Repairs:</strong> Keep property in good condition</li>
                    <li>• <strong>Improvements:</strong> Add value or extend life</li>
                    <li>• <strong>Materials & Supplies:</strong> Under $2,500</li>
                    <li>• <strong>De Minimis Safe Harbor:</strong> Under $2,500 per item</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-green-600">
                1031 Exchange Benefits
              </h3>
              <p className="text-gray-600 mb-6">
                A 1031 exchange allows you to defer capital gains taxes when selling investment property and purchasing replacement property.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">1031 Exchange Requirements</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Like-Kind Property:</strong> Investment or business use</li>
                    <li>• <strong>45-Day Rule:</strong> Identify replacement property</li>
                    <li>• <strong>180-Day Rule:</strong> Complete exchange</li>
                    <li>• <strong>Qualified Intermediary:</strong> Required facilitator</li>
                    <li>• <strong>Equal or Greater Value:</strong> Reinvest all proceeds</li>
                    <li>• <strong>No Personal Use:</strong> Must be investment property</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Exchange Benefits</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Defer capital gains taxes</li>
                    <li>• Defer depreciation recapture</li>
                    <li>• Increase purchasing power</li>
                    <li>• Diversify investment portfolio</li>
                    <li>• Upgrade to better properties</li>
                    <li>• Estate planning benefits</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-purple-600">
                Passive Loss Rules and Real Estate Professional Status
              </h3>
              <p className="text-gray-600 mb-6">
                Understanding passive loss rules is crucial for real estate investors, especially those with multiple properties.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Passive Loss Rules</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Passive Losses:</strong> Generally not deductible</li>
                    <li>• <strong>Active Participation:</strong> $25,000 deduction limit</li>
                    <li>• <strong>Phase-Out:</strong> $100,000-$150,000 AGI</li>
                    <li>• <strong>Carryforward:</strong> Unused losses carried forward</li>
                    <li>• <strong>Material Participation:</strong> 500+ hours annually</li>
                    <li>• <strong>Real Estate Professional:</strong> 750+ hours, 50%+ time</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Real Estate Professional Benefits</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Deduct unlimited passive losses</li>
                    <li>• Offset other income sources</li>
                    <li>• More aggressive tax strategies</li>
                    <li>• Better cash flow management</li>
                    <li>• Increased investment flexibility</li>
                    <li>• Estate planning advantages</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nevada Tax Advantages Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Nevada Tax Advantages
          </h2>
          
          <div className="space-y-12">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold mb-6 text-emerald-600">
                No State Income Tax
              </h3>
              <p className="text-gray-600 mb-6">
                Nevada's lack of state income tax provides significant advantages for real estate investors and homeowners.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Benefits for Investors</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• No state tax on rental income</li>
                    <li>• No state tax on capital gains</li>
                    <li>• No state tax on dividends</li>
                    <li>• No state tax on interest income</li>
                    <li>• Higher effective returns</li>
                    <li>• Better cash flow</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Benefits for Homeowners</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Keep more of your income</li>
                    <li>• Lower overall tax burden</li>
                    <li>• More disposable income</li>
                    <li>• Better affordability</li>
                    <li>• Retirement planning advantages</li>
                    <li>• Estate planning benefits</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold mb-6 text-blue-600">
                Property Tax Caps and Limitations
              </h3>
              <p className="text-gray-600 mb-6">
                Nevada's property tax system provides stability and predictability for property owners.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Property Tax Caps</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>3% Cap:</strong> Annual increase limit</li>
                    <li>• <strong>8% Cap:</strong> Transfer increase limit</li>
                    <li>• <strong>Homestead Exemption:</strong> Available for primary residence</li>
                    <li>• <strong>Senior Exemption:</strong> Additional benefits for seniors</li>
                    <li>• <strong>Disabled Veteran:</strong> Special exemptions</li>
                    <li>• <strong>Agricultural Use:</strong> Reduced rates</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Tax Assessment Process</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Assessed Value:</strong> 35% of market value</li>
                    <li>• <strong>Tax Rate:</strong> Varies by location</li>
                    <li>• <strong>Appeals Process:</strong> Available for disputes</li>
                    <li>• <strong>Reassessment:</strong> Every 5 years</li>
                    <li>• <strong>Transfer Reassessment:</strong> On sale</li>
                    <li>• <strong>Improvement Reassessment:</strong> On major changes</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold mb-6 text-green-600">
                Transfer Tax Benefits
              </h3>
              <p className="text-gray-600 mb-6">
                Nevada offers favorable transfer tax rates compared to many other states.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Transfer Tax Rates</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>State Transfer Tax:</strong> $1.95 per $500</li>
                    <li>• <strong>County Transfer Tax:</strong> Varies by county</li>
                    <li>• <strong>Total Rate:</strong> Approximately 0.4-0.6%</li>
                    <li>• <strong>Exemptions:</strong> Available in some cases</li>
                    <li>• <strong>Refinancing:</strong> No transfer tax</li>
                    <li>• <strong>Gift Transfers:</strong> May be exempt</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Cost Savings</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Lower closing costs</li>
                    <li>• More affordable transactions</li>
                    <li>• Better investment returns</li>
                    <li>• Reduced barrier to entry</li>
                    <li>• More frequent trading possible</li>
                    <li>• Competitive advantage</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold mb-6 text-purple-600">
                Business Tax Incentives
              </h3>
              <p className="text-gray-600 mb-6">
                Nevada offers various business tax incentives that can benefit real estate investors and developers.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Available Incentives</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>No Corporate Income Tax:</strong> Business-friendly</li>
                    <li>• <strong>No Franchise Tax:</strong> Lower business costs</li>
                    <li>• <strong>No Inventory Tax:</strong> Manufacturing benefits</li>
                    <li>• <strong>Abatement Programs:</strong> Property tax relief</li>
                    <li>• <strong>Enterprise Zones:</strong> Special incentives</li>
                    <li>• <strong>Workforce Development:</strong> Training incentives</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Real Estate Impact</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Increased business demand</li>
                    <li>• Higher property values</li>
                    <li>• Better rental markets</li>
                    <li>• More investment opportunities</li>
                    <li>• Economic growth</li>
                    <li>• Job creation benefits</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tax Planning Strategies Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Tax Planning Strategies
          </h2>
          
          <div className="space-y-12">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-emerald-600">
                Year-End Tax Planning
              </h3>
              <p className="text-gray-600 mb-6">
                Strategic year-end planning can help maximize your real estate tax benefits and minimize your tax liability.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Timing Strategies</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Accelerate Deductions:</strong> Prepay expenses</li>
                    <li>• <strong>Defer Income:</strong> Delay rent collection</li>
                    <li>• <strong>Property Sales:</strong> Time for optimal gains</li>
                    <li>• <strong>1031 Exchanges:</strong> Plan timing carefully</li>
                    <li>• <strong>Depreciation:</strong> Maximize current year</li>
                    <li>• <strong>Loss Harvesting:</strong> Offset gains</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Documentation</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Keep detailed expense records</li>
                    <li>• Maintain mileage logs</li>
                    <li>• Document business use</li>
                    <li>• Save all receipts</li>
                    <li>• Track improvement costs</li>
                    <li>• Maintain property logs</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-blue-600">
                Entity Structure and Tax Optimization
              </h3>
              <p className="text-gray-600 mb-6">
                Choosing the right entity structure can provide significant tax advantages for real estate investors.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Entity Options</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>LLC:</strong> Pass-through taxation, liability protection</li>
                    <li>• <strong>S-Corporation:</strong> Potential payroll tax savings</li>
                    <li>• <strong>C-Corporation:</strong> Corporate tax rates</li>
                    <li>• <strong>Partnership:</strong> Multiple owner flexibility</li>
                    <li>• <strong>Trust:</strong> Estate planning benefits</li>
                    <li>• <strong>Sole Proprietorship:</strong> Simple but no protection</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Considerations</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Liability protection needs</li>
                    <li>• Number of owners</li>
                    <li>• Investment goals</li>
                    <li>• Estate planning objectives</li>
                    <li>• State-specific requirements</li>
                    <li>• Administrative complexity</li>
                  </ul>
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
            Tax Planning Tips for Real Estate
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Work with Professionals
              </h3>
              <p className="text-gray-600">
                Consult with experienced CPAs and tax attorneys who specialize in real estate to maximize your benefits.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Keep Detailed Records
              </h3>
              <p className="text-gray-600">
                Maintain comprehensive records of all income, expenses, and improvements to support your deductions.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Plan Ahead
              </h3>
              <p className="text-gray-600">
                Develop a long-term tax strategy that considers your investment goals and exit strategies.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Stay Updated
              </h3>
              <p className="text-gray-600">
                Tax laws change frequently. Stay informed about new legislation and how it affects real estate.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Consider Timing
              </h3>
              <p className="text-gray-600">
                Time your transactions strategically to optimize tax benefits and minimize liabilities.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Understand Your Status
              </h3>
              <p className="text-gray-600">
                Know whether you qualify as a real estate professional and how it affects your tax treatment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Tax Planning Help?
          </h2>
          <p className="text-xl mb-8">
            Connect with our network of experienced tax professionals and CPAs specializing in real estate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3">
              Contact Tax Professional
            </Button>
            <Button href="/resources" className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-3">
              View Tax Resources
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 