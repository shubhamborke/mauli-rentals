import styles from './Terms.module.css';

export function Terms() {
  return (
    <section className={styles.terms}>
      <div className={styles.container}>
        <h1>Terms & Conditions</h1>

        <div className={styles.section}>
          <h2>Vehicle Usage Rules</h2>
          <ul>
            <li>Vehicles must be used only within the city limits of Akola unless prior permission is obtained.</li>
            <li>Renters must be at least 18 years of age and hold a valid driving license.</li>
            <li>The vehicle shall not be used for racing, towing, or any commercial purpose without written consent.</li>
            <li>Smoking and consumption of alcohol inside the vehicle is strictly prohibited.</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2>Damage Responsibility</h2>
          <ul>
            <li>The renter is fully responsible for any damage caused to the vehicle during the rental period.</li>
            <li>Cost of repairs for damages (accidents, scratches, dents) will be borne by the renter.</li>
            <li>Please report any pre-existing damage before taking the vehicle to avoid disputes.</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2>Traffic Fine Responsibility</h2>
          <ul>
            <li>All traffic fines, challans, and penalties incurred during the rental period are the sole responsibility of the renter.</li>
            <li>Renters must follow all traffic rules and regulations.</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2>Fuel Policy</h2>
          <ul>
            <li>Vehicles are provided with sufficient fuel. Renters are expected to return the vehicle with the same fuel level.</li>
            <li>Alternatively, fuel charges may apply as per actual consumption if the vehicle is returned with less fuel.</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2>Service Timings</h2>
          <ul>
            <li>Our service is available during operational hours. Please contact us for current timings.</li>
            <li>Pickup and drop services are subject to availability and advance booking is recommended.</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2>Required Documents</h2>
          <ul>
            <li>Valid Driving License (original)</li>
            <li>Government-issued ID proof (Aadhaar, PAN, or Passport)</li>
            <li>Address proof (if required)</li>
            <li>Security deposit as per our policy</li>
          </ul>
        </div>

        <p className={styles.contact}>For any queries regarding our terms and conditions, please contact us via WhatsApp or phone.</p>
      </div>
    </section>
  );
}
