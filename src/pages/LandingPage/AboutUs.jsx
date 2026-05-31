import styles from "./AboutUs.module.css";
import sushiImg from "../../assets/Landing/sushi.png";

function AboutUs() {
  const stats = [
    { number: "60+", label: "Restaurants" },
    { number: "1,000+", label: "Daily Orders" },
    { number: "98%", label: "Satisfaction" }
  ];

  return (
    <section id="about-us" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          
          <div className={styles.imageCol}>
            <div className={styles.imageWrapper}>
              <img src={sushiImg} alt="Fresh Sushi Platter" className={styles.mainImage} />
            </div>
          </div>

          <div className={styles.contentCol}>
            <span className={styles.subtitle}>About Us</span>
            <h2 className={styles.title}>We help restaurants go digital.</h2>
            <p className={styles.description}>
              DineHub is a fully-featured platform built for restaurants, cafes, bars, and caterers. 
              We make it easy to create digital menus, manage orders, and track your revenue – all in one place.
            </p>

            <div className={styles.statsContainer}>
              {stats.map((stat, idx) => (
                <div key={idx} className={styles.statItem}>
                  <span className={styles.statNumber}>{stat.number}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>

            <button className={styles.learnMoreBtn}>Learn More</button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutUs;
