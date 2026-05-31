import { useNavigate } from "react-router-dom";
import styles from "./Signup.module.css";
import signupBg from "../../assets/Auth Pages/signup.png";
import logoIcon from "../../assets/Auth Pages/Logo.png";
import herbsImg from "../../assets/Auth Pages/Herbs and Spices.png";

function Signup() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/onboarding");
  };

  return (
    <main className={styles.page}>
      <section className={styles.visualPanel}>
        <img src={signupBg} alt="" className={styles.visualImage} />
        <div className={styles.visualOverlay}></div>
        <div className={styles.visualCopy}>
          <div className={styles.kicker}>
            <span>01</span>
            <span className={styles.kickerLine}></span>
          </div>
          <h1>
            From order<br />
            to table,<br />
            every detail<br />
            <span>in control</span>
          </h1>
        </div>
      </section>

      <section className={styles.formPanel}>
        <img src={herbsImg} alt="" className={styles.herbs} />
        <div className={styles.sparkField} aria-hidden="true"></div>

        <div className={styles.formWrap}>
          <div className={styles.brand}>
            <div className={styles.logoCircle}>
              <img src={logoIcon} alt="DineHub" />
            </div>
            <h2>DineHub</h2>
            <p>Restaurant Management System</p>
          </div>

          <div className={styles.intro}>
            <h3>Welcome to DineHub.</h3>
            <p>Sign up and start managing your restaurant today.</p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.field}>
              <span>Names</span>
              <div className={styles.inputShell}>
                <span className={`${styles.inputIcon} ${styles.personIcon}`}></span>
                <input type="text" placeholder="Jacques Kagabo" />
              </div>
            </label>

            <label className={styles.field}>
              <span>Phone number</span>
              <div className={styles.inputShell}>
                <span className={`${styles.inputIcon} ${styles.phoneIcon}`}></span>
                <input type="tel" placeholder="078 000 000" />
              </div>
            </label>

            <label className={styles.field}>
              <span>Email Address</span>
              <div className={styles.inputShell}>
                <span className={`${styles.inputIcon} ${styles.mailIcon}`}></span>
                <input type="email" placeholder="youremail@example.com" />
              </div>
            </label>

            <label className={styles.field}>
              <span>Password</span>
              <div className={styles.inputShell}>
                <span className={`${styles.inputIcon} ${styles.shieldIcon}`}></span>
                <input type="password" placeholder="••••••••••" />
                <button type="button" className={styles.eyeButton} aria-label="Show password">
                  <span></span>
                </button>
              </div>
            </label>

            <button type="submit" className={styles.primaryButton}>Sign up</button>
          </form>

          <p className={styles.switchText}>
            Already have an account?{' '}
            <button type="button" className={styles.switchLink} onClick={() => navigate('/login')}>
              Login
            </button>
          </p>
        </div>
      </section>
    </main>
  );
}

export default Signup;
