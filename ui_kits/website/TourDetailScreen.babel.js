const DST = window.TreoTravelsDesignSystem_12e4e4;
const { PhotoScrim, Badge, PriceTag, Button, Chip, Icon, SectionHeader, ItineraryDay, InclusionsGrid, ServiceIconRow, LicenseBadge, TourCard, TrustStrip } = DST;
const Reveal = DST.Reveal || (({ children, style }) => <div style={style}>{children}</div>);
const ReviewCard = DST.ReviewCard || (({ name, trip, text }) => (
  <blockquote style={{ margin: 0, height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 12, padding: 'var(--pad-card-lg)', background: 'var(--surface-raised)', border: '1px solid var(--border-dark)', borderRadius: 'var(--radius-card)' }}>
    <p style={{ font: 'var(--fw-regular) var(--fs-400)/1.65 var(--font-body)', color: 'var(--text-secondary)' }}>{text}</p>
    <footer style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 3 }}>
      <span style={{ font: 'var(--fw-bold) var(--fs-300)/1 var(--font-body)', color: 'var(--text-primary)' }}>{name}</span>
      <span style={{ font: 'var(--fw-medium) var(--fs-200)/1 var(--font-body)', color: 'var(--text-faint)' }}>{trip}</span>
    </footer>
  </blockquote>
));
const PolicyTerms = DST.PolicyTerms || (({ deposit = [], cancellation = [], note, tone }) => (
  <div style={{ display: 'grid', gap: 'var(--space-3)', padding: 'var(--pad-card-lg)', background: tone === 'dark' ? 'var(--surface-raised)' : 'var(--surface-card-light)', border: `1px solid ${tone === 'dark' ? 'var(--border-dark)' : 'var(--border-light)'}`, borderRadius: 'var(--radius-card)' }}>
    {[...deposit, ...cancellation].map((r) => (
      <span key={r.k} style={{ display: 'flex', justifyContent: 'space-between', gap: 14, font: 'var(--fw-medium) var(--fs-300)/1.5 var(--font-body)', color: tone === 'dark' ? 'var(--text-secondary)' : 'var(--text-on-light-secondary)' }}><span>{r.k}</span><strong>{r.v}</strong></span>
    ))}
    {note ? <p style={{ margin: 0, font: 'var(--fw-medium) var(--fs-300)/1.6 var(--font-body)', color: tone === 'dark' ? 'var(--text-secondary)' : 'var(--text-on-light-secondary)' }}>{note}</p> : null}
  </div>
));
const DB = '../../';

function TourDetailScreen({ tourId, onOpenTour }) {
  const tours = window.TREO.tours;
  const t = tours.find((x) => x.id === tourId) || tours[0];
  const others = tours.filter((x) => x.id !== t.id).slice(0, 3);
  const itinerary = t.itinerary || [];
  return (
    <>
      <section style={{ position: 'relative' }}>
        <PhotoScrim src={DB + (t.hero || t.photo)} ratio="var(--hero-ratio,4/5)" scrim="bottomHard" radius="0">
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: 'var(--space-15)', maxWidth: 'var(--page-max)', margin: '0 auto', padding: 'var(--space-5) var(--page-pad) var(--space-3)' }}>
            <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap' }}>
              <Badge tone="duration" tabular>{t.duration}</Badge>
              {t.type ? <Badge tone="brand">{t.type}</Badge> : null}
              {t.seats <= 4 && t.seats > 0 ? <Badge tone="gold" tabular>{t.seats} seats left</Badge> : null}
            </div>
            <h1 style={{ font: 'var(--type-hero)', fontSize: 'clamp(34px,9vw,64px)', color: '#fff', letterSpacing: 'var(--ls-display-tight)', textShadow: 'var(--text-shadow-photo)', maxWidth: '18ch' }}>{t.destination}</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)', alignItems: 'flex-end' }}>
              <PriceTag amount={t.price} per="per person · twin share" size="lg" />
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, font: 'var(--fw-bold) var(--fs-300)/1 var(--font-body)', letterSpacing: 'var(--ls-wide)', textTransform: 'uppercase', color: 'var(--text-secondary)', fontVariantNumeric: 'var(--num-tabular)' }}>
                <Icon name="calendar-days" size={16} />Departs {t.departure}
              </span>
            </div>
          </div>
        </PhotoScrim>
      </section>
      <section style={{ background: 'var(--surface-base)' }}>
        <div style={{ maxWidth: 'var(--page-max)', margin: '0 auto', padding: 'var(--space-4) var(--page-pad)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          <p style={{ font: 'var(--type-body-lg)', color: 'var(--text-secondary)', maxWidth: '58ch' }}>{t.blurb}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {(t.facts || []).map((f) => <Chip key={f.label} icon={f.icon}>{f.label}</Chip>)}
          </div>
          <ServiceIconRow assetBase={DB} size={26} />
          <TrustStrip items={window.TREO.trust.slice(0, 4)} />
        </div>
      </section>
      <section style={{ background: 'var(--surface-light)' }} className="on-light">
        <div style={{ maxWidth: 'var(--page-max)', margin: '0 auto', padding: 'var(--section-y) var(--page-pad)', display: 'grid', gridTemplateColumns: 'var(--split,1fr)', gap: 'var(--space-4)', alignItems: 'start' }}>
          <div>
            <SectionHeader tone="light" eyebrow="Day by day" title={`${itinerary.length ? itinerary.length + '-day' : 'Full'} itinerary`} sub="Tap any day to expand. Full PDF on WhatsApp." />
            <div>
              {itinerary.map((d, i) => (
                <ItineraryDay key={d.day} {...d} defaultOpen={i === 0} last={i === itinerary.length - 1} />
              ))}
              {itinerary.length ? (
                <p style={{ font: 'var(--fw-medium) var(--fs-200)/1.5 var(--font-body)', color: 'var(--text-on-light-muted)', marginTop: 'var(--space-2)' }}>
                  Days {itinerary.length + 1}–12 continue through Naltar, Chilas and back to Islamabad — ask for the full PDF.
                </p>
              ) : null}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            <InclusionsGrid
              included={t.included || ['AC sleeper coach', 'Hotels (twin / triple share)', 'Daily breakfast + dinner', 'Tour guide', 'Trip photography']}
              excluded={t.excluded || ['Air tickets', 'All lunches', 'Entry tickets at private resorts', 'Personal expenses']}
              note={t.note}
            />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-2)', flexWrap: 'wrap', padding: 'var(--pad-card)', background: 'var(--surface-card-light)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-card)' }}>
              <LicenseBadge tone="light" assetBase={DB} height={30} />
              <Button variant="onLightOutline" icon="download">Itinerary PDF</Button>
            </div>
          </div>
        </div>
      </section>
      <section style={{ background: 'var(--surface-base)' }}>
        <div style={{ maxWidth: 'var(--page-max)', margin: '0 auto', padding: 'var(--section-y) var(--page-pad)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          <Reveal>
            <SectionHeader
              eyebrow="From this trip"
              title="What travellers said"
              sub="Reviews are tied to a real departure — nothing anonymous."
            />
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'var(--cards-3,1fr)', gap: 'var(--gap-grid)' }}>
            {window.TREO.reviews.slice(0, 3).map((r, i) => (
              <Reveal key={r.name} delay={i * 70}><ReviewCard {...r} /></Reveal>
            ))}
          </div>
        </div>
      </section>
      <section style={{ background: 'var(--surface-deep)' }}>
        <div style={{ maxWidth: 'var(--page-max)', margin: '0 auto', padding: 'var(--section-y) var(--page-pad)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          <Reveal>
            <SectionHeader
              eyebrow="Before you pay anything"
              title="Deposit &amp; cancellation"
              sub="Stated here rather than behind a terms link — including the parts that do not favour us."
            />
          </Reveal>
          <Reveal delay={70}>
            <PolicyTerms tone="dark" deposit={window.TREO.policy.deposit} cancellation={window.TREO.policy.cancellation} note={window.TREO.policy.note} />
          </Reveal>
        </div>
      </section>
      <section style={{ background: 'var(--surface-base)' }}>
        <div style={{ maxWidth: 'var(--page-max)', margin: '0 auto', padding: 'var(--section-y) var(--page-pad)' }}>
          <SectionHeader eyebrow="Also departing" title="Other trips this season" />
          <div style={{ display: 'grid', gridTemplateColumns: 'var(--cards-3,1fr)', gap: 'var(--gap-grid)' }}>
            {others.map((o) => <TourCard key={o.id} {...o} photo={DB + o.photo} onClick={() => onOpenTour(o.id)} />)}
          </div>
        </div>
      </section>
    </>
  );
}

Object.assign(window, { TourDetailScreen });
