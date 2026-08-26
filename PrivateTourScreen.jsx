const DSP = window.TreoTravelsDesignSystem_12e4e4;
const { SectionHeader, Field, Input, Select, Textarea, Button, Badge, Chip, Icon, ServiceIconRow, LicenseBadge, PolicyTerms } = DSP;
const Reveal = DSP.Reveal || (({ children, style }) => <div style={style}>{children}</div>);
const PB = '../../';

const DESTINATIONS = ['Hunza, Khunjerab & Naltar', 'Skardu, Basho & Deosai', 'Fairy Meadows & Nanga Parbat', 'Naran, Shogran & Balakot', 'Neelum Valley & Kashmir', 'Swat, Kalam & Malam Jabba', 'Gorakh Hills (weekend)', 'Not sure — suggest something'];
const VEHICLES = ['Prado / 4x4 (up to 6)', 'Hiace / Grand Cabin (up to 13)', 'Coaster (up to 20)', 'AC sleeper coach (20+)', 'Advise me'];
const HOTELS = ['Standard — clean, 3-star equivalent', 'Deluxe — best available in the valley', 'Mixed — deluxe where it matters'];
const OCCASIONS = ['Family trip', 'Friends group', 'Honeymoon', 'Office / corporate', 'Educational / university', 'Other'];

function Summary({ form }) {
  const rows = [
    ['Destination', form.dest],
    ['Travellers', `${form.adults} adults${Number(form.kids) > 0 ? ` · ${form.kids} children` : ''}`],
    ['Dates', form.dates || 'flexible'],
    ['Nights', form.nights],
    ['Vehicle', form.vehicle],
    ['Hotels', form.hotel],
    ['Occasion', form.occasion],
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: 'var(--pad-card-lg)', background: 'var(--surface-card-light)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-card)' }}>
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, font: 'var(--fw-bold) var(--fs-200)/1 var(--font-body)', letterSpacing: 'var(--ls-label)', textTransform: 'uppercase', color: 'var(--text-brand-on-light)' }}>
        <Icon name="clipboard-list" size={15} />Your brief
      </span>
      <dl style={{ margin: 0, display: 'flex', flexDirection: 'column', gap: 9 }}>
        {rows.map(([k, v]) => (
          <div key={k} style={{ display: 'flex', justifyContent: 'space-between', gap: 14, paddingBottom: 9, borderBottom: '1px solid var(--border-light)' }}>
            <dt style={{ font: 'var(--fw-medium) var(--fs-200)/1.4 var(--font-body)', letterSpacing: 'var(--ls-wide)', textTransform: 'uppercase', color: 'var(--text-on-light-muted)', flex: '0 0 auto' }}>{k}</dt>
            <dd className="tnum" style={{ margin: 0, font: 'var(--fw-semibold) var(--fs-300)/1.45 var(--font-body)', color: 'var(--text-on-light)', textAlign: 'right' }}>{v}</dd>
          </div>
        ))}
      </dl>
      <p style={{ margin: 0, font: 'var(--fw-medium) var(--fs-200)/1.55 var(--font-body)', color: 'var(--text-on-light-muted)' }}>
        We quote the same day, itemised — vehicle, hotels, meals and jeeps listed separately so you can see what moves the price.
      </p>
    </div>
  );
}

function PrivateTourScreen() {
  const [form, setForm] = React.useState({
    dest: DESTINATIONS[0], adults: '6', kids: '0', dates: '', nights: '8',
    vehicle: VEHICLES[1], hotel: HOTELS[0], occasion: OCCASIONS[0], name: '', phone: '', note: '',
  });
  const [sent, setSent] = React.useState(false);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    const msg = [
      'Hi Treo, I would like a private tour quote.',
      `Destination: ${form.dest}`,
      `Travellers: ${form.adults} adults${Number(form.kids) > 0 ? `, ${form.kids} children` : ''}`,
      `Dates: ${form.dates || 'flexible'}`,
      `Nights: ${form.nights}`,
      `Vehicle: ${form.vehicle}`,
      `Hotels: ${form.hotel}`,
      `Occasion: ${form.occasion}`,
      form.note ? `Notes: ${form.note}` : '',
      form.name ? `Name: ${form.name}` : '',
    ].filter(Boolean).join('\n');
    window.open(`https://wa.me/${window.TREO.phone.replace(/\D/g, '')}?text=${encodeURIComponent(msg)}`, '_blank');
  };
  return (
    <>
      <section style={{ background: 'var(--surface-base)' }}>
        <div style={{ maxWidth: 'var(--page-max)', margin: '0 auto', padding: 'var(--space-5) var(--page-pad) var(--space-4)' }}>
          <Reveal>
            <SectionHeader
              eyebrow="Private tours"
              title="Build your own trip"
              sub="Most of what we run is private — a family, a group of friends, or an office. Tell us the shape of it and we quote the same day."
            />
          </Reveal>
          <Reveal delay={70}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 'var(--space-2)' }}>
              <Chip icon="calendar-days" tone="brand">Your dates</Chip>
              <Chip icon="car-front">Your vehicle</Chip>
              <Chip icon="receipt">Itemised quote</Chip>
              <Chip icon="clock">Same-day reply</Chip>
            </div>
          </Reveal>
          <Reveal delay={100}><ServiceIconRow assetBase={PB} size={26} /></Reveal>
        </div>
      </section>
      <section style={{ background: 'var(--surface-light)' }} className="on-light">
        <div style={{ maxWidth: 'var(--page-max)', margin: '0 auto', padding: 'var(--section-y) var(--page-pad)', display: 'grid', gridTemplateColumns: 'var(--faq-cols,1fr)', gap: 'var(--space-4)', alignItems: 'start' }}>
          <Reveal>
            <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', padding: 'var(--pad-card-lg)', background: 'var(--surface-card-light)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-card)' }}>
              <h3 style={{ font: 'var(--type-card-title)', color: 'var(--text-on-light)', letterSpacing: 'var(--ls-display)' }}>Tell us the trip</h3>
              {sent ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: 'var(--space-2)', borderRadius: 'var(--radius-sm)', background: 'var(--teal-050)', color: 'var(--teal-800)', font: 'var(--fw-semibold) var(--fs-300)/1.5 var(--font-body)' }}>
                  <Icon name="check-check" size={18} />Opening WhatsApp with your brief attached.
                </div>
              ) : null}
              <Field label="Where do you want to go?" required>
                <Select options={DESTINATIONS} value={form.dest} onChange={set('dest')} />
              </Field>
              <div style={{ display: 'grid', gridTemplateColumns: 'var(--form-cols,1fr)', gap: 'var(--space-2)' }}>
                <Field label="Adults" required><Input tabular type="number" min="1" max="60" value={form.adults} onChange={set('adults')} /></Field>
                <Field label="Children under 12"><Input tabular type="number" min="0" max="30" value={form.kids} onChange={set('kids')} /></Field>
                <Field label="Rough dates" hint="Month is enough"><Input value={form.dates} onChange={set('dates')} placeholder="Late September" /></Field>
                <Field label="Nights" hint="We will suggest if unsure"><Input tabular type="number" min="1" max="25" value={form.nights} onChange={set('nights')} /></Field>
              </div>
              <Field label="Vehicle" hint="Group size usually decides this">
                <Select options={VEHICLES} value={form.vehicle} onChange={set('vehicle')} />
              </Field>
              <Field label="Hotel standard">
                <Select options={HOTELS} value={form.hotel} onChange={set('hotel')} />
              </Field>
              <Field label="What is the occasion?">
                <Select options={OCCASIONS} value={form.occasion} onChange={set('occasion')} />
              </Field>
              <div style={{ display: 'grid', gridTemplateColumns: 'var(--form-cols,1fr)', gap: 'var(--space-2)' }}>
                <Field label="Your name" required><Input value={form.name} onChange={set('name')} placeholder="Full name" required /></Field>
                <Field label="WhatsApp number" required hint="Reply within the hour, 10am–10pm PKT"><Input tabular inputMode="tel" value={form.phone} onChange={set('phone')} placeholder="03xx xxxxxxx" required /></Field>
              </div>
              <Field label="Anything we should know?">
                <Textarea value={form.note} onChange={set('note')} placeholder="Elderly parents travelling, need ground-floor rooms…" />
              </Field>
              <Button type="submit" variant="whatsapp" size="lg" icon="message-circle" fullWidth>Send brief on WhatsApp</Button>
              <p style={{ margin: 0, font: 'var(--fw-medium) var(--fs-200)/1.5 var(--font-body)', color: 'var(--text-on-light-muted)' }}>
                No payment at this stage. A quote is free and we do not chase you afterwards.
              </p>
            </form>
          </Reveal>
          <div style={{ position: 'var(--faq-sticky,static)', top: 96, alignSelf: 'start' }}><Summary form={form} /></div>
        </div>
      </section>
      <section style={{ background: 'var(--surface-base)' }}>
        <div style={{ maxWidth: 'var(--page-max)', margin: '0 auto', padding: 'var(--section-y) var(--page-pad)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          <Reveal><SectionHeader eyebrow="The same terms as our group tours" title="Deposit &amp; cancellation" sub="Private or fixed departure, the money rules do not change." /></Reveal>
          <Reveal delay={70}>
            <PolicyTerms tone="dark" deposit={window.TREO.policy.deposit} cancellation={window.TREO.policy.cancellation} note={window.TREO.policy.note} />
          </Reveal>
          <Reveal delay={120}><LicenseBadge assetBase={PB} /></Reveal>
        </div>
      </section>
    </>
  );
}

Object.assign(window, { PrivateTourScreen });
