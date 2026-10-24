import { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Contact Dr. Jan Duffy",
  description:
    "Book a free 30-minute buyer consultation with Dr. Jan Duffy, North Las Vegas REALTOR® with Berkshire Hathaway HomeServices Nevada Properties.",
}

const BUYER_CONSULT_URL = "https://calendly.com/drjanduffy/buyer-consultation-30-min"
const LISTING_CONSULT_URL = "https://calendly.com/drjanduffy/listing-consultation"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">Talk With Dr. Jan Duffy</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Pick a time that works for you. Real North Las Vegas numbers, no pressure.
          </p>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Book a Free Buyer Consultation</h2>
              <p className="text-gray-600 mb-6">
                30 minutes by phone or Zoom. We cover what you want, what is selling in your target
                neighborhood this week, and your clear next step.
              </p>
              <div
                className="calendly-inline-widget rounded-lg border border-gray-200"
                data-url={`${BUYER_CONSULT_URL}?hide_gdpr_banner=1`}
                style={{ minWidth: "320px", height: "700px" }}
              />
              <p className="text-sm text-gray-500 mt-3">
                Calendar not loading?{" "}
                <a href={BUYER_CONSULT_URL} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
                  Book directly on Calendly
                </a>
                .
              </p>
            </div>

            <aside className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Selling a home?</h3>
                <p className="text-gray-600 mb-4">
                  Get your home&apos;s true market value with recent comparable sales from your subdivision.
                </p>
                <a
                  href={LISTING_CONSULT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3 rounded-md"
                >
                  Book a Listing Consultation
                </a>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Your Agent</h3>
                <p className="font-medium text-gray-900">Dr. Jan Duffy, REALTOR®</p>
                <p className="text-gray-600">Berkshire Hathaway HomeServices Nevada Properties</p>
                <p className="text-gray-600">Nevada License S.0197614.LLC</p>
                <p className="text-gray-600 mt-3">
                  8850 W. Sunset Rd, Suite 200
                  <br />
                  Las Vegas, NV 89148
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">What areas do you serve?</h3>
              <p className="text-gray-600">
                North Las Vegas, including Aliante, plus the surrounding Las Vegas Valley.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Do you offer virtual consultations?</h3>
              <p className="text-gray-600">Yes. Every consultation can be done by phone or Zoom.</p>
            </div>
          </div>
        </div>
      </section>

      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
    </div>
  )
}
