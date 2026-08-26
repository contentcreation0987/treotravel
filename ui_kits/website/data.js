window.TREO = {
  phone: '+92 300 1234567',
  // Hero board = the next six upcoming departures only. Past dates live in the
  // calendar's collapsed "already departed" section, never here.
  departures: [
    { day: '29', month: 'Aug', destination: 'Gorakh Hills weekend', duration: '2D/2N', seats: 4, price: 16499, note: 'Weekend' },
    { day: '05', month: 'Sep', destination: 'Neelum Valley & Kashmir', duration: '7D/6N', seats: 11, price: 34999, note: 'By road' },
    { day: '12', month: 'Sep', destination: 'Gorakh Hills weekend', duration: '2D/2N', seats: 6, price: 16499, note: 'Weekend' },
    { day: '19', month: 'Sep', destination: 'Skardu, Deosai & Sheosar', duration: '10D/9N', seats: 2, price: 57999, note: 'By air' },
    { day: '03', month: 'Oct', destination: 'Hunza autumn colours', duration: '12D/11N', seats: 14, price: 55999, note: 'By air' },
    { day: '17', month: 'Oct', destination: 'Fairy Meadows & Nanga Parbat', duration: '11D/10N', seats: 15, price: 53999, note: 'By air' },
  ],
  calendar: [
    { month: 'July 2026', rows: [
      { day: '16', month: 'Jul', destination: 'Fairy Meadows & Hunza', duration: '11D/10N', seats: 3, price: 53999, note: 'By air', mode: 'air', tour: 'fairy' },
      { day: '18', month: 'Jul', destination: 'Swat, Kalam & Shogran', duration: '9D/8N', seats: 9, price: 37999, note: 'By road', mode: 'road', tour: 'naran' },
      { day: '25', month: 'Jul', destination: 'Naran, Shogran & Balakot', duration: '8D/7N', seats: 14, price: 30999, note: 'By road', mode: 'road', tour: 'naran' },
    ] },
    { month: 'August 2026', rows: [
      { day: '08', month: 'Aug', destination: 'Hunza, Khunjerab & Naltar', duration: '12D/11N', seats: 7, price: 53999, note: 'By air', mode: 'air', tour: 'hunza' },
      { day: '22', month: 'Aug', destination: 'Skardu & Basho Valley', duration: '10D/9N', seats: 2, price: 57999, note: 'By air', mode: 'air', tour: 'skardu' },
      { day: '26', month: 'Aug', destination: 'Naran, Shogran & Balakot', duration: '8D/7N', seats: 0, price: 30999, note: 'By road', mode: 'road', tour: 'naran' },
      { day: '29', month: 'Aug', destination: 'Gorakh Hills weekend', duration: '2D/2N', seats: 4, price: 16499, note: 'Weekend', mode: 'weekend', tour: 'gorakh' },
    ] },
    { month: 'September 2026', rows: [
      { day: '05', month: 'Sep', destination: 'Neelum Valley & Kashmir', duration: '7D/6N', seats: 11, price: 34999, note: 'By road', mode: 'road', tour: 'kashmir' },
      { day: '12', month: 'Sep', destination: 'Gorakh Hills weekend', duration: '2D/2N', seats: 6, price: 16499, note: 'Weekend', mode: 'weekend', tour: 'gorakh' },
      { day: '19', month: 'Sep', destination: 'Skardu, Deosai & Sheosar', duration: '10D/9N', seats: 2, price: 57999, note: 'By air', mode: 'air', tour: 'skardu' },
    ] },
    { month: 'October 2026', rows: [
      { day: '03', month: 'Oct', destination: 'Hunza autumn colours', duration: '12D/11N', seats: 14, price: 55999, note: 'By air', mode: 'air', tour: 'hunza' },
      { day: '17', month: 'Oct', destination: 'Fairy Meadows & Nanga Parbat', duration: '11D/10N', seats: 15, price: 53999, note: 'By air', mode: 'air', tour: 'fairy' },
    ] },
  ],
  tours: [
    {
      id: 'hunza',
      photo: 'assets/photos/hunza-group.png',
      hero: 'assets/photos/nanga-parbat.png',
      destination: 'Hunza, Khunjerab & Naltar',
      duration: '12D/11N', departure: '16 Jul 2026', price: 53999, seats: 3, type: 'Group tour',
      blurb: 'Karachi to Islamabad by air, then the whole valley — Attabad, Passu Cones, Khunjerab Pass and two nights in Naltar.',
      facts: [{ icon: 'plane', label: 'By air from Karachi' }, { icon: 'users', label: 'Max 18 travellers' }, { icon: 'mountain', label: 'Easy — no trekking' }],
      itinerary: [
        { day: 1, title: 'Karachi → Islamabad by air', body: 'Evening flight, transfer to the hotel and a briefing with your guide.', meals: 'Dinner', stay: 'Hotel, Islamabad' },
        { day: 2, title: 'Islamabad → Naran', body: 'Early departure up the Kaghan valley, lunch stop at Balakot.', meals: 'Breakfast + dinner', stay: 'Hotel, Naran' },
        { day: 3, title: 'Naran → Babusar Top → Chilas', body: 'Babusar Top photo stop, then down onto the Karakoram Highway.', meals: 'Breakfast + dinner', stay: 'Hotel, Chilas' },
        { day: 4, title: 'Chilas → Hunza', body: 'Nanga Parbat viewpoint, Rakaposhi View and into Karimabad by evening.', meals: 'Breakfast + dinner', stay: 'Hotel, Karimabad' },
        { day: 5, title: 'Khunjerab Pass & Passu', body: 'The Pakistan–China border at 4,693m, Passu Cones and Attabad Lake.', meals: 'Breakfast + dinner', stay: 'Hotel, Karimabad' },
      ],
      included: ['AC sleeper coach for all road legs', '11 nights hotel (twin / triple share)', 'Daily breakfast + dinner', 'Jeep to Fairy Meadows & Naltar', 'Tour guide throughout', 'Professional trip photography', 'Both-side stays in Islamabad'],
      excluded: ['Air tickets Karachi ↔ Islamabad', 'All lunches', 'Entry tickets at private resorts', 'Personal shopping and expenses', 'Anything not listed under Included'],
      note: 'Air tickets are excluded. We book them for you at cost if you ask on WhatsApp.',
    },
    { id: 'skardu', photo: 'assets/photos/basho-valley.png', destination: 'Skardu & Basho Valley', duration: '10D/9N', departure: '22 Aug 2026', price: 57999, seats: 2, type: 'Group tour', blurb: 'Two nights camping in Basho with the river outside the tent, plus Shangrila and Upper Kachura.', facts: [{ icon: 'tent', label: '2 nights camping' }, { icon: 'plane', label: 'By air' }] },
    { id: 'fairy', photo: 'assets/photos/fairy-meadows-group.png', destination: 'Fairy Meadows & Nanga Parbat', duration: '11D/10N', departure: '16 Jul 2026', price: 53999, seats: 3, type: 'Group tour', blurb: 'The jeep track, the walk up, and a full day at base camp view point.', facts: [{ icon: 'footprints', label: 'Light trekking' }] },
    { id: 'naran', photo: 'assets/photos/yak-grill-group.png', destination: 'Naran, Shogran & Balakot', duration: '8D/7N', departure: '26 Aug 2026', price: 30999, seats: 0, type: 'Group tour', blurb: 'The classic first northern trip. Siri Paye by jeep, Saif-ul-Malook, Lake Lulusar.', facts: [{ icon: 'bus', label: 'By road from Karachi' }] },
    { id: 'kashmir', photo: 'assets/photos/kashmir-family.png', destination: 'Neelum Valley & Kashmir', duration: '7D/6N', departure: '05 Sep 2026', price: 34999, seats: 11, type: 'Group tour', blurb: 'Keran, Sharda and Arang Kel — the greenest week we run.', facts: [{ icon: 'users', label: 'Family friendly' }] },
    { id: 'gorakh', photo: 'assets/photos/gorakh-hills.png', destination: 'Gorakh Hills weekend', duration: '2D/2N', departure: '12 Sep 2026', price: 16499, seats: 6, type: 'Weekend', blurb: 'Sindh’s own hill station. Leave Karachi Friday night, back Sunday.', facts: [{ icon: 'moon', label: 'Overnight coach' }] },
  ],
  services: [
    { icon: 'kaaba', lucide: 'moon-star', title: 'Umrah packages', sub: '20-day spiritual journey', body: 'Visa, flights, Makkah and Madinah hotels, Ziyarat transfers, and a group leader from Karachi.', price: 'From Rs. 215,000/-', photo: null },
    { icon: 'plane', lucide: 'plane', title: 'Air ticketing', sub: 'Domestic & international', body: 'Same-day issuance on all PIA, Airblue, SereneAir and Gulf carriers. We quote on WhatsApp within the hour.', price: 'At cost + service fee', photo: null },
    { icon: 'file', lucide: 'file-check', title: 'Visa services', sub: 'Documentation & appointments', body: 'File preparation, appointment booking and interview guidance for UAE, Malaysia, Thailand, Schengen and UK.', price: 'From Rs. 6,500/-', photo: 'assets/photos/malaysia-family.png' },
    { icon: 'car', lucide: 'car-front', title: 'Private tours', sub: 'Your family, your dates', body: 'Any northern itinerary as a private trip — your own coach or Prado, your own schedule.', price: 'Quoted per group', photo: 'assets/photos/kashmir-family.png' },
  ],
  trust: [
    { icon: 'badge-check', label: 'Govt. Licence #5618', sub: 'Registered tour operator' },
    { icon: 'route', label: '37 non-stop trips', sub: 'Operating since 2018' },
    { icon: 'users', label: 'Max 18 per group', sub: 'Never an oversold coach' },
    { icon: 'award', label: 'Sitara-e-Pakistan 2022', sub: 'National tourism award' },
    { icon: 'star', label: '428 reviews · 100% recommend', sub: 'Facebook, unedited' },
  ],
  policy: {
    deposit: [
      { k: 'To confirm a seat', v: '50% of the tour price' },
      { k: 'Balance due', v: '7 days before departure' },
      { k: 'Instalments', v: 'Split around your salary dates — ask on WhatsApp' },
      { k: 'Seat hold', v: '24 hours from the time we confirm availability' },
    ],
    cancellation: [
      { k: '30 days or more before departure', v: 'Full refund, minus bank charges' },
      { k: '15–29 days before departure', v: '75% refunded' },
      { k: '7–14 days before departure', v: '50% refunded' },
      { k: 'Under 7 days, or no-show', v: 'No refund — hotels and transport are already paid' },
    ],
    note: 'If Treo cancels a departure for any reason — weather, roads, or too few travellers — you are refunded in full or moved to the next date, your choice.',
  },
  reviews: [
    { name: 'Ayesha K.', trip: 'Hunza · Jul 2026', text: 'Third trip with Treo. The coach is always on time and the hotels are exactly what they showed us.' },
    { name: 'Bilal R.', trip: 'Skardu · Aug 2026', text: 'They told us upfront that lunches and air tickets were not included. No surprises at any point.' },
    { name: 'Sana & family', trip: 'Naran · Jun 2026', text: 'Travelled with two kids and my mother. The guide handled everything, we just enjoyed the trip.' },
    { name: 'Hamza T.', trip: 'Fairy Meadows · Jul 2026', text: 'The jeep track is rough and they said so beforehand. Everything was exactly as described, nothing oversold.' },
    { name: 'Rabia N.', trip: 'Gorakh Hills · May 2026', text: 'Two-night weekend, left Friday after work. Cheapest way to actually get out of Karachi.' },
    { name: 'Faisal & Nida', trip: 'Kashmir · Sep 2026', text: 'Booked as a private tour for eight of us. Quote came the same day and did not change afterwards.' },
  ],
  footerColumns: [
    { title: 'Northern tours', links: [{ label: 'Hunza & Khunjerab' }, { label: 'Skardu & Basho' }, { label: 'Fairy Meadows' }, { label: 'Naran & Shogran' }, { label: 'Neelum & Kashmir' }, { label: 'Gorakh Hills weekend' }] },
    { title: 'Plan with us', links: [{ label: 'Departure calendar' }, { label: 'Private tour builder' }, { label: 'Honeymoon trips' }, { label: 'Corporate & educational' }, { label: 'Deposit & instalments' }, { label: 'Cancellation policy' }] },
    { title: 'Services', links: [{ label: 'Umrah packages' }, { label: 'Air ticketing' }, { label: 'Visa services' }] },
    { title: 'Company', links: [{ label: 'About Treo' }, { label: 'Reviews' }, { label: 'Gallery' }, { label: 'Travel guides' }, { label: 'Contact & office' }] },
  ],
};
