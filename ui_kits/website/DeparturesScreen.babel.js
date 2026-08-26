const DSD = window.TreoTravelsDesignSystem_12e4e4;
const { DepartureBoard, SectionHeader, Button, Badge, Chip, Icon, LicenseBadge } = DSD;
const Reveal = DSD.Reveal || (({ children, style }) => <div style={style}>{children}</div>);
const DPB = '../../';

const FILTERS = [
  { id: 'all', label: 'All departures' },
  { id: 'air', label: 'By air' },
  { id: 'road', label: 'By road' },
  { id: 'weekend', label: 'Weekends' },
  { id: 'open', label: 'Seats available' },
];

function FilterPills({ active, onChange }) {
  return (
    <div style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 6, marginBottom: 'var(--space-3)' }}>
      {FILTERS.map((f) => {
        const on = active === f.id;
        return (
          <button key={f.id} type="button" onClick={() => onChange(f.id)}
            style={{
              minHeight: 44, padding: '0 16px', flex: '0 0 auto', cursor: 'pointer',
              background: on ? 'var(--surface-brand)' : 'transparent',
              color: on ? '#fff' : 'var(--text-secondary)',
              border: `1.5px solid ${on ? 'transparent' : 'var(--border-dark-strong)'}`,
              borderRadius: 'var(--radius-pill)',
              font: 'var(--fw-bold) var(--fs-200)/1 var(--font-body)',
              letterSpacing: 'var(--ls-wide)', textTransform: 'uppercase',
              transition: 'var(--transition-color)', whiteSpace: 'nowrap',
            }}>{f.label}</button>
        );
      })}
    </div>
  );
}

const MONTHS = { Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5, Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11 };
const YEAR = 2026;
const TODAY = (() => { const d = new Date(); d.setHours(0, 0, 0, 0); return d; })();
const isPast = (r) => new Date(YEAR, MONTHS[r.month] ?? 0, Number(r.day)) < TODAY;

function DeparturesScreen({ onOpenTour }) {
  const [filter, setFilter] = React.useState('all');
  const [showPast, setShowPast] = React.useState(false);
  const match = (r) => {
    if (filter === 'all') return true;
    if (filter === 'open') return r.seats > 0;
    return r.mode === filter;
  };
  const split = (wantPast) => window.TREO.calendar
    .map((m) => ({ month: m.month, rows: m.rows.filter((r) => isPast(r) === wantPast && match(r)) }))
    .filter((m) => m.rows.length);
  const months = split(false);
  const pastMonths = split(true);
  const total = months.reduce((n, m) => n + m.rows.length, 0);
  const open = months.reduce((n, m) => n + m.rows.filter((r) => r.seats > 0).length, 0);
  const pastTotal = pastMonths.reduce((n, m) => n + m.rows.length, 0);
  return (
    <>
      <section style={{ background: 'var(--surface-base)' }}>
        <div style={{ maxWidth: 'var(--page-max)', margin: '0 auto', padding: 'var(--space-5) var(--page-pad) var(--section-y)' }}>
          <Reveal>
            <SectionHeader
              eyebrow="Departure calendar 2026"
              title="Upcoming departures"
              sub="Confirmed fixed departures from Karachi, next date first. Prices are per person, twin or triple share."
            />
          </Reveal>
          <Reveal delay={60}><FilterPills active={filter} onChange={setFilter} /></Reveal>
          <Reveal delay={90}>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-3)' }}>
              <span className="tnum" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, font: 'var(--fw-semibold) var(--fs-300)/1 var(--font-body)', color: 'var(--text-secondary)' }}>
                <Icon name="calendar-days" size={16} style={{ color: 'var(--teal-400)' }} />{total} upcoming · {open} with seats
              </span>
              <Chip icon="plane">Air legs bookable at cost</Chip>
              <Chip icon="users" tone="brand">Max 18 per group</Chip>
            </div>
          </Reveal>
          {total === 0 ? (
            <p style={{ font: 'var(--type-body-lg)', color: 'var(--text-muted)', padding: 'var(--space-4) 0' }}>
              No upcoming dates match that filter. Message us — we add dates every month.
            </p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              {months.map((m, i) => (
                <Reveal key={m.month} delay={i * 70}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-15)' }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
                      <h3 style={{ font: 'var(--type-card-title)', color: 'var(--text-primary)', letterSpacing: 'var(--ls-display)' }}>{m.month}</h3>
                      <span className="tnum" style={{ font: 'var(--fw-semibold) var(--fs-200)/1 var(--font-body)', letterSpacing: 'var(--ls-wide)', textTransform: 'uppercase', color: 'var(--text-faint)' }}>{m.rows.length} departures</span>
                    </div>
                    <DepartureBoard
                      title={m.month} origin="from Karachi" departures={m.rows} animate={false}
                      onSelect={(d) => onOpenTour(d.tour || 'hunza')}
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          )}
          {pastTotal ? (
            <div style={{ marginTop: 'var(--space-5)', paddingTop: 'var(--space-3)', borderTop: '1px solid var(--border-dark)' }}>
              <button
                type="button" onClick={() => setShowPast((v) => !v)} aria-expanded={showPast}
                style={{ display: 'flex', alignItems: 'center', gap: 10, width: '100%', minHeight: 48, padding: 0, background: 'none', border: 0, textAlign: 'left', cursor: 'pointer' }}
              >
                <Icon name="history" size={17} style={{ color: 'var(--text-faint)' }} />
                <span className="tnum" style={{ flex: 1, font: 'var(--fw-bold) var(--fs-300)/1 var(--font-body)', letterSpacing: 'var(--ls-wide)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                  {pastTotal} already departed this season
                </span>
                <Icon name={showPast ? 'chevron-up' : 'chevron-down'} size={18} style={{ color: 'var(--text-faint)' }} />
              </button>
              {showPast ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', marginTop: 'var(--space-2)', opacity: 0.72 }}>
                  {pastMonths.map((m) => (
                    <div key={m.month} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-15)' }}>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
                        <h3 style={{ font: 'var(--type-card-title)', color: 'var(--text-muted)', letterSpacing: 'var(--ls-display)' }}>{m.month}</h3>
                        <span className="tnum" style={{ font: 'var(--fw-semibold) var(--fs-200)/1 var(--font-body)', letterSpacing: 'var(--ls-wide)', textTransform: 'uppercase', color: 'var(--text-faint)' }}>departed</span>
                      </div>
                      <DepartureBoard
                        title={`${m.month} · departed`} origin="from Karachi" animate={false}
                        departures={m.rows.map((r) => ({ ...r, statusLabel: 'Departed' }))}
                        onSelect={(d) => onOpenTour(d.tour || 'hunza')}
                      />
                    </div>
                  ))}
                  <p style={{ font: 'var(--fw-medium) var(--fs-300)/1.6 var(--font-body)', color: 'var(--text-muted)', maxWidth: '54ch' }}>
                    These dates have gone. Most of them run again next season — ask us and we will tell you when the same trip repeats.
                  </p>
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      </section>
      <section style={{ background: 'var(--surface-light)' }} className="on-light">
        <div style={{ maxWidth: 'var(--page-max)', margin: '0 auto', padding: 'var(--section-y) var(--page-pad)', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', alignItems: 'flex-start' }}>
          <Badge tone="onLightBrand">Dates not working?</Badge>
          <h2 style={{ font: 'var(--type-section)', color: 'var(--text-on-light)', letterSpacing: 'var(--ls-display)', maxWidth: '22ch' }}>Run any of these privately, on your own dates</h2>
          <p style={{ font: 'var(--fw-regular) var(--fs-500)/1.65 var(--font-body)', color: 'var(--text-on-light-secondary)', maxWidth: '50ch' }}>
            Most of our trips are private ones — a family, a group of friends, or an office. Same itineraries, your own vehicle, your own schedule.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center' }}>
            <Button variant="onLight" icon="message-circle" href={`https://wa.me/${window.TREO.phone.replace(/\D/g, '')}`}>Get a private quote</Button>
            <LicenseBadge tone="light" assetBase={DPB} height={30} />
          </div>
        </div>
      </section>
    </>
  );
}

Object.assign(window, { DeparturesScreen });
