import { Metadata } from "next"
import { CalendlyInline } from "../../components/CalendlyInline"
import { calendlyUrl } from "../../lib/calendly"
import { Button } from "components/Button/Button"

export const metadata: Metadata = {
  title: "Home Valuation | North Las Vegas Property Values",
  description: "Get instant home valuations for North Las Vegas properties. Accurate market analysis with Homebot technology and comprehensive neighborhood insights.",
  keywords: "home valuation, property value, North Las Vegas real estate, market analysis",
}

export default function ValuationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Get Your Home's
              <span className="block text-blue-200">True Market Value</span>
            </h1>
            <p className="mb-8 max-w-3xl mx-auto text-xl text-blue-100">
              Discover what your North Las Vegas property is really worth with our advanced 
              valuation technology powered by Homebot and comprehensive market analysis.
            </p>
          </div>
        </div>
      </section>

      {/* Valuation Form Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Your Home's Value from Recent Sales
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Book a listing consultation and get your value from recent comparable sales in your
              subdivision, not an automated estimate.
            </p>
          </div>

          {/* Valuation Form */}
          <div>
            <p className="text-gray-600 mb-4 text-center">Pick a time. Add your address in the booking notes so the comps are ready when we talk.</p>
            <CalendlyInline url={calendlyUrl("listing", "inline", "/valuation")} />
          </div>
        </div>
      </section>

      {/* Sample Valuation Results */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Sample Valuation Report
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what you'll get with our comprehensive valuation analysis
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Homebot Valuation Widget Container */}
            <div className="lg:col-span-2">
              <div 
                id="homebot-valuation-container"
                className="bg-white rounded-lg shadow-lg border border-gray-200 p-6"
                style={{ 
                  minHeight: '480px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                }}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Property Valuation</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                    <span className="text-lg font-medium text-gray-900">Estimated Value</span>
                    <span className="text-3xl font-bold text-blue-600">$425,000</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">+$15,000</div>
                      <div className="text-sm text-gray-600">Value Increase</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">3.7%</div>
                      <div className="text-sm text-gray-600">Annual Growth</div>
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Market Analysis</h4>
                    <p className="text-sm text-gray-600">
                      Your property is valued in the top 25% of similar homes in the area. 
                      Recent comparable sales support this valuation range.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CloudCMA Widget Container */}
            <div className="lg:col-span-1">
              <div 
                id="cloudcma-widget-container"
                className="bg-white rounded-lg shadow-lg border border-gray-200 p-6"
                style={{ 
                  minHeight: '480px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                }}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Comparable Sales</h3>
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-3">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-medium text-gray-900">1234 Main St</span>
                      <span className="text-green-600 font-semibold">$430,000</span>
                    </div>
                    <p className="text-sm text-gray-600">3 bed • 2 bath • 1,850 sq ft</p>
                    <p className="text-xs text-gray-500">Sold 2 weeks ago</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-3">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-medium text-gray-900">5678 Oak Ave</span>
                      <span className="text-green-600 font-semibold">$415,000</span>
                    </div>
                    <p className="text-sm text-gray-600">3 bed • 2 bath • 1,800 sq ft</p>
                    <p className="text-xs text-gray-500">Sold 1 month ago</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-3">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-medium text-gray-900">9012 Pine St</span>
                      <span className="text-green-600 font-semibold">$440,000</span>
                    </div>
                    <p className="text-sm text-gray-600">3 bed • 2.5 bath • 1,900 sq ft</p>
                    <p className="text-xs text-gray-500">Sold 3 weeks ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Valuation Service?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get the most accurate property valuations with our advanced technology and local expertise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-Time Market Data</h3>
              <p className="text-gray-600">
                Our valuations use the latest market data and comparable sales to ensure accuracy
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Instant Results</h3>
              <p className="text-gray-600">
                Get your property valuation in seconds with our advanced AI-powered analysis
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Neighborhood Insights</h3>
              <p className="text-gray-600">
                Comprehensive analysis including schools, amenities, and market trends
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Discover Your Home's True Value?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get an instant, accurate valuation of your North Las Vegas property. 
            No commitment required, completely free.
          </p>
          <Button href="/valuation" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
            Get Your Free Valuation
          </Button>
        </div>
      </section>

      {/* Homebot Widget Script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // Homebot Valuation Widget with Shadow DOM
            (function() {
              const HOMEBOT_API_TOKEN = process.env.HOMEBOT_API_TOKEN;
              
              if (typeof window !== 'undefined') {
                // Create Shadow DOM container for Homebot widget
                const container = document.getElementById('homebot-valuation-container');
                if (container) {
                  const shadow = container.attachShadow({ mode: 'open' });
                  
                  // Add styles to prevent CSS conflicts
                  const style = document.createElement('style');
                  style.textContent = \`
                    :host {
                      display: block;
                      min-height: 480px;
                      z-index: 1000;
                    }
                    .homebot-widget {
                      width: 100%;
                      height: 100%;
                      border: none;
                    }
                  \`;
                  shadow.appendChild(style);
                  
                  // Create iframe for Homebot widget
                  const iframe = document.createElement('iframe');
                  iframe.src = \`https://homebot.com/widget/valuation?token=\${HOMEBOT_API_TOKEN}\`;
                  iframe.className = 'homebot-widget';
                  iframe.setAttribute('loading', 'lazy');
                  shadow.appendChild(iframe);
                }
              }
            })();
          `
        }}
      />

      {/* CloudCMA Widget Script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // CloudCMA React wrapper with lazy loading
            (function() {
              const CLOUDCMA_API_KEY = process.env.CLOUDCMA_API_KEY;
              
              if (typeof window !== 'undefined') {
                // Lazy load CloudCMA widget at 50% viewport visibility
                const observer = new IntersectionObserver((entries) => {
                  entries.forEach(entry => {
                    if (entry.isIntersecting) {
                      loadCloudCMAWidget();
                      observer.unobserve(entry.target);
                    }
                  });
                }, { threshold: 0.5 });
                
                const container = document.getElementById('cloudcma-widget-container');
                if (container) {
                  observer.observe(container);
                }
                
                function loadCloudCMAWidget() {
                  // Load CloudCMA React wrapper component
                  const script = document.createElement('script');
                  script.src = 'https://cdn.cloudcma.com/react-wrapper.js';
                  script.integrity = 'sha384-CLOUDCMA_INTEGRITY_HASH';
                  script.crossOrigin = 'anonymous';
                  script.onload = function() {
                    if (window.CloudCMA) {
                      window.CloudCMA.init({
                        apiKey: CLOUDCMA_API_KEY,
                        container: '#cloudcma-widget-container',
                        type: 'comparable-sales'
                      });
                    }
                  };
                  document.head.appendChild(script);
                }
              }
            })();
          `
        }}
      />

      {/* Percy.ai Autocomplete Script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // Percy.ai HVS-Autocomplete for address input
            (function() {
              const PERCY_API_KEY = process.env.PERCY_API_KEY;
              
              if (typeof window !== 'undefined') {
                let debounceTimer;
                const addressInput = document.getElementById('property-address');
                const autocompleteContainer = document.getElementById('address-autocomplete');
                
                if (addressInput) {
                  addressInput.addEventListener('input', function(e) {
                    clearTimeout(debounceTimer);
                    debounceTimer = setTimeout(() => {
                      const query = e.target.value;
                      if (query.length >= 2) {
                        performAddressSearch(query);
                      } else {
                        autocompleteContainer.classList.add('hidden');
                      }
                    }, 1500); // 1.5-second debounce
                  });
                }
                
                function performAddressSearch(query) {
                  // Progressive data fetching: basic details on initial load
                  console.log('Performing address search for:', query);
                  
                  // Show loading state
                  autocompleteContainer.classList.remove('hidden');
                  autocompleteContainer.innerHTML = '<div class="p-3 text-gray-500">Loading...</div>';
                  
                  // Simulate API call with progressive data
                  setTimeout(() => {
                    // Basic address suggestions
                    const suggestions = [
                      { address: query + ' St, North Las Vegas, NV 89030', type: 'address' },
                      { address: query + ' Ave, North Las Vegas, NV 89031', type: 'address' },
                      { address: query + ' Dr, North Las Vegas, NV 89032', type: 'address' }
                    ];
                    
                    displaySuggestions(suggestions);
                  }, 500);
                }
                
                function displaySuggestions(suggestions) {
                  autocompleteContainer.innerHTML = suggestions.map(suggestion => 
                    \`<div class="p-3 hover:bg-gray-100 cursor-pointer border-b border-gray-200 last:border-b-0">
                      <div class="font-medium">\${suggestion.address}</div>
                      <div class="text-sm text-gray-500">\${suggestion.type}</div>
                    </div>\`
                  ).join('');
                }
              }
            })();
          `
        }}
      />
    </div>
  )
} 