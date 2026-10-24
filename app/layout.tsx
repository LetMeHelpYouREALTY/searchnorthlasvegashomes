import "styles/tailwind.css"
import { Metadata } from "next"
import { Footer } from "../components/Footer"
import { Navigation } from "../components/Navigation"
import { CalendlyAfterListings } from "../components/CalendlyAfterListings"
import { RealScoutWidget } from "../components/RealScoutWidget"

export const metadata: Metadata = {
  title: {
    default: "Search North Las Vegas Homes | Real Estate Search & Valuation",
    template: "%s | Search North Las Vegas Homes"
  },
  description: "Find your perfect home in North Las Vegas with advanced search tools, instant valuations, and comprehensive market analysis. Expert real estate services for buyers and sellers.",
  keywords: "North Las Vegas real estate, home search, property valuation, real estate listings, Las Vegas homes",
  authors: [{ name: "Search North Las Vegas Homes" }],
  creator: "Search North Las Vegas Homes",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://searchnorthlasvegashomes.com",
    title: "Search North Las Vegas Homes | Real Estate Search & Valuation",
    description: "Find your perfect home in North Las Vegas with advanced search tools, instant valuations, and comprehensive market analysis.",
    siteName: "Search North Las Vegas Homes",
  },
  twitter: {
    card: "summary_large_image",
    title: "Search North Las Vegas Homes | Real Estate Search & Valuation",
    description: "Find your perfect home in North Las Vegas with advanced search tools, instant valuations, and comprehensive market analysis.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* RealScout Widget Script */}
        <script 
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js" 
          type="module"
          async
        />
        
        {/* RealScout Widget Styles */}
        <style dangerouslySetInnerHTML={{
          __html: `
            realscout-office-listings { 
              --rs-listing-divider-color: rgb(101, 141, 172); 
              width: 100%; 
              margin: 2rem 0;
              border-radius: 8px;
              overflow: hidden;
              box-shadow: 0 2px 8px rgba(0,0,0,0.08);
            }
            
            /* Ensure widget is responsive */
            @media (max-width: 768px) {
              realscout-office-listings {
                margin: 1rem 0;
              }
            }
          `
        }} />
      </head>
      <body>
        <Navigation />
        <main>
          {children}
        </main>
        <Footer />
        
        {/* RealScout Office Listings Widget - appears on every page */}
        <RealScoutWidget />
        <CalendlyAfterListings />
      </body>
    </html>
  )
}
