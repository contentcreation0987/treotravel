const { SectionHeader, TourRow, Button, Badge, Chip, Icon } = window.TreoTravelsDesignSystem_12e4e4;
const KB = '../../';

function FilterBar({ active, onChange }) {
  const opts = ['All tours', 'Group', 'Weekend', 'Private'];
  return (
    <div style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 4, marginBottom: 'var(--space-3)' }}>
      {opts.map((o) => {
        const on = active === o;
        return (
          <button key={o} type="button" onClick={() => onChange(o)}
            style={{
              minHeight: 40, padding: '0 15px', flex: '0 0 auto', cursor: 'pointer',
              background: on ? 'var(--surface-brand)' : 'transparent',
              color: on ? '#fff' : 'var(--text-secondary)',
              border: `1.5px solid ${on ? 'transparent' : 'var(--border-dark-strong)'}`,
              borderRadius: 'var(--radius-pill)',
              font: 'var(--fw-bold) var(--fs-200)/1 var(--font-body)',
              letterSpacing: 'var(--ls-wide)', textTransform: 'uppercase',
              transition: 'var(--transition-color)',
            }}>{o}</button>
        );
      })}
    </div>
  );
}

function ToursScreen({ onOpenTour }) {
  const [filter, setFilter] = React.useState('All tours');
  const list = window.TREO.tours.filter((t) => filter === 'All tours' || (t.type || '').toLowerCase().includes(filter.toLowerCase()));
  return (
    <>
      <section style={{ background: 'var(--surface-base)' }}>
        <div style={{ maxWidth: 'var(--page-max)', margin: '0 auto', padding: 'var(--space-5) var(--page-pad) var(--space-3)' }}>
          <SectionHeader eyebrow="Fixed departures 2026" title="All tours &amp; prices" sub="Per person, twin or triple share. Air tickets excluded on the fly-in trips." />
          <FilterBar active={filter} onChange={setFilter} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 'var(--space-3)', font: 'var(--fw-semibold) var(--fs-200)/1 var(--font-body)', color: 'var(--text-muted)', fontVariantNumeric: 'var(--num-tabular)' }}>
            <Icon name="list" size={15} />{list.length} departures · sorted by date
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
            {list.map((t, i) => (
              <div key={t.id} style={{ paddingBottom: 'var(--space-5)', borderBottom: i === list.length - 1 ? 0 : '1px solid var(--border-dark)' }}>
                <TourRow
                  photo={KB + t.photo} destination={t.destination} duration={t.duration}
                  departure={`Departs ${t.departure}`} price={t.price} blurb={t.blurb}
                  facts={t.facts} reverse={i % 2 === 1} onCta={() => onOpenTour(t.id)}
                  ctaLabel={t.seats === 0 ? 'Join the waitlist' : 'WhatsApp for seats'}
                  style={{ '--tour-row-cols': 'var(--row-cols,1fr)' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ background: 'var(--surface-light)' }} className="on-light">
        <div style={{ maxWidth: 'var(--page-max)', margin: '0 auto', padding: 'var(--section-y) var(--page-pad)', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', alignItems: 'flex-start' }}>
          <Badge tone="onLightBrand">Private tours</Badge>
          <h2 style={{ font: 'var(--type-section)', color: 'var(--text-on-light)', letterSpacing: 'var(--ls-display)', maxWidth: '24ch' }}>Any of these, on your own dates</h2>
          <p style={{ font: 'var(--type-body)', color: 'var(--text-on-light-secondary)', maxWidth: '52ch' }}>
            Same itineraries, your own coach or Prado, your own schedule. Tell us the group size and we will quote the same day.
          </p>
          <Button variant="onLight" icon="message-circle" href={`https://wa.me/${window.TREO.phone.replace(/\D/g, '')}`}>Get a private quote</Button>
        </div>
      </section>
    </>
  );
}

Object.assign(window, { ToursScreen });
