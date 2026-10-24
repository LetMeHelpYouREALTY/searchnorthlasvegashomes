// Single source of truth for the North Las Vegas neighborhood guides.
// Every community listed here is inside City of North Las Vegas limits.
// Facts verified 2026-10-24 against at least one current source; anything the
// sources disagreed on (e.g. Eldorado acreage) is deliberately left out.
// Fair Housing: describe places (acreage, amenities, location), never people.

export type Fact = { value: string; label: string }

export type Neighborhood = {
  slug: string
  name: string
  tagline: string
  zips: string[]
  facts: Fact[]
  summary: string
  highlights: string[]
  location: string
  buyerNote: string
}

export const NEIGHBORHOODS: Neighborhood[] = [
  {
    slug: "aliante",
    name: "Aliante",
    tagline: "North Las Vegas's signature master plan, anchored by golf and open space.",
    zips: ["89084", "89085"],
    facts: [
      { value: "1,905", label: "Acres" },
      { value: "2003", label: "Opened" },
      { value: "18", label: "Hole golf club" },
      { value: "89084", label: "Primary ZIP" },
    ],
    summary:
      "Aliante is the best-known master-planned community in North Las Vegas. It sits at Aliante Parkway and the northern 215 Beltway, with an 18-hole championship golf club, a nature park and a resort at its center.",
    highlights: [
      "Aliante Golf Club, an 18-hole championship course",
      "Nature Discovery Park and a connected trail network",
      "Sun City Aliante, a Del Webb 55+ community inside the master plan",
      "Guard-gated Club Aliante neighborhood",
      "Resort, dining and retail along Aliante Parkway",
    ],
    location: "Aliante Parkway at the northern 215 Beltway, between I-15 and Decatur Boulevard.",
    buyerNote:
      "Resale-driven. Homes range from townhomes to golf-course estates, so comparing the specific sub-neighborhood matters more than the Aliante name.",
  },
  {
    slug: "valley-vista",
    name: "Valley Vista",
    tagline: "A newer master plan taking shape north of the 215.",
    zips: ["89086"],
    facts: [
      { value: "89086", label: "ZIP code" },
      { value: "215", label: "Beltway access" },
      { value: "New", label: "Construction active" },
    ],
    summary:
      "Valley Vista is one of the newest master-planned communities in North Las Vegas, coming together near Decatur Boulevard and Elkhorn Road just north of the 215 Beltway, next to the Aliante area.",
    highlights: [
      "Brand-new homes from national builders",
      "Planned parks and trail connections at build-out",
      "Mountain views across the northern valley",
      "Quick 215 Beltway access",
    ],
    location: "Near Decatur Boulevard and Elkhorn Road, just north of the 215 Beltway.",
    buyerNote:
      "Mostly new construction. Builder incentives and lot premiums change month to month, so compare the current offer from each builder before you choose a floor plan.",
  },
  {
    slug: "villages-at-tule-springs",
    name: "Villages at Tule Springs",
    tagline: "A large, still-growing master plan beside a national monument.",
    zips: ["89084", "89086"],
    facts: [
      { value: "1,280", label: "Acres" },
      { value: "8,680+", label: "Homes planned" },
      { value: "2018", label: "Construction began" },
      { value: "89084", label: "Primary ZIP" },
    ],
    summary:
      "The Villages at Tule Springs is one of the largest master-planned communities in North Las Vegas, built around the 215 Beltway interchange at Revere Street. It takes its name from the neighboring Tule Springs Fossil Beds National Monument.",
    highlights: [
      "Roughly 8,680 homes planned at build-out",
      "Active-adult (55+) neighborhoods planned within the community",
      "Next to Tule Springs Fossil Beds National Monument",
      "Several national builders, including Heartland neighborhoods",
      "215 Beltway interchange at Revere Street",
    ],
    location: "North and south of the 215 Beltway around the Revere Street interchange.",
    buyerNote:
      "A mix of new construction and early resales. The MLS files Villages 1 to 3 under 89084 and Village 4 under 89086, which matters when you compare sales.",
  },
  {
    slug: "eldorado",
    name: "Eldorado",
    tagline: "A 1990s Pardee master plan with two large neighborhood parks.",
    zips: ["89031"],
    facts: [
      { value: "1990", label: "Community launched" },
      { value: "2", label: "Major parks" },
      { value: "89031", label: "Primary ZIP" },
    ],
    summary:
      "Eldorado is a master-planned community in central North Las Vegas, launched around 1990 and built largely by Pardee Homes. Its neighborhoods, some of them gated, offer single-family homes in a wide range of sizes.",
    highlights: [
      "Eldorado Park and Seastrand Park",
      "Gated and non-gated neighborhoods",
      "Single-family homes in a wide range of sizes",
      "Close to the North 5th Street and Decatur corridors",
    ],
    location: "Central North Las Vegas, between Craig Road and the 215 Beltway.",
    buyerNote:
      "Mostly resale with mature landscaping. Condition and updates drive value here, so recent sales on the same street tell you more than area averages.",
  },
]

// Former guides for areas outside North Las Vegas city limits.
export const RETIRED_NEIGHBORHOOD_SLUGS = ["centennial-hills", "skye-canyon", "sunrise-manor", "winchester"]

export function getNeighborhood(slug: string): Neighborhood | undefined {
  return NEIGHBORHOODS.find((n) => n.slug === slug)
}
