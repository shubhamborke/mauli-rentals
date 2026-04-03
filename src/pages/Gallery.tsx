import { Link } from 'react-router-dom';
import { vehicles } from '../data/vehicles';
import styles from './Gallery.module.css';

export function Gallery() {
  return (
    <section className={styles.gallery}>
      <div className={styles.container}>
        <h1>Vehicle Gallery</h1>
        <p className={styles.subtitle}>Explore our available bikes and scooters for rent</p>
        <div className={styles.grid}>
          {vehicles.map((v) => (
            <Link key={v.id} to={`/gallery/${v.id}`} className={styles.card}>
              <div className={styles.imageWrap}>
                <img src={v.image} alt={v.name} />
                <span className={styles.badge}>{v.discountPercent}% OFF</span>
              </div>
              <h3>{v.name}</h3>
              <p className={styles.desc}>{v.description.slice(0, 80)}...</p>
              <div className={styles.pricing}>
                <span className={styles.original}>₹{v.originalPrice}</span>
                <span className={styles.final}>₹{v.discountedPrice}/day</span>
              </div>
              <span className={styles.bookBtn}>Book Now</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
