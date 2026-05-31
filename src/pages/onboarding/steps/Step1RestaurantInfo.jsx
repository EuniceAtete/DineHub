import React from "react";
import styles from "./Step1RestaurantInfo.module.css";

function Step1RestaurantInfo({ formData, updateFormData, onNext }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <h2 className={styles.title}>Restaurant Information</h2>

      {/* Restaurant Info Section */}
      <div className={styles.section}>
        <div className={styles.fieldGroup}>
          <label className={styles.label}>Restaurant Name</label>
          <input
            type="text"
            className={styles.input}
            placeholder="Enter the restaurant name"
            value={formData.restaurantName}
            onChange={(e) => updateFormData({ restaurantName: e.target.value })}
            required
          />
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.label}>Restaurant Address</label>
          <input
            type="text"
            className={styles.input}
            placeholder="Enter the restaurant province and district"
            value={formData.restaurantAddress}
            onChange={(e) => updateFormData({ restaurantAddress: e.target.value })}
            required
          />
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.label}>Restaurant Contact</label>
          <div className={styles.row}>
            {/* Phone input with +250 prefix and vertical divider */}
            <div className={styles.col}>
              <div className={styles.phoneInputWrapper}>
                <span className={styles.phonePrefix}>+250</span>
                <div className={styles.phoneDivider}></div>
                <input
                  type="tel"
                  className={styles.phoneInput}
                  placeholder="788 000 000"
                  pattern="[0-9]{3}[0-9]{3}[0-9]{3}"
                  value={formData.restaurantPhone}
                  onChange={(e) => updateFormData({ restaurantPhone: e.target.value })}
                  required
                />
              </div>
            </div>

            {/* Email input */}
            <div className={styles.col}>
              <input
                type="email"
                className={styles.input}
                placeholder="Enter the restaurant email address"
                value={formData.restaurantEmail}
                onChange={(e) => updateFormData({ restaurantEmail: e.target.value })}
                required
              />
            </div>
          </div>
        </div>
      </div>

      {/* Owner Details Section */}
      <div className={styles.section}>
        <h3 className={styles.sectionSubtitle}>Restaurant Owner Details</h3>

        <div className={styles.fieldGroup}>
          <label className={styles.label}>Owner Name</label>
          <input
            type="text"
            className={styles.input}
            placeholder="Enter the owner's name"
            value={formData.ownerName}
            onChange={(e) => updateFormData({ ownerName: e.target.value })}
            required
          />
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.label}>Owner Contact</label>
          <div className={styles.row}>
            {/* Owner Phone input */}
            <div className={styles.col}>
              <div className={styles.phoneInputWrapper}>
                <span className={styles.phonePrefix}>+250</span>
                <div className={styles.phoneDivider}></div>
                <input
                  type="tel"
                  className={styles.phoneInput}
                  placeholder="788 000 000"
                  pattern="[0-9]{3}[0-9]{3}[0-9]{3}"
                  value={formData.ownerPhone}
                  onChange={(e) => updateFormData({ ownerPhone: e.target.value })}
                  required
                />
              </div>
            </div>

            {/* Owner Email input */}
            <div className={styles.col}>
              <input
                type="email"
                className={styles.input}
                placeholder="Enter the owner's email address"
                value={formData.ownerEmail}
                onChange={(e) => updateFormData({ ownerEmail: e.target.value })}
                required
              />
            </div>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className={styles.footer}>
        <button type="submit" className={styles.nextBtn}>
          Next <span className={styles.btnArrow}>→</span>
        </button>
      </div>
    </form>
  );
}

export default Step1RestaurantInfo;
