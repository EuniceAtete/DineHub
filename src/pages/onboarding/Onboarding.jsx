import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Onboarding.module.css";
import Step1RestaurantInfo from "./steps/Step1RestaurantInfo";
import Step2TypeTimings from "./steps/Step2TypeTimings";
import Step3Menu from "./steps/Step3Menu";
import tickIcon from "../../assets/Onboarding/tick.png";

function Onboarding() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    restaurantName: "",
    restaurantAddress: "",
    restaurantPhone: "",
    restaurantEmail: "",
    ownerName: "",
    ownerPhone: "",
    ownerEmail: "",
    establishmentType: "",
    cuisineGenre: "",
    timeFrom: "",
    timeTo: "",
    uploadedImages: [],
    menuItems: {
      Drinks: [],
      Appetizer: [],
      "Main Course": [],
      Dessert: [],
    },
  });

  const updateFormData = (patch) => {
    setFormData((prev) => ({ ...prev, ...patch }));
  };

  const onNext = () => {
    if (currentStep < 3) {
      setCurrentStep((prev) => prev + 1);
    } else {
      // On step 3 completion, redirect to client overview
      navigate("/client/overview");
    }
  };

  const getProgressPercentage = () => {
    if (currentStep === 1) return "33%";
    if (currentStep === 2) return "66%";
    return "100%";
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1RestaurantInfo
            formData={formData}
            updateFormData={updateFormData}
            onNext={onNext}
          />
        );
      case 2:
        return (
          <Step2TypeTimings
            formData={formData}
            updateFormData={updateFormData}
            onNext={onNext}
          />
        );
      case 3:
        return (
          <Step3Menu
            formData={formData}
            updateFormData={updateFormData}
            onNext={onNext}
          />
        );
      default:
        return null;
    }
  };

  const renderStepIndicator = (stepNumber, title, subtitle) => {
    const isCompleted = stepNumber < currentStep;
    const isActive = stepNumber === currentStep;
    const isInactive = stepNumber > currentStep;

    return (
      <div className={styles.stepItem}>
        <div className={styles.stepHeader}>
          <div
            className={`${styles.stepCircle} ${
              isActive ? styles.activeStep : ""
            } ${isCompleted ? styles.completedStep : ""} ${
              isInactive ? styles.inactiveStep : ""
            }`}
          >
            {isCompleted ? (
              <img src={tickIcon} alt="tick" className={styles.tickIcon} />
            ) : (
              <span className={styles.stepNumber}>{stepNumber}</span>
            )}
          </div>
          <div className={styles.stepText}>
            <div className={styles.stepTitle}>{title}</div>
            <div className={styles.stepSubtitle}>{subtitle}</div>
          </div>
        </div>
        {stepNumber < 3 && <div className={styles.stepLine}></div>}
      </div>
    );
  };

  return (
    <div className={styles.page}>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.navLeft}>
          <div className={styles.logoIcon}>
            <svg viewBox="0 0 24 24" width="28" height="28" fill="#E8440A">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
            </svg>
          </div>
          <span className={styles.logoText}>DineHub</span>
        </div>
        <div className={styles.navCenter}>
          <div className={styles.searchBar}>
            <input
              type="text"
              placeholder="Search here"
              className={styles.searchInput}
            />
            <div className={styles.searchIcon}>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#E8440A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
          </div>
        </div>
        <div className={styles.navRight}>
          <div className={styles.navIcon}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
          </div>
          <div className={styles.navDivider}></div>
          <span className={styles.navName}>Eunice Atete</span>
          <div className={styles.navAvatar}></div>
        </div>
      </nav>

      {/* Main Content */}
      <div className={styles.mainContent}>
        {/* Left Panel */}
        <div className={styles.leftPanel}>
          <div className={styles.progressSection}>
            <div className={styles.progressHeader}>
              <span className={styles.progressLabel}>Setup Progress</span>
              <span className={styles.progressPercentage}>
                {getProgressPercentage()}
              </span>
            </div>
            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{ width: getProgressPercentage() }}
              ></div>
            </div>
          </div>

          <h1 className={styles.heading}>Create your restaurant profile</h1>

          <div className={styles.stepsContainer}>
            {renderStepIndicator(
              1,
              "Restaurant Information",
              "Basic details about your restaurant"
            )}
            {renderStepIndicator(
              2,
              "Restaurant Type & Timings",
              "Type, cuisine, and operating hours"
            )}
            {renderStepIndicator(3, "Create your menu", "Add your menu items")}
          </div>

          <div className={styles.helpSection}>
            <span className={styles.helpText}>Need help?</span>
            <button className={styles.contactBtn}>Contact Support</button>
          </div>
        </div>

        {/* Right Panel */}
        <div className={styles.rightPanel}>{renderStep()}</div>
      </div>
    </div>
  );
}

export default Onboarding;
