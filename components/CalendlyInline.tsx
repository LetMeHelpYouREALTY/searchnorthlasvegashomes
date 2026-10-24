"use client"

import Script from "next/script"
import { useRef } from "react"

type CalendlyWindow = Window & {
  Calendly?: { initInlineWidget: (opts: { url: string; parentElement: HTMLElement }) => void }
}

export function CalendlyInline({ url, height = 700 }: { url: string; height?: number }) {
  const ref = useRef<HTMLDivElement>(null)

  // onReady runs after the script first loads AND on every later mount,
  // so the calendar re-renders after client-side navigation back to the page.
  const init = () => {
    const calendly = (window as CalendlyWindow).Calendly
    if (!ref.current || !calendly) return
    ref.current.innerHTML = ""
    calendly.initInlineWidget({ url, parentElement: ref.current })
  }

  return (
    <>
      <div ref={ref} className="rounded-lg border border-gray-200" style={{ minWidth: "320px", height: `${height}px` }} />
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" onReady={init} />
    </>
  )
}
