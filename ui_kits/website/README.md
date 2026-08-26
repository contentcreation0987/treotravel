# UI kit — Treo Travels marketing website

Mobile-first lead-generation site. Four click-through screens in one shell.

| File | What it is |
|---|---|
| `index.html` | Mobile card (430px). Open it and click through. Design width 390px; breakpoints at 560 / 768 / 1024. |
| `desktop.html` | Desktop card (1440px). Same app, same files — only the declared card viewport differs, so the layout responds naturally. |
| `App.jsx` | Shell — sticky header, screen switch, footer, sticky WhatsApp bar. |
| `LandingHero.jsx` | Hero: ken-burns photo, headline, CTAs, proof counters, and the departure board (side-by-side on desktop). |
| `LandingScreen.jsx` | Landing page: hero → how booking works → next departures → what's included → photo band → reviews → FAQ → closing CTA + form. |
| `DeparturesScreen.jsx` | Departure calendar. **Upcoming dates only** by default, grouped by month, with air / road / weekend / seats-available filters; past dates sit behind a collapsed "already departed" disclosure, dimmed and labelled `Departed`. |
| `PrivateTourScreen.jsx` | Private-tour builder — destination, group size, dates, vehicle, hotel tier, occasion — with a live brief summary and an itemised WhatsApp hand-off. |
| `ToursScreen.jsx` | All tours as alternating photo-left / info-right rows, with type filter. |
| `TourDetailScreen.jsx` | Hero + price, trust strip, day-by-day itinerary, equal-weight inclusions/exclusions, reviews from that trip, deposit & cancellation terms, related trips. |
| `ServicesScreen.jsx` | Umrah, air ticketing, visa services, private tours + the trust/about block. |
| `data.js` | All copy and trip data as `window.TREO`. Content is drawn from their real Instagram posts. |

## What it demonstrates

- **The signature hero.** The departure board is the first thing on the page and
  the only bold element above the fold.
- **Price above the fold on every screen** — hero board, card grid, detail hero,
  and the sticky bar that follows you down every page.
- **WhatsApp as the only conversion.** Every CTA is a `wa.me` deep link with a
  pre-filled, trip-specific message. There is no cart, no checkout, no
  "Book Now" anywhere.
- **Inclusions and exclusions at identical weight** on the detail screen.
- **Dark → light section rhythm**: ink hero, ink cards, `#EEF2F3` for the
  itinerary and price detail, ink again for related trips.

## Responsive contract

The kit sets layout via CSS custom properties on `body`, so components stay
breakpoint-free: `--cards-3`, `--cards-2`, `--split`, `--row-cols`,
`--hero-ratio`, `--inclusions-cols`, `--form-cols`,
`--footer-cols`, and `--nav-display` / `--menu-display` for the header swap.
`TrustStrip` needs no variable — it reflows with `auto-fit`.

## Deliberately not built

Blog / SEO landing pages, the gallery, and the payment-instalment explainer —
no source material existed for them. Air-ticket and visa detail pages are
represented by their cards on the services screen only.
