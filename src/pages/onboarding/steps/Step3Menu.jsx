import React, { useState } from "react";
import styles from "./Step3Menu.module.css";
import coffeeImg from "../../../assets/Onboarding/coffee.png";

function Step3Menu({ formData, updateFormData, onNext }) {
  const [activeCategory, setActiveCategory] = useState("Drinks");
  const [itemFields, setItemFields] = useState({
    name: "",
    description: "",
    price: "",
    imageName: ""
  });

  const categories = ["Drinks", "Appetizer", "Main Course", "Dessert"];

  const handleTabChange = (cat) => {
    setActiveCategory(cat);
    // Clear fields on tab change to reset the form for the new category
    setItemFields({
      name: "",
      description: "",
      price: "",
      imageName: ""
    });
  };

  const handleAddItem = (e) => {
    e.preventDefault();

    if (!itemFields.name || !itemFields.price) {
      alert("Please fill in the required fields (Name and Price).");
      return;
    }

    // Append to current category list in formData
    const updatedCategoryList = [...(formData.menuItems[activeCategory] || []), itemFields];
    const updatedMenuItems = {
      ...formData.menuItems,
      [activeCategory]: updatedCategoryList
    };

    updateFormData({ menuItems: updatedMenuItems });
    
    alert(`${activeCategory} item "${itemFields.name}" added successfully!`);
    
    // Reset form
    setItemFields({
      name: "",
      description: "",
      price: "",
      imageName: ""
    });
  };

  const handleFinalSubmit = (e) => {
    e.stopPropagation();
    onNext(); // This completes the onboarding wizard
  };

  // Label formatting helper
  const getSingularCategoryLabel = () => {
    if (activeCategory === "Drinks") return "Drink";
    if (activeCategory === "Appetizer") return "Appetizer";
    if (activeCategory === "Main Course") return "Main Course";
    return "Dessert";
  };

  const catLabel = getSingularCategoryLabel();

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Create Your Menu</h2>

      {/* Categories Tabs Bar */}
      <div className={styles.tabBar}>
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            className={`${styles.tab} ${activeCategory === cat ? styles.activeTab : styles.inactiveTab}`}
            onClick={() => handleTabChange(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Main Row Form & Image */}
      <div className={styles.row}>
        {/* Form Column */}
        <div className={styles.formCol}>
          <form onSubmit={handleAddItem} className={styles.form}>
            <div className={styles.fieldGroup}>
              <label className={styles.label}>{catLabel} Name</label>
              <input
                type="text"
                className={styles.input}
                placeholder={`Enter the ${catLabel.toLowerCase()}'s name`}
                value={itemFields.name}
                onChange={(e) => setItemFields({ ...itemFields, name: e.target.value })}
                required
              />
            </div>

            <div className={styles.fieldGroup}>
              <label className={styles.label}>{catLabel} Description</label>
              <input
                type="text"
                className={styles.input}
                placeholder={`Enter the ${catLabel.toLowerCase()}'s description`}
                value={itemFields.description}
                onChange={(e) => setItemFields({ ...itemFields, description: e.target.value })}
                required
              />
            </div>

            <div className={styles.fieldGroup}>
              <label className={styles.label}>{catLabel} Ingredients</label>
              <input
                type="text"
                className={styles.input}
                placeholder={`Enter the ${catLabel.toLowerCase()}'s price`}
                value={itemFields.price}
                onChange={(e) => setItemFields({ ...itemFields, price: e.target.value })}
                required
              />
            </div>

            <div className={styles.fieldGroup}>
              <label className={styles.label}>{catLabel} Image Upload</label>
              <div className={styles.uploadWrapper}>
                <input
                  type="text"
                  readOnly
                  placeholder={`Upload the ${catLabel.toLowerCase()}'s image`}
                  className={styles.uploadInput}
                  value={itemFields.imageName}
                  onClick={() => setItemFields({ ...itemFields, imageName: "mock_image_selected.png" })}
                />
                <div className={styles.uploadIconBox}>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#E8440A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </div>
              </div>
              {/* <span className={styles.itemCountIndicator}>+250</span> */}
            </div>

            <button type="submit" className={styles.addItemBtn}>
              Add item <span className={styles.btnArrow}>→</span>
            </button>
          </form>
        </div>

        {/* Decorative Floating Image Column */}
        <div className={styles.imageCol}>
          <div className={styles.imageWrapper}>
            <img src={coffeeImg} alt="Fresh coffee cup decor" className={styles.coffeeImage} />
          </div>
        </div>
      </div>

      {/* Action Footer for Final Finish */}
      <div className={styles.footer}>
        <button type="button" className={styles.finishBtn} onClick={handleFinalSubmit}>
          Finish Onboarding <span className={styles.btnArrow}>✔</span>
        </button>
      </div>
    </div>
  );
}

export default Step3Menu;
