import { useState } from 'react';
import styles from './ClientMenu.module.css';
import lavaCakeImg from '../../../assets/Overview/lava-cake.png';
import cheesecakeImg from '../../../assets/Overview/cheesecake.png';
import mangoCottaImg from '../../../assets/Overview/mango-cotta.png';
import beignetsImg from '../../../assets/Overview/beignets.png';

const CATEGORIES = ['Drink', 'Appetizer', 'Main Course', 'Dessert'];

const MENU_ITEMS = [
  {
    ingredients: 'Dark Chocolate, Butter, Eggs, Sugar',
    name: 'Chocolate Lava Cake – 1 piece',
    price: 'Frw 4,500',
    image: lavaCakeImg,
  },
  {
    ingredients: 'Cream Cheese, Passion Fruit, Biscuit Base',
    name: 'Passion Fruit Cheesecake – 1 slice',
    price: 'Frw 3,800',
    image: cheesecakeImg,
  },
  {
    ingredients: 'Mango, Cream, Vanilla, Agar',
    name: 'Mango Panna Cotta',
    price: 'Frw 3,500',
    image: mangoCottaImg,
  },
  {
    ingredients: 'Ripe Banana, Cinnamon, Powdered Sugar',
    name: 'Banana Beignets',
    price: 'Frw 2,000',
    image: beignetsImg,
  },
];

const APPLIES_TO = [
  { id: 'restaurants', label: 'Restaurants' },
  { id: 'hotels',      label: 'Hotels'       },
  { id: 'pubs',        label: 'Pubs'         },
];

function ClientMenu() {
  const [activeCategory, setActiveCategory] = useState('Dessert');
  const [appliesTo, setAppliesTo] = useState('restaurants');

  return (
    <div className={styles.page}>
      {/* CHOCOLATE SPLASH PLACEHOLDER */}
      <div className={styles.chocolatePlaceholder} />

      <h1 className={styles.pageTitle}>Menu</h1>

      <div className={styles.categoryTabs}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            className={`${styles.categoryTab} ${activeCategory === cat ? styles.categoryTabActive : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className={styles.contentRow}>
        <div className={styles.menuList}>
          {MENU_ITEMS.map((item) => (
            <article key={item.name} className={styles.menuItemCard}>
              <img
                src={item.image}
                alt={item.name}
                className={styles.itemImage}
              />
              <div className={styles.itemDetails}>
                <span className={styles.ingredients}>{item.ingredients}</span>
                <span className={styles.itemName}>{item.name}</span>
                <span className={styles.itemPrice}>{item.price}</span>
              </div>
            </article>
          ))}
        </div>

        <aside className={styles.addPanel}>
          <h2 className={styles.addPanelTitle}>Add Item</h2>
          <div className={styles.addRow}>
            <input
              type="text"
              className={styles.addInput}
              placeholder="Add new item"
              aria-label="Add new item"
            />
            <button type="button" className={styles.addBtn} aria-label="Add item">
              +
            </button>
          </div>
          <div className={styles.radioGroup}>
            {APPLIES_TO.map((opt) => (
              <label key={opt.id} className={styles.radioLabel}>
                <input
                  type="radio"
                  name="appliesTo"
                  value={opt.id}
                  checked={appliesTo === opt.id}
                  onChange={() => setAppliesTo(opt.id)}
                  className={styles.radioInput}
                />
                <span
                  className={
                    appliesTo === opt.id ? styles.radioDotOrange : styles.radioDotGrey
                  }
                />
                {opt.label}
              </label>
            ))}
          </div>
          <div className={styles.underlineFields}>
            <input
              type="text"
              className={styles.underlineInput}
              placeholder="Enter its name"
              aria-label="Item name"
            />
            <input
              type="text"
              className={styles.underlineInput}
              placeholder="Enter its ingredients"
              aria-label="Ingredients"
            />
            <input
              type="text"
              className={styles.underlineInput}
              placeholder="Enter its price"
              aria-label="Price"
            />
          </div>
          <button type="button" className={styles.nextBtn}>
            Next →
          </button>
        </aside>
      </div>

      <div className={styles.pagination}>
        <span>Page 5 of 6</span>
        <div className={styles.pageArrows}>
          <button type="button" className={styles.pageArrow} aria-label="Previous page">
            &lt;
          </button>
          <button type="button" className={styles.pageArrow} aria-label="Next page">
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default ClientMenu;