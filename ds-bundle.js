/* @ds-bundle: {"format":4,"namespace":"TreoTravelsDesignSystem_12e4e4","components":[{"name":"LicenseBadge","sourcePath":"components/brand/LicenseBadge.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"ServiceIcon","sourcePath":"components/brand/ServiceIcon.jsx"},{"name":"ServiceIconRow","sourcePath":"components/brand/ServiceIcon.jsx"},{"name":"Accordion","sourcePath":"components/content/Accordion.jsx"},{"name":"Annotation","sourcePath":"components/content/Annotation.jsx"},{"name":"CountUp","sourcePath":"components/content/CountUp.jsx"},{"name":"PhotoScrim","sourcePath":"components/content/PhotoScrim.jsx"},{"name":"Reveal","sourcePath":"components/content/Reveal.jsx"},{"name":"ReviewCard","sourcePath":"components/content/ReviewCard.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"PriceTag","sourcePath":"components/core/PriceTag.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Field.jsx"},{"name":"Textarea","sourcePath":"components/forms/Field.jsx"},{"name":"Select","sourcePath":"components/forms/Field.jsx"},{"name":"InquiryForm","sourcePath":"components/forms/InquiryForm.jsx"},{"name":"SectionHeader","sourcePath":"components/layout/SectionHeader.jsx"},{"name":"SiteFooter","sourcePath":"components/layout/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/layout/SiteHeader.jsx"},{"name":"StickyWhatsApp","sourcePath":"components/layout/StickyWhatsApp.jsx"},{"name":"TrustStrip","sourcePath":"components/layout/TrustStrip.jsx"},{"name":"DepartureBoard","sourcePath":"components/tours/DepartureBoard.jsx"},{"name":"DepartureRow","sourcePath":"components/tours/DepartureRow.jsx"},{"name":"InclusionsGrid","sourcePath":"components/tours/InclusionsGrid.jsx"},{"name":"ItineraryDay","sourcePath":"components/tours/ItineraryDay.jsx"},{"name":"PolicyTerms","sourcePath":"components/tours/PolicyTerms.jsx"},{"name":"TourCard","sourcePath":"components/tours/TourCard.jsx"},{"name":"TourRow","sourcePath":"components/tours/TourRow.jsx"}],"sourceHashes":{"components/brand/LicenseBadge.jsx":"7ad17980a781","components/brand/Logo.jsx":"8333de31865a","components/brand/ServiceIcon.jsx":"5a9acf71ced4","components/content/Accordion.jsx":"5718a300835b","components/content/Annotation.jsx":"2f5100ac8817","components/content/CountUp.jsx":"53bf495592f7","components/content/PhotoScrim.jsx":"fe52179d12eb","components/content/Reveal.jsx":"c3b96f766008","components/content/ReviewCard.jsx":"cbeac15aa5e0","components/core/Badge.jsx":"4f58c01967ab","components/core/Button.jsx":"87d4756613d1","components/core/Chip.jsx":"778bf7db1721","components/core/Icon.jsx":"d6e9417a73d8","components/core/PriceTag.jsx":"de2d4b43f39e","components/forms/Field.jsx":"289a9789ea26","components/forms/InquiryForm.jsx":"df152deb0580","components/layout/SectionHeader.jsx":"6dda21fab06d","components/layout/SiteFooter.jsx":"dd73f5baade1","components/layout/SiteHeader.jsx":"7fa422527a4a","components/layout/StickyWhatsApp.jsx":"126d251528df","components/layout/TrustStrip.jsx":"c8df72b50b9d","components/tours/DepartureBoard.jsx":"02f30f3f7b33","components/tours/DepartureRow.jsx":"73ee1fb32b2d","components/tours/InclusionsGrid.jsx":"15f4fd1c84f8","components/tours/ItineraryDay.jsx":"33b6e5c880bd","components/tours/PolicyTerms.jsx":"d192f6dd4762","components/tours/TourCard.jsx":"9982f3c23308","components/tours/TourRow.jsx":"31a5f0a265d4","ui_kits/website/App.jsx":"72d3c0f57d6e","ui_kits/website/DeparturesScreen.jsx":"b121dea2e77c","ui_kits/website/LandingHero.jsx":"f1e03dc170f9","ui_kits/website/LandingScreen.jsx":"1e0215f2a619","ui_kits/website/PrivateTourScreen.jsx":"8a1659094dc7","ui_kits/website/ServicesScreen.jsx":"72fd09641fd1","ui_kits/website/TourDetailScreen.jsx":"67678a045e89","ui_kits/website/ToursScreen.jsx":"e24203cd7df2","ui_kits/website/data.js":"9197c49abe2e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TreoTravelsDesignSystem_12e4e4 = window.TreoTravelsDesignSystem_12e4e4 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/LicenseBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function LicenseBadge({
  licenseNo = '5618',
  label = 'Govt. License',
  tone = 'dark',
  height = 34,
  assetBase = '',
  style,
  ...rest
}) {
  const light = tone === 'light';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      color: light ? 'var(--text-on-light)' : '#fff',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: `${assetBase}assets/seal-govt-license.png`,
    alt: "",
    style: {
      height,
      width: 'auto',
      filter: light ? 'invert(1) brightness(.25)' : 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-bold) var(--fs-100)/1 var(--font-body)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: light ? 'var(--text-on-light-muted)' : 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-bold) var(--fs-300)/1 var(--font-num)',
      fontVariantNumeric: 'var(--num-tabular)',
      letterSpacing: 'var(--ls-wide)'
    }
  }, "#", licenseNo)));
}
Object.assign(__ds_scope, { LicenseBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/LicenseBadge.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SRC = {
  white: 'assets/logo-lockup-white.png',
  dark: 'assets/logo-lockup-dark.png',
  badge: 'assets/logo-badge-summer2026.jpg'
};
function Logo({
  variant = 'white',
  height = 40,
  assetBase = '',
  style,
  ...rest
}) {
  const src = `${assetBase}${SRC[variant] || SRC.white}`;
  return /*#__PURE__*/React.createElement("img", _extends({
    src: src,
    alt: "Treo Travels",
    style: {
      height,
      width: 'auto',
      display: 'block',
      flex: '0 0 auto',
      borderRadius: variant === 'badge' ? '50%' : 0,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/ServiceIcon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SERVICES = {
  'hotel-stays': 'Hotel stays',
  'luxury-transport': 'Luxury transport',
  'delicious-meals': 'Delicious meals',
  'jeep-rides': 'Jeep rides',
  'tour-guide': 'Tour guide',
  'professional-photography': 'Professional photography'
};
function ServiceIcon({
  name,
  size = 26,
  label,
  tone = 'dark',
  assetBase = '',
  style,
  ...rest
}) {
  const caption = label === undefined ? SERVICES[name] : label;
  const light = tone === 'light';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6,
      width: caption ? 76 : 'auto',
      textAlign: 'center',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: `${assetBase}assets/icons/${name}.png`,
    alt: "",
    style: {
      height: size,
      width: 'auto',
      filter: light ? 'invert(1) brightness(.28)' : 'none'
    }
  }), caption ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-semibold) var(--fs-100)/1.25 var(--font-body)',
      letterSpacing: 'var(--ls-tight)',
      color: light ? 'var(--text-on-light-secondary)' : 'var(--text-secondary)'
    }
  }, caption) : null);
}
function ServiceIconRow({
  names = Object.keys(SERVICES),
  size = 26,
  labels = true,
  tone = 'dark',
  assetBase = '',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-2)',
      ...style
    }
  }, rest), names.map(n => /*#__PURE__*/React.createElement(ServiceIcon, {
    key: n,
    name: n,
    size: size,
    tone: tone,
    assetBase: assetBase,
    label: labels ? undefined : null
  })));
}
Object.assign(__ds_scope, { ServiceIcon, ServiceIconRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/ServiceIcon.jsx", error: String((e && e.message) || e) }); }

// components/content/Annotation.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Annotation({
  children,
  tone = 'light',
  underline = true,
  size = 22,
  rotate = -6,
  style,
  ...rest
}) {
  const color = tone === 'lime' ? 'var(--legacy-lime)' : tone === 'ink' ? 'var(--ink-800)' : '#fff';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 2,
      font: `var(--fw-semibold) ${size}px/1.1 var(--font-script)`,
      color,
      transform: `rotate(${rotate}deg)`,
      textShadow: tone === 'ink' ? 'none' : 'var(--text-shadow-soft)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", null, children), underline ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: '86%',
      height: 0,
      borderBottom: `1.5px solid ${color}`,
      borderRadius: '0 0 60% 60%',
      opacity: 0.75
    }
  }) : null);
}
Object.assign(__ds_scope, { Annotation });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Annotation.jsx", error: String((e && e.message) || e) }); }

// components/content/CountUp.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function CountUp({
  to = 0,
  duration = 900,
  prefix = '',
  suffix = '',
  grouped = true,
  style,
  ...rest
}) {
  const ref = React.useRef(null);
  const [val, setVal] = React.useState(0);
  const done = React.useRef(false);
  React.useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setVal(to);
      return;
    }
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) {
      setVal(to);
      return;
    }
    const io = new IntersectionObserver(entries => {
      if (!entries[0].isIntersecting || done.current) return;
      done.current = true;
      io.disconnect();
      const t0 = performance.now();
      const tick = t => {
        const p = Math.min(1, (t - t0) / duration);
        setVal(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, {
      threshold: 0.4
    });
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    style: {
      fontVariantNumeric: 'var(--num-tabular)',
      ...style
    }
  }, rest), prefix, grouped ? val.toLocaleString('en-US') : String(val), suffix);
}
Object.assign(__ds_scope, { CountUp });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/CountUp.jsx", error: String((e && e.message) || e) }); }

// components/content/PhotoScrim.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SCRIMS = {
  bottom: 'var(--scrim-bottom)',
  bottomHard: 'var(--scrim-bottom-hard)',
  top: 'var(--scrim-top)',
  full: 'var(--scrim-full)',
  left: 'var(--scrim-left)',
  flat: 'var(--scrim-flat)',
  none: 'transparent'
};
function PhotoScrim({
  src,
  alt = '',
  ratio = '16/10',
  scrim = 'bottom',
  radius = 'var(--radius-photo)',
  zoomOnHover,
  position = 'center',
  children,
  style,
  ...rest
}) {
  const [hot, setHot] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHot(true),
    onMouseLeave: () => setHot(false),
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: radius,
      aspectRatio: ratio,
      background: 'var(--ink-900)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    loading: "lazy",
    decoding: "async",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: position,
      transform: zoomOnHover && hot ? 'scale(1.045)' : 'scale(1)',
      transition: 'transform var(--dur-slow) var(--ease-out)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: SCRIMS[scrim] || SCRIMS.bottom,
      pointerEvents: 'none'
    }
  }), children ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: '100%'
    }
  }, children) : null);
}
Object.assign(__ds_scope, { PhotoScrim });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PhotoScrim.jsx", error: String((e && e.message) || e) }); }

// components/content/Reveal.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const OK = typeof window !== 'undefined' && !(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
function Reveal({
  children,
  delay = 0,
  y = 20,
  as = 'div',
  once = true,
  style,
  ...rest
}) {
  const ref = React.useRef(null);
  const [seen, setSeen] = React.useState(!OK);
  React.useEffect(() => {
    if (!OK || seen) return;
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) {
      setSeen(true);
      return;
    }
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setSeen(true);
          if (once) io.disconnect();
        } else if (!once) setSeen(false);
      });
    }, {
      rootMargin: '0px 0px -12% 0px',
      threshold: 0.12
    });
    io.observe(el);
    return () => io.disconnect();
  }, [once, seen]);
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    ref: ref,
    style: {
      opacity: seen ? 1 : 0,
      transform: seen ? 'none' : `translateY(${y}px)`,
      transition: `opacity var(--dur-slow) var(--ease-out) ${delay}ms,transform var(--dur-slow) var(--ease-out) ${delay}ms`,
      willChange: 'opacity,transform',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Reveal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Reveal.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  duration: {
    background: 'transparent',
    color: '#fff',
    border: '1.5px solid rgba(255,255,255,.55)'
  },
  brand: {
    background: 'var(--surface-brand)',
    color: '#fff',
    border: '1.5px solid transparent'
  },
  brandSoft: {
    background: 'rgba(53,196,191,.16)',
    color: 'var(--teal-300)',
    border: '1.5px solid rgba(53,196,191,.3)'
  },
  gold: {
    background: 'var(--gold-400)',
    color: 'var(--ink-1000)',
    border: '1.5px solid transparent'
  },
  neutral: {
    background: 'rgba(255,255,255,.1)',
    color: 'var(--text-secondary)',
    border: '1.5px solid transparent'
  },
  onLight: {
    background: 'var(--paper-300)',
    color: 'var(--text-on-light-secondary)',
    border: '1.5px solid transparent'
  },
  onLightBrand: {
    background: 'var(--teal-050)',
    color: 'var(--teal-800)',
    border: '1.5px solid var(--teal-100)'
  }
};
function Badge({
  children,
  tone = 'brand',
  tabular,
  square,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.brand;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      padding: 'var(--pad-badge)',
      ...t,
      borderRadius: square ? 'var(--radius-chip)' : 'var(--radius-badge)',
      font: 'var(--fw-bold) var(--fs-200)/1 var(--font-body)',
      letterSpacing: 'var(--ls-wide)',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      fontVariantNumeric: tabular ? 'var(--num-tabular)' : 'normal',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CDN = 'https://unpkg.com/lucide-static@0.544.0/icons/';
const cache = new Map();
function load(name) {
  const hit = cache.get(name);
  if (typeof hit === 'string') return Promise.resolve(hit);
  if (hit) return hit;
  const p = fetch(`${CDN}${name}.svg`).then(r => r.ok ? r.text() : Promise.reject(new Error(r.status))).then(txt => txt.replace(/<\?xml[^>]*\?>/g, '').replace(/\s(width|height)="[^"]*"/g, '').replace(/stroke="[^"]*"/g, 'stroke="currentColor"')).catch(() => '');
  cache.set(name, p);
  return p;
}

/* Lucide, inlined as real SVG so it inherits currentColor and survives image
   capture. Substitution: Treo's own artwork exists only for the six trip-service
   glyphs (see ServiceIcon) — everything else in the UI chrome uses Lucide at 2px
   stroke, the closest match to their thin white line icons. */
function Icon({
  name,
  size = 20,
  strokeColor,
  style,
  ...rest
}) {
  const cached = cache.get(name);
  const [svg, setSvg] = React.useState(() => typeof cached === 'string' ? cached : '');
  const [failed, setFailed] = React.useState(false);
  React.useEffect(() => {
    let live = true;
    Promise.resolve(load(name)).then(txt => {
      if (typeof txt === 'string') cache.set(name, txt);
      if (!live) return;
      setSvg(txt || '');
      setFailed(!txt);
    });
    return () => {
      live = false;
    };
  }, [name]);
  // Fallback if the SVG text could not be fetched: mask a coloured box with it.
  const maskFallback = failed ? {
    background: strokeColor || 'currentColor',
    WebkitMaskImage: `url(${CDN}${name}.svg)`,
    maskImage: `url(${CDN}${name}.svg)`,
    WebkitMaskSize: 'contain',
    maskSize: 'contain',
    WebkitMaskRepeat: 'no-repeat',
    maskRepeat: 'no-repeat',
    WebkitMaskPosition: 'center',
    maskPosition: 'center'
  } : null;
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true",
    dangerouslySetInnerHTML: {
      __html: svg
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: '0 0 auto',
      width: size,
      height: size,
      color: strokeColor || 'currentColor',
      ...maskFallback,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/content/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Accordion({
  items = [],
  tone = 'light',
  defaultOpen = -1,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  const light = tone === 'light';
  const line = light ? 'var(--border-light)' : 'var(--border-dark)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }, rest), items.map((it, i) => {
    const on = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: it.q,
      style: {
        borderTop: i === 0 ? `1px solid ${line}` : 0,
        borderBottom: `1px solid ${line}`
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => setOpen(on ? -1 : i),
      "aria-expanded": on,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        width: '100%',
        minHeight: 60,
        padding: '14px 0',
        background: 'none',
        border: 0,
        textAlign: 'left',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        font: 'var(--fw-semibold) var(--fs-500)/1.35 var(--font-body)',
        color: light ? 'var(--text-on-light)' : 'var(--text-primary)'
      }
    }, it.q), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: on ? 'minus' : 'plus',
      size: 20,
      style: {
        color: light ? 'var(--teal-700)' : 'var(--teal-400)'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateRows: on ? '1fr' : '0fr',
        transition: 'grid-template-rows var(--dur-base) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        paddingBottom: on ? 20 : 0,
        font: 'var(--fw-regular) var(--fs-400)/1.65 var(--font-body)',
        color: light ? 'var(--text-on-light-secondary)' : 'var(--text-secondary)',
        maxWidth: '62ch',
        opacity: on ? 1 : 0,
        transition: 'opacity var(--dur-base) var(--ease-out)'
      }
    }, it.a))));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/content/ReviewCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ReviewCard({
  name,
  trip,
  text,
  rating = 5,
  tone = 'dark',
  style,
  ...rest
}) {
  const light = tone === 'light';
  return /*#__PURE__*/React.createElement("blockquote", _extends({
    style: {
      margin: 0,
      height: '100%',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      padding: 'var(--pad-card-lg)',
      background: light ? 'var(--surface-card-light)' : 'var(--surface-raised)',
      border: `1px solid ${light ? 'var(--border-light)' : 'var(--border-dark)'}`,
      borderRadius: 'var(--radius-card)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 3,
      color: 'var(--gold-400)'
    }
  }, Array.from({
    length: rating
  }).map((_, i) => /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    key: i,
    name: "star",
    size: 14
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--fw-regular) var(--fs-400)/1.65 var(--font-body)',
      color: light ? 'var(--text-on-light-secondary)' : 'var(--text-secondary)'
    }
  }, text), /*#__PURE__*/React.createElement("footer", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3,
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-bold) var(--fs-300)/1 var(--font-body)',
      color: light ? 'var(--text-on-light)' : 'var(--text-primary)'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-medium) var(--fs-200)/1 var(--font-body)',
      color: light ? 'var(--text-on-light-muted)' : 'var(--text-faint)',
      fontVariantNumeric: 'var(--num-tabular)'
    }
  }, trip)));
}
Object.assign(__ds_scope, { ReviewCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ReviewCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    padding: 'var(--pad-btn-sm)',
    fontSize: 'var(--fs-200)',
    minHeight: 36,
    gap: 6
  },
  md: {
    padding: '12px 18px',
    fontSize: 'var(--fs-300)',
    minHeight: 'var(--tap-min)',
    gap: 8
  },
  lg: {
    padding: 'var(--pad-btn)',
    fontSize: 'var(--fs-400)',
    minHeight: 52,
    gap: 10
  }
};
const VARIANTS = {
  whatsapp: {
    background: 'var(--whatsapp)',
    color: 'var(--ink-1000)',
    border: '1.5px solid transparent',
    hover: '#3BE07C'
  },
  primary: {
    background: 'var(--surface-brand)',
    color: '#fff',
    border: '1.5px solid transparent',
    hover: 'var(--teal-600)'
  },
  secondary: {
    background: 'transparent',
    color: 'var(--text-primary)',
    border: '1.5px solid var(--border-dark-strong)',
    hover: 'rgba(255,255,255,.08)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-brand)',
    border: '1.5px solid transparent',
    hover: 'rgba(53,196,191,.12)'
  },
  onLight: {
    background: 'var(--ink-800)',
    color: '#fff',
    border: '1.5px solid transparent',
    hover: 'var(--ink-700)'
  },
  onLightOutline: {
    background: 'transparent',
    color: 'var(--text-on-light)',
    border: '1.5px solid var(--border-light-strong)',
    hover: 'rgba(26,31,36,.05)'
  }
};
function Button({
  children,
  variant = 'whatsapp',
  size = 'md',
  icon,
  iconRight,
  fullWidth,
  disabled,
  href,
  onClick,
  style,
  ...rest
}) {
  const v = VARIANTS[variant] || VARIANTS.whatsapp;
  const s = SIZES[size] || SIZES.md;
  const [hot, setHot] = React.useState(false);
  const [down, setDown] = React.useState(false);
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: onClick,
    disabled: disabled,
    onMouseEnter: () => setHot(true),
    onMouseLeave: () => {
      setHot(false);
      setDown(false);
    },
    onMouseDown: () => setDown(true),
    onMouseUp: () => setDown(false),
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : 'auto',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      minHeight: s.minHeight,
      padding: s.padding,
      boxSizing: 'border-box',
      font: `var(--fw-bold) ${s.fontSize}/1 var(--font-body)`,
      letterSpacing: 'var(--ls-wide)',
      textTransform: 'uppercase',
      textDecoration: 'none',
      background: hot && !disabled ? v.hover : v.background,
      color: v.color,
      border: v.border,
      borderRadius: 'var(--radius-btn)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      whiteSpace: 'nowrap',
      transform: down && !disabled ? 'scale(var(--press-scale))' : 'none',
      transition: 'background-color var(--dur-fast) var(--ease-out),transform var(--dur-instant) var(--ease-out),border-color var(--dur-fast) var(--ease-out)',
      ...style
    }
  }, rest), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'sm' ? 15 : 17
  }) : null, children, iconRight ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: size === 'sm' ? 15 : 17
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  dark: {
    background: 'rgba(255,255,255,.07)',
    color: 'var(--text-secondary)',
    border: '1px solid var(--border-dark)'
  },
  light: {
    background: 'var(--paper-000)',
    color: 'var(--text-on-light-secondary)',
    border: '1px solid var(--border-light)'
  },
  brand: {
    background: 'rgba(53,196,191,.12)',
    color: 'var(--teal-300)',
    border: '1px solid rgba(53,196,191,.28)'
  }
};
function Chip({
  children,
  icon,
  tone = 'dark',
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.dark;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: 'var(--pad-chip)',
      ...t,
      borderRadius: 'var(--radius-chip)',
      font: 'var(--fw-semibold) var(--fs-200)/1 var(--font-body)',
      letterSpacing: 'var(--ls-tight)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 14
  }) : null, children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/core/PriceTag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: 17,
  md: 24,
  lg: 30
};
function PriceTag({
  amount,
  currency = 'RS.',
  suffix = '/-',
  note,
  size = 'md',
  variant = 'plain',
  per,
  style,
  ...rest
}) {
  const fs = SIZES[size] || SIZES.md;
  const onLight = variant === 'light';
  const chip = variant === 'chip';
  const amountColor = onLight ? 'var(--text-on-light)' : 'var(--text-price)';
  const metaColor = onLight ? 'var(--text-on-light-muted)' : 'var(--text-secondary)';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      gap: 2,
      alignItems: 'flex-start',
      background: chip ? 'var(--surface-brand)' : 'transparent',
      padding: chip ? '8px 12px' : 0,
      borderRadius: chip ? 'var(--radius-chip)' : 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'baseline',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: `var(--fw-bold) ${Math.round(fs * 0.5)}px/1 var(--font-body)`,
      letterSpacing: 'var(--ls-wide)',
      color: chip ? 'rgba(255,255,255,.8)' : metaColor
    }
  }, currency), /*#__PURE__*/React.createElement("span", {
    style: {
      font: `var(--fw-bold) ${fs}px/1 var(--font-num)`,
      fontVariantNumeric: 'var(--num-tabular)',
      letterSpacing: 'var(--ls-tight)',
      color: chip ? '#fff' : amountColor
    }
  }, typeof amount === 'number' ? amount.toLocaleString('en-US') : amount), /*#__PURE__*/React.createElement("span", {
    style: {
      font: `var(--fw-bold) ${Math.round(fs * 0.55)}px/1 var(--font-num)`,
      color: chip ? 'rgba(255,255,255,.8)' : amountColor
    }
  }, suffix), note ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: `var(--fw-semibold) ${Math.round(fs * 0.44)}px/1 var(--font-body)`,
      letterSpacing: 'var(--ls-wide)',
      textTransform: 'uppercase',
      color: chip ? 'rgba(255,255,255,.8)' : metaColor
    }
  }, note) : null), per ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-medium) var(--fs-100)/1.2 var(--font-body)',
      letterSpacing: 'var(--ls-wide)',
      textTransform: 'uppercase',
      color: chip ? 'rgba(255,255,255,.72)' : metaColor
    }
  }, per) : null);
}
Object.assign(__ds_scope, { PriceTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/PriceTag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Field({
  label,
  hint,
  error,
  required,
  tone = 'light',
  children,
  style,
  ...rest
}) {
  const light = tone === 'light';
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      minWidth: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-bold) var(--fs-100)/1 var(--font-body)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: light ? 'var(--text-on-light-secondary)' : 'var(--text-muted)'
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--teal-600)'
    }
  }, " *") : null), children, error ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-semibold) var(--fs-200)/1.4 var(--font-body)',
      color: light ? 'var(--teal-800)' : 'var(--teal-300)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-medium) var(--fs-200)/1.4 var(--font-body)',
      color: light ? 'var(--text-on-light-muted)' : 'var(--text-faint)'
    }
  }, hint) : null);
}
function baseStyle(light, invalid) {
  return {
    width: '100%',
    minHeight: 'var(--tap-min)',
    padding: '11px 13px',
    boxSizing: 'border-box',
    font: 'var(--fw-medium) var(--fs-400)/1.3 var(--font-body)',
    color: light ? 'var(--text-on-light)' : '#fff',
    background: light ? 'var(--surface-card-light)' : 'rgba(255,255,255,.06)',
    border: `1.5px solid ${invalid ? 'var(--teal-600)' : light ? 'var(--border-light-strong)' : 'var(--border-dark-strong)'}`,
    borderRadius: 'var(--radius-input)',
    outline: 'none',
    transition: 'var(--transition-color)'
  };
}
function Input({
  tone = 'light',
  invalid,
  tabular,
  style,
  ...rest
}) {
  const light = tone === 'light';
  return /*#__PURE__*/React.createElement("input", _extends({
    style: {
      ...baseStyle(light, invalid),
      fontVariantNumeric: tabular ? 'var(--num-tabular)' : 'normal',
      ...style
    },
    onFocus: e => {
      e.currentTarget.style.borderColor = 'var(--focus-ring)';
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = invalid ? 'var(--teal-600)' : light ? 'var(--border-light-strong)' : 'var(--border-dark-strong)';
    }
  }, rest));
}
function Textarea({
  tone = 'light',
  invalid,
  rows = 3,
  style,
  ...rest
}) {
  const light = tone === 'light';
  return /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    style: {
      ...baseStyle(light, invalid),
      resize: 'vertical',
      lineHeight: 'var(--lh-body)',
      ...style
    }
  }, rest));
}
function Select({
  tone = 'light',
  invalid,
  options = [],
  style,
  ...rest
}) {
  const light = tone === 'light';
  const arrow = light ? '%231A1F24' : '%23ffffff';
  return /*#__PURE__*/React.createElement("select", _extends({
    style: {
      ...baseStyle(light, invalid),
      appearance: 'none',
      cursor: 'pointer',
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='${arrow}' stroke-width='2.5' stroke-linecap='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right 12px center',
      paddingRight: 36,
      ...style
    }
  }, rest), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value ?? o,
    value: o.value ?? o
  }, o.label ?? o)));
}
Object.assign(__ds_scope, { Field, Input, Textarea, Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/InquiryForm.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function InquiryForm({
  departures = [],
  tone = 'light',
  title = 'Reserve your seats',
  sub = 'Send your details and we will confirm availability on WhatsApp.',
  phone,
  onSubmit,
  style,
  ...rest
}) {
  const light = tone === 'light';
  const [sent, setSent] = React.useState(false);
  const [form, setForm] = React.useState({
    name: '',
    phone: '',
    trip: departures[0] || '',
    people: '2',
    note: ''
  });
  const set = k => e => setForm(f => ({
    ...f,
    [k]: e.target.value
  }));
  const submit = e => {
    e.preventDefault();
    setSent(true);
    onSubmit && onSubmit(form);
    if (phone) {
      const msg = `Hi Treo, I'd like seats.\nName: ${form.name}\nTrip: ${form.trip}\nTravellers: ${form.people}${form.note ? `\nNote: ${form.note}` : ''}`;
      window.open(`https://wa.me/${phone.replace(/\D/g, '')}?text=${encodeURIComponent(msg)}`, '_blank');
    }
  };
  return /*#__PURE__*/React.createElement("form", _extends({
    onSubmit: submit,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      padding: 'var(--pad-card-lg)',
      background: light ? 'var(--surface-card-light)' : 'var(--surface-raised)',
      border: `1px solid ${light ? 'var(--border-light)' : 'var(--border-dark)'}`,
      borderRadius: 'var(--radius-card)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--type-card-title)',
      letterSpacing: 'var(--ls-display)',
      color: light ? 'var(--text-on-light)' : 'var(--text-primary)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      fontSize: 'var(--fs-300)',
      color: light ? 'var(--text-on-light-secondary)' : 'var(--text-secondary)'
    }
  }, sub)), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: 'var(--space-2)',
      borderRadius: 'var(--radius-sm)',
      background: light ? 'var(--teal-050)' : 'rgba(53,196,191,.12)',
      color: light ? 'var(--teal-800)' : 'var(--teal-300)',
      font: 'var(--fw-semibold) var(--fs-300)/1.45 var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check-check",
    size: 18
  }), "Opening WhatsApp \u2014 we reply within an hour, 10am\u201310pm PKT.") : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'var(--form-cols,1fr)',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: "Your name",
    required: true,
    tone: tone
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, {
    tone: tone,
    value: form.name,
    onChange: set('name'),
    placeholder: "Full name",
    required: true
  })), /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: "WhatsApp number",
    required: true,
    tone: tone,
    hint: "We reply within an hour, 10am\u201310pm PKT"
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, {
    tone: tone,
    tabular: true,
    inputMode: "tel",
    value: form.phone,
    onChange: set('phone'),
    placeholder: "03xx xxxxxxx",
    required: true
  })), /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: "Which departure?",
    tone: tone
  }, /*#__PURE__*/React.createElement(__ds_scope.Select, {
    tone: tone,
    options: departures.length ? departures : ['Not sure yet — advise me'],
    value: form.trip,
    onChange: set('trip')
  })), /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: "Travellers",
    tone: tone
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, {
    tone: tone,
    tabular: true,
    type: "number",
    min: "1",
    max: "30",
    value: form.people,
    onChange: set('people')
  }))), /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: "Anything we should know?",
    tone: tone
  }, /*#__PURE__*/React.createElement(__ds_scope.Textarea, {
    tone: tone,
    value: form.note,
    onChange: set('note'),
    placeholder: "Family trip, need triple-share rooms\u2026"
  })), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    type: "submit",
    variant: "whatsapp",
    size: "lg",
    icon: "message-circle",
    fullWidth: true
  }, "Send on WhatsApp"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--fw-medium) var(--fs-200)/1.45 var(--font-body)',
      color: light ? 'var(--text-on-light-muted)' : 'var(--text-muted)'
    }
  }, "No payment now. Seats are held for 24 hours once we confirm."));
}
Object.assign(__ds_scope, { InquiryForm });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/InquiryForm.jsx", error: String((e && e.message) || e) }); }

// components/layout/SectionHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionHeader({
  eyebrow,
  title,
  sub,
  tone = 'dark',
  align = 'left',
  action,
  style,
  ...rest
}) {
  const light = tone === 'light';
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 'var(--space-3)',
      marginBottom: 'var(--space-3)',
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      alignItems: align === 'center' ? 'center' : 'flex-start'
    }
  }, eyebrow ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: light ? 'var(--text-brand-on-light)' : 'var(--text-brand)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 3,
      background: 'var(--marker-section)',
      borderRadius: 2
    }
  }), eyebrow) : null, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--type-section)',
      letterSpacing: 'var(--ls-display)',
      color: light ? 'var(--text-on-light)' : 'var(--text-primary)'
    }
  }, title), sub ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      color: light ? 'var(--text-on-light-secondary)' : 'var(--text-secondary)',
      maxWidth: '54ch'
    }
  }, sub) : null), action ? /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 0 auto'
    }
  }, action) : null);
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/layout/SiteFooter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SiteFooter({
  columns = [],
  address = 'Shahrah-e-Faisal, Karachi, Pakistan',
  phone,
  socials = [],
  assetBase = '',
  established = '2018',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      background: 'var(--ink-1000)',
      borderTop: '1px solid var(--border-dark)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: 'var(--space-6) var(--page-pad) var(--space-4)',
      display: 'grid',
      gridTemplateColumns: 'var(--footer-cols,1fr)',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "white",
    height: 52,
    assetBase: assetBase
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      fontSize: 'var(--fs-300)',
      color: 'var(--text-secondary)',
      maxWidth: '34ch'
    }
  }, "Fixed-departure group tours and private trips to northern Pakistan. Operating since ", established, "."), /*#__PURE__*/React.createElement(__ds_scope.LicenseBadge, {
    assetBase: assetBase,
    height: 30
  })), columns.map(col => /*#__PURE__*/React.createElement("nav", {
    key: col.title,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-bold) var(--fs-100)/1 var(--font-body)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-faint)'
    }
  }, col.title), col.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href || '#',
    style: {
      font: 'var(--fw-medium) var(--fs-300)/1.2 var(--font-body)',
      color: 'var(--text-secondary)',
      minHeight: 26,
      display: 'flex',
      alignItems: 'center'
    }
  }, l.label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-15)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-bold) var(--fs-100)/1 var(--font-body)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-faint)'
    }
  }, "Talk to us"), phone ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "whatsapp",
    icon: "message-circle",
    href: `https://wa.me/${phone.replace(/\D/g, '')}`
  }, phone) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 8,
      font: 'var(--fw-medium) var(--fs-300)/1.5 var(--font-body)',
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "map-pin",
    size: 16,
    style: {
      marginTop: 3,
      color: 'var(--teal-400)'
    }
  }), address), socials.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, socials.map(s => /*#__PURE__*/React.createElement("a", {
    key: s.icon,
    href: s.href || '#',
    "aria-label": s.icon,
    style: {
      display: 'grid',
      placeItems: 'center',
      width: 40,
      height: 40,
      borderRadius: 'var(--radius-pill)',
      border: '1px solid var(--border-dark)',
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: s.icon,
    size: 18
  })))) : null)), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: '14px var(--page-pad)',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10,
      justifyContent: 'space-between',
      font: 'var(--fw-medium) var(--fs-200)/1.4 var(--font-body)',
      color: 'var(--text-faint)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 ", new Date().getFullYear(), " Treo Travels. All rights reserved."), /*#__PURE__*/React.createElement("span", {
    className: "tnum"
  }, "Govt. Licence #5618 \xB7 Est. ", established))));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/layout/SiteHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SiteHeader({
  links = [],
  active,
  assetBase = '',
  phone,
  onNavigate,
  sticky = true,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      position: sticky ? 'sticky' : 'relative',
      top: 0,
      zIndex: 'var(--z-header)',
      background: 'rgba(18,22,26,.88)',
      backdropFilter: 'var(--blur-glass)',
      WebkitBackdropFilter: 'var(--blur-glass)',
      borderBottom: '1px solid var(--border-dark)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-2)',
      minHeight: 'var(--header-h)',
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: '0 var(--page-pad)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(links[0]?.id);
    },
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "white",
    height: 52,
    assetBase: assetBase
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'var(--nav-display,none)',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.id,
    href: `#${l.id}`,
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(l.id);
    },
    style: {
      font: 'var(--fw-bold) var(--fs-200)/1 var(--font-body)',
      letterSpacing: 'var(--ls-wide)',
      textTransform: 'uppercase',
      color: active === l.id ? 'var(--teal-400)' : 'var(--text-secondary)',
      paddingBottom: 3,
      borderBottom: `2px solid ${active === l.id ? 'var(--teal-700)' : 'transparent'}`
    }
  }, l.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, phone ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "whatsapp",
    size: "sm",
    icon: "message-circle",
    href: `https://wa.me/${phone.replace(/\D/g, '')}`
  }, "WhatsApp") : null, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setOpen(o => !o),
    "aria-label": "Menu",
    style: {
      display: 'var(--menu-display,grid)',
      placeItems: 'center',
      width: 44,
      height: 44,
      background: 'none',
      border: 0,
      color: '#fff',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: open ? 'x' : 'menu',
    size: 22
  })))), open ? /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      borderTop: '1px solid var(--border-dark)',
      background: 'var(--ink-900)'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.id,
    href: `#${l.id}`,
    onClick: e => {
      e.preventDefault();
      setOpen(false);
      onNavigate && onNavigate(l.id);
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      minHeight: 'var(--tap-min)',
      padding: '0 var(--page-pad)',
      borderBottom: '1px solid var(--border-dark)',
      font: 'var(--fw-bold) var(--fs-300)/1 var(--font-body)',
      letterSpacing: 'var(--ls-wide)',
      textTransform: 'uppercase',
      color: active === l.id ? 'var(--teal-400)' : 'var(--text-primary)'
    }
  }, l.label, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 17,
    style: {
      color: 'var(--text-faint)'
    }
  })))) : null);
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// components/layout/StickyWhatsApp.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StickyWhatsApp({
  label = 'From',
  price,
  note,
  cta = 'WhatsApp for seats',
  phone,
  message,
  onCta,
  style,
  ...rest
}) {
  const href = phone ? `https://wa.me/${phone.replace(/\D/g, '')}${message ? `?text=${encodeURIComponent(message)}` : ''}` : undefined;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'sticky',
      bottom: 0,
      zIndex: 'var(--z-sticky)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-2)',
      minHeight: 'var(--sticky-cta-h)',
      padding: '10px var(--page-pad)',
      background: 'rgba(12,15,18,.94)',
      backdropFilter: 'var(--blur-glass)',
      WebkitBackdropFilter: 'var(--blur-glass)',
      borderTop: '1px solid var(--border-dark)',
      boxShadow: 'var(--shadow-sticky)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-bold) var(--fs-100)/1 var(--font-body)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-faint)'
    }
  }, label), /*#__PURE__*/React.createElement(__ds_scope.PriceTag, {
    amount: price,
    size: "sm",
    note: note
  })), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "whatsapp",
    icon: "message-circle",
    href: href,
    onClick: onCta
  }, cta));
}
Object.assign(__ds_scope, { StickyWhatsApp });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/StickyWhatsApp.jsx", error: String((e && e.message) || e) }); }

// components/layout/TrustStrip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TrustStrip({
  items = [],
  tone = 'dark',
  style,
  ...rest
}) {
  const light = tone === 'light';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'grid',
      gridTemplateColumns: 'var(--trust-cols,repeat(auto-fit,minmax(190px,1fr)))',
      gap: 'var(--space-2)',
      padding: 'var(--space-3) 0',
      borderTop: `1px solid ${light ? 'var(--border-light)' : 'var(--border-dark)'}`,
      borderBottom: `1px solid ${light ? 'var(--border-light)' : 'var(--border-dark)'}`,
      ...style
    }
  }, rest), items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.label,
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: it.icon || 'shield-check',
    size: 20,
    style: {
      color: light ? 'var(--teal-700)' : 'var(--teal-400)',
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-bold) var(--fs-400)/1.1 var(--font-num)',
      fontVariantNumeric: 'var(--num-tabular)',
      color: light ? 'var(--text-on-light)' : 'var(--text-primary)'
    }
  }, it.label), it.sub ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-medium) var(--fs-200)/1.4 var(--font-body)',
      color: light ? 'var(--text-on-light-muted)' : 'var(--text-muted)'
    }
  }, it.sub) : null))));
}
Object.assign(__ds_scope, { TrustStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/TrustStrip.jsx", error: String((e && e.message) || e) }); }

// components/tours/DepartureRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function seatState(seats) {
  if (seats === 0) return {
    text: 'Full',
    color: 'var(--state-seats-out)',
    weight: 'var(--fw-bold)'
  };
  if (seats <= 4) return {
    text: `${seats} seat${seats === 1 ? '' : 's'} left`,
    color: 'var(--state-seats-low)',
    weight: 'var(--fw-bold)'
  };
  return {
    text: `${seats} seats`,
    color: 'var(--text-muted)',
    weight: 'var(--fw-medium)'
  };
}
function DepartureRow({
  day,
  month,
  destination,
  duration,
  seats,
  price,
  note,
  sold,
  statusLabel,
  index = 0,
  revealed = true,
  onClick,
  style,
  ...rest
}) {
  const [hot, setHot] = React.useState(false);
  const st = statusLabel ? {
    text: statusLabel,
    color: 'var(--text-muted)',
    weight: 'var(--fw-bold)'
  } : seatState(sold ? 0 : seats);
  const dim = !!statusLabel || sold || seats === 0;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: onClick ? 'button' : undefined,
    tabIndex: onClick ? 0 : undefined,
    onClick: onClick,
    onMouseEnter: () => setHot(true),
    onMouseLeave: () => setHot(false),
    style: {
      display: 'grid',
      gridTemplateColumns: '52px 1fr auto',
      alignItems: 'center',
      gap: 'var(--space-15)',
      padding: '13px var(--space-2)',
      borderTop: '1px solid rgba(255,255,255,.07)',
      background: hot && !dim ? 'rgba(255,255,255,.04)' : 'transparent',
      boxShadow: hot && !dim ? 'inset 3px 0 0 var(--teal-500)' : 'inset 3px 0 0 transparent',
      opacity: revealed ? dim ? 0.44 : 1 : 0,
      transform: revealed ? 'none' : 'rotateX(-72deg)',
      transformOrigin: 'top center',
      transition: `opacity var(--dur-flap) var(--ease-flap) ${index * 55}ms,transform var(--dur-flap) var(--ease-flap) ${index * 55}ms,background-color var(--dur-fast) var(--ease-out),box-shadow var(--dur-fast) var(--ease-out)`,
      cursor: onClick && !dim ? 'pointer' : 'default',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-bold) 22px/1 var(--font-num)',
      fontVariantNumeric: 'var(--num-tabular)',
      color: dim ? 'var(--text-muted)' : 'var(--text-deadline)',
      letterSpacing: 'var(--ls-tight)'
    }
  }, day), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-bold) var(--fs-100)/1 var(--font-body)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, month)), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-regular) var(--fs-500)/1.05 var(--font-display)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-display)',
      color: 'var(--text-primary)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, destination), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7,
      font: 'var(--fw-medium) var(--fs-200)/1 var(--font-body)',
      fontVariantNumeric: 'var(--num-tabular)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-secondary)',
      letterSpacing: 'var(--ls-wide)'
    }
  }, duration), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 3,
      height: 3,
      borderRadius: 999,
      background: 'var(--border-dark-strong)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: st.color,
      fontWeight: st.weight
    }
  }, st.text), note ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 3,
      height: 3,
      borderRadius: 999,
      background: 'var(--border-dark-strong)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, note)) : null)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-bold) var(--fs-500)/1 var(--font-num)',
      fontVariantNumeric: 'var(--num-tabular)',
      color: dim ? 'var(--text-muted)' : 'var(--text-price)',
      letterSpacing: 'var(--ls-tight)'
    }
  }, typeof price === 'number' ? price.toLocaleString('en-US') : price), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-bold) var(--fs-100)/1 var(--font-body)',
      letterSpacing: 'var(--ls-label)',
      color: 'var(--text-faint)'
    }
  }, "PKR")));
}
Object.assign(__ds_scope, { DepartureRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/tours/DepartureRow.jsx", error: String((e && e.message) || e) }); }

// components/tours/DepartureBoard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function DepartureBoard({
  title = 'Departures',
  origin = 'from Karachi',
  departures = [],
  footnote,
  onSelect,
  animate = true,
  style,
  ...rest
}) {
  const [revealed, setRevealed] = React.useState(!animate);
  React.useEffect(() => {
    if (!animate) return;
    const t = setTimeout(() => setRevealed(true), 90);
    return () => clearTimeout(t);
  }, [animate]);
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      background: 'var(--surface-deep)',
      border: '1px solid var(--border-dark)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-board)',
      perspective: 900,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-2)',
      padding: '11px var(--space-2)',
      background: 'var(--ink-1000)',
      borderBottom: '1px solid var(--border-dark)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: 999,
      background: 'var(--teal-500)',
      boxShadow: '0 0 0 3px rgba(25,176,170,.2)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-bold) var(--fs-200)/1 var(--font-body)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--teal-400)'
    }
  }, title)), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-semibold) var(--fs-100)/1 var(--font-body)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-faint)'
    }
  }, origin)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '52px 1fr auto',
      gap: 'var(--space-15)',
      padding: '8px var(--space-2)',
      background: 'rgba(255,255,255,.03)'
    }
  }, ['Date', 'Destination', 'Price'].map((h, i) => /*#__PURE__*/React.createElement("span", {
    key: h,
    style: {
      font: 'var(--fw-bold) var(--fs-100)/1 var(--font-body)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-faint)',
      textAlign: i === 2 ? 'right' : 'left'
    }
  }, h))), /*#__PURE__*/React.createElement("div", null, departures.map((d, i) => /*#__PURE__*/React.createElement(__ds_scope.DepartureRow, _extends({
    key: `${d.destination}-${d.day}-${i}`
  }, d, {
    index: i,
    revealed: revealed,
    onClick: onSelect ? () => onSelect(d, i) : undefined
  })))), footnote ? /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: '11px var(--space-2)',
      borderTop: '1px solid var(--border-dark)',
      background: 'rgba(255,255,255,.03)',
      font: 'var(--fw-medium) var(--fs-200)/1.45 var(--font-body)',
      color: 'var(--text-muted)'
    }
  }, footnote) : null);
}
Object.assign(__ds_scope, { DepartureBoard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/tours/DepartureBoard.jsx", error: String((e && e.message) || e) }); }

// components/tours/InclusionsGrid.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function List({
  title,
  items,
  kind,
  light
}) {
  const included = kind === 'included';
  const accent = included ? light ? 'var(--state-included-on-light)' : 'var(--state-included)' : light ? 'var(--state-excluded-on-light)' : 'var(--state-excluded)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-15)',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      font: 'var(--fw-bold) var(--fs-200)/1 var(--font-body)',
      fontFamily: 'var(--font-body)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: accent
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: included ? 'check' : 'x',
    size: 15
  }), title), /*#__PURE__*/React.createElement("ul", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 9,
      margin: 0,
      padding: 0,
      listStyle: 'none'
    }
  }, items.map(t => /*#__PURE__*/React.createElement("li", {
    key: t,
    style: {
      display: 'grid',
      gridTemplateColumns: '16px 1fr',
      gap: 8,
      alignItems: 'start',
      font: 'var(--type-body)',
      fontSize: 'var(--fs-300)',
      color: light ? 'var(--text-on-light-secondary)' : 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: included ? 'check' : 'minus',
    size: 14,
    style: {
      color: accent,
      marginTop: 4
    }
  }), /*#__PURE__*/React.createElement("span", null, t)))));
}
function InclusionsGrid({
  included = [],
  excluded = [],
  includedTitle = 'Included',
  excludedTitle = 'Not included',
  tone = 'light',
  note,
  style,
  ...rest
}) {
  const light = tone === 'light';
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      display: 'grid',
      gridTemplateColumns: 'var(--inclusions-cols,1fr)',
      gap: 'var(--space-3)',
      padding: 'var(--pad-card-lg)',
      background: light ? 'var(--surface-card-light)' : 'var(--surface-raised)',
      border: `1px solid ${light ? 'var(--border-light)' : 'var(--border-dark)'}`,
      borderRadius: 'var(--radius-card)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(List, {
    title: includedTitle,
    items: included,
    kind: "included",
    light: light
  }), /*#__PURE__*/React.createElement(List, {
    title: excludedTitle,
    items: excluded,
    kind: "excluded",
    light: light
  }), note ? /*#__PURE__*/React.createElement("p", {
    style: {
      gridColumn: '1/-1',
      paddingTop: 'var(--space-15)',
      borderTop: `1px solid ${light ? 'var(--border-light)' : 'var(--border-dark)'}`,
      font: 'var(--fw-medium) var(--fs-200)/1.5 var(--font-body)',
      color: light ? 'var(--text-on-light-muted)' : 'var(--text-muted)'
    }
  }, note) : null);
}
Object.assign(__ds_scope, { InclusionsGrid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/tours/InclusionsGrid.jsx", error: String((e && e.message) || e) }); }

// components/tours/ItineraryDay.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ItineraryDay({
  day,
  title,
  body,
  meals,
  stay,
  tone = 'light',
  last,
  defaultOpen = false,
  collapsible = true,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(defaultOpen || !collapsible);
  const light = tone === 'light';
  const line = light ? 'var(--border-light)' : 'var(--border-dark)';
  const meta = [meals && {
    icon: 'utensils',
    text: meals
  }, stay && {
    icon: 'bed',
    text: stay
  }].filter(Boolean);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'grid',
      gridTemplateColumns: '44px 1fr',
      gap: 'var(--space-15)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      placeItems: 'center',
      width: 44,
      height: 44,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-pill)',
      background: light ? 'var(--teal-050)' : 'rgba(53,196,191,.14)',
      border: `1px solid ${light ? 'var(--teal-100)' : 'rgba(53,196,191,.28)'}`,
      font: 'var(--fw-bold) var(--fs-400)/1 var(--font-num)',
      fontVariantNumeric: 'var(--num-tabular)',
      color: light ? 'var(--teal-800)' : 'var(--teal-300)',
      letterSpacing: 'var(--ls-tight)'
    }
  }, String(day).padStart(2, '0')), !last ? /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      width: 1,
      background: line,
      minHeight: 12
    }
  }) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: last ? 0 : 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: collapsible ? () => setOpen(o => !o) : undefined,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      width: '100%',
      minHeight: 44,
      padding: 0,
      background: 'none',
      border: 0,
      textAlign: 'left',
      cursor: collapsible ? 'pointer' : 'default'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      font: 'var(--fw-regular) var(--fs-500)/1.15 var(--font-display)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-display)',
      color: light ? 'var(--text-on-light)' : 'var(--text-primary)'
    }
  }, title), collapsible ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 18,
    style: {
      color: light ? 'var(--text-on-light-muted)' : 'var(--text-muted)',
      transform: open ? 'rotate(180deg)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out)'
    }
  }) : null), open ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      marginTop: 8
    }
  }, body ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      fontSize: 'var(--fs-300)',
      color: light ? 'var(--text-on-light-secondary)' : 'var(--text-secondary)',
      maxWidth: '58ch'
    }
  }, body) : null, meta.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-2)'
    }
  }, meta.map(m => /*#__PURE__*/React.createElement("span", {
    key: m.text,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      font: 'var(--fw-semibold) var(--fs-200)/1 var(--font-body)',
      color: light ? 'var(--text-on-light-muted)' : 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: m.icon,
    size: 14
  }), m.text))) : null) : null));
}
Object.assign(__ds_scope, { ItineraryDay });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/tours/ItineraryDay.jsx", error: String((e && e.message) || e) }); }

// components/tours/PolicyTerms.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Rows({
  title,
  icon,
  rows,
  light
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-15)',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      fontFamily: 'var(--font-body)',
      font: 'var(--fw-bold) var(--fs-200)/1 var(--font-body)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: light ? 'var(--text-brand-on-light)' : 'var(--text-brand)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 15
  }), title), /*#__PURE__*/React.createElement("dl", {
    style: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, rows.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.k,
    style: {
      display: 'grid',
      gridTemplateColumns: 'var(--policy-cols,1fr)',
      gap: '2px var(--space-2)',
      paddingBottom: 10,
      borderBottom: `1px solid ${light ? 'var(--border-light)' : 'var(--border-dark)'}`
    }
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      font: 'var(--fw-semibold) var(--fs-300)/1.5 var(--font-body)',
      color: light ? 'var(--text-on-light)' : 'var(--text-primary)',
      fontVariantNumeric: 'var(--num-tabular)'
    }
  }, r.k), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0,
      font: 'var(--fw-regular) var(--fs-300)/1.55 var(--font-body)',
      color: light ? 'var(--text-on-light-secondary)' : 'var(--text-secondary)',
      fontVariantNumeric: 'var(--num-tabular)'
    }
  }, r.v)))));
}
function PolicyTerms({
  deposit = [],
  cancellation = [],
  note,
  tone = 'light',
  depositTitle = 'Deposit & instalments',
  cancellationTitle = 'Cancellation policy',
  style,
  ...rest
}) {
  const light = tone === 'light';
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      display: 'grid',
      gridTemplateColumns: 'var(--terms-cols,1fr)',
      gap: 'var(--space-3)',
      padding: 'var(--pad-card-lg)',
      background: light ? 'var(--surface-card-light)' : 'var(--surface-raised)',
      border: `1px solid ${light ? 'var(--border-light)' : 'var(--border-dark)'}`,
      borderRadius: 'var(--radius-card)',
      ...style
    }
  }, rest), deposit.length ? /*#__PURE__*/React.createElement(Rows, {
    title: depositTitle,
    icon: "wallet",
    rows: deposit,
    light: light
  }) : null, cancellation.length ? /*#__PURE__*/React.createElement(Rows, {
    title: cancellationTitle,
    icon: "calendar-x",
    rows: cancellation,
    light: light
  }) : null, note ? /*#__PURE__*/React.createElement("p", {
    style: {
      gridColumn: '1/-1',
      margin: 0,
      paddingTop: 'var(--space-15)',
      borderTop: `1px solid ${light ? 'var(--border-light)' : 'var(--border-dark)'}`,
      font: 'var(--fw-medium) var(--fs-300)/1.6 var(--font-body)',
      color: light ? 'var(--text-on-light-secondary)' : 'var(--text-secondary)'
    }
  }, note) : null);
}
Object.assign(__ds_scope, { PolicyTerms });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/tours/PolicyTerms.jsx", error: String((e && e.message) || e) }); }

// components/tours/TourCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TourCard({
  photo,
  destination,
  duration,
  departure,
  price,
  seats,
  tone = 'dark',
  type,
  deadline,
  onClick,
  style,
  ...rest
}) {
  const [hot, setHot] = React.useState(false);
  const light = tone === 'light';
  return /*#__PURE__*/React.createElement("article", _extends({
    role: onClick ? 'button' : undefined,
    tabIndex: onClick ? 0 : undefined,
    onClick: onClick,
    onMouseEnter: () => setHot(true),
    onMouseLeave: () => setHot(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      background: light ? 'var(--surface-card-light)' : 'var(--surface-raised)',
      border: `1px solid ${light ? 'var(--border-light)' : 'var(--border-dark)'}`,
      borderRadius: 'var(--radius-card)',
      boxShadow: hot ? light ? '0 6px 18px rgba(26,31,36,.14)' : 'var(--shadow-lift)' : light ? 'var(--shadow-card-light)' : 'var(--shadow-card)',
      transform: hot ? 'translateY(-2px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out),box-shadow var(--dur-base) var(--ease-out)',
      cursor: onClick ? 'pointer' : 'default',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.PhotoScrim, {
    src: photo,
    alt: destination,
    ratio: "16/10",
    scrim: "bottom",
    radius: "0",
    zoomOnHover: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 10,
      left: 10,
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "duration",
    tabular: true
  }, duration), type ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "brand"
  }, type) : null), deadline ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 10,
      right: 10
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "gold",
    tabular: true
  }, deadline)) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      padding: 'var(--pad-card)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--type-card-title)',
      letterSpacing: 'var(--ls-display)',
      color: light ? 'var(--text-on-light)' : 'var(--text-primary)',
      textWrap: 'balance'
    }
  }, destination), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      font: 'var(--fw-semibold) var(--fs-200)/1 var(--font-body)',
      fontVariantNumeric: 'var(--num-tabular)',
      color: light ? 'var(--text-on-light-secondary)' : 'var(--text-secondary)',
      letterSpacing: 'var(--ls-wide)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "calendar-days",
    size: 14
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      textTransform: 'uppercase'
    }
  }, departure), seats !== undefined && seats <= 4 ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--state-seats-low)',
      fontWeight: 'var(--fw-bold)'
    }
  }, "\xB7 ", seats === 0 ? 'Full' : `${seats} left`) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 12,
      marginTop: 2,
      paddingTop: 12,
      borderTop: `1px solid ${light ? 'var(--border-light)' : 'var(--border-dark)'}`
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.PriceTag, {
    amount: price,
    per: "per person",
    size: "md",
    variant: light ? 'light' : 'plain'
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      font: 'var(--fw-bold) var(--fs-200)/1 var(--font-body)',
      letterSpacing: 'var(--ls-wide)',
      textTransform: 'uppercase',
      color: 'var(--whatsapp)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "message-circle",
    size: 15
  }), "WhatsApp"))));
}
Object.assign(__ds_scope, { TourCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/tours/TourCard.jsx", error: String((e && e.message) || e) }); }

// components/tours/TourRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TourRow({
  photo,
  destination,
  duration,
  departure,
  price,
  blurb,
  facts = [],
  reverse,
  tone = 'dark',
  ctaLabel = 'WhatsApp for seats',
  onCta,
  style,
  ...rest
}) {
  const light = tone === 'light';
  return /*#__PURE__*/React.createElement("article", _extends({
    style: {
      display: 'grid',
      gridTemplateColumns: 'var(--tour-row-cols,1fr)',
      gap: 'var(--space-3)',
      alignItems: 'center',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      order: reverse ? 2 : 1
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.PhotoScrim, {
    src: photo,
    alt: destination,
    ratio: "4/3",
    scrim: light ? 'flat' : 'left',
    radius: "var(--radius-photo)",
    zoomOnHover: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 12,
      left: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "duration",
    tabular: true
  }, duration)))), /*#__PURE__*/React.createElement("div", {
    style: {
      order: reverse ? 1 : 2,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-15)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: light ? 'var(--text-brand-on-light)' : 'var(--text-brand)',
      fontVariantNumeric: 'var(--num-tabular)'
    }
  }, departure), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--type-section)',
      fontSize: 'clamp(24px,5.5vw,34px)',
      letterSpacing: 'var(--ls-display)',
      color: light ? 'var(--text-on-light)' : 'var(--text-primary)'
    }
  }, destination)), blurb ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      color: light ? 'var(--text-on-light-secondary)' : 'var(--text-secondary)',
      maxWidth: '46ch'
    }
  }, blurb) : null, facts.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 7
    }
  }, facts.map(f => /*#__PURE__*/React.createElement(__ds_scope.Chip, {
    key: f.label,
    icon: f.icon,
    tone: light ? 'light' : 'dark'
  }, f.label))) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: 'var(--space-2)',
      paddingTop: 'var(--space-05)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.PriceTag, {
    amount: price,
    per: "per person",
    size: "lg",
    variant: light ? 'light' : 'plain'
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: light ? 'onLight' : 'whatsapp',
    icon: "message-circle",
    onClick: onCta
  }, ctaLabel))));
}
Object.assign(__ds_scope, { TourRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/tours/TourRow.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
const DS = window.TreoTravelsDesignSystem_12e4e4 || {};
const {
  SiteHeader,
  SiteFooter,
  StickyWhatsApp
} = DS;
const AB = '../../';
const REQUIRED = ['SiteHeader', 'SiteFooter', 'StickyWhatsApp', 'TourCard', 'TourRow', 'DepartureBoard', 'InclusionsGrid', 'ItineraryDay', 'TrustStrip', 'SectionHeader', 'InquiryForm', 'Field'];
function BundleNotice({
  missing
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      display: 'grid',
      placeItems: 'center',
      padding: 40,
      background: 'var(--surface-base)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 520,
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      padding: 28,
      background: 'var(--surface-raised)',
      border: '1px solid var(--border-dark)',
      borderRadius: 'var(--radius-card)'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--type-card-title)',
      color: 'var(--text-primary)',
      letterSpacing: 'var(--ls-display)'
    }
  }, "Design system bundle not compiled yet"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      fontSize: 'var(--fs-300)',
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("code", null, "_ds_bundle.js"), " is missing ", missing.length, " export", missing.length === 1 ? '' : 's', " this kit needs. It recompiles automatically \u2014 reload once it has."), /*#__PURE__*/React.createElement("code", {
    style: {
      font: 'var(--fw-medium) var(--fs-200)/1.6 var(--font-num)',
      color: 'var(--teal-300)',
      wordBreak: 'break-word'
    }
  }, missing.join(', '))));
}
const NAV = [{
  id: 'home',
  label: 'Home'
}, {
  id: 'departures',
  label: 'Departures'
}, {
  id: 'tours',
  label: 'Tours'
}, {
  id: 'private',
  label: 'Private tours'
}, {
  id: 'services',
  label: 'Umrah & visa'
}];
function App() {
  const missing = REQUIRED.filter(k => !DS[k]);
  if (missing.length) return /*#__PURE__*/React.createElement(BundleNotice, {
    missing: missing
  });
  return /*#__PURE__*/React.createElement(Site, null);
}
function Site() {
  const [screen, setScreen] = React.useState('home');
  const [tourId, setTourId] = React.useState('hunza');
  const openTour = id => {
    setTourId(id);
    setScreen('tour');
    window.scrollTo(0, 0);
  };
  const go = id => {
    setScreen(id);
    window.scrollTo(0, 0);
  };
  const tour = window.TREO.tours.find(t => t.id === tourId) || window.TREO.tours[0];
  const stickyPrice = screen === 'tour' ? tour.price : window.TREO.departures[0].price;
  const stickyMsg = screen === 'tour' ? `Hi Treo, I want seats on the ${tour.departure} ${tour.destination} departure.` : 'Hi Treo, which departures still have seats?';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-base)'
    }
  }, /*#__PURE__*/React.createElement(SiteHeader, {
    links: NAV,
    active: screen,
    assetBase: AB,
    phone: window.TREO.phone,
    onNavigate: go
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1
    }
  }, screen === 'home' ? /*#__PURE__*/React.createElement(window.LandingScreen, {
    onJump: go,
    onOpenTour: openTour
  }) : null, screen === 'departures' ? /*#__PURE__*/React.createElement(window.DeparturesScreen, {
    onOpenTour: openTour
  }) : null, screen === 'tours' ? /*#__PURE__*/React.createElement(window.ToursScreen, {
    onOpenTour: openTour
  }) : null, screen === 'private' ? /*#__PURE__*/React.createElement(window.PrivateTourScreen, null) : null, screen === 'tour' ? /*#__PURE__*/React.createElement(window.TourDetailScreen, {
    tourId: tourId,
    onOpenTour: openTour
  }) : null, screen === 'services' ? /*#__PURE__*/React.createElement(window.ServicesScreen, null) : null), /*#__PURE__*/React.createElement(SiteFooter, {
    assetBase: AB,
    phone: window.TREO.phone,
    columns: window.TREO.footerColumns,
    socials: [{
      icon: 'instagram'
    }, {
      icon: 'facebook'
    }, {
      icon: 'linkedin'
    }]
  }), /*#__PURE__*/React.createElement(StickyWhatsApp, {
    label: screen === 'tour' ? tour.destination : 'From',
    price: stickyPrice,
    note: "per person",
    phone: window.TREO.phone,
    message: stickyMsg
  }));
}
Object.assign(window, {
  App
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/DeparturesScreen.jsx
try { (() => {
const DSD = window.TreoTravelsDesignSystem_12e4e4;
const {
  DepartureBoard,
  SectionHeader,
  Button,
  Badge,
  Chip,
  Icon,
  LicenseBadge
} = DSD;
const Reveal = DSD.Reveal || (({
  children,
  style
}) => /*#__PURE__*/React.createElement("div", {
  style: style
}, children));
const DPB = '../../';
const FILTERS = [{
  id: 'all',
  label: 'All departures'
}, {
  id: 'air',
  label: 'By air'
}, {
  id: 'road',
  label: 'By road'
}, {
  id: 'weekend',
  label: 'Weekends'
}, {
  id: 'open',
  label: 'Seats available'
}];
function FilterPills({
  active,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      overflowX: 'auto',
      paddingBottom: 6,
      marginBottom: 'var(--space-3)'
    }
  }, FILTERS.map(f => {
    const on = active === f.id;
    return /*#__PURE__*/React.createElement("button", {
      key: f.id,
      type: "button",
      onClick: () => onChange(f.id),
      style: {
        minHeight: 44,
        padding: '0 16px',
        flex: '0 0 auto',
        cursor: 'pointer',
        background: on ? 'var(--surface-brand)' : 'transparent',
        color: on ? '#fff' : 'var(--text-secondary)',
        border: `1.5px solid ${on ? 'transparent' : 'var(--border-dark-strong)'}`,
        borderRadius: 'var(--radius-pill)',
        font: 'var(--fw-bold) var(--fs-200)/1 var(--font-body)',
        letterSpacing: 'var(--ls-wide)',
        textTransform: 'uppercase',
        transition: 'var(--transition-color)',
        whiteSpace: 'nowrap'
      }
    }, f.label);
  }));
}
const MONTHS = {
  Jan: 0,
  Feb: 1,
  Mar: 2,
  Apr: 3,
  May: 4,
  Jun: 5,
  Jul: 6,
  Aug: 7,
  Sep: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11
};
const YEAR = 2026;
const TODAY = (() => {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
})();
const isPast = r => new Date(YEAR, MONTHS[r.month] ?? 0, Number(r.day)) < TODAY;
function DeparturesScreen({
  onOpenTour
}) {
  const [filter, setFilter] = React.useState('all');
  const [showPast, setShowPast] = React.useState(false);
  const match = r => {
    if (filter === 'all') return true;
    if (filter === 'open') return r.seats > 0;
    return r.mode === filter;
  };
  const split = wantPast => window.TREO.calendar.map(m => ({
    month: m.month,
    rows: m.rows.filter(r => isPast(r) === wantPast && match(r))
  })).filter(m => m.rows.length);
  const months = split(false);
  const pastMonths = split(true);
  const total = months.reduce((n, m) => n + m.rows.length, 0);
  const open = months.reduce((n, m) => n + m.rows.filter(r => r.seats > 0).length, 0);
  const pastTotal = pastMonths.reduce((n, m) => n + m.rows.length, 0);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-base)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: 'var(--space-5) var(--page-pad) var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Departure calendar 2026",
    title: "Upcoming departures",
    sub: "Confirmed fixed departures from Karachi, next date first. Prices are per person, twin or triple share."
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 60
  }, /*#__PURE__*/React.createElement(FilterPills, {
    active: filter,
    onChange: setFilter
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 90
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: 'var(--space-2)',
      marginBottom: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "tnum",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      font: 'var(--fw-semibold) var(--fs-300)/1 var(--font-body)',
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar-days",
    size: 16,
    style: {
      color: 'var(--teal-400)'
    }
  }), total, " upcoming \xB7 ", open, " with seats"), /*#__PURE__*/React.createElement(Chip, {
    icon: "plane"
  }, "Air legs bookable at cost"), /*#__PURE__*/React.createElement(Chip, {
    icon: "users",
    tone: "brand"
  }, "Max 18 per group"))), total === 0 ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-lg)',
      color: 'var(--text-muted)',
      padding: 'var(--space-4) 0'
    }
  }, "No upcoming dates match that filter. Message us \u2014 we add dates every month.") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, months.map((m, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: m.month,
    delay: i * 70
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-15)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--type-card-title)',
      color: 'var(--text-primary)',
      letterSpacing: 'var(--ls-display)'
    }
  }, m.month), /*#__PURE__*/React.createElement("span", {
    className: "tnum",
    style: {
      font: 'var(--fw-semibold) var(--fs-200)/1 var(--font-body)',
      letterSpacing: 'var(--ls-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-faint)'
    }
  }, m.rows.length, " departures")), /*#__PURE__*/React.createElement(DepartureBoard, {
    title: m.month,
    origin: "from Karachi",
    departures: m.rows,
    animate: false,
    onSelect: d => onOpenTour(d.tour || 'hunza')
  }))))), pastTotal ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)',
      paddingTop: 'var(--space-3)',
      borderTop: '1px solid var(--border-dark)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setShowPast(v => !v),
    "aria-expanded": showPast,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      width: '100%',
      minHeight: 48,
      padding: 0,
      background: 'none',
      border: 0,
      textAlign: 'left',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "history",
    size: 17,
    style: {
      color: 'var(--text-faint)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "tnum",
    style: {
      flex: 1,
      font: 'var(--fw-bold) var(--fs-300)/1 var(--font-body)',
      letterSpacing: 'var(--ls-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, pastTotal, " already departed this season"), /*#__PURE__*/React.createElement(Icon, {
    name: showPast ? 'chevron-up' : 'chevron-down',
    size: 18,
    style: {
      color: 'var(--text-faint)'
    }
  })), showPast ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      marginTop: 'var(--space-2)',
      opacity: 0.72
    }
  }, pastMonths.map(m => /*#__PURE__*/React.createElement("div", {
    key: m.month,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-15)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--type-card-title)',
      color: 'var(--text-muted)',
      letterSpacing: 'var(--ls-display)'
    }
  }, m.month), /*#__PURE__*/React.createElement("span", {
    className: "tnum",
    style: {
      font: 'var(--fw-semibold) var(--fs-200)/1 var(--font-body)',
      letterSpacing: 'var(--ls-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-faint)'
    }
  }, "departed")), /*#__PURE__*/React.createElement(DepartureBoard, {
    title: `${m.month} · departed`,
    origin: "from Karachi",
    animate: false,
    departures: m.rows.map(r => ({
      ...r,
      statusLabel: 'Departed'
    })),
    onSelect: d => onOpenTour(d.tour || 'hunza')
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--fw-medium) var(--fs-300)/1.6 var(--font-body)',
      color: 'var(--text-muted)',
      maxWidth: '54ch'
    }
  }, "These dates have gone. Most of them run again next season \u2014 ask us and we will tell you when the same trip repeats.")) : null) : null)), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-light)'
    },
    className: "on-light"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: 'var(--section-y) var(--page-pad)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "onLightBrand"
  }, "Dates not working?"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--type-section)',
      color: 'var(--text-on-light)',
      letterSpacing: 'var(--ls-display)',
      maxWidth: '22ch'
    }
  }, "Run any of these privately, on your own dates"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--fw-regular) var(--fs-500)/1.65 var(--font-body)',
      color: 'var(--text-on-light-secondary)',
      maxWidth: '50ch'
    }
  }, "Most of our trips are private ones \u2014 a family, a group of friends, or an office. Same itineraries, your own vehicle, your own schedule."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "onLight",
    icon: "message-circle",
    href: `https://wa.me/${window.TREO.phone.replace(/\D/g, '')}`
  }, "Get a private quote"), /*#__PURE__*/React.createElement(LicenseBadge, {
    tone: "light",
    assetBase: DPB,
    height: 30
  })))));
}
Object.assign(window, {
  DeparturesScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/DeparturesScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/LandingHero.jsx
try { (() => {
const DSL = window.TreoTravelsDesignSystem_12e4e4;
const {
  DepartureBoard,
  Button,
  Badge,
  Icon,
  LicenseBadge
} = DSL;
// Fallbacks keep the page readable if the bundle predates these components.
const Reveal = DSL.Reveal || (({
  children,
  style
}) => /*#__PURE__*/React.createElement("div", {
  style: style
}, children));
const CountUp = DSL.CountUp || (({
  to,
  suffix = '',
  style
}) => /*#__PURE__*/React.createElement("span", {
  style: style
}, to, suffix));
const HB = '../../';
function Proof() {
  const items = [{
    n: 37,
    label: 'non-stop trips'
  }, {
    n: 18,
    label: 'max group size'
  }, {
    n: 2018,
    label: 'operating since',
    grouped: false
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-4)',
      alignItems: 'flex-end'
    }
  }, items.map(it => /*#__PURE__*/React.createElement("span", {
    key: it.label,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, /*#__PURE__*/React.createElement(CountUp, {
    to: it.n,
    grouped: it.grouped !== false,
    style: {
      font: 'var(--fw-bold) 28px/1 var(--font-num)',
      color: '#fff',
      letterSpacing: 'var(--ls-tight)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-semibold) var(--fs-200)/1.3 var(--font-body)',
      letterSpacing: 'var(--ls-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, it.label))));
}
function LandingHero({
  onJump,
  onOpenTour
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--ink-900)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    className: "kb",
    src: HB + 'assets/photos/hero-north.png',
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center 45%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-left)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg,rgba(18,22,26,.5) 0%,rgba(18,22,26,.25) 30%,rgba(18,22,26,.86) 78%,#1A1F24 100%)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: 'var(--space-6) var(--page-pad) var(--space-8)',
      display: 'grid',
      gridTemplateColumns: 'var(--hero-cols,1fr)',
      gap: 'var(--space-5)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      maxWidth: 620
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--teal-400)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 3,
      background: 'var(--marker-section)',
      borderRadius: 2
    }
  }), "Fixed departures from Karachi")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 70
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--type-hero)',
      fontSize: 'clamp(34px,7.6vw,60px)',
      letterSpacing: 'var(--ls-display-tight)',
      color: '#fff',
      textShadow: 'var(--text-shadow-photo)',
      maxWidth: '17ch'
    }
  }, "The north, on a date you can plan around")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 140
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--fw-regular) var(--fs-500)/1.65 var(--font-body)',
      color: 'var(--text-secondary)',
      maxWidth: '44ch'
    }
  }, "Published dates, published prices, groups capped at 18. Message us and we confirm your seats the same hour \u2014 no deposit to ask a question.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 210
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "whatsapp",
    size: "lg",
    icon: "message-circle",
    href: `https://wa.me/${window.TREO.phone.replace(/\D/g, '')}`
  }, "WhatsApp for seats"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    iconRight: "arrow-right",
    onClick: () => onJump('tours')
  }, "All tours & prices"))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 280,
    style: {
      paddingTop: 'var(--space-2)',
      borderTop: '1px solid var(--border-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-4)',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(Proof, null), /*#__PURE__*/React.createElement(LicenseBadge, {
    assetBase: HB,
    height: 38
  })))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 160,
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(DepartureBoard, {
    departures: window.TREO.departures,
    footnote: "Both-side stays in Islamabad are included. Air tickets are excluded \u2014 we book them at cost if you ask.",
    onSelect: d => onOpenTour(d.destination.toLowerCase().includes('skardu') ? 'skardu' : d.destination.toLowerCase().includes('naran') ? 'naran' : d.destination.toLowerCase().includes('kashmir') ? 'kashmir' : d.destination.toLowerCase().includes('gorakh') ? 'gorakh' : d.destination.toLowerCase().includes('swat') ? 'fairy' : 'hunza')
  }))));
}
Object.assign(window, {
  LandingHero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/LandingHero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/LandingScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DSS = window.TreoTravelsDesignSystem_12e4e4;
const {
  SectionHeader,
  TourCard,
  Button,
  Badge,
  Chip,
  Icon,
  PhotoScrim,
  Annotation,
  ServiceIconRow,
  InquiryForm,
  LicenseBadge
} = DSS;
const Reveal = DSS.Reveal || (({
  children,
  style
}) => /*#__PURE__*/React.createElement("div", {
  style: style
}, children));
const Accordion = DSS.Accordion || (({
  items
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    flexDirection: 'column',
    gap: 18
  }
}, items.map(it => /*#__PURE__*/React.createElement("div", {
  key: it.q,
  style: {
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
    paddingBottom: 18,
    borderBottom: '1px solid var(--border-light)'
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    font: 'var(--fw-semibold) var(--fs-500)/1.35 var(--font-body)',
    color: 'var(--text-on-light)'
  }
}, it.q), /*#__PURE__*/React.createElement("p", {
  style: {
    margin: 0,
    font: 'var(--fw-regular) var(--fs-400)/1.65 var(--font-body)',
    color: 'var(--text-on-light-secondary)',
    maxWidth: '62ch'
  }
}, it.a)))));
const LB = '../../';
const STEPS = [{
  n: '01',
  t: 'Pick a departure',
  b: 'Every date and price is on this page. Nothing is quoted privately, nothing changes after you ask.'
}, {
  n: '02',
  t: 'Message us on WhatsApp',
  b: 'We confirm the seats that are actually left and send the full day-by-day PDF within the hour.'
}, {
  n: '03',
  t: 'Pay 50% to confirm',
  b: 'Seats are held 24 hours. Instalments are available — the balance is due a week before departure.'
}];
const FAQ = [{
  q: 'Are air tickets included?',
  a: 'No. Road tours include every road leg; on the fly-in tours (Hunza, Skardu) the Karachi–Islamabad ticket is excluded and we book it for you at cost if you ask. We put this on every poster because finding it out later is the fastest way to lose your trust.'
}, {
  q: 'How big are the groups?',
  a: 'Eighteen travellers maximum, on every fixed departure. We do not oversell a coach and we do not merge two groups to fill one bus.'
}, {
  q: 'Can I pay in instalments?',
  a: 'Yes. 50% confirms your seat, the balance is due a week before departure. Ask on WhatsApp and we will split it around your salary dates.'
}, {
  q: 'Is it comfortable for families?',
  a: 'Families travel on every departure. Triple-share and family rooms are standard, seating is arranged so families sit together, and there is a female coordinator on the mixed-group trips.'
}, {
  q: 'What if your dates do not suit me?',
  a: 'Take the same itinerary as a private tour — your own coach or Prado, your own dates. Tell us the group size and we quote the same day.'
}, {
  q: 'Are you a registered company?',
  a: 'Yes. Treo Travels holds Government tour-operator licence #5618 and has a registered office on Shahrah-e-Faisal, Karachi. Walk in any day between 10am and 10pm.'
}];
function HowItWorks() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-base)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: 'var(--section-y) var(--page-pad)'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "How booking works",
    title: "Three steps, no deposit to ask",
    sub: "The whole process happens on WhatsApp. There is no checkout on this site."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'var(--cards-3,1fr)',
      gap: 'var(--gap-grid)'
    }
  }, STEPS.map((s, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: s.n,
    delay: i * 80
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      padding: 'var(--pad-card-lg)',
      height: '100%',
      background: 'var(--surface-raised)',
      border: '1px solid var(--border-dark)',
      borderRadius: 'var(--radius-card)',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-bold) var(--fs-300)/1 var(--font-num)',
      fontVariantNumeric: 'var(--num-tabular)',
      letterSpacing: 'var(--ls-label)',
      color: 'var(--teal-400)'
    }
  }, s.n), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--type-card-title)',
      color: 'var(--text-primary)',
      letterSpacing: 'var(--ls-display)'
    }
  }, s.t), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--fw-regular) var(--fs-400)/1.65 var(--font-body)',
      color: 'var(--text-secondary)'
    }
  }, s.b)))))));
}
function Featured({
  onJump,
  onOpenTour
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-deep)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: 'var(--section-y) var(--page-pad)'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Next out of Karachi",
    title: "July & August 2026",
    sub: "Per person, twin or triple share. Seats update as they sell.",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      iconRight: "arrow-right",
      onClick: () => onJump('tours')
    }, "All tours")
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'var(--cards-3,1fr)',
      gap: 'var(--gap-grid)'
    }
  }, window.TREO.tours.slice(0, 3).map((t, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: t.id,
    delay: i * 80
  }, /*#__PURE__*/React.createElement(TourCard, _extends({}, t, {
    photo: LB + t.photo,
    onClick: () => onOpenTour(t.id)
  })))))));
}
function Included() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-light)'
    },
    className: "on-light"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: 'var(--section-y) var(--page-pad)',
      display: 'grid',
      gridTemplateColumns: 'var(--split,1fr)',
      gap: 'var(--space-5)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "onLightBrand"
  }, "On every trip"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--type-section)',
      color: 'var(--text-on-light)',
      letterSpacing: 'var(--ls-display)',
      maxWidth: '20ch'
    }
  }, "Six things included, from the weekend trips up"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--fw-regular) var(--fs-500)/1.65 var(--font-body)',
      color: 'var(--text-on-light-secondary)',
      maxWidth: '48ch'
    }
  }, "Hotels, transport, meals, jeeps, a guide and a photographer. What is ", /*#__PURE__*/React.createElement("strong", null, "not"), " included is printed just as plainly on every tour page."), /*#__PURE__*/React.createElement(Button, {
    variant: "onLightOutline",
    iconRight: "arrow-right"
  }, "See a full inclusions list"))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 90
  }, /*#__PURE__*/React.createElement(ServiceIconRow, {
    tone: "light",
    assetBase: LB,
    size: 34,
    style: {
      gap: 'var(--space-3)'
    }
  }))));
}
function PhotoBand() {
  return /*#__PURE__*/React.createElement(PhotoScrim, {
    src: LB + 'assets/photos/chai.png',
    ratio: "var(--band-ratio,16/9)",
    scrim: "full",
    radius: "0",
    position: "center 40%"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      gap: 12,
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: 'var(--space-6) var(--page-pad)'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Annotation, {
    size: 28
  }, "Pahadon wali Chai")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 80
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--type-section)',
      color: '#fff',
      letterSpacing: 'var(--ls-display)',
      textShadow: 'var(--text-shadow-photo)',
      maxWidth: '22ch'
    }
  }, "Every photo here is from our own trips")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 150
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--fw-regular) var(--fs-500)/1.6 var(--font-body)',
      color: 'var(--text-secondary)',
      maxWidth: '40ch',
      textShadow: 'var(--text-shadow-soft)'
    }
  }, "No stock photography anywhere on this site. If you see a valley, one of our groups stood in it."))));
}
function Reviews() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-base)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: 'var(--section-y) var(--page-pad)'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Travellers",
    title: "After the trip",
    sub: "From the last three months of departures."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'var(--cards-3,1fr)',
      gap: 'var(--gap-grid)'
    }
  }, window.TREO.reviews.map((r, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: r.name,
    delay: i * 80
  }, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      height: '100%',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      padding: 'var(--pad-card-lg)',
      background: 'var(--surface-raised)',
      border: '1px solid var(--border-dark)',
      borderRadius: 'var(--radius-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 3,
      color: 'var(--gold-400)'
    }
  }, [0, 1, 2, 3, 4].map(n => /*#__PURE__*/React.createElement(Icon, {
    key: n,
    name: "star",
    size: 14
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--fw-regular) var(--fs-400)/1.65 var(--font-body)',
      color: 'var(--text-secondary)'
    }
  }, r.text), /*#__PURE__*/React.createElement("footer", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3,
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-bold) var(--fs-300)/1 var(--font-body)',
      color: 'var(--text-primary)'
    }
  }, r.name), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-medium) var(--fs-200)/1 var(--font-body)',
      color: 'var(--text-faint)'
    }
  }, r.trip))))))));
}
function Faq() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-light)'
    },
    className: "on-light"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: 'var(--section-y) var(--page-pad)',
      display: 'grid',
      gridTemplateColumns: 'var(--faq-cols,1fr)',
      gap: 'var(--space-5)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'var(--faq-sticky,static)',
      top: 90,
      alignSelf: 'start'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-brand-on-light)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 3,
      background: 'var(--marker-section)',
      borderRadius: 2
    }
  }), "Before you ask"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--type-section)',
      color: 'var(--text-on-light)',
      letterSpacing: 'var(--ls-display)',
      maxWidth: '16ch'
    }
  }, "The questions we get on WhatsApp"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--fw-regular) var(--fs-400)/1.65 var(--font-body)',
      color: 'var(--text-on-light-secondary)',
      maxWidth: '40ch'
    }
  }, "Answered plainly, including the parts that cost us bookings."), /*#__PURE__*/React.createElement(LicenseBadge, {
    tone: "light",
    assetBase: LB,
    height: 34
  })))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 90
  }, /*#__PURE__*/React.createElement(Accordion, {
    items: FAQ,
    defaultOpen: 0
  }))));
}
function ClosingCta() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-deep)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: 'var(--section-y) var(--page-pad)',
      display: 'grid',
      gridTemplateColumns: 'var(--split,1fr)',
      gap: 'var(--space-4)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--type-section)',
      color: '#fff',
      letterSpacing: 'var(--ls-display)',
      maxWidth: '18ch'
    }
  }, "Tell us your dates, we will tell you what fits"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--fw-regular) var(--fs-500)/1.65 var(--font-body)',
      color: 'var(--text-secondary)',
      maxWidth: '44ch'
    }
  }, "A reply within the hour, 10am\u201310pm PKT. No payment at this stage, and no follow-up spam if you decide against it."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    icon: "map-pin"
  }, "Shahrah-e-Faisal, Karachi"), /*#__PURE__*/React.createElement(Chip, {
    icon: "clock"
  }, "Reply within an hour"), /*#__PURE__*/React.createElement(Chip, {
    icon: "shield-check",
    tone: "brand"
  }, "Licence #5618")))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 90
  }, /*#__PURE__*/React.createElement(InquiryForm, {
    tone: "dark",
    phone: window.TREO.phone,
    departures: window.TREO.departures.map(d => `${d.day} ${d.month} — ${d.destination}`).concat(['Not sure yet — advise me'])
  }))));
}
function LandingScreen({
  onJump,
  onOpenTour
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(window.LandingHero, {
    onJump: onJump,
    onOpenTour: onOpenTour
  }), /*#__PURE__*/React.createElement(HowItWorks, null), /*#__PURE__*/React.createElement(Featured, {
    onJump: onJump,
    onOpenTour: onOpenTour
  }), /*#__PURE__*/React.createElement(Included, null), /*#__PURE__*/React.createElement(PhotoBand, null), /*#__PURE__*/React.createElement(Reviews, null), /*#__PURE__*/React.createElement(Faq, null), /*#__PURE__*/React.createElement(ClosingCta, null));
}
Object.assign(window, {
  LandingScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/LandingScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/PrivateTourScreen.jsx
try { (() => {
const DSP = window.TreoTravelsDesignSystem_12e4e4;
const {
  SectionHeader,
  Field,
  Input,
  Select,
  Textarea,
  Button,
  Badge,
  Chip,
  Icon,
  ServiceIconRow,
  LicenseBadge,
  PolicyTerms
} = DSP;
const Reveal = DSP.Reveal || (({
  children,
  style
}) => /*#__PURE__*/React.createElement("div", {
  style: style
}, children));
const PB = '../../';
const DESTINATIONS = ['Hunza, Khunjerab & Naltar', 'Skardu, Basho & Deosai', 'Fairy Meadows & Nanga Parbat', 'Naran, Shogran & Balakot', 'Neelum Valley & Kashmir', 'Swat, Kalam & Malam Jabba', 'Gorakh Hills (weekend)', 'Not sure — suggest something'];
const VEHICLES = ['Prado / 4x4 (up to 6)', 'Hiace / Grand Cabin (up to 13)', 'Coaster (up to 20)', 'AC sleeper coach (20+)', 'Advise me'];
const HOTELS = ['Standard — clean, 3-star equivalent', 'Deluxe — best available in the valley', 'Mixed — deluxe where it matters'];
const OCCASIONS = ['Family trip', 'Friends group', 'Honeymoon', 'Office / corporate', 'Educational / university', 'Other'];
function Summary({
  form
}) {
  const rows = [['Destination', form.dest], ['Travellers', `${form.adults} adults${Number(form.kids) > 0 ? ` · ${form.kids} children` : ''}`], ['Dates', form.dates || 'flexible'], ['Nights', form.nights], ['Vehicle', form.vehicle], ['Hotels', form.hotel], ['Occasion', form.occasion]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      padding: 'var(--pad-card-lg)',
      background: 'var(--surface-card-light)',
      border: '1px solid var(--border-light)',
      borderRadius: 'var(--radius-card)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      font: 'var(--fw-bold) var(--fs-200)/1 var(--font-body)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-brand-on-light)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clipboard-list",
    size: 15
  }), "Your brief"), /*#__PURE__*/React.createElement("dl", {
    style: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 9
    }
  }, rows.map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 14,
      paddingBottom: 9,
      borderBottom: '1px solid var(--border-light)'
    }
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      font: 'var(--fw-medium) var(--fs-200)/1.4 var(--font-body)',
      letterSpacing: 'var(--ls-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-on-light-muted)',
      flex: '0 0 auto'
    }
  }, k), /*#__PURE__*/React.createElement("dd", {
    className: "tnum",
    style: {
      margin: 0,
      font: 'var(--fw-semibold) var(--fs-300)/1.45 var(--font-body)',
      color: 'var(--text-on-light)',
      textAlign: 'right'
    }
  }, v)))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--fw-medium) var(--fs-200)/1.55 var(--font-body)',
      color: 'var(--text-on-light-muted)'
    }
  }, "We quote the same day, itemised \u2014 vehicle, hotels, meals and jeeps listed separately so you can see what moves the price."));
}
function PrivateTourScreen() {
  const [form, setForm] = React.useState({
    dest: DESTINATIONS[0],
    adults: '6',
    kids: '0',
    dates: '',
    nights: '8',
    vehicle: VEHICLES[1],
    hotel: HOTELS[0],
    occasion: OCCASIONS[0],
    name: '',
    phone: '',
    note: ''
  });
  const [sent, setSent] = React.useState(false);
  const set = k => e => setForm(f => ({
    ...f,
    [k]: e.target.value
  }));
  const submit = e => {
    e.preventDefault();
    setSent(true);
    const msg = ['Hi Treo, I would like a private tour quote.', `Destination: ${form.dest}`, `Travellers: ${form.adults} adults${Number(form.kids) > 0 ? `, ${form.kids} children` : ''}`, `Dates: ${form.dates || 'flexible'}`, `Nights: ${form.nights}`, `Vehicle: ${form.vehicle}`, `Hotels: ${form.hotel}`, `Occasion: ${form.occasion}`, form.note ? `Notes: ${form.note}` : '', form.name ? `Name: ${form.name}` : ''].filter(Boolean).join('\n');
    window.open(`https://wa.me/${window.TREO.phone.replace(/\D/g, '')}?text=${encodeURIComponent(msg)}`, '_blank');
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-base)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: 'var(--space-5) var(--page-pad) var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Private tours",
    title: "Build your own trip",
    sub: "Most of what we run is private \u2014 a family, a group of friends, or an office. Tell us the shape of it and we quote the same day."
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 70
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10,
      marginBottom: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    icon: "calendar-days",
    tone: "brand"
  }, "Your dates"), /*#__PURE__*/React.createElement(Chip, {
    icon: "car-front"
  }, "Your vehicle"), /*#__PURE__*/React.createElement(Chip, {
    icon: "receipt"
  }, "Itemised quote"), /*#__PURE__*/React.createElement(Chip, {
    icon: "clock"
  }, "Same-day reply"))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 100
  }, /*#__PURE__*/React.createElement(ServiceIconRow, {
    assetBase: PB,
    size: 26
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-light)'
    },
    className: "on-light"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: 'var(--section-y) var(--page-pad)',
      display: 'grid',
      gridTemplateColumns: 'var(--faq-cols,1fr)',
      gap: 'var(--space-4)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      padding: 'var(--pad-card-lg)',
      background: 'var(--surface-card-light)',
      border: '1px solid var(--border-light)',
      borderRadius: 'var(--radius-card)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--type-card-title)',
      color: 'var(--text-on-light)',
      letterSpacing: 'var(--ls-display)'
    }
  }, "Tell us the trip"), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: 'var(--space-2)',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--teal-050)',
      color: 'var(--teal-800)',
      font: 'var(--fw-semibold) var(--fs-300)/1.5 var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check-check",
    size: 18
  }), "Opening WhatsApp with your brief attached.") : null, /*#__PURE__*/React.createElement(Field, {
    label: "Where do you want to go?",
    required: true
  }, /*#__PURE__*/React.createElement(Select, {
    options: DESTINATIONS,
    value: form.dest,
    onChange: set('dest')
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'var(--form-cols,1fr)',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Adults",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    tabular: true,
    type: "number",
    min: "1",
    max: "60",
    value: form.adults,
    onChange: set('adults')
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Children under 12"
  }, /*#__PURE__*/React.createElement(Input, {
    tabular: true,
    type: "number",
    min: "0",
    max: "30",
    value: form.kids,
    onChange: set('kids')
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Rough dates",
    hint: "Month is enough"
  }, /*#__PURE__*/React.createElement(Input, {
    value: form.dates,
    onChange: set('dates'),
    placeholder: "Late September"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Nights",
    hint: "We will suggest if unsure"
  }, /*#__PURE__*/React.createElement(Input, {
    tabular: true,
    type: "number",
    min: "1",
    max: "25",
    value: form.nights,
    onChange: set('nights')
  }))), /*#__PURE__*/React.createElement(Field, {
    label: "Vehicle",
    hint: "Group size usually decides this"
  }, /*#__PURE__*/React.createElement(Select, {
    options: VEHICLES,
    value: form.vehicle,
    onChange: set('vehicle')
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Hotel standard"
  }, /*#__PURE__*/React.createElement(Select, {
    options: HOTELS,
    value: form.hotel,
    onChange: set('hotel')
  })), /*#__PURE__*/React.createElement(Field, {
    label: "What is the occasion?"
  }, /*#__PURE__*/React.createElement(Select, {
    options: OCCASIONS,
    value: form.occasion,
    onChange: set('occasion')
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'var(--form-cols,1fr)',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Your name",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    value: form.name,
    onChange: set('name'),
    placeholder: "Full name",
    required: true
  })), /*#__PURE__*/React.createElement(Field, {
    label: "WhatsApp number",
    required: true,
    hint: "Reply within the hour, 10am\u201310pm PKT"
  }, /*#__PURE__*/React.createElement(Input, {
    tabular: true,
    inputMode: "tel",
    value: form.phone,
    onChange: set('phone'),
    placeholder: "03xx xxxxxxx",
    required: true
  }))), /*#__PURE__*/React.createElement(Field, {
    label: "Anything we should know?"
  }, /*#__PURE__*/React.createElement(Textarea, {
    value: form.note,
    onChange: set('note'),
    placeholder: "Elderly parents travelling, need ground-floor rooms\u2026"
  })), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "whatsapp",
    size: "lg",
    icon: "message-circle",
    fullWidth: true
  }, "Send brief on WhatsApp"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--fw-medium) var(--fs-200)/1.5 var(--font-body)',
      color: 'var(--text-on-light-muted)'
    }
  }, "No payment at this stage. A quote is free and we do not chase you afterwards."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'var(--faq-sticky,static)',
      top: 96,
      alignSelf: 'start'
    }
  }, /*#__PURE__*/React.createElement(Summary, {
    form: form
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-base)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: 'var(--section-y) var(--page-pad)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "The same terms as our group tours",
    title: "Deposit & cancellation",
    sub: "Private or fixed departure, the money rules do not change."
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 70
  }, /*#__PURE__*/React.createElement(PolicyTerms, {
    tone: "dark",
    deposit: window.TREO.policy.deposit,
    cancellation: window.TREO.policy.cancellation,
    note: window.TREO.policy.note
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement(LicenseBadge, {
    assetBase: PB
  })))));
}
Object.assign(window, {
  PrivateTourScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/PrivateTourScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServicesScreen.jsx
try { (() => {
const {
  SectionHeader,
  PhotoScrim,
  Badge,
  Button,
  Icon,
  LicenseBadge,
  InquiryForm,
  TrustStrip,
  Chip
} = window.TreoTravelsDesignSystem_12e4e4;
const SB = '../../';
function ServiceCard({
  s
}) {
  return /*#__PURE__*/React.createElement("article", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      background: 'var(--surface-raised)',
      border: '1px solid var(--border-dark)',
      borderRadius: 'var(--radius-card)',
      boxShadow: 'var(--shadow-card)'
    }
  }, s.photo ? /*#__PURE__*/React.createElement(PhotoScrim, {
    src: SB + s.photo,
    ratio: "16/9",
    scrim: "bottom",
    radius: "0"
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '16/9',
      display: 'grid',
      placeItems: 'center',
      gap: 8,
      background: 'var(--surface-brand-deep)',
      borderBottom: '1px solid var(--border-dark)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.lucide,
    size: 40,
    style: {
      color: 'rgba(255,255,255,.5)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-bold) var(--fs-100)/1 var(--font-body)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,.5)'
    }
  }, "Photo to come from Treo")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      padding: 'var(--pad-card)',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-brand)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.lucide,
    size: 15
  }), s.sub), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--type-card-title)',
      color: 'var(--text-primary)',
      letterSpacing: 'var(--ls-display)'
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      fontSize: 'var(--fs-300)',
      color: 'var(--text-secondary)'
    }
  }, s.body), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 10,
      marginTop: 'auto',
      paddingTop: 12,
      borderTop: '1px solid var(--border-dark)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "tnum",
    style: {
      font: 'var(--fw-bold) var(--fs-400)/1 var(--font-num)',
      color: 'var(--text-price)'
    }
  }, s.price), /*#__PURE__*/React.createElement(Button, {
    variant: "whatsapp",
    size: "sm",
    icon: "message-circle",
    href: `https://wa.me/${window.TREO.phone.replace(/\D/g, '')}`
  }, "Enquire"))));
}
function ServicesScreen() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-base)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: 'var(--space-5) var(--page-pad) var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Beyond the north",
    title: "Umrah, tickets & visas",
    sub: "The same office, the same licence, the same WhatsApp number."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'var(--cards-2,1fr)',
      gap: 'var(--gap-grid)'
    }
  }, window.TREO.services.map(s => /*#__PURE__*/React.createElement(ServiceCard, {
    key: s.title,
    s: s
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-light)'
    },
    className: "on-light"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: 'var(--section-y) var(--page-pad)',
      display: 'grid',
      gridTemplateColumns: 'var(--split,1fr)',
      gap: 'var(--space-4)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "onLightBrand"
  }, "Since 2018"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--type-section)',
      color: 'var(--text-on-light)',
      letterSpacing: 'var(--ls-display)',
      maxWidth: '22ch'
    }
  }, "A licensed operator, not a page on Instagram"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-on-light-secondary)',
      maxWidth: '54ch'
    }
  }, "Treo Travels has run fixed-departure group tours out of Karachi since 2018 \u2014 37 non-stop trips, a registered office on Shahrah-e-Faisal, and Government tour-operator licence #5618. Walk in, or send a message."), /*#__PURE__*/React.createElement(LicenseBadge, {
    tone: "light",
    assetBase: SB
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    tone: "light",
    icon: "map-pin"
  }, "Shahrah-e-Faisal, Karachi"), /*#__PURE__*/React.createElement(Chip, {
    tone: "light",
    icon: "clock"
  }, "10am \u2013 10pm PKT")), /*#__PURE__*/React.createElement(TrustStrip, {
    tone: "light",
    items: window.TREO.trust,
    style: {
      width: '100%',
      '--trust-cols': 'repeat(auto-fit,minmax(190px,1fr))'
    }
  })), /*#__PURE__*/React.createElement(InquiryForm, {
    phone: window.TREO.phone,
    title: "Ask about a service",
    sub: "Umrah, a ticket quote or a visa file \u2014 send the details and we will reply on WhatsApp.",
    departures: ['Umrah packages', 'Air ticketing', 'Visa services', 'Private tour quote']
  }))));
}
Object.assign(window, {
  ServicesScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServicesScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/TourDetailScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DST = window.TreoTravelsDesignSystem_12e4e4;
const {
  PhotoScrim,
  Badge,
  PriceTag,
  Button,
  Chip,
  Icon,
  SectionHeader,
  ItineraryDay,
  InclusionsGrid,
  ServiceIconRow,
  LicenseBadge,
  TourCard,
  TrustStrip
} = DST;
const Reveal = DST.Reveal || (({
  children,
  style
}) => /*#__PURE__*/React.createElement("div", {
  style: style
}, children));
const ReviewCard = DST.ReviewCard || (({
  name,
  trip,
  text
}) => /*#__PURE__*/React.createElement("blockquote", {
  style: {
    margin: 0,
    height: '100%',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    padding: 'var(--pad-card-lg)',
    background: 'var(--surface-raised)',
    border: '1px solid var(--border-dark)',
    borderRadius: 'var(--radius-card)'
  }
}, /*#__PURE__*/React.createElement("p", {
  style: {
    font: 'var(--fw-regular) var(--fs-400)/1.65 var(--font-body)',
    color: 'var(--text-secondary)'
  }
}, text), /*#__PURE__*/React.createElement("footer", {
  style: {
    marginTop: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: 3
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    font: 'var(--fw-bold) var(--fs-300)/1 var(--font-body)',
    color: 'var(--text-primary)'
  }
}, name), /*#__PURE__*/React.createElement("span", {
  style: {
    font: 'var(--fw-medium) var(--fs-200)/1 var(--font-body)',
    color: 'var(--text-faint)'
  }
}, trip))));
const PolicyTerms = DST.PolicyTerms || (({
  deposit = [],
  cancellation = [],
  note,
  tone
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'grid',
    gap: 'var(--space-3)',
    padding: 'var(--pad-card-lg)',
    background: tone === 'dark' ? 'var(--surface-raised)' : 'var(--surface-card-light)',
    border: `1px solid ${tone === 'dark' ? 'var(--border-dark)' : 'var(--border-light)'}`,
    borderRadius: 'var(--radius-card)'
  }
}, [...deposit, ...cancellation].map(r => /*#__PURE__*/React.createElement("span", {
  key: r.k,
  style: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: 14,
    font: 'var(--fw-medium) var(--fs-300)/1.5 var(--font-body)',
    color: tone === 'dark' ? 'var(--text-secondary)' : 'var(--text-on-light-secondary)'
  }
}, /*#__PURE__*/React.createElement("span", null, r.k), /*#__PURE__*/React.createElement("strong", null, r.v))), note ? /*#__PURE__*/React.createElement("p", {
  style: {
    margin: 0,
    font: 'var(--fw-medium) var(--fs-300)/1.6 var(--font-body)',
    color: tone === 'dark' ? 'var(--text-secondary)' : 'var(--text-on-light-secondary)'
  }
}, note) : null));
const DB = '../../';
function TourDetailScreen({
  tourId,
  onOpenTour
}) {
  const tours = window.TREO.tours;
  const t = tours.find(x => x.id === tourId) || tours[0];
  const others = tours.filter(x => x.id !== t.id).slice(0, 3);
  const itinerary = t.itinerary || [];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(PhotoScrim, {
    src: DB + (t.hero || t.photo),
    ratio: "var(--hero-ratio,4/5)",
    scrim: "bottomHard",
    radius: "0"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      gap: 'var(--space-15)',
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: 'var(--space-5) var(--page-pad) var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 7,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "duration",
    tabular: true
  }, t.duration), t.type ? /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, t.type) : null, t.seats <= 4 && t.seats > 0 ? /*#__PURE__*/React.createElement(Badge, {
    tone: "gold",
    tabular: true
  }, t.seats, " seats left") : null), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--type-hero)',
      fontSize: 'clamp(34px,9vw,64px)',
      color: '#fff',
      letterSpacing: 'var(--ls-display-tight)',
      textShadow: 'var(--text-shadow-photo)',
      maxWidth: '18ch'
    }
  }, t.destination), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-2)',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(PriceTag, {
    amount: t.price,
    per: "per person \xB7 twin share",
    size: "lg"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      font: 'var(--fw-bold) var(--fs-300)/1 var(--font-body)',
      letterSpacing: 'var(--ls-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)',
      fontVariantNumeric: 'var(--num-tabular)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar-days",
    size: 16
  }), "Departs ", t.departure))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-base)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: 'var(--space-4) var(--page-pad)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-lg)',
      color: 'var(--text-secondary)',
      maxWidth: '58ch'
    }
  }, t.blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, (t.facts || []).map(f => /*#__PURE__*/React.createElement(Chip, {
    key: f.label,
    icon: f.icon
  }, f.label))), /*#__PURE__*/React.createElement(ServiceIconRow, {
    assetBase: DB,
    size: 26
  }), /*#__PURE__*/React.createElement(TrustStrip, {
    items: window.TREO.trust.slice(0, 4)
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-light)'
    },
    className: "on-light"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: 'var(--section-y) var(--page-pad)',
      display: 'grid',
      gridTemplateColumns: 'var(--split,1fr)',
      gap: 'var(--space-4)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeader, {
    tone: "light",
    eyebrow: "Day by day",
    title: `${itinerary.length ? itinerary.length + '-day' : 'Full'} itinerary`,
    sub: "Tap any day to expand. Full PDF on WhatsApp."
  }), /*#__PURE__*/React.createElement("div", null, itinerary.map((d, i) => /*#__PURE__*/React.createElement(ItineraryDay, _extends({
    key: d.day
  }, d, {
    defaultOpen: i === 0,
    last: i === itinerary.length - 1
  }))), itinerary.length ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--fw-medium) var(--fs-200)/1.5 var(--font-body)',
      color: 'var(--text-on-light-muted)',
      marginTop: 'var(--space-2)'
    }
  }, "Days ", itinerary.length + 1, "\u201312 continue through Naltar, Chilas and back to Islamabad \u2014 ask for the full PDF.") : null)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(InclusionsGrid, {
    included: t.included || ['AC sleeper coach', 'Hotels (twin / triple share)', 'Daily breakfast + dinner', 'Tour guide', 'Trip photography'],
    excluded: t.excluded || ['Air tickets', 'All lunches', 'Entry tickets at private resorts', 'Personal expenses'],
    note: t.note
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-2)',
      flexWrap: 'wrap',
      padding: 'var(--pad-card)',
      background: 'var(--surface-card-light)',
      border: '1px solid var(--border-light)',
      borderRadius: 'var(--radius-card)'
    }
  }, /*#__PURE__*/React.createElement(LicenseBadge, {
    tone: "light",
    assetBase: DB,
    height: 30
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "onLightOutline",
    icon: "download"
  }, "Itinerary PDF"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-base)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: 'var(--section-y) var(--page-pad)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "From this trip",
    title: "What travellers said",
    sub: "Reviews are tied to a real departure \u2014 nothing anonymous."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'var(--cards-3,1fr)',
      gap: 'var(--gap-grid)'
    }
  }, window.TREO.reviews.slice(0, 3).map((r, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: r.name,
    delay: i * 70
  }, /*#__PURE__*/React.createElement(ReviewCard, r)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-deep)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: 'var(--section-y) var(--page-pad)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Before you pay anything",
    title: "Deposit & cancellation",
    sub: "Stated here rather than behind a terms link \u2014 including the parts that do not favour us."
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 70
  }, /*#__PURE__*/React.createElement(PolicyTerms, {
    tone: "dark",
    deposit: window.TREO.policy.deposit,
    cancellation: window.TREO.policy.cancellation,
    note: window.TREO.policy.note
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-base)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: 'var(--section-y) var(--page-pad)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Also departing",
    title: "Other trips this season"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'var(--cards-3,1fr)',
      gap: 'var(--gap-grid)'
    }
  }, others.map(o => /*#__PURE__*/React.createElement(TourCard, _extends({
    key: o.id
  }, o, {
    photo: DB + o.photo,
    onClick: () => onOpenTour(o.id)
  })))))));
}
Object.assign(window, {
  TourDetailScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/TourDetailScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ToursScreen.jsx
try { (() => {
const {
  SectionHeader,
  TourRow,
  Button,
  Badge,
  Chip,
  Icon
} = window.TreoTravelsDesignSystem_12e4e4;
const KB = '../../';
function FilterBar({
  active,
  onChange
}) {
  const opts = ['All tours', 'Group', 'Weekend', 'Private'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      overflowX: 'auto',
      paddingBottom: 4,
      marginBottom: 'var(--space-3)'
    }
  }, opts.map(o => {
    const on = active === o;
    return /*#__PURE__*/React.createElement("button", {
      key: o,
      type: "button",
      onClick: () => onChange(o),
      style: {
        minHeight: 40,
        padding: '0 15px',
        flex: '0 0 auto',
        cursor: 'pointer',
        background: on ? 'var(--surface-brand)' : 'transparent',
        color: on ? '#fff' : 'var(--text-secondary)',
        border: `1.5px solid ${on ? 'transparent' : 'var(--border-dark-strong)'}`,
        borderRadius: 'var(--radius-pill)',
        font: 'var(--fw-bold) var(--fs-200)/1 var(--font-body)',
        letterSpacing: 'var(--ls-wide)',
        textTransform: 'uppercase',
        transition: 'var(--transition-color)'
      }
    }, o);
  }));
}
function ToursScreen({
  onOpenTour
}) {
  const [filter, setFilter] = React.useState('All tours');
  const list = window.TREO.tours.filter(t => filter === 'All tours' || (t.type || '').toLowerCase().includes(filter.toLowerCase()));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-base)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: 'var(--space-5) var(--page-pad) var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Fixed departures 2026",
    title: "All tours & prices",
    sub: "Per person, twin or triple share. Air tickets excluded on the fly-in trips."
  }), /*#__PURE__*/React.createElement(FilterBar, {
    active: filter,
    onChange: setFilter
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 'var(--space-3)',
      font: 'var(--fw-semibold) var(--fs-200)/1 var(--font-body)',
      color: 'var(--text-muted)',
      fontVariantNumeric: 'var(--num-tabular)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "list",
    size: 15
  }), list.length, " departures \xB7 sorted by date"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, list.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: t.id,
    style: {
      paddingBottom: 'var(--space-5)',
      borderBottom: i === list.length - 1 ? 0 : '1px solid var(--border-dark)'
    }
  }, /*#__PURE__*/React.createElement(TourRow, {
    photo: KB + t.photo,
    destination: t.destination,
    duration: t.duration,
    departure: `Departs ${t.departure}`,
    price: t.price,
    blurb: t.blurb,
    facts: t.facts,
    reverse: i % 2 === 1,
    onCta: () => onOpenTour(t.id),
    ctaLabel: t.seats === 0 ? 'Join the waitlist' : 'WhatsApp for seats',
    style: {
      '--tour-row-cols': 'var(--row-cols,1fr)'
    }
  })))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-light)'
    },
    className: "on-light"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: 'var(--section-y) var(--page-pad)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "onLightBrand"
  }, "Private tours"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--type-section)',
      color: 'var(--text-on-light)',
      letterSpacing: 'var(--ls-display)',
      maxWidth: '24ch'
    }
  }, "Any of these, on your own dates"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-on-light-secondary)',
      maxWidth: '52ch'
    }
  }, "Same itineraries, your own coach or Prado, your own schedule. Tell us the group size and we will quote the same day."), /*#__PURE__*/React.createElement(Button, {
    variant: "onLight",
    icon: "message-circle",
    href: `https://wa.me/${window.TREO.phone.replace(/\D/g, '')}`
  }, "Get a private quote"))));
}
Object.assign(window, {
  ToursScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ToursScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
window.TREO = {
  phone: '+92 300 1234567',
  // Hero board = the next six upcoming departures only. Past dates live in the
  // calendar's collapsed "already departed" section, never here.
  departures: [{
    day: '29',
    month: 'Aug',
    destination: 'Gorakh Hills weekend',
    duration: '2D/2N',
    seats: 4,
    price: 16499,
    note: 'Weekend'
  }, {
    day: '05',
    month: 'Sep',
    destination: 'Neelum Valley & Kashmir',
    duration: '7D/6N',
    seats: 11,
    price: 34999,
    note: 'By road'
  }, {
    day: '12',
    month: 'Sep',
    destination: 'Gorakh Hills weekend',
    duration: '2D/2N',
    seats: 6,
    price: 16499,
    note: 'Weekend'
  }, {
    day: '19',
    month: 'Sep',
    destination: 'Skardu, Deosai & Sheosar',
    duration: '10D/9N',
    seats: 2,
    price: 57999,
    note: 'By air'
  }, {
    day: '03',
    month: 'Oct',
    destination: 'Hunza autumn colours',
    duration: '12D/11N',
    seats: 14,
    price: 55999,
    note: 'By air'
  }, {
    day: '17',
    month: 'Oct',
    destination: 'Fairy Meadows & Nanga Parbat',
    duration: '11D/10N',
    seats: 15,
    price: 53999,
    note: 'By air'
  }],
  calendar: [{
    month: 'July 2026',
    rows: [{
      day: '16',
      month: 'Jul',
      destination: 'Fairy Meadows & Hunza',
      duration: '11D/10N',
      seats: 3,
      price: 53999,
      note: 'By air',
      mode: 'air',
      tour: 'fairy'
    }, {
      day: '18',
      month: 'Jul',
      destination: 'Swat, Kalam & Shogran',
      duration: '9D/8N',
      seats: 9,
      price: 37999,
      note: 'By road',
      mode: 'road',
      tour: 'naran'
    }, {
      day: '25',
      month: 'Jul',
      destination: 'Naran, Shogran & Balakot',
      duration: '8D/7N',
      seats: 14,
      price: 30999,
      note: 'By road',
      mode: 'road',
      tour: 'naran'
    }]
  }, {
    month: 'August 2026',
    rows: [{
      day: '08',
      month: 'Aug',
      destination: 'Hunza, Khunjerab & Naltar',
      duration: '12D/11N',
      seats: 7,
      price: 53999,
      note: 'By air',
      mode: 'air',
      tour: 'hunza'
    }, {
      day: '22',
      month: 'Aug',
      destination: 'Skardu & Basho Valley',
      duration: '10D/9N',
      seats: 2,
      price: 57999,
      note: 'By air',
      mode: 'air',
      tour: 'skardu'
    }, {
      day: '26',
      month: 'Aug',
      destination: 'Naran, Shogran & Balakot',
      duration: '8D/7N',
      seats: 0,
      price: 30999,
      note: 'By road',
      mode: 'road',
      tour: 'naran'
    }, {
      day: '29',
      month: 'Aug',
      destination: 'Gorakh Hills weekend',
      duration: '2D/2N',
      seats: 4,
      price: 16499,
      note: 'Weekend',
      mode: 'weekend',
      tour: 'gorakh'
    }]
  }, {
    month: 'September 2026',
    rows: [{
      day: '05',
      month: 'Sep',
      destination: 'Neelum Valley & Kashmir',
      duration: '7D/6N',
      seats: 11,
      price: 34999,
      note: 'By road',
      mode: 'road',
      tour: 'kashmir'
    }, {
      day: '12',
      month: 'Sep',
      destination: 'Gorakh Hills weekend',
      duration: '2D/2N',
      seats: 6,
      price: 16499,
      note: 'Weekend',
      mode: 'weekend',
      tour: 'gorakh'
    }, {
      day: '19',
      month: 'Sep',
      destination: 'Skardu, Deosai & Sheosar',
      duration: '10D/9N',
      seats: 2,
      price: 57999,
      note: 'By air',
      mode: 'air',
      tour: 'skardu'
    }]
  }, {
    month: 'October 2026',
    rows: [{
      day: '03',
      month: 'Oct',
      destination: 'Hunza autumn colours',
      duration: '12D/11N',
      seats: 14,
      price: 55999,
      note: 'By air',
      mode: 'air',
      tour: 'hunza'
    }, {
      day: '17',
      month: 'Oct',
      destination: 'Fairy Meadows & Nanga Parbat',
      duration: '11D/10N',
      seats: 15,
      price: 53999,
      note: 'By air',
      mode: 'air',
      tour: 'fairy'
    }]
  }],
  tours: [{
    id: 'hunza',
    photo: 'assets/photos/hunza-group.png',
    hero: 'assets/photos/nanga-parbat.png',
    destination: 'Hunza, Khunjerab & Naltar',
    duration: '12D/11N',
    departure: '16 Jul 2026',
    price: 53999,
    seats: 3,
    type: 'Group tour',
    blurb: 'Karachi to Islamabad by air, then the whole valley — Attabad, Passu Cones, Khunjerab Pass and two nights in Naltar.',
    facts: [{
      icon: 'plane',
      label: 'By air from Karachi'
    }, {
      icon: 'users',
      label: 'Max 18 travellers'
    }, {
      icon: 'mountain',
      label: 'Easy — no trekking'
    }],
    itinerary: [{
      day: 1,
      title: 'Karachi → Islamabad by air',
      body: 'Evening flight, transfer to the hotel and a briefing with your guide.',
      meals: 'Dinner',
      stay: 'Hotel, Islamabad'
    }, {
      day: 2,
      title: 'Islamabad → Naran',
      body: 'Early departure up the Kaghan valley, lunch stop at Balakot.',
      meals: 'Breakfast + dinner',
      stay: 'Hotel, Naran'
    }, {
      day: 3,
      title: 'Naran → Babusar Top → Chilas',
      body: 'Babusar Top photo stop, then down onto the Karakoram Highway.',
      meals: 'Breakfast + dinner',
      stay: 'Hotel, Chilas'
    }, {
      day: 4,
      title: 'Chilas → Hunza',
      body: 'Nanga Parbat viewpoint, Rakaposhi View and into Karimabad by evening.',
      meals: 'Breakfast + dinner',
      stay: 'Hotel, Karimabad'
    }, {
      day: 5,
      title: 'Khunjerab Pass & Passu',
      body: 'The Pakistan–China border at 4,693m, Passu Cones and Attabad Lake.',
      meals: 'Breakfast + dinner',
      stay: 'Hotel, Karimabad'
    }],
    included: ['AC sleeper coach for all road legs', '11 nights hotel (twin / triple share)', 'Daily breakfast + dinner', 'Jeep to Fairy Meadows & Naltar', 'Tour guide throughout', 'Professional trip photography', 'Both-side stays in Islamabad'],
    excluded: ['Air tickets Karachi ↔ Islamabad', 'All lunches', 'Entry tickets at private resorts', 'Personal shopping and expenses', 'Anything not listed under Included'],
    note: 'Air tickets are excluded. We book them for you at cost if you ask on WhatsApp.'
  }, {
    id: 'skardu',
    photo: 'assets/photos/basho-valley.png',
    destination: 'Skardu & Basho Valley',
    duration: '10D/9N',
    departure: '22 Aug 2026',
    price: 57999,
    seats: 2,
    type: 'Group tour',
    blurb: 'Two nights camping in Basho with the river outside the tent, plus Shangrila and Upper Kachura.',
    facts: [{
      icon: 'tent',
      label: '2 nights camping'
    }, {
      icon: 'plane',
      label: 'By air'
    }]
  }, {
    id: 'fairy',
    photo: 'assets/photos/fairy-meadows-group.png',
    destination: 'Fairy Meadows & Nanga Parbat',
    duration: '11D/10N',
    departure: '16 Jul 2026',
    price: 53999,
    seats: 3,
    type: 'Group tour',
    blurb: 'The jeep track, the walk up, and a full day at base camp view point.',
    facts: [{
      icon: 'footprints',
      label: 'Light trekking'
    }]
  }, {
    id: 'naran',
    photo: 'assets/photos/yak-grill-group.png',
    destination: 'Naran, Shogran & Balakot',
    duration: '8D/7N',
    departure: '26 Aug 2026',
    price: 30999,
    seats: 0,
    type: 'Group tour',
    blurb: 'The classic first northern trip. Siri Paye by jeep, Saif-ul-Malook, Lake Lulusar.',
    facts: [{
      icon: 'bus',
      label: 'By road from Karachi'
    }]
  }, {
    id: 'kashmir',
    photo: 'assets/photos/kashmir-family.png',
    destination: 'Neelum Valley & Kashmir',
    duration: '7D/6N',
    departure: '05 Sep 2026',
    price: 34999,
    seats: 11,
    type: 'Group tour',
    blurb: 'Keran, Sharda and Arang Kel — the greenest week we run.',
    facts: [{
      icon: 'users',
      label: 'Family friendly'
    }]
  }, {
    id: 'gorakh',
    photo: 'assets/photos/gorakh-hills.png',
    destination: 'Gorakh Hills weekend',
    duration: '2D/2N',
    departure: '12 Sep 2026',
    price: 16499,
    seats: 6,
    type: 'Weekend',
    blurb: 'Sindh’s own hill station. Leave Karachi Friday night, back Sunday.',
    facts: [{
      icon: 'moon',
      label: 'Overnight coach'
    }]
  }],
  services: [{
    icon: 'kaaba',
    lucide: 'moon-star',
    title: 'Umrah packages',
    sub: '20-day spiritual journey',
    body: 'Visa, flights, Makkah and Madinah hotels, Ziyarat transfers, and a group leader from Karachi.',
    price: 'From Rs. 215,000/-',
    photo: null
  }, {
    icon: 'plane',
    lucide: 'plane',
    title: 'Air ticketing',
    sub: 'Domestic & international',
    body: 'Same-day issuance on all PIA, Airblue, SereneAir and Gulf carriers. We quote on WhatsApp within the hour.',
    price: 'At cost + service fee',
    photo: null
  }, {
    icon: 'file',
    lucide: 'file-check',
    title: 'Visa services',
    sub: 'Documentation & appointments',
    body: 'File preparation, appointment booking and interview guidance for UAE, Malaysia, Thailand, Schengen and UK.',
    price: 'From Rs. 6,500/-',
    photo: 'assets/photos/malaysia-family.png'
  }, {
    icon: 'car',
    lucide: 'car-front',
    title: 'Private tours',
    sub: 'Your family, your dates',
    body: 'Any northern itinerary as a private trip — your own coach or Prado, your own schedule.',
    price: 'Quoted per group',
    photo: 'assets/photos/kashmir-family.png'
  }],
  trust: [{
    icon: 'badge-check',
    label: 'Govt. Licence #5618',
    sub: 'Registered tour operator'
  }, {
    icon: 'route',
    label: '37 non-stop trips',
    sub: 'Operating since 2018'
  }, {
    icon: 'users',
    label: 'Max 18 per group',
    sub: 'Never an oversold coach'
  }, {
    icon: 'award',
    label: 'Sitara-e-Pakistan 2022',
    sub: 'National tourism award'
  }, {
    icon: 'star',
    label: '428 reviews · 100% recommend',
    sub: 'Facebook, unedited'
  }],
  policy: {
    deposit: [{
      k: 'To confirm a seat',
      v: '50% of the tour price'
    }, {
      k: 'Balance due',
      v: '7 days before departure'
    }, {
      k: 'Instalments',
      v: 'Split around your salary dates — ask on WhatsApp'
    }, {
      k: 'Seat hold',
      v: '24 hours from the time we confirm availability'
    }],
    cancellation: [{
      k: '30 days or more before departure',
      v: 'Full refund, minus bank charges'
    }, {
      k: '15–29 days before departure',
      v: '75% refunded'
    }, {
      k: '7–14 days before departure',
      v: '50% refunded'
    }, {
      k: 'Under 7 days, or no-show',
      v: 'No refund — hotels and transport are already paid'
    }],
    note: 'If Treo cancels a departure for any reason — weather, roads, or too few travellers — you are refunded in full or moved to the next date, your choice.'
  },
  reviews: [{
    name: 'Ayesha K.',
    trip: 'Hunza · Jul 2026',
    text: 'Third trip with Treo. The coach is always on time and the hotels are exactly what they showed us.'
  }, {
    name: 'Bilal R.',
    trip: 'Skardu · Aug 2026',
    text: 'They told us upfront that lunches and air tickets were not included. No surprises at any point.'
  }, {
    name: 'Sana & family',
    trip: 'Naran · Jun 2026',
    text: 'Travelled with two kids and my mother. The guide handled everything, we just enjoyed the trip.'
  }, {
    name: 'Hamza T.',
    trip: 'Fairy Meadows · Jul 2026',
    text: 'The jeep track is rough and they said so beforehand. Everything was exactly as described, nothing oversold.'
  }, {
    name: 'Rabia N.',
    trip: 'Gorakh Hills · May 2026',
    text: 'Two-night weekend, left Friday after work. Cheapest way to actually get out of Karachi.'
  }, {
    name: 'Faisal & Nida',
    trip: 'Kashmir · Sep 2026',
    text: 'Booked as a private tour for eight of us. Quote came the same day and did not change afterwards.'
  }],
  footerColumns: [{
    title: 'Northern tours',
    links: [{
      label: 'Hunza & Khunjerab'
    }, {
      label: 'Skardu & Basho'
    }, {
      label: 'Fairy Meadows'
    }, {
      label: 'Naran & Shogran'
    }, {
      label: 'Neelum & Kashmir'
    }, {
      label: 'Gorakh Hills weekend'
    }]
  }, {
    title: 'Plan with us',
    links: [{
      label: 'Departure calendar'
    }, {
      label: 'Private tour builder'
    }, {
      label: 'Honeymoon trips'
    }, {
      label: 'Corporate & educational'
    }, {
      label: 'Deposit & instalments'
    }, {
      label: 'Cancellation policy'
    }]
  }, {
    title: 'Services',
    links: [{
      label: 'Umrah packages'
    }, {
      label: 'Air ticketing'
    }, {
      label: 'Visa services'
    }]
  }, {
    title: 'Company',
    links: [{
      label: 'About Treo'
    }, {
      label: 'Reviews'
    }, {
      label: 'Gallery'
    }, {
      label: 'Travel guides'
    }, {
      label: 'Contact & office'
    }]
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.LicenseBadge = __ds_scope.LicenseBadge;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.ServiceIcon = __ds_scope.ServiceIcon;

__ds_ns.ServiceIconRow = __ds_scope.ServiceIconRow;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Annotation = __ds_scope.Annotation;

__ds_ns.CountUp = __ds_scope.CountUp;

__ds_ns.PhotoScrim = __ds_scope.PhotoScrim;

__ds_ns.Reveal = __ds_scope.Reveal;

__ds_ns.ReviewCard = __ds_scope.ReviewCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.PriceTag = __ds_scope.PriceTag;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.InquiryForm = __ds_scope.InquiryForm;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

__ds_ns.StickyWhatsApp = __ds_scope.StickyWhatsApp;

__ds_ns.TrustStrip = __ds_scope.TrustStrip;

__ds_ns.DepartureBoard = __ds_scope.DepartureBoard;

__ds_ns.DepartureRow = __ds_scope.DepartureRow;

__ds_ns.InclusionsGrid = __ds_scope.InclusionsGrid;

__ds_ns.ItineraryDay = __ds_scope.ItineraryDay;

__ds_ns.PolicyTerms = __ds_scope.PolicyTerms;

__ds_ns.TourCard = __ds_scope.TourCard;

__ds_ns.TourRow = __ds_scope.TourRow;

})();
