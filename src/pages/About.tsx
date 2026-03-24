import styles from './About.module.css';

export function About() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <h1>About Us</h1>

        <div className={styles.profileSection}>
          <div className={styles.photoWrap}>
            <img
              src="/profile-photo/1000351148.jpg.jpeg"
              alt="Aman Tadam - Owner"
            />
          </div>
          <div className={styles.profileInfo}>
            <h2>Aman Tadam</h2>
            <p className={styles.role}>Owner, Bike on Rent</p>
            <p>Our business offers bikes and cars on rent to make city travel simple and comfortable.</p>
            <p>We focus on providing well-maintained vehicles and reliable service so customers can travel without worry.</p>
            <p>Along with rental services, we also provide pickup and drop options for customers who need quick and convenient transportation within the city.</p>
            <p>Our goal is to provide smooth service, transparent rules, and quick support to every customer.</p>
          </div>
        </div>

        <div className={styles.story}>
          <h2>Our Story</h2>
          <p>Bike on Rent was established to make transportation accessible and affordable for everyone in Akola.</p>
          <p>We understand the need for reliable, hassle-free vehicle rental with the convenience of pickup and drop service within the city.</p>
        </div>

        <div className={styles.vision}>
          <h2>Our Vision</h2>
          <p>Our vision is to provide simple, reliable, and affordable travel services for people within the city.</p>
          <p>We aim to make transportation easy and accessible, whether customers need a vehicle on rent or pickup and drop service.</p>
        </div>

        <div className={styles.mission}>
          <h2>Our Mission</h2>
          <p>Our mission is to deliver quality vehicles, dependable service, and a smooth customer experience.</p>
          <p>We strive to maintain our vehicles properly and provide quick support so customers can enjoy safe and comfortable travel.</p>
        </div>

        <div className={styles.established}>
          <p>Established in Akola • Serving the community with quality rental services</p>
        </div>
      </div>
    </section>
  );
}
