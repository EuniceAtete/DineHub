import styles from "./Pricing.module.css";

function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "Forever",
      description: "Perfect for getting started",
      features: [
        "Clean layout",
        "Digital Menu",
        "Order Management",
        "24/7 Support"
      ],
      buttonText: "Get Started Free",
      featured: false
    },
    {
      name: "Pro",
      price: "29K RWF/month",
      description: "For growing restaurants",
      features: [
        "Unlimited Transactions",
        "Table Management",
        "Sales Analytics",
        "Priority Support"
      ],
      buttonText: "Buy Pro",
      featured: true
    },
    {
      name: "Enterprise",
      price: "Custom/month",
      description: "For large scale businesses",
      features: [
        "Multi-branch Support",
        "Advanced Security",
        "Technical Support",
        "Dedicated Manager"
      ],
      buttonText: "Contact Us",
      featured: false
    }
  ];

  return (
    <section id="pricing" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>Pricing</span>
          <h2 className={styles.title}>Simple, transparent pricing.</h2>
        </div>

        <div className={styles.grid}>
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`${styles.card} ${plan.featured ? styles.featuredCard : ""}`}
            >
              {plan.featured && <div className={styles.popularBadge}>MOST POPULAR</div>}
              
              <div className={styles.cardTop}>
                <h3 className={styles.planName}>{plan.name}</h3>
                <div className={styles.priceContainer}>
                  <span className={styles.price}>{plan.price}</span>
                </div>
                <p className={styles.description}>{plan.description}</p>
              </div>

              <ul className={styles.featuresList}>
                {plan.features.map((feat, fIdx) => (
                  <li key={fIdx} className={styles.featureItem}>
                    <span className={styles.checkmark}>✓</span>
                    <span className={styles.featureText}>{feat}</span>
                  </li>
                ))}
              </ul>

              <div className={styles.actionWrapper}>
                <button className={`${styles.ctaBtn} ${plan.featured ? styles.featuredCta : styles.standardCta}`}>
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
