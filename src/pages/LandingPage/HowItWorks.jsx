import styles from "./HowItWorks.module.css";
import shrimpsImg from "../../assets/Landing/shrimps.png";
import whiteStrokeImg from "../../assets/Landing/white stroke 1.png";
import dashboardImg from "../../assets/Landing/Dashboard Group.png";
import storeIcon from "../../assets/Landing/store_svg.png";
import plateIcon from "../../assets/Landing/plate_svg.png";
import ordersIcon from "../../assets/Landing/orders_svg.png";

function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Register Your Restaurant",
      description: "Sign up and create your restaurant profile on our platform in a few simple steps.",
      icon: storeIcon
    },
    {
      number: "02",
      title: "Create Your Digital Menu",
      description: "Customize and build a beautiful online menu for your customers to browse.",
      icon: plateIcon
    },
    {
      number: "03",
      title: "Receive & Manage Orders",
      description: "Manage incoming dine-in, takeaway, and delivery orders from our dashboard.",
      icon: ordersIcon
    }
  ];

  return (
    <section id="how-it-works" className={styles.section}>
      {/* Decorative Assets */}
      <img src={dashboardImg} alt="DineHub Dashboard Screenshots" className={styles.dashboardImage} />
      <img src={shrimpsImg} alt="" className={styles.shrimpsImage} />
      
      {/* White Brush Stroke Background Banner */}
      <div className={styles.strokeContainer}>
        <img src={whiteStrokeImg} alt="" className={styles.whiteStrokeBg} />
      </div>

      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>How It Works</span>
          <h2 className={styles.title}>Three simple steps to run your restaurant.</h2>
        </div>

        <div className={styles.grid}>
          {steps.map((step, idx) => (
            <div key={idx} className={styles.cardShell}>
              <div className={styles.card}>
                <span className={styles.cardNumber}>{step.number}</span>
                <div className={styles.iconWrapper}>
                  <img src={step.icon} alt="" className={styles.stepIcon} />
                </div>
                <h3 className={styles.cardTitle}>{step.title}</h3>
                <p className={styles.cardDescription}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
