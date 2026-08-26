const { SectionHeader, PhotoScrim, Badge, Button, Icon, LicenseBadge, InquiryForm, TrustStrip, Chip } = window.TreoTravelsDesignSystem_12e4e4;
const SB = '../../';

function ServiceCard({ s }) {
  return (
    <article style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', background: 'var(--surface-raised)', border: '1px solid var(--border-dark)', borderRadius: 'var(--radius-card)', boxShadow: 'var(--shadow-card)' }}>
      {s.photo ? (
        <PhotoScrim src={SB + s.photo} ratio="16/9" scrim="bottom" radius="0" />
      ) : (
        <div style={{ aspectRatio: '16/9', display: 'grid', placeItems: 'center', gap: 8, background: 'var(--surface-brand-deep)', borderBottom: '1px solid var(--border-dark)' }}>
          <Icon name={s.lucide} size={40} style={{ color: 'rgba(255,255,255,.5)' }} />
          <span style={{ font: 'var(--fw-bold) var(--fs-100)/1 var(--font-body)', letterSpacing: 'var(--ls-label)', textTransform: 'uppercase', color: 'rgba(255,255,255,.5)' }}>Photo to come from Treo</span>
        </div>
      )}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, padding: 'var(--pad-card)', flex: 1 }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, font: 'var(--type-eyebrow)', letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase', color: 'var(--text-brand)' }}>
          <Icon name={s.lucide} size={15} />{s.sub}
        </span>
        <h3 style={{ font: 'var(--type-card-title)', color: 'var(--text-primary)', letterSpacing: 'var(--ls-display)' }}>{s.title}</h3>
        <p style={{ font: 'var(--type-body)', fontSize: 'var(--fs-300)', color: 'var(--text-secondary)' }}>{s.body}</p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, marginTop: 'auto', paddingTop: 12, borderTop: '1px solid var(--border-dark)' }}>
          <span className="tnum" style={{ font: 'var(--fw-bold) var(--fs-400)/1 var(--font-num)', color: 'var(--text-price)' }}>{s.price}</span>
          <Button variant="whatsapp" size="sm" icon="message-circle" href={`https://wa.me/${window.TREO.phone.replace(/\D/g, '')}`}>Enquire</Button>
        </div>
      </div>
    </article>
  );
}

function ServicesScreen() {
  return (
    <>
      <section style={{ background: 'var(--surface-base)' }}>
        <div style={{ maxWidth: 'var(--page-max)', margin: '0 auto', padding: 'var(--space-5) var(--page-pad) var(--space-3)' }}>
          <SectionHeader eyebrow="Beyond the north" title="Umrah, tickets &amp; visas" sub="The same office, the same licence, the same WhatsApp number." />
          <div style={{ display: 'grid', gridTemplateColumns: 'var(--cards-2,1fr)', gap: 'var(--gap-grid)' }}>
            {window.TREO.services.map((s) => <ServiceCard key={s.title} s={s} />)}
          </div>
        </div>
      </section>
      <section style={{ background: 'var(--surface-light)' }} className="on-light">
        <div style={{ maxWidth: 'var(--page-max)', margin: '0 auto', padding: 'var(--section-y) var(--page-pad)', display: 'grid', gridTemplateColumns: 'var(--split,1fr)', gap: 'var(--space-4)', alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', alignItems: 'flex-start' }}>
            <Badge tone="onLightBrand">Since 2018</Badge>
            <h2 style={{ font: 'var(--type-section)', color: 'var(--text-on-light)', letterSpacing: 'var(--ls-display)', maxWidth: '22ch' }}>A licensed operator, not a page on Instagram</h2>
            <p style={{ font: 'var(--type-body)', color: 'var(--text-on-light-secondary)', maxWidth: '54ch' }}>
              Treo Travels has run fixed-departure group tours out of Karachi since 2018 — 37 non-stop trips, a registered office on Shahrah-e-Faisal, and Government tour-operator licence #5618. Walk in, or send a message.
            </p>
            <LicenseBadge tone="light" assetBase={SB} />
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              <Chip tone="light" icon="map-pin">Shahrah-e-Faisal, Karachi</Chip>
              <Chip tone="light" icon="clock">10am – 10pm PKT</Chip>
            </div>
            <TrustStrip tone="light" items={window.TREO.trust} style={{ width: '100%', '--trust-cols': 'repeat(auto-fit,minmax(190px,1fr))' }} />
          </div>
          <InquiryForm phone={window.TREO.phone} title="Ask about a service" sub="Umrah, a ticket quote or a visa file — send the details and we will reply on WhatsApp." departures={['Umrah packages', 'Air ticketing', 'Visa services', 'Private tour quote']} />
        </div>
      </section>
    </>
  );
}

Object.assign(window, { ServicesScreen });
