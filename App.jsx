const DS = window.TreoTravelsDesignSystem_12e4e4 || {};
const { SiteHeader, SiteFooter, StickyWhatsApp } = DS;
const AB = '../../';

const REQUIRED = ['SiteHeader', 'SiteFooter', 'StickyWhatsApp', 'TourCard', 'TourRow', 'DepartureBoard', 'InclusionsGrid', 'ItineraryDay', 'TrustStrip', 'SectionHeader', 'InquiryForm', 'Field'];

function BundleNotice({ missing }) {
  return (
    <div style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', padding: 40, background: 'var(--surface-base)' }}>
      <div style={{ maxWidth: 520, display: 'flex', flexDirection: 'column', gap: 14, padding: 28, background: 'var(--surface-raised)', border: '1px solid var(--border-dark)', borderRadius: 'var(--radius-card)' }}>
        <h1 style={{ font: 'var(--type-card-title)', color: 'var(--text-primary)', letterSpacing: 'var(--ls-display)' }}>Design system bundle not compiled yet</h1>
        <p style={{ font: 'var(--type-body)', fontSize: 'var(--fs-300)', color: 'var(--text-secondary)' }}>
          <code>_ds_bundle.js</code> is missing {missing.length} export{missing.length === 1 ? '' : 's'} this kit needs. It recompiles automatically — reload once it has.
        </p>
        <code style={{ font: 'var(--fw-medium) var(--fs-200)/1.6 var(--font-num)', color: 'var(--teal-300)', wordBreak: 'break-word' }}>{missing.join(', ')}</code>
      </div>
    </div>
  );
}

const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'departures', label: 'Departures' },
  { id: 'tours', label: 'Tours' },
  { id: 'private', label: 'Private tours' },
  { id: 'services', label: 'Umrah & visa' },
];

function App() {
  const missing = REQUIRED.filter((k) => !DS[k]);
  if (missing.length) return <BundleNotice missing={missing} />;
  return <Site />;
}

function Site() {
  const [screen, setScreen] = React.useState('home');
  const [tourId, setTourId] = React.useState('hunza');
  const openTour = (id) => { setTourId(id); setScreen('tour'); window.scrollTo(0, 0); };
  const go = (id) => { setScreen(id); window.scrollTo(0, 0); };
  const tour = window.TREO.tours.find((t) => t.id === tourId) || window.TREO.tours[0];
  const stickyPrice = screen === 'tour' ? tour.price : window.TREO.departures[0].price;
  const stickyMsg = screen === 'tour'
    ? `Hi Treo, I want seats on the ${tour.departure} ${tour.destination} departure.`
    : 'Hi Treo, which departures still have seats?';
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--surface-base)' }}>
      <SiteHeader links={NAV} active={screen} assetBase={AB} phone={window.TREO.phone} onNavigate={go} />
      <main style={{ flex: 1 }}>
        {screen === 'home' ? <window.LandingScreen onJump={go} onOpenTour={openTour} /> : null}
        {screen === 'departures' ? <window.DeparturesScreen onOpenTour={openTour} /> : null}
        {screen === 'tours' ? <window.ToursScreen onOpenTour={openTour} /> : null}
        {screen === 'private' ? <window.PrivateTourScreen /> : null}
        {screen === 'tour' ? <window.TourDetailScreen tourId={tourId} onOpenTour={openTour} /> : null}
        {screen === 'services' ? <window.ServicesScreen /> : null}
      </main>
      <SiteFooter assetBase={AB} phone={window.TREO.phone} columns={window.TREO.footerColumns} socials={[{ icon: 'instagram' }, { icon: 'facebook' }, { icon: 'linkedin' }]} />
      <StickyWhatsApp label={screen === 'tour' ? tour.destination : 'From'} price={stickyPrice} note="per person" phone={window.TREO.phone} message={stickyMsg} />
    </div>
  );
}

Object.assign(window, { App });
