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
    id: 'honda-activa-6g',
    name: 'Honda Activa 6G',
    category: 'scooter',
    image: '/vehicles/activa-6g-dlx-non-obd-2b-petrol-pearl-precious-white-273144527-unsstzvl.jpg.jpeg',
    images: [
      '/vehicles/activa-6g-dlx-non-obd-2b-petrol-pearl-precious-white-273144527-unsstzvl.jpg.jpeg',
      '/vehicles/honda-activa-4g.jpg.jpeg',
      '/vehicles/honda-activa-125-pearl-amazing-white-1488275317152.jpg.jpeg',
    ],
    description: 'Reliable Honda Activa 6G scooter, perfect for city commuting. Well-maintained and fuel-efficient.',
    specs: ['110cc Engine', 'Fuel Efficient', 'Comfortable Seat'],
    originalPrice: 250,
    discountedPrice: 200,
    discountPercent: 20,
  },
  {
    id: 'honda-activa-125',
    name: 'Honda Activa 125',
    category: 'scooter',
    image: '/vehicles/honda-activa-125-pearl-amazing-white-1488275317152.jpg.jpeg',
    images: [
      '/vehicles/honda-activa-125-pearl-amazing-white-1488275317152.jpg.jpeg',
      '/vehicles/activa-6g-dlx-non-obd-2b-petrol-pearl-precious-white-273144527-unsstzvl.jpg.jpeg',
    ],
    description: 'Premium Honda Activa 125 with enhanced power and comfort for longer rides.',
    specs: ['125cc Engine', 'Connected Features', 'Premium Comfort'],
    originalPrice: 250,
    discountedPrice: 200,
    discountPercent: 20,
  },
  {
    id: 'honda-activa-4g',
    name: 'Honda Activa 4G',
    category: 'scooter',
    image: '/vehicles/honda-activa-4g.jpg.jpeg',
    images: ['/vehicles/honda-activa-4g.jpg.jpeg', '/vehicles/honda-activa-3g-black-1486354967726.webp'],
    description: 'Popular Honda Activa 4G - trusted choice for daily city travel.',
    specs: ['110cc Engine', 'Easy Start', 'Low Maintenance'],
    originalPrice: 250,
    discountedPrice: 200,
    discountPercent: 20,
  },
  {
    id: 'honda-activa-3g',
    name: 'Honda Activa 3G',
    category: 'scooter',
    image: '/vehicles/honda-activa-3g-black-1486354967726.webp',
    images: ['/vehicles/honda-activa-3g-black-1486354967726.webp'],
    description: 'Durable Honda Activa 3G in sleek black finish.',
    specs: ['110cc Engine', 'Stylish Design', 'Reliable'],
    originalPrice: 250,
    discountedPrice: 200,
    discountPercent: 20,
  },
  {
    id: 'tvs-jupiter',
    name: 'TVS Jupiter',
    category: 'scooter',
    image: '/vehicles/jupiter-scooter-500x500.png',
    images: [
      '/vehicles/jupiter-scooter-500x500.png',
      '/vehicles/Jupiter-480x248 (1).jpg.jpeg',
    ],
    description: 'Spacious TVS Jupiter with under-seat storage and comfortable ride.',
    specs: ['110cc Engine', 'SmartXonnect', 'Large Storage'],
    originalPrice: 250,
    discountedPrice: 200,
    discountPercent: 20,
  },
  {
    id: 'honda-grazia',
    name: 'Honda Grazia',
    category: 'scooter',
    image: '/vehicles/Grazia-1300-X-600-px-7.jpg.jpeg',
    images: ['/vehicles/Grazia-1300-X-600-px-7.jpg.jpeg'],
    description: 'Sporty Honda Grazia with premium features and stylish design.',
    specs: ['125cc Engine', 'LED Headlamp', 'Sporty Look'],
    originalPrice: 250,
    discountedPrice: 200,
    discountPercent: 20,
  },
  {
    id: 'hero-passion-pro',
    name: 'Hero Passion Pro',
    category: 'bike',
    image: '/vehicles/hero-passion-pro-i3s-sports-red-1511885085650.jpg.jpeg',
    images: [
      '/vehicles/hero-passion-pro-i3s-sports-red-1511885085650.jpg.jpeg',
      '/vehicles/hero-motocorp-passion-pro-kick-start_black_with_heavy_grey.jpg.jpeg',
    ],
    description: 'Fuel-efficient Hero Passion Pro with i3S technology.',
    specs: ['110cc Engine', 'i3S Start-Stop', 'Mileage King'],
    originalPrice: 250,
    discountedPrice: 200,
    discountPercent: 20,
  },
  {
    id: 'honda-shine',
    name: 'Honda Shine',
    category: 'bike',
    image: '/vehicles/shine-drum_black_1564462390.jpg.jpeg',
    images: ['/vehicles/shine-drum_black_1564462390.jpg.jpeg'],
    description: 'Trusted Honda Shine - perfect balance of power and efficiency.',
    specs: ['125cc Engine', 'BS6 Compliant', 'Comfortable'],
    originalPrice: 250,
    discountedPrice: 200,
    discountPercent: 20,
  },
  {
    id: 'bajaj-discover',
    name: 'Bajaj Discover',
    category: 'bike',
    image: '/vehicles/bajaj-discover-500x500 (1).jpg.jpeg',
    images: [
      '/vehicles/bajaj-discover-500x500 (1).jpg.jpeg',
      '/vehicles/bajaj-discover-100-5-speed-self-566.jpg.jpeg',
    ],
    description: 'Lightweight Bajaj Discover for easy handling in city traffic.',
    specs: ['100cc/125cc Engine', 'Lightweight', 'Economic'],
    originalPrice: 250,
    discountedPrice: 200,
    discountPercent: 20,
  },
  {
    id: 'tvs-victor',
    name: 'TVS Victor',
    category: 'bike',
    image: '/vehicles/tvs-victor-generous-grey-1486703711606.jpg.jpeg',
    images: ['/vehicles/tvs-victor-generous-grey-1486703711606.jpg.jpeg'],
    description: 'Comfortable TVS Victor with advanced features.',
    specs: ['110cc Engine', 'Eco Thrust', 'Refined Ride'],
    originalPrice: 250,
    discountedPrice: 200,
    discountPercent: 20,
  },
];
