import { Metadata } from "next"
import { Button } from "../../../components/Button/Button"

export const metadata: Metadata = {
  title: "Real Estate Law - North Las Vegas Legal Guide",
  description: "Comprehensive guide to real estate laws in Nevada and North Las Vegas. Learn about property rights, contracts, regulations, and legal requirements for buyers and sellers.",
}

export default function RealEstateLawPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
            Real Estate Law Guide
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Your comprehensive guide to real estate laws in Nevada and North Las Vegas. Understand your rights, obligations, and legal requirements.
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
              <h3 className="text-lg font-semibold text-red-600">Property Rights & Ownership</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Property Ownership Types</li>
                <li>• Title and Deeds</li>
                <li>• Property Rights</li>
                <li>• Easements and Liens</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-blue-600">Contracts & Transactions</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Purchase Agreements</li>
                <li>• Disclosure Requirements</li>
                <li>• Closing Process</li>
                <li>• Legal Remedies</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-green-600">Regulations & Compliance</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Zoning Laws</li>
                <li>• Building Codes</li>
                <li>• Environmental Regulations</li>
                <li>• Tax Implications</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Property Rights and Ownership Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Property Rights and Ownership
          </h2>
          
          <div className="space-y-12">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold mb-6 text-red-600">
                Types of Property Ownership in Nevada
              </h3>
              <p className="text-gray-600 mb-6">
                Understanding the different types of property ownership is crucial for making informed real estate decisions.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Fee Simple Absolute</h4>
                  <p className="text-gray-600 mb-4">
                    The most complete form of property ownership, giving the owner full rights to use, sell, or transfer the property.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Complete ownership rights</li>
                    <li>• Can be transferred freely</li>
                    <li>• Subject to government regulations</li>
                    <li>• Most common form of ownership</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Joint Tenancy</h4>
                  <p className="text-gray-600 mb-4">
                    Multiple owners with equal shares and right of survivorship - when one owner dies, their share passes to the surviving owners.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Equal ownership shares</li>
                    <li>• Right of survivorship</li>
                    <li>• Must be created with specific language</li>
                    <li>• Common for married couples</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold mb-6 text-blue-600">
                Title and Deeds
              </h3>
              <p className="text-gray-600 mb-6">
                Title and deeds are legal documents that establish and transfer property ownership rights.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Title Insurance</h4>
                  <p className="text-gray-600 mb-4">
                    Protects against financial loss from defects in title, liens, or other title-related issues.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Protects against title defects</li>
                    <li>• Covers legal defense costs</li>
                    <li>• Required by most lenders</li>
                    <li>• One-time premium payment</li>
                    <li>• Covers both owner and lender</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Types of Deeds</h4>
                  <div className="space-y-3">
                    <div className="border-l-4 border-red-500 pl-4">
                      <h5 className="font-semibold text-gray-900">Warranty Deed</h5>
                      <p className="text-sm text-gray-600">Provides the highest level of protection, guaranteeing clear title</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h5 className="font-semibold text-gray-900">Quitclaim Deed</h5>
                      <p className="text-sm text-gray-600">Transfers whatever interest the grantor has, without warranties</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h5 className="font-semibold text-gray-900">Special Warranty Deed</h5>
                      <p className="text-sm text-gray-600">Warrants against defects only during grantor's ownership</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold mb-6 text-green-600">
                Easements and Liens
              </h3>
              <p className="text-gray-600 mb-6">
                Easements and liens can affect property rights and should be understood before purchasing real estate.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Types of Easements</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Utility Easements:</strong> Allow utility companies access</li>
                    <li>• <strong>Right of Way:</strong> Allow passage across property</li>
                    <li>• <strong>Conservation Easements:</strong> Restrict development</li>
                    <li>• <strong>Prescriptive Easements:</strong> Acquired through use</li>
                    <li>• <strong>Easements by Necessity:</strong> Required for access</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Common Liens</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Mortgage Liens:</strong> Secured by the property</li>
                    <li>• <strong>Tax Liens:</strong> Unpaid property taxes</li>
                    <li>• <strong>Mechanic's Liens:</strong> Unpaid construction work</li>
                    <li>• <strong>HOA Liens:</strong> Unpaid association fees</li>
                    <li>• <strong>Judgment Liens:</strong> Court-ordered debts</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contracts and Transactions Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Contracts and Real Estate Transactions
          </h2>
          
          <div className="space-y-12">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-red-600">
                Purchase Agreements and Contracts
              </h3>
              <p className="text-gray-600 mb-6">
                Real estate contracts are legally binding agreements that outline the terms and conditions of property transactions.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Essential Contract Elements</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Identified parties (buyer and seller)</li>
                    <li>• Property description and address</li>
                    <li>• Purchase price and payment terms</li>
                    <li>• Closing date and location</li>
                    <li>• Contingencies and conditions</li>
                    <li>• Signatures of all parties</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Common Contingencies</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Financing Contingency:</strong> Securing mortgage</li>
                    <li>• <strong>Inspection Contingency:</strong> Satisfactory inspection</li>
                    <li>• <strong>Appraisal Contingency:</strong> Property appraises at value</li>
                    <li>• <strong>Sale Contingency:</strong> Selling current home</li>
                    <li>• <strong>Title Contingency:</strong> Clear title</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-blue-600">
                Disclosure Requirements in Nevada
              </h3>
              <p className="text-gray-600 mb-6">
                Nevada law requires sellers to disclose certain information about the property to potential buyers.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Required Disclosures</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Property condition and defects</li>
                    <li>• Environmental hazards</li>
                    <li>• HOA information and fees</li>
                    <li>• Property tax information</li>
                    <li>• Utility costs and availability</li>
                    <li>• Known material facts</li>
                    <li>• Death on property (if recent)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Seller's Responsibilities</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Complete disclosure forms accurately</li>
                    <li>• Disclose known defects</li>
                    <li>• Provide HOA documents</li>
                    <li>• Update disclosures if conditions change</li>
                    <li>• Respond to buyer questions honestly</li>
                    <li>• Maintain records of disclosures</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-green-600">
                Closing Process and Legal Requirements
              </h3>
              <p className="text-gray-600 mb-6">
                The closing process involves several legal steps to transfer property ownership from seller to buyer.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Closing Requirements</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Final walkthrough inspection</li>
                    <li>• Title search and insurance</li>
                    <li>• Property survey (if required)</li>
                    <li>• Final loan approval</li>
                    <li>• Settlement statement review</li>
                    <li>• Document signing and notarization</li>
                    <li>• Recording of deed</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Legal Documents</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Deed:</strong> Transfers ownership</li>
                    <li>• <strong>Mortgage/Deed of Trust:</strong> Secures loan</li>
                    <li>• <strong>Promissory Note:</strong> Loan agreement</li>
                    <li>• <strong>Settlement Statement:</strong> Cost breakdown</li>
                    <li>• <strong>Affidavits:</strong> Legal declarations</li>
                    <li>• <strong>Title Insurance Policy:</strong> Protects ownership</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regulations and Compliance Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Regulations and Compliance
          </h2>
          
          <div className="space-y-12">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold mb-6 text-red-600">
                Zoning Laws and Land Use Regulations
              </h3>
              <p className="text-gray-600 mb-6">
                Zoning laws regulate how property can be used and developed in different areas of North Las Vegas.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Common Zoning Categories</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Residential:</strong> Single-family, multi-family homes</li>
                    <li>• <strong>Commercial:</strong> Retail, office, business uses</li>
                    <li>• <strong>Industrial:</strong> Manufacturing, warehouses</li>
                    <li>• <strong>Agricultural:</strong> Farming, ranching</li>
                    <li>• <strong>Mixed-Use:</strong> Combined residential/commercial</li>
                    <li>• <strong>Open Space:</strong> Parks, conservation areas</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Zoning Considerations</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Check zoning before purchasing</li>
                    <li>• Understand permitted uses</li>
                    <li>• Review setback requirements</li>
                    <li>• Check height restrictions</li>
                    <li>• Verify parking requirements</li>
                    <li>• Consider future zoning changes</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold mb-6 text-blue-600">
                Building Codes and Permits
              </h3>
              <p className="text-gray-600 mb-6">
                Building codes ensure safety and quality standards for construction and renovations in North Las Vegas.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Common Permit Requirements</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Building Permits:</strong> New construction, major renovations</li>
                    <li>• <strong>Electrical Permits:</strong> Wiring, electrical work</li>
                    <li>• <strong>Plumbing Permits:</strong> Pipe work, fixtures</li>
                    <li>• <strong>HVAC Permits:</strong> Heating, ventilation, air conditioning</li>
                    <li>• <strong>Roofing Permits:</strong> Roof replacement, repairs</li>
                    <li>• <strong>Demolition Permits:</strong> Structure removal</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Code Compliance</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Follow current building codes</li>
                    <li>• Schedule required inspections</li>
                    <li>• Obtain final approval</li>
                    <li>• Keep permit records</li>
                    <li>• Address code violations promptly</li>
                    <li>• Consider energy efficiency requirements</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold mb-6 text-green-600">
                Environmental Regulations
              </h3>
              <p className="text-gray-600 mb-6">
                Environmental regulations protect natural resources and ensure safe living conditions in North Las Vegas.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Environmental Considerations</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Water Rights:</strong> Nevada water law compliance</li>
                    <li>• <strong>Air Quality:</strong> Emissions and pollution control</li>
                    <li>• <strong>Waste Management:</strong> Proper disposal requirements</li>
                    <li>• <strong>Hazardous Materials:</strong> Asbestos, lead paint, mold</li>
                    <li>• <strong>Wildlife Protection:</strong> Endangered species habitat</li>
                    <li>• <strong>Desert Conservation:</strong> Native plant protection</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Compliance Requirements</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Environmental impact assessments</li>
                    <li>• Proper waste disposal methods</li>
                    <li>• Energy efficiency standards</li>
                    <li>• Water conservation measures</li>
                    <li>• Landscaping restrictions</li>
                    <li>• Renewable energy incentives</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Remedies and Disputes Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Legal Remedies and Dispute Resolution
          </h2>
          
          <div className="space-y-12">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-red-600">
                Common Real Estate Disputes
              </h3>
              <p className="text-gray-600 mb-6">
                Understanding common disputes and their resolution can help prevent legal issues in real estate transactions.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Contract Disputes</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Breach of Contract:</strong> Failure to perform obligations</li>
                    <li>• <strong>Specific Performance:</strong> Forcing contract completion</li>
                    <li>• <strong>Damages:</strong> Financial compensation</li>
                    <li>• <strong>Rescission:</strong> Canceling the contract</li>
                    <li>• <strong>Liquidated Damages:</strong> Pre-agreed penalties</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Property Disputes</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Boundary Disputes:</strong> Property line disagreements</li>
                    <li>• <strong>Easement Conflicts:</strong> Access right issues</li>
                    <li>• <strong>Nuisance Claims:</strong> Property use interference</li>
                    <li>• <strong>Title Disputes:</strong> Ownership conflicts</li>
                    <li>• <strong>HOA Disputes:</strong> Association rule violations</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-blue-600">
                Dispute Resolution Options
              </h3>
              <p className="text-gray-600 mb-6">
                Several options exist for resolving real estate disputes, from informal negotiation to formal litigation.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Alternative Dispute Resolution</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Negotiation:</strong> Direct communication</li>
                    <li>• <strong>Mediation:</strong> Neutral third-party facilitator</li>
                    <li>• <strong>Arbitration:</strong> Binding decision by arbitrator</li>
                    <li>• <strong>Collaborative Law:</strong> Team-based resolution</li>
                    <li>• <strong>Small Claims Court:</strong> Minor disputes</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Litigation Process</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Filing Complaint:</strong> Initiating legal action</li>
                    <li>• <strong>Discovery:</strong> Gathering evidence</li>
                    <li>• <strong>Pre-trial Motions:</strong> Legal arguments</li>
                    <li>• <strong>Trial:</strong> Court proceedings</li>
                    <li>• <strong>Appeal:</strong> Challenging decision</li>
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
            Legal Tips for Real Estate Transactions
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Get Professional Help
              </h3>
              <p className="text-gray-600">
                Consult with experienced real estate attorneys for complex transactions or when you have legal questions.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Read Everything Carefully
              </h3>
              <p className="text-gray-600">
                Never sign documents without reading and understanding them completely. Ask questions if anything is unclear.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Keep Good Records
              </h3>
              <p className="text-gray-600">
                Maintain copies of all documents, communications, and receipts related to your real estate transactions.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Understand Your Rights
              </h3>
              <p className="text-gray-600">
                Educate yourself about your rights and obligations as a property owner or buyer in Nevada.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Act Promptly
              </h3>
              <p className="text-gray-600">
                Address legal issues quickly to prevent them from becoming more serious and costly problems.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Consider Insurance
              </h3>
              <p className="text-gray-600">
                Title insurance and other coverage can protect you from financial losses due to legal issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Legal Assistance?
          </h2>
          <p className="text-xl mb-8">
            Connect with our network of experienced real estate attorneys and legal professionals in North Las Vegas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3">
              Contact Legal Professional
            </Button>
            <Button href="/resources" className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-3">
              View Legal Resources
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 