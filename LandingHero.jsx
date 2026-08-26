const DSL = window.TreoTravelsDesignSystem_12e4e4;
const { DepartureBoard, Button, Badge, Icon, LicenseBadge } = DSL;
// Fallbacks keep the page readable if the bundle predates these components.
const Reveal = DSL.Reveal || (({ children, style }) => <div style={style}>{children}</div>);
const CountUp = DSL.CountUp || (({ to, suffix = '', style }) => <span style={style}>{to}{suffix}</span>);
const HB = '../../';

function Proof() {
  const items = [
    { n: 37, label: 'non-stop trips' },
    { n: 18, label: 'max group size' },
    { n: 2018, label: 'operating since', grouped: false },
  ];
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-4)', alignItems: 'flex-end' }}>
      {items.map((it) => (
        <span key={it.label} style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <CountUp to={it.n} grouped={it.grouped !== false} style={{ font: 'var(--fw-bold) 28px/1 var(--font-num)', color: '#fff', letterSpacing: 'var(--ls-tight)' }} />
          <span style={{ font: 'var(--fw-semibold) var(--fs-200)/1.3 var(--font-body)', letterSpacing: 'var(--ls-wide)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{it.label}</span>
        </span>
      ))}
    </div>
  );
}

function LandingHero({ onJump, onOpenTour }) {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--ink-900)' }}>
      <div style={{ position: 'absolute', inset: 0 }}>
        <img className="kb" src={HB + 'assets/photos/hero-north.png'} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 45%' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'var(--scrim-left)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(18,22,26,.5) 0%,rgba(18,22,26,.25) 30%,rgba(18,22,26,.86) 78%,#1A1F24 100%)' }} />
      </div>
      <div style={{ position: 'relative', maxWidth: 'var(--page-max)', margin: '0 auto', padding: 'var(--space-6) var(--page-pad) var(--space-8)', display: 'grid', gridTemplateColumns: 'var(--hero-cols,1fr)', gap: 'var(--space-5)', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', maxWidth: 620 }}>
          <Reveal>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10, font: 'var(--type-eyebrow)', letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase', color: 'var(--teal-400)' }}>
              <span style={{ width: 24, height: 3, background: 'var(--marker-section)', borderRadius: 2 }} />Fixed departures from Karachi
            </span>
          </Reveal>
          <Reveal delay={70}>
            <h1 style={{ font: 'var(--type-hero)', fontSize: 'clamp(34px,7.6vw,60px)', letterSpacing: 'var(--ls-display-tight)', color: '#fff', textShadow: 'var(--text-shadow-photo)', maxWidth: '17ch' }}>
              The north, on a date you can plan around
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p style={{ font: 'var(--fw-regular) var(--fs-500)/1.65 var(--font-body)', color: 'var(--text-secondary)', maxWidth: '44ch' }}>
              Published dates, published prices, groups capped at 18. Message us and we confirm your seats the same hour — no deposit to ask a question.
            </p>
          </Reveal>
          <Reveal delay={210}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
              <Button variant="whatsapp" size="lg" icon="message-circle" href={`https://wa.me/${window.TREO.phone.replace(/\D/g, '')}`}>WhatsApp for seats</Button>
              <Button variant="secondary" size="lg" iconRight="arrow-right" onClick={() => onJump('tours')}>All tours &amp; prices</Button>
            </div>
          </Reveal>
          <Reveal delay={280} style={{ paddingTop: 'var(--space-2)', borderTop: '1px solid var(--border-dark)' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-4)', alignItems: 'flex-end' }}>
              <Proof />
              <LicenseBadge assetBase={HB} height={38} />
            </div>
          </Reveal>
        </div>
        <Reveal delay={160} style={{ width: '100%' }}>
          <DepartureBoard
            departures={window.TREO.departures}
            footnote="Both-side stays in Islamabad are included. Air tickets are excluded — we book them at cost if you ask."
            onSelect={(d) => onOpenTour(d.destination.toLowerCase().includes('skardu') ? 'skardu' : d.destination.toLowerCase().includes('naran') ? 'naran' : d.destination.toLowerCase().includes('kashmir') ? 'kashmir' : d.destination.toLowerCase().includes('gorakh') ? 'gorakh' : d.destination.toLowerCase().includes('swat') ? 'fairy' : 'hunza')}
          />
        </Reveal>
      </div>
    </section>
  );
}

Object.assign(window, { LandingHero });
