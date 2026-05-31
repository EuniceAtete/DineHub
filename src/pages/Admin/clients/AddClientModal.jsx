import styles from './AddClientModal.module.css';

function ChevronDown() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.chevron}>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function AddClientModal({ onClose }) {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick} role="presentation">
      <div className={styles.modal} role="dialog" aria-modal="true" aria-labelledby="add-client-title">
        <form onSubmit={handleSubmit}>
          <div className={styles.formGrid}>
            <div className={styles.column}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="client-name">Client</label>
                <input id="client-name" className={styles.input} type="text" placeholder="Client name" />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="representative">Representative</label>
                <input id="representative" className={styles.input} type="text" placeholder="Names" />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="address">Address</label>
                <input id="address" className={styles.input} type="text" placeholder="Province, District, Sector, Cell" />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="phone">Phone</label>
                <input id="phone" className={styles.input} type="tel" placeholder="Phone" />
              </div>
            </div>
            <div className={styles.column}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="category">Category</label>
                <div className={styles.selectWrap}>
                  <select id="category" className={styles.select} defaultValue="">
                    <option value="" disabled>Choose Category</option>
                    <option value="RESTO">RESTO</option>
                    <option value="HOTEL">HOTEL</option>
                    <option value="PUB">PUB</option>
                  </select>
                  <ChevronDown />
                </div>
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="creation-date">Date Of Creation</label>
                <input id="creation-date" className={styles.input} type="text" placeholder="Month & Year" />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="email">Email</label>
                <input id="email" className={styles.input} type="email" placeholder="Email" />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="iban">Bank Account (IBAN)</label>
                <input id="iban" className={styles.input} type="text" placeholder="IBAN" />
              </div>
            </div>
          </div>
          <div className={styles.actions}>
            <button type="button" className={styles.cancelBtn} onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className={styles.submitBtn}>
              Add Client
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddClientModal;
