import { Metadata } from "next"
import { CalendlyInline } from "../../components/CalendlyInline"
import { calendlyUrl } from "../../lib/calendly"
import { Button } from "../../components/Button/Button"

export const metadata: Metadata = {
  title: "Mortgage Lenders - North Las Vegas Financing Options & Loan Programs",
  description: "Connect with trusted mortgage lenders and explore financing options for North Las Vegas real estate. Find competitive rates, loan programs, and expert guidance for your home purchase.",
}

export default function LendersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
            Mortgage Lenders
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Connect with trusted mortgage lenders and explore financing options to make your North Las Vegas home purchase a reality.
          </p>
        </div>
      </section>

      {/* Featured Lenders Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Featured Lenders
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">ABC Mortgage</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                ABC Mortgage Company
              </h3>
              <p className="text-gray-600 mb-4">
                Local mortgage lender specializing in first-time homebuyer programs and competitive rates for North Las Vegas residents.
              </p>
              <div className="space-y-2 text-gray-600 mb-6">
                <p>• Conventional loans</p>
                <p>• FHA loans</p>
                <p>• VA loans</p>
                <p>• First-time buyer programs</p>
                <p>• Competitive rates</p>
              </div>
              <div className="flex flex-col space-y-2">
                <Button href="/lenders/abc-mortgage" className="bg-blue-600 text-white hover:bg-blue-700">
                  Learn More
                </Button>
                <Button href="/contact" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                  Get Quote
                </Button>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">Nevada Home Loans</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Nevada Home Loans
              </h3>
              <p className="text-gray-600 mb-4">
                Statewide lender with deep knowledge of Nevada real estate markets and specialized programs for local buyers.
              </p>
              <div className="space-y-2 text-gray-600 mb-6">
                <p>• Jumbo loans</p>
                <p>• Investment property loans</p>
                <p>• Refinancing options</p>
                <p>• Construction loans</p>
                <p>• Fast approval process</p>
              </div>
              <div className="flex flex-col space-y-2">
                <Button href="/lenders/nevada-home-loans" className="bg-green-600 text-white hover:bg-green-700">
                  Learn More
                </Button>
                <Button href="/contact" className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                  Get Quote
                </Button>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="h-32 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">Desert Financial</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Desert Financial Credit Union
              </h3>
              <p className="text-gray-600 mb-4">
                Member-owned credit union offering competitive rates and personalized service for North Las Vegas homebuyers.
              </p>
              <div className="space-y-2 text-gray-600 mb-6">
                <p>• Credit union rates</p>
                <p>• Member benefits</p>
                <p>• Flexible terms</p>
                <p>• Local service</p>
                <p>• Low closing costs</p>
              </div>
              <div className="flex flex-col space-y-2">
                <Button href="/lenders/desert-financial" className="bg-purple-600 text-white hover:bg-purple-700">
                  Learn More
                </Button>
                <Button href="/contact" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white">
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Loan Programs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Loan Programs & Options
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold mb-6 text-blue-600">
                Conventional Loans
              </h3>
              <p className="text-gray-600 mb-6">
                Traditional mortgage loans with competitive rates and flexible terms for qualified borrowers.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Down payment: 3-20%</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Credit score: 620+</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">No PMI with 20% down</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Flexible terms: 15-30 years</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Competitive interest rates</span>
                </div>
              </div>
              <Button href="/tools/mortgage-calculator" className="mt-6 bg-blue-600 text-white hover:bg-blue-700">
                Calculate Payment
              </Button>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold mb-6 text-green-600">
                FHA Loans
              </h3>
              <p className="text-gray-600 mb-6">
                Government-backed loans with lower credit requirements and smaller down payments for first-time buyers.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Down payment: 3.5%</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Credit score: 580+</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Mortgage insurance required</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Loan limits apply</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Great for first-time buyers</span>
                </div>
              </div>
              <Button href="/tools/affordability" className="mt-6 bg-green-600 text-white hover:bg-green-700">
                Check Eligibility
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold mb-6 text-purple-600">
                VA Loans
              </h3>
              <p className="text-gray-600 mb-6">
                Special financing for veterans, active-duty service members, and eligible spouses with excellent benefits.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-700">Down payment: 0%</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-700">No PMI required</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-700">Competitive rates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-700">VA funding fee applies</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-700">Eligibility certificate required</span>
                </div>
              </div>
              <Button href="/contact" className="mt-6 bg-purple-600 text-white hover:bg-purple-700">
                Check Eligibility
              </Button>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold mb-6 text-orange-600">
                USDA Loans
              </h3>
              <p className="text-gray-600 mb-6">
                Rural development loans for eligible properties in designated rural areas with zero down payment.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <span className="text-gray-700">Down payment: 0%</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <span className="text-gray-700">Income limits apply</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <span className="text-gray-700">Property must be in eligible area</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <span className="text-gray-700">Low interest rates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <span className="text-gray-700">Annual fee required</span>
                </div>
              </div>
              <Button href="/contact" className="mt-6 bg-orange-600 text-white hover:bg-orange-700">
                Check Eligibility
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Current Rates Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Current Mortgage Rates
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">30-Year Fixed</h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">6.25%</div>
              <p className="text-sm text-gray-600">APR: 6.45%</p>
              <p className="text-xs text-gray-500 mt-2">Rate as of 12/15/2024</p>
            </div>

            <div className="bg-green-50 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">15-Year Fixed</h3>
              <div className="text-3xl font-bold text-green-600 mb-2">5.75%</div>
              <p className="text-sm text-gray-600">APR: 5.95%</p>
              <p className="text-xs text-gray-500 mt-2">Rate as of 12/15/2024</p>
            </div>

            <div className="bg-purple-50 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">FHA 30-Year</h3>
              <div className="text-3xl font-bold text-purple-600 mb-2">6.10%</div>
              <p className="text-sm text-gray-600">APR: 6.85%</p>
              <p className="text-xs text-gray-500 mt-2">Rate as of 12/15/2024</p>
            </div>

            <div className="bg-orange-50 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">VA 30-Year</h3>
              <div className="text-3xl font-bold text-orange-600 mb-2">5.90%</div>
              <p className="text-sm text-gray-600">APR: 6.15%</p>
              <p className="text-xs text-gray-500 mt-2">Rate as of 12/15/2024</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Rates are subject to change and may vary based on credit score, down payment, and other factors.
            </p>
            <Button href="/contact" className="bg-blue-600 text-white hover:bg-blue-700">
              Get Personalized Rate Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Lender Comparison Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Compare Lenders
          </h2>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Lender</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">30-Year Rate</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">APR</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Min. Down</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Min. Credit</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4">
                      <div>
                        <div className="font-medium text-gray-900">ABC Mortgage</div>
                        <div className="text-sm text-gray-500">Local lender</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">6.25%</td>
                    <td className="px-6 py-4 text-sm text-gray-900">6.45%</td>
                    <td className="px-6 py-4 text-sm text-gray-900">3%</td>
                    <td className="px-6 py-4 text-sm text-gray-900">620</td>
                    <td className="px-6 py-4">
                      <Button href="/contact" className="text-blue-600 hover:text-blue-700">
                        Get Quote
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">
                      <div>
                        <div className="font-medium text-gray-900">Nevada Home Loans</div>
                        <div className="text-sm text-gray-500">Statewide lender</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">6.20%</td>
                    <td className="px-6 py-4 text-sm text-gray-900">6.40%</td>
                    <td className="px-6 py-4 text-sm text-gray-900">3%</td>
                    <td className="px-6 py-4 text-sm text-gray-900">620</td>
                    <td className="px-6 py-4">
                      <Button href="/contact" className="text-green-600 hover:text-green-700">
                        Get Quote
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">
                      <div>
                        <div className="font-medium text-gray-900">Desert Financial</div>
                        <div className="text-sm text-gray-500">Credit union</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">6.15%</td>
                    <td className="px-6 py-4 text-sm text-gray-900">6.35%</td>
                    <td className="px-6 py-4 text-sm text-gray-900">5%</td>
                    <td className="px-6 py-4 text-sm text-gray-900">680</td>
                    <td className="px-6 py-4">
                      <Button href="/contact" className="text-purple-600 hover:text-purple-700">
                        Get Quote
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Approval Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
            Get Pre-Approved Today
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            Start your home buying journey with a pre-approval letter from our trusted lenders.
          </p>
          
          <div>
            <p className="text-gray-600 mb-4 text-center">Book a free buyer consultation. We cover your budget and connect you with a lender for pre-approval.</p>
            <CalendlyInline url={calendlyUrl("buyer", "inline", "/lenders")} />
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Tips for Choosing a Lender
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Compare Multiple Lenders
              </h3>
              <p className="text-gray-600">
                Get quotes from at least 3-4 lenders to compare rates, fees, and terms. Don't just focus on the interest rate - consider the APR and closing costs.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Check Credentials
              </h3>
              <p className="text-gray-600">
                Verify that your lender is licensed and has good reviews. Look for lenders with experience in your local market and loan type.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Understand All Costs
              </h3>
              <p className="text-gray-600">
                Ask for a detailed breakdown of all costs including origination fees, appraisal fees, title insurance, and other closing costs.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Consider Customer Service
              </h3>
              <p className="text-gray-600">
                Choose a lender who is responsive and communicates clearly throughout the process. Good customer service can make a big difference.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Ask About Lock Periods
              </h3>
              <p className="text-gray-600">
                Understand how long your rate can be locked and what happens if the lock expires. This can protect you from rate increases.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Read Reviews
              </h3>
              <p className="text-gray-600">
                Check online reviews and ask for references from recent borrowers. This can give you insight into the lender's reputation and service quality.
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
            Connect with our trusted lenders and get pre-approved for your North Las Vegas home purchase.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
              Get Pre-Approved
            </Button>
            <Button href="/tools/mortgage-calculator" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
              Calculate Payments
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 