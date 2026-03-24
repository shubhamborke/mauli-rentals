import { Link } from 'react-router-dom';
import { HeroAnimation } from '../components/HeroAnimation';
import { vehicles } from '../data/vehicles';
import styles from './Home.module.css';

const PHONE = '7030060212';
const WHATSAPP_URL = `https://wa.me/91${PHONE.replace(/\D/g, '')}`;

const serviceHighlights = [
  { icon: '🚗', title: 'Easy Pickup & Drop', desc: 'Spot pickup and drop service available within the city' },
  { icon: '💰', title: 'Affordable Rates', desc: 'Competitive pricing with transparent rental policies' },
  { icon: '🔧', title: 'Well-Maintained', desc: 'Quality vehicles maintained for your safety' },
  { icon: '📱', title: 'Quick Support', desc: 'WhatsApp enquiry for instant assistance' },
];

export function Home() {
  const featuredVehicles = vehicles.slice(0, 6);

  return (
    <>
      <HeroAnimation />

      <section className={styles.intro}>
        <div className={styles.container}>
          <h2>Intro</h2>
          <p>We provide bikes and cars on rent along with pickup and drop services within the city.</p>
          <p>Our aim is to make travel easy, convenient, and affordable for everyone.</p>
          <p>You can explore our vehicle gallery to see available bikes and cars and connect with us through WhatsApp for quick assistance.</p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>
            WhatsApp Enquiry
          </a>
        </div>
      </section>

      <section className={styles.featured}>
        <div className={styles.container}>
          <h2>Featured Bikes & Cars</h2>
          <div className={styles.vehicleGrid}>
            {featuredVehicles.map((v) => (
              <Link key={v.id} to={`/gallery/${v.id}`} className={styles.vehicleCard}>
                <div className={styles.cardImage}>
                  <img src={v.image} alt={v.name} />
                  <span className={styles.discountBadge}>75% OFF</span>
                </div>
                <h3>{v.name}</h3>
                <div className={styles.pricing}>
                  <span className={styles.original}>₹{v.originalPrice}</span>
                  <span className={styles.final}>₹{v.discountedPrice}/day</span>
                </div>
                <span className={styles.bookBtn}>Book Now</span>
              </Link>
            ))}
          </div>
          <Link to="/gallery" className={styles.viewAll}>View All Vehicles</Link>
        </div>
      </section>

      <section className={styles.services}>
        <div className={styles.container}>
          <h2>Service Highlights</h2>
          <div className={styles.serviceGrid}>
            {serviceHighlights.map((s) => (
              <div key={s.title} className={styles.serviceCard}>
                <span className={styles.serviceIcon}>{s.icon}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.aboutPreview}>
        <div className={styles.container}>
          <h2>About Us</h2>
          <p>Our business offers bikes and cars on rent to make city travel simple and comfortable.</p>
          <p>We focus on providing well-maintained vehicles and reliable service so customers can travel without worry.</p>
          <p>Along with rental services, we also provide pickup and drop options for customers who need quick and convenient transportation within the city.</p>
          <p>Our goal is to provide smooth service, transparent rules, and quick support to every customer.</p>
          <Link to="/about" className={styles.ctaBtn}>Learn More</Link>
        </div>
      </section>

      <section className={styles.visionMission}>
        <div className={styles.container}>
          <div className={styles.block}>
            <h2>Our Vision</h2>
            <p>Our vision is to provide simple, reliable, and affordable travel services for people within the city.</p>
            <p>We aim to make transportation easy and accessible, whether customers need a vehicle on rent or pickup and drop service.</p>
          </div>
          <div className={styles.block}>
            <h2>Our Mission</h2>
            <p>Our mission is to deliver quality vehicles, dependable service, and a smooth customer experience.</p>
            <p>We strive to maintain our vehicles properly and provide quick support so customers can enjoy safe and comfortable travel.</p>
          </div>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className={styles.container}>
          <h2>Contact Us</h2>
          <p><strong>Owner:</strong> Aman Tadam</p>
          <p><strong>Phone:</strong> <a href={`tel:${PHONE}`}>{PHONE}</a></p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>
            WhatsApp Enquiry
          </a>
        </div>
      </section>
    </>
  );
}
