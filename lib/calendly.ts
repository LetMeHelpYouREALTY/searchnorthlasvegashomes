export const CALENDLY_EVENTS = {
  showing: "https://calendly.com/drjanduffy/showing",
  buyer: "https://calendly.com/drjanduffy/buyer-consultation-30-min",
  listing: "https://calendly.com/drjanduffy/listing-consultation",
  strategy: "https://calendly.com/drjanduffy/15min",
} as const

export type CalendlyEvent = keyof typeof CALENDLY_EVENTS

const SELLER_PATHS = ["/valuation", "/reports"]
const BUYER_PATHS = ["/lenders", "/tools", "/search"]

export function calendlyEventForPath(pathname: string): CalendlyEvent {
  if (SELLER_PATHS.some((p) => pathname.startsWith(p))) return "listing"
  if (BUYER_PATHS.some((p) => pathname.startsWith(p))) return "buyer"
  return "showing"
}

// utm_source = bare domain so the Calendly → FUB worker can attribute the booking.
export function calendlyUrl(event: CalendlyEvent, medium: string, pathname: string): string {
  const params = new URLSearchParams({
    hide_gdpr_banner: "1",
    utm_source: "searchnorthlasvegashomes.com",
    utm_medium: medium,
    utm_campaign: pathname === "/" ? "home" : pathname.replace(/^\/|\/$/g, ""),
  })
  return `${CALENDLY_EVENTS[event]}?${params.toString()}`
}
