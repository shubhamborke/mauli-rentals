import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const PHONE = '7030060212';
const WHATSAPP_URL = `https://wa.me/91${PHONE.replace(/\D/g, '')}`;

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.brand}>
          <img src="/logo/Screenshot 2026-03-22 131018.png" alt="Bike on Rent" />
          <p>Bikes and Cars on Rent in Akola</p>
          <p>Spot Pickup & Drop Service Available</p>
        </div>
        <div className={styles.links}>
          <Link to="/">Home</Link>
          <Link to="/gallery">Vehicle Gallery</Link>
          <Link to="/about">About</Link>
          <Link to="/terms">Terms & Conditions</Link>
        </div>
        <div className={styles.contact}>
          <p className={styles.owner}>AMAN TADAM</p>
          <a href={`tel:${PHONE}`}>
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            {PHONE}
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={styles.whatsapp}>
            WhatsApp Enquiry
          </a>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>© {new Date().getFullYear()} Bike on Rent, Akola. All rights reserved.</p>
      </div>
    </footer>
  );
}
