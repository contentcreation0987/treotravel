const DSS = window.TreoTravelsDesignSystem_12e4e4;
const { SectionHeader, TourCard, Button, Badge, Chip, Icon, PhotoScrim, Annotation, ServiceIconRow, InquiryForm, LicenseBadge } = DSS;
const Reveal = DSS.Reveal || (({ children, style }) => <div style={style}>{children}</div>);
const Accordion = DSS.Accordion || (({ items }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
    {items.map((it) => (
      <div key={it.q} style={{ display: 'flex', flexDirection: 'column', gap: 6, paddingBottom: 18, borderBottom: '1px solid var(--border-light)' }}>
        <span style={{ font: 'var(--fw-semibold) var(--fs-500)/1.35 var(--font-body)', color: 'var(--text-on-light)' }}>{it.q}</span>
        <p style={{ margin: 0, font: 'var(--fw-regular) var(--fs-400)/1.65 var(--font-body)', color: 'var(--text-on-light-secondary)', maxWidth: '62ch' }}>{it.a}</p>
      </div>
    ))}
  </div>
));
const LB = '../../';

const STEPS = [
  { n: '01', t: 'Pick a departure', b: 'Every date and price is on this page. Nothing is quoted privately, nothing changes after you ask.' },
  { n: '02', t: 'Message us on WhatsApp', b: 'We confirm the seats that are actually left and send the full day-by-day PDF within the hour.' },
  { n: '03', t: 'Pay 50% to confirm', b: 'Seats are held 24 hours. Instalments are available — the balance is due a week before departure.' },
];

const FAQ = [
  { q: 'Are air tickets included?', a: 'No. Road tours include every road leg; on the fly-in tours (Hunza, Skardu) the Karachi–Islamabad ticket is excluded and we book it for you at cost if you ask. We put this on every poster because finding it out later is the fastest way to lose your trust.' },
  { q: 'How big are the groups?', a: 'Eighteen travellers maximum, on every fixed departure. We do not oversell a coach and we do not merge two groups to fill one bus.' },
  { q: 'Can I pay in instalments?', a: 'Yes. 50% confirms your seat, the balance is due a week before departure. Ask on WhatsApp and we will split it around your salary dates.' },
  { q: 'Is it comfortable for families?', a: 'Families travel on every departure. Triple-share and family rooms are standard, seating is arranged so families sit together, and there is a female coordinator on the mixed-group trips.' },
  { q: 'What if your dates do not suit me?', a: 'Take the same itinerary as a private tour — your own coach or Prado, your own dates. Tell us the group size and we quote the same day.' },
  { q: 'Are you a registered company?', a: 'Yes. Treo Travels holds Government tour-operator licence #5618 and has a registered office on Shahrah-e-Faisal, Karachi. Walk in any day between 10am and 10pm.' },
];

function HowItWorks() {
  return (
    <section style={{ background: 'var(--surface-base)' }}>
      <div style={{ maxWidth: 'var(--page-max)', margin: '0 auto', padding: 'var(--section-y) var(--page-pad)' }}>
        <Reveal><SectionHeader eyebrow="How booking works" title="Three steps, no deposit to ask" sub="The whole process happens on WhatsApp. There is no checkout on this site." /></Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'var(--cards-3,1fr)', gap: 'var(--gap-grid)' }}>
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 80}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: 'var(--pad-card-lg)', height: '100%', background: 'var(--surface-raised)', border: '1px solid var(--border-dark)', borderRadius: 'var(--radius-card)', boxSizing: 'border-box' }}>
                <span style={{ font: 'var(--fw-bold) var(--fs-300)/1 var(--font-num)', fontVariantNumeric: 'var(--num-tabular)', letterSpacing: 'var(--ls-label)', color: 'var(--teal-400)' }}>{s.n}</span>
                <h3 style={{ font: 'var(--type-card-title)', color: 'var(--text-primary)', letterSpacing: 'var(--ls-display)' }}>{s.t}</h3>
                <p style={{ font: 'var(--fw-regular) var(--fs-400)/1.65 var(--font-body)', color: 'var(--text-secondary)' }}>{s.b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Featured({ onJump, onOpenTour }) {
  return (
    <section style={{ background: 'var(--surface-deep)' }}>
      <div style={{ maxWidth: 'var(--page-max)', margin: '0 auto', padding: 'var(--section-y) var(--page-pad)' }}>
        <Reveal>
          <SectionHeader eyebrow="Next out of Karachi" title="July &amp; August 2026" sub="Per person, twin or triple share. Seats update as they sell." action={<Button variant="ghost" iconRight="arrow-right" onClick={() => onJump('tours')}>All tours</Button>} />
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'var(--cards-3,1fr)', gap: 'var(--gap-grid)' }}>
          {window.TREO.tours.slice(0, 3).map((t, i) => (
            <Reveal key={t.id} delay={i * 80}><TourCard {...t} photo={LB + t.photo} onClick={() => onOpenTour(t.id)} /></Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Included() {
  return (
    <section style={{ background: 'var(--surface-light)' }} className="on-light">
      <div style={{ maxWidth: 'var(--page-max)', margin: '0 auto', padding: 'var(--section-y) var(--page-pad)', display: 'grid', gridTemplateColumns: 'var(--split,1fr)', gap: 'var(--space-5)', alignItems: 'center' }}>
        <Reveal>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', alignItems: 'flex-start' }}>
            <Badge tone="onLightBrand">On every trip</Badge>
            <h2 style={{ font: 'var(--type-section)', color: 'var(--text-on-light)', letterSpacing: 'var(--ls-display)', maxWidth: '20ch' }}>Six things included, from the weekend trips up</h2>
            <p style={{ font: 'var(--fw-regular) var(--fs-500)/1.65 var(--font-body)', color: 'var(--text-on-light-secondary)', maxWidth: '48ch' }}>
              Hotels, transport, meals, jeeps, a guide and a photographer. What is <strong>not</strong> included is printed just as plainly on every tour page.
            </p>
            <Button variant="onLightOutline" iconRight="arrow-right">See a full inclusions list</Button>
          </div>
        </Reveal>
        <Reveal delay={90}><ServiceIconRow tone="light" assetBase={LB} size={34} style={{ gap: 'var(--space-3)' }} /></Reveal>
      </div>
    </section>
  );
}

function PhotoBand() {
  return (
    <PhotoScrim src={LB + 'assets/photos/chai.png'} ratio="var(--band-ratio,16/9)" scrim="full" radius="0" position="center 40%">
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: 12, maxWidth: 'var(--page-max)', margin: '0 auto', padding: 'var(--space-6) var(--page-pad)' }}>
        <Reveal><Annotation size={28}>Pahadon wali Chai</Annotation></Reveal>
        <Reveal delay={80}>
          <h2 style={{ font: 'var(--type-section)', color: '#fff', letterSpacing: 'var(--ls-display)', textShadow: 'var(--text-shadow-photo)', maxWidth: '22ch' }}>Every photo here is from our own trips</h2>
        </Reveal>
        <Reveal delay={150}>
          <p style={{ font: 'var(--fw-regular) var(--fs-500)/1.6 var(--font-body)', color: 'var(--text-secondary)', maxWidth: '40ch', textShadow: 'var(--text-shadow-soft)' }}>
            No stock photography anywhere on this site. If you see a valley, one of our groups stood in it.
          </p>
        </Reveal>
      </div>
    </PhotoScrim>
  );
}

function Reviews() {
  return (
    <section style={{ background: 'var(--surface-base)' }}>
      <div style={{ maxWidth: 'var(--page-max)', margin: '0 auto', padding: 'var(--section-y) var(--page-pad)' }}>
        <Reveal><SectionHeader eyebrow="Travellers" title="After the trip" sub="From the last three months of departures." /></Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'var(--cards-3,1fr)', gap: 'var(--gap-grid)' }}>
          {window.TREO.reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 80}>
              <blockquote style={{ margin: 0, height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 14, padding: 'var(--pad-card-lg)', background: 'var(--surface-raised)', border: '1px solid var(--border-dark)', borderRadius: 'var(--radius-card)' }}>
                <div style={{ display: 'flex', gap: 3, color: 'var(--gold-400)' }}>{[0, 1, 2, 3, 4].map((n) => <Icon key={n} name="star" size={14} />)}</div>
                <p style={{ font: 'var(--fw-regular) var(--fs-400)/1.65 var(--font-body)', color: 'var(--text-secondary)' }}>{r.text}</p>
                <footer style={{ display: 'flex', flexDirection: 'column', gap: 3, marginTop: 'auto' }}>
                  <span style={{ font: 'var(--fw-bold) var(--fs-300)/1 var(--font-body)', color: 'var(--text-primary)' }}>{r.name}</span>
                  <span style={{ font: 'var(--fw-medium) var(--fs-200)/1 var(--font-body)', color: 'var(--text-faint)' }}>{r.trip}</span>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section style={{ background: 'var(--surface-light)' }} className="on-light">
      <div style={{ maxWidth: 'var(--page-max)', margin: '0 auto', padding: 'var(--section-y) var(--page-pad)', display: 'grid', gridTemplateColumns: 'var(--faq-cols,1fr)', gap: 'var(--space-5)', alignItems: 'start' }}>
        <div style={{ position: 'var(--faq-sticky,static)', top: 90, alignSelf: 'start' }}>
          <Reveal>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', alignItems: 'flex-start' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10, font: 'var(--type-eyebrow)', letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase', color: 'var(--text-brand-on-light)' }}>
              <span style={{ width: 24, height: 3, background: 'var(--marker-section)', borderRadius: 2 }} />Before you ask
            </span>
            <h2 style={{ font: 'var(--type-section)', color: 'var(--text-on-light)', letterSpacing: 'var(--ls-display)', maxWidth: '16ch' }}>The questions we get on WhatsApp</h2>
            <p style={{ font: 'var(--fw-regular) var(--fs-400)/1.65 var(--font-body)', color: 'var(--text-on-light-secondary)', maxWidth: '40ch' }}>
              Answered plainly, including the parts that cost us bookings.
            </p>
            <LicenseBadge tone="light" assetBase={LB} height={34} />
            </div>
          </Reveal>
        </div>
        <Reveal delay={90}><Accordion items={FAQ} defaultOpen={0} /></Reveal>
      </div>
    </section>
  );
}

function ClosingCta() {
  return (
    <section style={{ background: 'var(--surface-deep)' }}>
      <div style={{ maxWidth: 'var(--page-max)', margin: '0 auto', padding: 'var(--section-y) var(--page-pad)', display: 'grid', gridTemplateColumns: 'var(--split,1fr)', gap: 'var(--space-4)', alignItems: 'start' }}>
        <Reveal>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', alignItems: 'flex-start' }}>
            <h2 style={{ font: 'var(--type-section)', color: '#fff', letterSpacing: 'var(--ls-display)', maxWidth: '18ch' }}>Tell us your dates, we will tell you what fits</h2>
            <p style={{ font: 'var(--fw-regular) var(--fs-500)/1.65 var(--font-body)', color: 'var(--text-secondary)', maxWidth: '44ch' }}>
              A reply within the hour, 10am–10pm PKT. No payment at this stage, and no follow-up spam if you decide against it.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              <Chip icon="map-pin">Shahrah-e-Faisal, Karachi</Chip>
              <Chip icon="clock">Reply within an hour</Chip>
              <Chip icon="shield-check" tone="brand">Licence #5618</Chip>
            </div>
          </div>
        </Reveal>
        <Reveal delay={90}>
          <InquiryForm tone="dark" phone={window.TREO.phone} departures={window.TREO.departures.map((d) => `${d.day} ${d.month} — ${d.destination}`).concat(['Not sure yet — advise me'])} />
        </Reveal>
      </div>
    </section>
  );
}

function LandingScreen({ onJump, onOpenTour }) {
  return (
    <>
      <window.LandingHero onJump={onJump} onOpenTour={onOpenTour} />
      <HowItWorks />
      <Featured onJump={onJump} onOpenTour={onOpenTour} />
      <Included />
      <PhotoBand />
      <Reviews />
      <Faq />
      <ClosingCta />
    </>
  );
}

Object.assign(window, { LandingScreen });
