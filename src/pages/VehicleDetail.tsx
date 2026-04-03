import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { vehicles } from '../data/vehicles';
import styles from './VehicleDetail.module.css';

const PHONE = '7030060212';
const WHATSAPP_URL = `https://wa.me/91${PHONE.replace(/\D/g, '')}`;

export function VehicleDetail() {
  const { id } = useParams<{ id: string }>();
  const [activeImage, setActiveImage] = useState(0);

  const vehicle = vehicles.find((v) => v.id === id);

  if (!vehicle) {
    return (
      <section className={styles.notFound}>
        <h1>Vehicle not found</h1>
        <Link to="/gallery">Back to Gallery</Link>
      </section>
    );
  }

  return (
    <section className={styles.detail}>
      <div className={styles.container}>
        <Link to="/gallery" className={styles.backLink}>← Back to Gallery</Link>

        <div className={styles.layout}>
          <div className={styles.images}>
            <div className={styles.mainImage}>
              <img
                src={vehicle.images[activeImage] || vehicle.image}
                alt={vehicle.name}
              />
              <span className={styles.badge}>{vehicle.discountPercent}% OFF</span>
            </div>
            {vehicle.images.length > 1 && (
              <div className={styles.thumbnails}>
                {vehicle.images.map((img, i) => (
                  <button
                    key={i}
                    className={`${styles.thumb} ${i === activeImage ? styles.active : ''}`}
                    onClick={() => setActiveImage(i)}
                  >
                    <img src={img} alt={`${vehicle.name} ${i + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className={styles.info}>
            <h1>{vehicle.name}</h1>
            <p className={styles.category}>
              {vehicle.category === 'scooter' ? 'Scooter' : vehicle.category === 'bike' ? 'Bike' : 'Car'}
            </p>
            <p className={styles.description}>{vehicle.description}</p>

            <div className={styles.specs}>
              <h3>Specifications</h3>
              <ul>
                {vehicle.specs.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>

            <div className={styles.pricing}>
              <span className={styles.original}>₹{vehicle.originalPrice}</span>
              <span className={styles.final}>₹{vehicle.discountedPrice}/day</span>
              <span className={styles.discount}>{vehicle.discountPercent}% OFF</span>
            </div>

            <a
              href={`${WHATSAPP_URL}?text=Hi! I'm interested in ${vehicle.name} for rent.`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappBtn}
            >
              WhatsApp Enquiry
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
