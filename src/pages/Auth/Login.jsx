import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import loginBg from "../../assets/Auth Pages/login.png";
import logoIcon from "../../assets/Auth Pages/Logo.png";
import googleIcon from "../../assets/Auth Pages/google.png";
import herbsImg from "../../assets/Auth Pages/Herbs and Spices.png";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/admin/overview");
  };

  return (
    <main className={styles.page}>
      <section className={styles.visualPanel}>
        <img src={loginBg} alt="" className={styles.visualImage} />
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
            <h3>Welcome back!</h3>
            <p>Sign in to continue to your account.</p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
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

            <a href="#forgot-password" className={styles.forgotLink}>Forgot password?</a>
            <button type="submit" className={styles.primaryButton}>Log in</button>
          </form>

          <div className={styles.divider}>
            <span></span>
            <p>or continue with</p>
            <span></span>
          </div>

          <button type="button" className={styles.googleButton}>
            <img src={googleIcon} alt="" />
            <span>Continue with Google</span>
          </button>

          <p className={styles.switchText}>
            Don&apos;t have an account?{' '}
            <button type="button" className={styles.switchLink} onClick={() => navigate('/signup')}>
              Sign up
            </button>
          </p>
        </div>
      </section>
    </main>
  );
}

export default Login;
