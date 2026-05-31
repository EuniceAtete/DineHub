import React, { useState } from "react";
import styles from "./Step2TypeTimings.module.css";

function Step2TypeTimings({ formData, updateFormData, onNext }) {
  // Setup interactive mock upload slots (initially 2 items)
  const [images, setImages] = useState(["Slot 1", "Slot 2"]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateFormData({ uploadedImages: images });
    onNext();
  };

  const handleRemoveImage = (indexToRemove) => {
    setImages(images.filter((_, idx) => idx !== indexToRemove));
  };

  const handleAddImage = () => {
    if (images.length < 4) {
      setImages([...images, `Slot ${images.length + 1}`]);
    } else {
      alert("You can upload a maximum of 4 images.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      {/* Top Section */}
      <div className={styles.section}>
        <h2 className={styles.title}>Restaurant Type & Timings</h2>

        <div className={styles.fieldGroup}>
          <label className={styles.label}>Restaurant Type</label>
          <div className={styles.selectWrapper}>
            <select
              className={styles.select}
              value={formData.establishmentType}
              onChange={(e) => updateFormData({ establishmentType: e.target.value })}
              required
            >
              <option value="" disabled>Select Type</option>
              <option value="Pub">Pub</option>
              <option value="Resto">Resto</option>
              <option value="Hotel">Hotel</option>
              <option value="Coffee Shop">Coffee Shop</option>
              <option value="Other">Other</option>
            </select>
            <div className={styles.selectChevron}>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#E8440A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.label}>Restaurant Genre</label>
          <div className={styles.selectWrapper}>
            <select
              className={styles.select}
              value={formData.cuisineGenre}
              onChange={(e) => updateFormData({ cuisineGenre: e.target.value })}
              required
            >
              <option value="" disabled>Select Cuisine</option>
              <option value="African">African</option>
              <option value="Modern">Modern</option>
              <option value="Other">Other</option>
            </select>
            <div className={styles.selectChevron}>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#E8440A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.label}>Opening Hours</label>
          <div className={styles.row}>
            {/* From Hour input */}
            <div className={styles.col}>
              <div className={styles.timeInputWrapper}>
                <span className={styles.timeLabel}>From</span>
                <div className={styles.timeDivider}></div>
                <input
                  type="time"
                  className={styles.timeInput}
                  value={formData.timeFrom}
                  onChange={(e) => updateFormData({ timeFrom: e.target.value })}
                  required
                />
              </div>
            </div>

            {/* To Hour input */}
            <div className={styles.col}>
              <div className={styles.timeInputWrapper}>
                <span className={styles.timeLabel}>To</span>
                <div className={styles.timeDivider}></div>
                <input
                  type="time"
                  className={styles.timeInput}
                  value={formData.timeTo}
                  onChange={(e) => updateFormData({ timeTo: e.target.value })}
                  required
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={styles.section}>
        <h3 className={styles.sectionSubtitle}>Pictures Upload</h3>
        <p className={styles.instruction}>Upload 2 to 4 images and your logo</p>

        {/* Upload grid */}
        <div className={styles.uploadGrid}>
          {images.map((item, idx) => (
            <div key={idx} className={styles.imageSlot}>
              {/* Dismiss Button */}
              <button 
                type="button" 
                className={styles.dismissBtn}
                onClick={() => handleRemoveImage(idx)}
                aria-label="Remove Image"
              >
                ✕
              </button>

              {/* Mock Image Icon */}
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#555555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
            </div>
          ))}

          {/* Add Slot Button (only visible if less than 4 images) */}
          {images.length < 4 && (
            <button 
              type="button" 
              className={styles.addSlotBtn}
              onClick={handleAddImage}
              aria-label="Add Image Placeholder"
            >
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#e8440a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>
          )}
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

export default Step2TypeTimings;
