export interface Vehicle {
  id: string;
  name: string;
  category: 'bike' | 'scooter' | 'car';
  image: string;
  images: string[];
  description: string;
  specs: string[];
  originalPrice: number;
  discountedPrice: number;
  discountPercent: number;
}

export const vehicles: Vehicle[] = [
  {
    id: 'honda-activa-3g',
    name: 'Honda Activa 3G',
    category: 'scooter',
    image: '/vehicles/Activa 3g 66825683ba7ce7e711dec07624ab2151.jpg.jpeg',
    images: [
      '/vehicles/Activa 3g 66825683ba7ce7e711dec07624ab2151.jpg.jpeg',
      '/vehicles/Activa 5g honda-activa-4g.jpg.jpeg',
      '/vehicles/Activa 6g honda-activa-3g-black-1486354967726.webp',
      '/vehicles/Activa 6g white activa-6g-dlx-non-obd-2b-petrol-pearl-precious-white-273144527-unsstzvl.jpg.jpeg',
      "/vehicles/Activa 125 honda-activa-125-pearl-amazing-white-1488275317152.jpg.jpeg",
      '/vehicles/Activa 4g 66825683ba7ce7e711dec07624ab2151 (1).jpg.jpeg',
    ],
    description:
      'Honda Activa 3G — a trusted 110cc automatic scooter for everyday city rides. Easy to ride, low maintenance, and ideal for short commutes.',
    specs: ['109.2cc engine', 'Automatic CVT', 'Kick & electric start'],
    originalPrice: 250,
    discountedPrice: 200,
    discountPercent: 20,
  },
  {
    id: 'honda-activa-5g',
    name: 'Honda Activa 5G',
    category: 'scooter',
    image: '/vehicles/Activa 5g honda-activa-4g.jpg.jpeg',
    images: [
      '/vehicles/Activa 5g honda-activa-4g.jpg.jpeg',
      '/vehicles/Activa 6g honda-activa-3g-black-1486354967726.webp',
      '/vehicles/Activa 6g white activa-6g-dlx-non-obd-2b-petrol-pearl-precious-white-273144527-unsstzvl.jpg.jpeg',
      "/vehicles/Activa 125 honda-activa-125-pearl-amazing-white-1488275317152.jpg.jpeg",
      '/vehicles/Activa 4g 66825683ba7ce7e711dec07624ab2151 (1).jpg.jpeg',
      '/vehicles/Activa 3g 66825683ba7ce7e711dec07624ab2151.jpg.jpeg',
    ],
    description:
      'Honda Activa 5G — refined 110cc commuter scooter with smooth power delivery and a comfortable seat for daily errands and office runs.',
    specs: ['109.2cc engine', 'Automatic CVT', 'Spacious under-seat storage'],
    originalPrice: 250,
    discountedPrice: 200,
    discountPercent: 20,
  },
  {
    id: 'honda-activa-6g',
    name: 'Honda Activa 6G',
    category: 'scooter',
    image: '/vehicles/Activa 6g honda-activa-3g-black-1486354967726.webp',
    images: [
      '/vehicles/Activa 6g honda-activa-3g-black-1486354967726.webp',
      '/vehicles/Activa 6g white activa-6g-dlx-non-obd-2b-petrol-pearl-precious-white-273144527-unsstzvl.jpg.jpeg',
      "/vehicles/Activa 125 honda-activa-125-pearl-amazing-white-1488275317152.jpg.jpeg",
      '/vehicles/Activa 4g 66825683ba7ce7e711dec07624ab2151 (1).jpg.jpeg',
      '/vehicles/Activa 3g 66825683ba7ce7e711dec07624ab2151.jpg.jpeg',
      '/vehicles/Activa 5g honda-activa-4g.jpg.jpeg',
    ],
    description:
      'Honda Activa 6G (BS6) — dependable 110cc automatic scooter with improved efficiency and a refined ride for busy city traffic.',
    specs: ['109.2cc BS6 engine', 'Silent ACG starter', 'Combi-brake system'],
    originalPrice: 250,
    discountedPrice: 200,
    discountPercent: 20,
  },
  {
    id: 'honda-activa-6g-white',
    name: 'Honda Activa 6G White',
    category: 'scooter',
    image: '/vehicles/Activa 6g white activa-6g-dlx-non-obd-2b-petrol-pearl-precious-white-273144527-unsstzvl.jpg.jpeg',
    images: [
      '/vehicles/Activa 6g white activa-6g-dlx-non-obd-2b-petrol-pearl-precious-white-273144527-unsstzvl.jpg.jpeg',
      "/vehicles/Activa 125 honda-activa-125-pearl-amazing-white-1488275317152.jpg.jpeg",
      '/vehicles/Activa 4g 66825683ba7ce7e711dec07624ab2151 (1).jpg.jpeg',
      '/vehicles/Activa 3g 66825683ba7ce7e711dec07624ab2151.jpg.jpeg',
      '/vehicles/Activa 5g honda-activa-4g.jpg.jpeg',
      '/vehicles/Activa 6g honda-activa-3g-black-1486354967726.webp',
    ],
    description:
      'Honda Activa 6G in pearl white — the same trusted 110cc BS6 scooter with a clean, premium look for city commuting.',
    specs: ['109.2cc BS6 engine', 'Silent ACG starter', 'Metal body panels'],
    originalPrice: 250,
    discountedPrice: 200,
    discountPercent: 20,
  },
  {
    id: 'honda-activa-125',
    name: 'Honda Activa 125',
    category: 'scooter',
    image: '/vehicles/Activa 125 honda-activa-125-pearl-amazing-white-1488275317152.jpg.jpeg',
    images: [
      "/vehicles/Activa 125 honda-activa-125-pearl-amazing-white-1488275317152.jpg.jpeg",
      '/vehicles/Activa 4g 66825683ba7ce7e711dec07624ab2151 (1).jpg.jpeg',
      '/vehicles/Activa 3g 66825683ba7ce7e711dec07624ab2151.jpg.jpeg',
      '/vehicles/Activa 5g honda-activa-4g.jpg.jpeg',
      '/vehicles/Activa 6g honda-activa-3g-black-1486354967726.webp',
      '/vehicles/Activa 6g white activa-6g-dlx-non-obd-2b-petrol-pearl-precious-white-273144527-unsstzvl.jpg.jpeg',
    ],
    description:
      'Honda Activa 125 — a 125cc premium automatic scooter with stronger performance and comfort for longer daily rides and highway stretches.',
    specs: ['124.9cc engine', 'Automatic CVT', 'Telescopic front suspension'],
    originalPrice: 250,
    discountedPrice: 200,
    discountPercent: 20,
  },
  {
    id: 'honda-activa-4g',
    name: 'Honda Activa 4G',
    category: 'scooter',
    image: '/vehicles/Activa 4g 66825683ba7ce7e711dec07624ab2151 (1).jpg.jpeg',
    images: [
      '/vehicles/Activa 4g 66825683ba7ce7e711dec07624ab2151 (1).jpg.jpeg',
      '/vehicles/Activa 5g honda-activa-4g.jpg.jpeg',
      '/vehicles/Activa 6g honda-activa-3g-black-1486354967726.webp',
      '/vehicles/Activa 6g white activa-6g-dlx-non-obd-2b-petrol-pearl-precious-white-273144527-unsstzvl.jpg.jpeg',
      "/vehicles/Activa 125 honda-activa-125-pearl-amazing-white-1488275317152.jpg.jpeg",
      '/vehicles/Activa 3g 66825683ba7ce7e711dec07624ab2151.jpg.jpeg',
    ],
    description:
      'Honda Activa 4G — a proven 110cc automatic scooter known for easy handling, solid build quality, and hassle-free city commuting.',
    specs: ['109.2cc engine', 'Automatic CVT', 'External fuel lid'],
    originalPrice: 250,
    discountedPrice: 200,
    discountPercent: 20,
  },
  {
    id: 'jupiter-brown',
    name: 'Jupiter Brown',
    category: 'scooter',
    image: '/vehicles/Jupiter brown Jupiter-480x248 (1).jpg.jpeg',
    images: [
      "/vehicles/Jupiter brown Jupiter-480x248 (1).jpg.jpeg",
      "/vehicles/Jupiter grey jupiter-scooter-500x500.png",
      "/vehicles/Jupiter silver.jpeg",
    ],
    description:
      'TVS Jupiter in brown — a comfortable 110cc family scooter with ample under-seat storage and a smooth ride for daily travel.',
    specs: ['109.7cc engine', 'External fuel fill', 'Large 21L under-seat storage'],
    originalPrice: 250,
    discountedPrice: 200,
    discountPercent: 20,
  },
  {
    id: 'jupiter-grey',
    name: 'Jupiter Grey',
    category: 'scooter',
    image: '/vehicles/Jupiter grey jupiter-scooter-500x500.png',
    images: [
      "/vehicles/Jupiter grey jupiter-scooter-500x500.png",
      "/vehicles/Jupiter silver.jpeg",
      "/vehicles/Jupiter brown Jupiter-480x248 (1).jpg.jpeg",
    ],
    description:
      'TVS Jupiter in grey — practical 110cc commuter scooter with confident road manners and rider-friendly ergonomics.',
    specs: ['109.7cc engine', 'Sync brake system (variant dependent)', 'Comfortable long seat'],
    originalPrice: 250,
    discountedPrice: 200,
    discountPercent: 20,
  },
  {
    id: 'jupiter-silver',
    name: 'Jupiter Silver',
    category: 'scooter',
    image: '/vehicles/Jupiter silver.jpeg',
    images: [
      "/vehicles/Jupiter silver.jpeg",
      "/vehicles/Jupiter brown Jupiter-480x248 (1).jpg.jpeg",
      "/vehicles/Jupiter grey jupiter-scooter-500x500.png",
    ],
    description:
      'TVS Jupiter in silver — stylish 110cc scooter option with a spacious floorboard and easy ride quality for city use.',
    specs: ['109.7cc engine', 'LED guide lamp (variant dependent)', 'Economical commuter'],
    originalPrice: 250,
    discountedPrice: 200,
    discountPercent: 20,
  },
  {
    id: 'Honda grazia Grazia',
    name: 'Honda Grazia',
    category: 'scooter',
    image: '/vehicles/Honda grazia Grazia-1300-X-600-px-7.jpg.jpeg',
    images: [
      "/vehicles/Honda grazia Grazia-1300-X-600-px-7.jpg.jpeg",
    ],
    description:
      'Honda Grazia — a sporty 125cc automatic scooter with premium styling, strong city performance, and confident braking for urban riding.',
    specs: ['124.9cc engine', 'LED headlamp (variant dependent)', 'Telescopic front suspension'],
    originalPrice: 250,
    discountedPrice: 200,
    discountPercent: 20,
  },
  {
    id: 'hero-passion-red',
    name: 'Hero Passion Red',
    category: 'bike',
    image: '/vehicles/Passion pro red colour hero-passion-pro-i3s-sports-red-1511885085650.jpg.jpeg',
    images: [
      '/vehicles/Passion pro red colour hero-passion-pro-i3s-sports-red-1511885085650.jpg.jpeg',
      '/vehicles/Passion pro hero-motocorp-passion-pro-kick-start_black_with_heavy_grey.jpg.jpeg',
      '/vehicles/Passion Pro grey colour hero-motocorp-passion-pro-kick-start_black_with_heavy_grey (1).jpg.jpeg',
    ],
    description:
      'Hero Passion Pro in red — a fuel-smart 110cc commuter motorcycle with i3S idle start-stop on supported variants for better mileage.',
    specs: ['109.15cc engine', 'i3S technology (variant dependent)', 'Electric start'],
    originalPrice: 250,
    discountedPrice: 200,
    discountPercent: 20,
  },
  {
    id: 'hero-passion-pro-black',
    name: 'Hero Passion Pro Black',
    category: 'bike',
    image: '/vehicles/Passion pro hero-motocorp-passion-pro-kick-start_black_with_heavy_grey.jpg.jpeg',
    images: [
      '/vehicles/Passion pro hero-motocorp-passion-pro-kick-start_black_with_heavy_grey.jpg.jpeg',
      '/vehicles/Passion pro red colour hero-passion-pro-i3s-sports-red-1511885085650.jpg.jpeg',
      '/vehicles/Passion Pro grey colour hero-motocorp-passion-pro-kick-start_black_with_heavy_grey (1).jpg.jpeg',
    ],
    description:
      'Hero Passion Pro in black — dependable 110cc everyday bike with a comfortable ride posture and easy maintenance.',
    specs: ['109.15cc engine', 'Drum brakes', 'Lightweight commuter'],
    originalPrice: 250,
    discountedPrice: 200,
    discountPercent: 20,
  },
  {
    id: 'passion-pro-grey',
    name: 'Hero Passion Pro Grey',
    category: 'bike',
    image: '/vehicles/Passion Pro grey colour hero-motocorp-passion-pro-kick-start_black_with_heavy_grey (1).jpg.jpeg',
    images: [
      '/vehicles/Passion Pro grey colour hero-motocorp-passion-pro-kick-start_black_with_heavy_grey (1).jpg.jpeg',
      '/vehicles/Passion pro hero-motocorp-passion-pro-kick-start_black_with_heavy_grey.jpg.jpeg',
      '/vehicles/Passion pro red colour hero-passion-pro-i3s-sports-red-1511885085650.jpg.jpeg',
    ],
    description:
      'Hero Passion Pro in grey — practical commuter styling with the same trusted 110cc platform for daily office and market runs.',
    specs: ['109.15cc engine', 'Comfortable seat', 'Low running costs'],
    originalPrice: 250,
    discountedPrice: 200,
    discountPercent: 20,
  },
  {
    id: 'honda-shine',
    name: 'Honda Shine',
    category: 'bike',
    image: '/vehicles/Shine 125 shine-drum_black_1564462390.jpg.jpeg',
    images: ['/vehicles/Shine 125 shine-drum_black_1564462390.jpg.jpeg'],
    description:
      'Honda Shine 125 — refined 125cc commuter motorcycle with smooth power delivery, strong mileage focus, and comfortable ergonomics.',
    specs: ['124cc engine', '5-speed gearbox', 'BS6 compliant'],
    originalPrice: 250,
    discountedPrice: 200,
    discountPercent: 20,
  },
  {
    id: 'bajaj-discover-125',
    name: 'Bajaj Discover 125',
    category: 'bike',
    image: '/vehicles/Discover 125 bajaj-discover-500x500 (1).jpg.jpeg',
    images: [
      '/vehicles/Discover 125 bajaj-discover-500x500 (1).jpg.jpeg',
      '/vehicles/Discover 100 bajaj-discover-100-5-speed-self-566.jpg.jpeg',
      '/vehicles/Discover 100.jpeg',
    ],
    description:
      'Bajaj Discover 125 — lightweight 125cc commuter with nimble handling for city traffic and easy daily use.',
    specs: ['124.6cc engine (125 class)', '5-speed gearbox', 'Economical ride'],
    originalPrice: 250,
    discountedPrice: 200,
    discountPercent: 20,
  },
  {
    id: 'bajaj-discover-100',
    name: 'Bajaj Discover 100',
    category: 'bike',
    image: '/vehicles/Discover 100 bajaj-discover-100-5-speed-self-566.jpg.jpeg',
    images: [
      '/vehicles/Discover 100 bajaj-discover-100-5-speed-self-566.jpg.jpeg',
      '/vehicles/Discover 100.jpeg',
      '/vehicles/Discover 125 bajaj-discover-500x500 (1).jpg.jpeg',
    ],
    description:
      'Bajaj Discover 100 — compact 100cc commuter motorcycle that is easy to maneuver in traffic and light on running costs.',
    specs: ['94–102cc class (model dependent)', 'Lightweight chassis', 'Fuel-efficient'],
    originalPrice: 250,
    discountedPrice: 200,
    discountPercent: 20,
  },
  {
    id: 'bajaj-discover-stock',
    name: 'Bajaj Discover',
    category: 'bike',
    image: '/vehicles/Discover 100.jpeg',
    images: [
      '/vehicles/Discover 100.jpeg',
      '/vehicles/Discover 125 bajaj-discover-500x500 (1).jpg.jpeg',
      '/vehicles/Discover 100 bajaj-discover-100-5-speed-self-566.jpg.jpeg',
    ],
    description:
      'Bajaj Discover — versatile commuter motorcycle suited for city rides and short trips with simple controls and dependable service.',
    specs: ['Discover series platform', 'Commuter tuned engine', 'Easy maintenance'],
    originalPrice: 250,
    discountedPrice: 200,
    discountPercent: 20,
  },
  {
    id: 'tvs-victor',
    name: 'TVS Victor',
    category: 'bike',
    image: '/vehicles/Tvs vector 110 tvs-victor-generous-grey-1486703711606.jpg.jpeg',
    images: ['/vehicles/Tvs vector 110 tvs-victor-generous-grey-1486703711606.jpg.jpeg'],
    description:
      'TVS Victor — smooth 110cc commuter with refined low-end torque for city traffic and a comfortable ride for daily use.',
    specs: ['109.7cc engine', 'Economical performance', 'Comfortable seating'],
    originalPrice: 250,
    discountedPrice: 200,
    discountPercent: 20,
  },
  {
    id: 'cbz-extreme',
    name: 'CBZ Extreme',
    category: 'bike',
    image: '/vehicles/Cbz extreme.jpeg',
    images: ['/vehicles/Cbz extreme.jpeg'],
    description:
      'Hero Honda CBZ Xtreme — sporty 150cc-class commuter with punchy performance and agile handling for riders who want more than a basic 110.',
    specs: ['~149cc air-cooled engine (model dependent)', '5-speed gearbox', 'Sporty ergonomics'],
    originalPrice: 250,
    discountedPrice: 200,
    discountPercent: 20,
  },
  {
    id: 'swift-dezir-dzire-silver',
    name: 'Swift Dezir Dzire Silver',
    category: 'car',
    image: '/vehicles/Swift dezir Dzire-color-silver.jpg.jpeg',
    images: ['/vehicles/Swift dezir Dzire-color-silver.jpg.jpeg'],
    description:
      'Maruti Suzuki Dzire (silver) — compact sedan with comfortable seating for four, chilled AC, and a practical boot for luggage on outstation trips.',
    specs: ['Petrol engine (model dependent)', 'Power steering', 'Spacious cabin & boot'],
    originalPrice: 2000,
    discountedPrice: 1800,
    discountPercent: 10,
  },
];
