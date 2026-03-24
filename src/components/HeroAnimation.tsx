import { useEffect, useState } from 'react';
import styles from './HeroAnimation.module.css';

const PHONE = '7030060212';
const WHATSAPP_URL = `https://wa.me/91${PHONE.replace(/\D/g, '')}`;

export function HeroAnimation() {
  const [animationDone, setAnimationDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimationDone(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`${styles.hero} ${animationDone ? styles.done : ''}`}>
      <div className={styles.diagonalSplit}>
        <div className={styles.darkSection} />
        <div className={styles.lightSection} />
      </div>

      {/* Red arrows from right */}
      <div className={styles.arrowsRight}>
        <div className={styles.arrow} />
        <div className={styles.arrow} />
      </div>

      {/* Logo from left */}
      <div className={styles.logoContainer}>
        <img
          src="/logo/Screenshot 2026-03-22 131018.png"
          alt="Bike on Rent"
          className={styles.logo}
        />
      </div>

      <div className={styles.heroContent}>
        <h1 className={styles.mainHeading}>
          Bikes and Cars on Rent
          <span className={styles.subHeading}>with Easy Pickup & Drop</span>
        </h1>

        <div className={styles.pinService}>
          <svg className={styles.pinIcon} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
          <p>SPOT PICKUP AND DROP SERVICE AVAILABLE</p>
        </div>

        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn}>
          WhatsApp Enquiry
        </a>

        <div className={styles.contactInfo}>
          <p className={styles.ownerName}>AMAN TADAM</p>
          <a href={`tel:${PHONE}`} className={styles.phone}>
            <svg className={styles.phoneIcon} viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            {PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}
