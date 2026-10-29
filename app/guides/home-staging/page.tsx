import { Metadata } from "next"
import { Button } from "../../../components/Button/Button"

export const metadata: Metadata = {
  title: "Home Staging Guide - North Las Vegas Real Estate",
  description: "Complete guide to staging your home for sale in North Las Vegas. Learn professional staging techniques to maximize your home's appeal and sale price.",
}

export default function HomeStagingGuidePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
            Home Staging Guide
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Transform your home into a buyer's dream with professional staging techniques. Learn how to showcase your North Las Vegas home's full potential.
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
              <h3 className="text-lg font-semibold text-purple-600">Preparation & Decluttering</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Decluttering Strategies</li>
                <li>• Deep Cleaning</li>
                <li>• Repairs & Maintenance</li>
                <li>• Curb Appeal</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-blue-600">Room-by-Room Staging</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Living Room</li>
                <li>• Kitchen & Dining</li>
                <li>• Bedrooms</li>
                <li>• Bathrooms</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-green-600">Professional Tips</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Color Psychology</li>
                <li>• Lighting & Ambiance</li>
                <li>• Furniture Arrangement</li>
                <li>• Final Touches</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Staging Matters Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Why Professional Staging Matters
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Higher Sale Price
              </h3>
              <p className="text-gray-600">
                Staged homes typically sell for 5-15% more than non-staged homes.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Faster Sale
              </h3>
              <p className="text-gray-600">
                Staged homes sell 73% faster than non-staged homes on average.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl">📸</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Better Photos
              </h3>
              <p className="text-gray-600">
                Professional staging creates stunning photos that attract more buyers online.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Emotional Connection
              </h3>
              <p className="text-gray-600">
                Staging helps buyers visualize themselves living in your home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Preparation and Decluttering Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Preparation and Decluttering: The Foundation
          </h2>
          
          <div className="space-y-12">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-purple-600">
                Step 1: Decluttering Strategies
              </h3>
              <p className="text-gray-600 mb-6">
                Decluttering is the most important first step in staging. It creates space, reduces visual noise, and helps buyers focus on your home's features.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">What to Remove</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Personal photos and memorabilia</li>
                    <li>• Excess furniture and decor</li>
                    <li>• Cluttered countertops and surfaces</li>
                    <li>• Overstuffed closets and storage</li>
                    <li>• Outdated or worn items</li>
                    <li>• Pet items and toys</li>
                    <li>• Seasonal decorations</li>
                    <li>• Excessive books and magazines</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Decluttering Process</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Start with one room at a time</li>
                    <li>• Use the "three-box" method: keep, donate, trash</li>
                    <li>• Rent storage if needed</li>
                    <li>• Focus on creating open, airy spaces</li>
                    <li>• Keep only essential items visible</li>
                    <li>• Organize remaining items neatly</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-blue-600">
                Step 2: Deep Cleaning and Maintenance
              </h3>
              <p className="text-gray-600 mb-6">
                A spotless home shows buyers that the property has been well-maintained and cared for.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Interior Cleaning</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Deep clean all surfaces and floors</li>
                    <li>• Wash windows and mirrors</li>
                    <li>• Clean carpets and upholstery</li>
                    <li>• Dust all surfaces and light fixtures</li>
                    <li>• Clean appliances inside and out</li>
                    <li>• Freshen up bathrooms thoroughly</li>
                    <li>• Remove any odors or stains</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Exterior and Curb Appeal</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Power wash siding and driveway</li>
                    <li>• Clean gutters and downspouts</li>
                    <li>• Maintain landscaping and lawn</li>
                    <li>• Paint or touch up exterior trim</li>
                    <li>• Update front door and hardware</li>
                    <li>• Add fresh mulch and plants</li>
                    <li>• Ensure outdoor lighting works</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-green-600">
                Step 3: Repairs and Updates
              </h3>
              <p className="text-gray-600 mb-6">
                Address any obvious repairs or updates that could turn off potential buyers or reduce your home's value.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Essential Repairs</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Fix leaky faucets and plumbing</li>
                    <li>• Replace broken fixtures</li>
                    <li>• Repair damaged walls or ceilings</li>
                    <li>• Fix squeaky doors and windows</li>
                    <li>• Replace burned-out light bulbs</li>
                    <li>• Repair or replace damaged flooring</li>
                    <li>• Address any safety issues</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Value-Adding Updates</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Fresh paint in neutral colors</li>
                    <li>• Update cabinet hardware</li>
                    <li>• Replace outdated light fixtures</li>
                    <li>• Update switch plates and outlets</li>
                    <li>• Replace worn doorknobs</li>
                    <li>• Add modern window treatments</li>
                    <li>• Update bathroom fixtures</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Room-by-Room Staging Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Room-by-Room Staging Guide
          </h2>
          
          <div className="space-y-12">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold mb-6 text-purple-600">
                Living Room Staging
              </h3>
              <p className="text-gray-600 mb-6">
                The living room is often the first impression buyers get of your home. Make it welcoming and functional.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Furniture Arrangement</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Create conversation areas</li>
                    <li>• Arrange furniture to highlight focal points</li>
                    <li>• Ensure traffic flow is smooth</li>
                    <li>• Use appropriately sized furniture</li>
                    <li>• Leave some breathing room</li>
                    <li>• Highlight architectural features</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Accessories and Decor</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Add fresh flowers or plants</li>
                    <li>• Use neutral throw pillows</li>
                    <li>• Display art that's not too personal</li>
                    <li>• Add ambient lighting</li>
                    <li>• Include a coffee table book</li>
                    <li>• Keep surfaces clean and minimal</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold mb-6 text-blue-600">
                Kitchen and Dining Area Staging
              </h3>
              <p className="text-gray-600 mb-6">
                Kitchens are often the heart of the home and a major selling point. Make yours shine.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Kitchen Staging</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Clear all countertops except essentials</li>
                    <li>• Display a bowl of fresh fruit</li>
                    <li>• Add a small plant or herb garden</li>
                    <li>• Organize cabinets and drawers</li>
                    <li>• Clean appliances thoroughly</li>
                    <li>• Update cabinet hardware if needed</li>
                    <li>• Ensure good lighting</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Dining Area</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Set a simple, elegant table</li>
                    <li>• Use neutral placemats and napkins</li>
                    <li>• Add a centerpiece (flowers or candles)</li>
                    <li>• Ensure chairs are clean and in good condition</li>
                    <li>• Remove any extra furniture</li>
                    <li>• Highlight any special features</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold mb-6 text-green-600">
                Bedroom Staging
              </h3>
              <p className="text-gray-600 mb-6">
                Bedrooms should feel peaceful and spacious, allowing buyers to imagine themselves sleeping there.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Master Bedroom</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Use neutral bedding and pillows</li>
                    <li>• Make the bed hotel-style</li>
                    <li>• Add bedside lamps for ambiance</li>
                    <li>• Clear nightstands of personal items</li>
                    <li>• Organize closet space</li>
                    <li>• Add a small plant or flowers</li>
                    <li>• Ensure good lighting</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Other Bedrooms</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Stage as guest rooms or home offices</li>
                    <li>• Use appropriate furniture for room size</li>
                    <li>• Keep decor neutral and minimal</li>
                    <li>• Highlight room versatility</li>
                    <li>• Ensure closets are organized</li>
                    <li>• Add appropriate lighting</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold mb-6 text-orange-600">
                Bathroom Staging
              </h3>
              <p className="text-gray-600 mb-6">
                Bathrooms should feel clean, modern, and spa-like. Attention to detail is crucial.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Essential Elements</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Deep clean all surfaces</li>
                    <li>• Replace shower curtains if needed</li>
                    <li>• Add fresh, fluffy towels</li>
                    <li>• Display luxury toiletries</li>
                    <li>• Add a small plant or flowers</li>
                    <li>• Ensure good lighting</li>
                    <li>• Fix any plumbing issues</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Spa-Like Touches</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Use neutral, calming colors</li>
                    <li>• Add scented candles or diffusers</li>
                    <li>• Display elegant soap dispensers</li>
                    <li>• Organize storage spaces</li>
                    <li>• Update fixtures if outdated</li>
                    <li>• Ensure ventilation is good</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Staging Tips Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Professional Staging Tips and Techniques
          </h2>
          
          <div className="space-y-12">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-purple-600">
                Color Psychology and Neutral Palettes
              </h3>
              <p className="text-gray-600 mb-6">
                Color choices can significantly impact how buyers perceive your home. Neutral colors appeal to the widest audience.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Recommended Colors</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Soft whites and off-whites</li>
                    <li>• Light grays and beiges</li>
                    <li>• Warm taupe and greige</li>
                    <li>• Pale blues and greens</li>
                    <li>• Cream and ivory tones</li>
                    <li>• Light, warm grays</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Color Psychology</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• White: Clean, spacious, modern</li>
                    <li>• Gray: Sophisticated, neutral</li>
                    <li>• Beige: Warm, inviting, classic</li>
                    <li>• Blue: Calming, trustworthy</li>
                    <li>• Green: Natural, peaceful</li>
                    <li>• Avoid: Bright, bold, or personal colors</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-blue-600">
                Lighting and Ambiance
              </h3>
              <p className="text-gray-600 mb-6">
                Proper lighting creates warmth and makes spaces feel larger and more inviting.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Lighting Strategies</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Maximize natural light</li>
                    <li>• Use layered lighting (ambient, task, accent)</li>
                    <li>• Replace outdated fixtures</li>
                    <li>• Add table and floor lamps</li>
                    <li>• Use warm, soft light bulbs</li>
                    <li>• Clean windows and light fixtures</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Creating Ambiance</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Use dimmers where possible</li>
                    <li>• Add candles or diffusers</li>
                    <li>• Play soft background music</li>
                    <li>• Control temperature and humidity</li>
                    <li>• Ensure good air circulation</li>
                    <li>• Create cozy seating areas</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-green-600">
                Furniture Arrangement and Scale
              </h3>
              <p className="text-gray-600 mb-6">
                Proper furniture placement can make rooms feel larger and more functional.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Arrangement Principles</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Create focal points</li>
                    <li>• Ensure traffic flow</li>
                    <li>• Use appropriate scale</li>
                    <li>• Balance visual weight</li>
                    <li>• Group furniture logically</li>
                    <li>• Leave breathing room</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Scale and Proportion</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Match furniture to room size</li>
                    <li>• Use appropriately sized rugs</li>
                    <li>• Choose proportional accessories</li>
                    <li>• Avoid oversized pieces</li>
                    <li>• Consider ceiling height</li>
                    <li>• Balance large and small elements</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* North Las Vegas Specific Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Staging for North Las Vegas Buyers
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-semibold mb-4 text-purple-600">
                Local Buyer Preferences
              </h3>
              <p className="text-gray-600 mb-4">
                Understanding what North Las Vegas buyers are looking for can help you stage more effectively.
              </p>
              <div className="space-y-2 text-gray-600">
                <p>• <strong>Spacious Layouts:</strong> Open floor plans with extra bedrooms</p>
                <p>• <strong>Modern Amenities:</strong> Updated kitchens and baths</p>
                <p>• <strong>Outdoor Living:</strong> Patios, yards, and outdoor spaces</p>
                <p>• <strong>Energy Efficiency:</strong> Smart home features</p>
                <p>• <strong>Storage Space:</strong> Closets and garage organization</p>
                <p>• <strong>Low Maintenance:</strong> Easy-care landscaping</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">
                Climate Considerations
              </h3>
              <p className="text-gray-600 mb-4">
                North Las Vegas' desert climate influences buyer preferences and staging strategies.
              </p>
              <div className="space-y-2 text-gray-600">
                <p>• <strong>Cooling Systems:</strong> Highlight efficient AC</p>
                <p>• <strong>Window Treatments:</strong> Energy-efficient options</p>
                <p>• <strong>Indoor-Outdoor Flow:</strong> Patio connections</p>
                <p>• <strong>Drought-Resistant Landscaping:</strong> Low-maintenance yards</p>
                <p>• <strong>Shade and Shelter:</strong> Covered outdoor areas</p>
                <p>• <strong>Water Features:</strong> Pools and fountains</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Touches Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Final Touches and Show Day Preparation
          </h2>
          
          <div className="space-y-12">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-green-600">
                Pre-Showing Checklist
              </h3>
              <p className="text-gray-600 mb-6">
                Follow this checklist before every showing to ensure your home looks its best.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">General Preparation</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Turn on all lights</li>
                    <li>• Open curtains and blinds</li>
                    <li>• Set thermostat to comfortable temperature</li>
                    <li>• Remove pets and their items</li>
                    <li>• Hide personal items and valuables</li>
                    <li>• Ensure all rooms are accessible</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Sensory Appeal</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Light scented candles or use diffusers</li>
                    <li>• Play soft background music</li>
                    <li>• Bake cookies or use vanilla extract</li>
                    <li>• Ensure fresh air circulation</li>
                    <li>• Add fresh flowers or plants</li>
                    <li>• Clean and deodorize thoroughly</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-blue-600">
                Professional vs. DIY Staging
              </h3>
              <p className="text-gray-600 mb-6">
                Consider whether professional staging services are worth the investment for your situation.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Professional Staging</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Expert design knowledge</li>
                    <li>• Access to professional furniture</li>
                    <li>• Objective perspective</li>
                    <li>• Time-saving convenience</li>
                    <li>• Higher potential return</li>
                    <li>• Professional photography coordination</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">DIY Staging</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Cost-effective option</li>
                    <li>• Personal touch and knowledge</li>
                    <li>• Flexibility in timing</li>
                    <li>• Learning experience</li>
                    <li>• Use of existing items</li>
                    <li>• Control over process</li>
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
            Pro Staging Tips for Maximum Impact
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Start with a Plan
              </h3>
              <p className="text-gray-600">
                Create a staging plan before you begin. Focus on the most important rooms first: living room, kitchen, and master bedroom.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Think Like a Buyer
              </h3>
              <p className="text-gray-600">
                Walk through your home as if you're seeing it for the first time. What would you notice? What would concern you?
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Focus on Function
              </h3>
              <p className="text-gray-600">
                Every room should have a clear purpose. Help buyers understand how they would use each space.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Keep It Simple
              </h3>
              <p className="text-gray-600">
                Less is more in staging. Too much furniture or decor can make spaces feel cramped and overwhelming.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Maintain Consistency
              </h3>
              <p className="text-gray-600">
                Use a consistent color palette and style throughout your home to create a cohesive feel.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Stay Flexible
              </h3>
              <p className="text-gray-600">
                Be prepared to adjust your staging based on feedback from showings and market response.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Stage Your Home for Success?
          </h2>
          <p className="text-xl mb-8">
            Connect with our staging experts and get professional guidance to maximize your home's appeal and sale price.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3">
              Get Staging Consultation
            </Button>
            <Button href="/valuation" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3">
              Get Home Valuation
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 