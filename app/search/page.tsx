import { Metadata } from "next"
import { Button } from "components/Button/Button"

export const metadata: Metadata = {
  title: "Search North Las Vegas Homes | Property Search",
  description: "Search for homes in North Las Vegas with advanced filters, instant valuations, and neighborhood insights. Find your perfect property today.",
  keywords: "North Las Vegas property search, home search, real estate listings, property filters",
}

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Search North Las Vegas Homes</h1>
          
          {/* Advanced Search Form */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Location Search with Percy.ai Autocomplete */}
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="location"
                    name="location"
                    placeholder="Address, neighborhood, or zip"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    aria-describedby="location-autocomplete"
                    suppressHydrationWarning
                  />
                  <div id="location-autocomplete" className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg hidden">
                    {/* Percy.ai HVS-Autocomplete will be loaded here */}
                  </div>
                </div>
              </div>

              {/* Price Range */}
              <div>
                <label htmlFor="min-price" className="block text-sm font-medium text-gray-700 mb-2">
                  Min Price
                </label>
                <input
                  type="number"
                  id="min-price"
                  name="min-price"
                  placeholder="$200,000"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  suppressHydrationWarning
                />
              </div>

              <div>
                <label htmlFor="max-price" className="block text-sm font-medium text-gray-700 mb-2">
                  Max Price
                </label>
                <input
                  type="number"
                  id="max-price"
                  name="max-price"
                  placeholder="$800,000"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  suppressHydrationWarning
                />
              </div>

              <div>
                <label htmlFor="property-type" className="block text-sm font-medium text-gray-700 mb-2">
                  Property Type
                </label>
                <select
                  id="property-type"
                  name="property-type"
                  aria-label="Select property type"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  suppressHydrationWarning
                >
                  <option value="">Any Type</option>
                  <option value="single-family">Single Family</option>
                  <option value="townhouse">Townhouse</option>
                  <option value="condo">Condo</option>
                  <option value="multi-family">Multi-Family</option>
                </select>
              </div>
            </div>

            {/* Additional Filters */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
              <div>
                <label htmlFor="bedrooms" className="block text-sm font-medium text-gray-700 mb-2">
                  Bedrooms
                </label>
                <select
                  id="bedrooms"
                  name="bedrooms"
                  aria-label="Select number of bedrooms"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  suppressHydrationWarning
                >
                  <option value="">Any</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                  <option value="5">5+</option>
                </select>
              </div>

              <div>
                <label htmlFor="bathrooms" className="block text-sm font-medium text-gray-700 mb-2">
                  Bathrooms
                </label>
                <select
                  id="bathrooms"
                  name="bathrooms"
                  aria-label="Select number of bathrooms"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  suppressHydrationWarning
                >
                  <option value="">Any</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                </select>
              </div>

              <div>
                <label htmlFor="square-feet" className="block text-sm font-medium text-gray-700 mb-2">
                  Min Sq Ft
                </label>
                <input
                  type="number"
                  id="square-feet"
                  name="square-feet"
                  placeholder="1,000"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  suppressHydrationWarning
                />
              </div>

              <div className="flex items-end">
                <Button 
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2"
                >
                  Search Properties
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Results */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Refine Search</h3>
              
              {/* Price Range Slider */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="100000"
                    max="1000000"
                    step="25000"
                    className="w-full"
                    aria-label="Price range slider"
                    suppressHydrationWarning
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>$100K</span>
                    <span>$1M</span>
                  </div>
                </div>
              </div>

              {/* Property Features */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Property Features</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" suppressHydrationWarning />
                    <span className="ml-2 text-sm text-gray-700">Pool</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" suppressHydrationWarning />
                    <span className="ml-2 text-sm text-gray-700">Garage</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" suppressHydrationWarning />
                    <span className="ml-2 text-sm text-gray-700">Updated Kitchen</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" suppressHydrationWarning />
                    <span className="ml-2 text-sm text-gray-700">New Construction</span>
                  </label>
                </div>
              </div>

                             {/* School District */}
               <div className="mb-6">
                 <h4 className="text-sm font-medium text-gray-700 mb-3">School District</h4>
                 <select 
                   className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                   aria-label="Select school district"
                   suppressHydrationWarning
                 >
                   <option value="">Any District</option>
                   <option value="ccsd">Clark County School District</option>
                   <option value="private">Private Schools</option>
                 </select>
               </div>

              {/* Market Status */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Market Status</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" defaultChecked className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" suppressHydrationWarning />
                    <span className="ml-2 text-sm text-gray-700">For Sale</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" suppressHydrationWarning />
                    <span className="ml-2 text-sm text-gray-700">Pending</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" suppressHydrationWarning />
                    <span className="ml-2 text-sm text-gray-700">Recently Sold</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Results Grid */}
          <div className="lg:w-3/4">
            {/* Results Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Properties Found</h2>
                <p className="text-gray-600">Showing 1-12 of 156 properties in North Las Vegas</p>
              </div>
              <div className="flex items-center space-x-2 mt-4 sm:mt-0">
                <label htmlFor="sort" className="text-sm font-medium text-gray-700">Sort by:</label>
                <select
                  id="sort"
                  name="sort"
                  aria-label="Sort properties"
                  className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  suppressHydrationWarning
                >
                  <option value="newest">Newest First</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="sqft">Square Footage</option>
                </select>
              </div>
            </div>

            {/* Property Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {/* Property Card 1 */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative">
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">Property Image</span>
                  </div>
                  <div className="absolute top-2 right-2">
                    <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">New</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Beautiful 3BR Home</h3>
                  <p className="text-2xl font-bold text-blue-600 mb-2">$425,000</p>
                  <p className="text-gray-600 text-sm mb-3">1234 Main St, North Las Vegas, NV 89030</p>
                  <div className="flex justify-between text-sm text-gray-500 mb-4">
                    <span>1,850 sq ft</span>
                    <span>3 bed • 2 bath</span>
                  </div>
                  <div className="flex space-x-2">
                    <Button href="/property/1" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm py-2">
                      View Details
                    </Button>
                    <Button href="/valuation/1" intent="secondary" className="px-3 py-2 text-sm border border-gray-300 hover:bg-gray-50">
                      Get Valuation
                    </Button>
                  </div>
                </div>
              </div>

              {/* Property Card 2 */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative">
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">Property Image</span>
                  </div>
                  <div className="absolute top-2 right-2">
                    <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-medium">Open House</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Modern Townhouse</h3>
                  <p className="text-2xl font-bold text-blue-600 mb-2">$350,000</p>
                  <p className="text-gray-600 text-sm mb-3">5678 Oak Ave, North Las Vegas, NV 89031</p>
                  <div className="flex justify-between text-sm text-gray-500 mb-4">
                    <span>1,600 sq ft</span>
                    <span>2 bed • 2.5 bath</span>
                  </div>
                  <div className="flex space-x-2">
                    <Button href="/property/2" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm py-2">
                      View Details
                    </Button>
                    <Button href="/valuation/2" intent="secondary" className="px-3 py-2 text-sm border border-gray-300 hover:bg-gray-50">
                      Get Valuation
                    </Button>
                  </div>
                </div>
              </div>

              {/* Property Card 3 */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative">
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">Property Image</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Spacious Family Home</h3>
                  <p className="text-2xl font-bold text-blue-600 mb-2">$575,000</p>
                  <p className="text-gray-600 text-sm mb-3">9012 Pine St, North Las Vegas, NV 89032</p>
                  <div className="flex justify-between text-sm text-gray-500 mb-4">
                    <span>2,200 sq ft</span>
                    <span>4 bed • 3 bath</span>
                  </div>
                  <div className="flex space-x-2">
                    <Button href="/property/3" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm py-2">
                      View Details
                    </Button>
                    <Button href="/valuation/3" intent="secondary" className="px-3 py-2 text-sm border border-gray-300 hover:bg-gray-50">
                      Get Valuation
                    </Button>
                  </div>
                </div>
              </div>

              {/* Property Card 4 */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative">
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">Property Image</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Cozy Starter Home</h3>
                  <p className="text-2xl font-bold text-blue-600 mb-2">$285,000</p>
                  <p className="text-gray-600 text-sm mb-3">3456 Elm Dr, North Las Vegas, NV 89030</p>
                  <div className="flex justify-between text-sm text-gray-500 mb-4">
                    <span>1,200 sq ft</span>
                    <span>2 bed • 1 bath</span>
                  </div>
                  <div className="flex space-x-2">
                    <Button href="/property/4" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm py-2">
                      View Details
                    </Button>
                    <Button href="/valuation/4" intent="secondary" className="px-3 py-2 text-sm border border-gray-300 hover:bg-gray-50">
                      Get Valuation
                    </Button>
                  </div>
                </div>
              </div>

              {/* Property Card 5 */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative">
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">Property Image</span>
                  </div>
                  <div className="absolute top-2 right-2">
                    <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">Price Reduced</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Luxury Estate</h3>
                  <p className="text-2xl font-bold text-blue-600 mb-2">$850,000</p>
                  <p className="text-gray-600 text-sm mb-3">7890 Luxury Ln, North Las Vegas, NV 89031</p>
                  <div className="flex justify-between text-sm text-gray-500 mb-4">
                    <span>3,500 sq ft</span>
                    <span>5 bed • 4 bath</span>
                  </div>
                  <div className="flex space-x-2">
                    <Button href="/property/5" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm py-2">
                      View Details
                    </Button>
                    <Button href="/valuation/5" intent="secondary" className="px-3 py-2 text-sm border border-gray-300 hover:bg-gray-50">
                      Get Valuation
                    </Button>
                  </div>
                </div>
              </div>

              {/* Property Card 6 */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative">
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">Property Image</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Investment Property</h3>
                  <p className="text-2xl font-bold text-blue-600 mb-2">$320,000</p>
                  <p className="text-gray-600 text-sm mb-3">2345 Investment Blvd, North Las Vegas, NV 89032</p>
                  <div className="flex justify-between text-sm text-gray-500 mb-4">
                    <span>1,800 sq ft</span>
                    <span>3 bed • 2 bath</span>
                  </div>
                  <div className="flex space-x-2">
                    <Button href="/property/6" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm py-2">
                      View Details
                    </Button>
                    <Button href="/valuation/6" intent="secondary" className="px-3 py-2 text-sm border border-gray-300 hover:bg-gray-50">
                      Get Valuation
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <nav className="flex items-center space-x-2">
                <Button intent="secondary" className="px-3 py-2 text-sm border border-gray-300 hover:bg-gray-50">
                  Previous
                </Button>
                <Button className="px-3 py-2 text-sm bg-blue-600 text-white">1</Button>
                <Button intent="secondary" className="px-3 py-2 text-sm border border-gray-300 hover:bg-gray-50">2</Button>
                <Button intent="secondary" className="px-3 py-2 text-sm border border-gray-300 hover:bg-gray-50">3</Button>
                <span className="px-3 py-2 text-sm text-gray-500">...</span>
                <Button intent="secondary" className="px-3 py-2 text-sm border border-gray-300 hover:bg-gray-50">13</Button>
                <Button intent="secondary" className="px-3 py-2 text-sm border border-gray-300 hover:bg-gray-50">
                  Next
                </Button>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* Homebot Valuation Widget Container */}
      <div 
        id="homebot-valuation-widget"
        className="fixed bottom-4 right-4 z-50"
        style={{ 
          minHeight: '480px',
          zIndex: 1000,
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
        }}
      >
        {/* Homebot widget will be loaded here with Shadow DOM */}
      </div>

      {/* RealScout Integration Script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // RealScout v3 API integration
            (function() {
              const REALSCOUT_API_TOKEN = process.env.REALSCOUT_API_TOKEN;
              
              // Initialize RealScout components
              if (typeof window !== 'undefined') {
                // Load RealScout scripts with integrity hashes
                const script = document.createElement('script');
                script.src = 'https://cdn.realscout.com/v3/widgets.js';
                script.integrity = 'sha384-REALSCOUT_INTEGRITY_HASH';
                script.crossOrigin = 'anonymous';
                script.onload = function() {
                  // Initialize RealScout search components
                  if (window.RealScout) {
                    window.RealScout.init({
                      apiToken: REALSCOUT_API_TOKEN,
                      container: '#realscout-search-container'
                    });
                  }
                };
                document.head.appendChild(script);
              }
            })();
          `
        }}
      />

      {/* Percy.ai HVS-Autocomplete Script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // Percy.ai HVS-Autocomplete with tiered search
            (function() {
              const PERCY_API_KEY = process.env.PERCY_API_KEY;
              
              if (typeof window !== 'undefined') {
                let debounceTimer;
                const locationInput = document.getElementById('location');
                const autocompleteContainer = document.getElementById('location-autocomplete');
                
                if (locationInput) {
                  locationInput.addEventListener('input', function(e) {
                    clearTimeout(debounceTimer);
                    debounceTimer = setTimeout(() => {
                      const query = e.target.value;
                      if (query.length >= 2) {
                        // Implement tiered search: address → neighborhood → city
                        performTieredSearch(query);
                      } else {
                        autocompleteContainer.classList.add('hidden');
                      }
                    }, 1500); // 1.5-second debounce
                  });
                }
                
                function performTieredSearch(query) {
                  // Implementation for tiered search functionality
                  console.log('Performing tiered search for:', query);
                }
              }
            })();
          `
        }}
      />
    </div>
  )
} 