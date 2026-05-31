import styles from './Users.module.css';

const USERS = [
  { name: 'Celia Joyeuse', branch: 'HQ', role: "Orders' Verifier", updated: 'Updated 1 day ago' },
  { name: 'Jado', branch: 'EAST', role: 'Operations Manager', updated: 'Updated 2 days ago' },
  { name: 'Jenny Mariotta', branch: 'KIGALI', role: 'Membership Analyst', updated: 'Updated 4 days ago' },
  { name: 'Ashiri', branch: 'SOUTH', role: 'Finance Analyst', updated: 'Updated 1 month ago' },
  { name: 'Ologa', branch: 'WEST', role: 'Marketing Manager', updated: 'Updated 2 weeks ago' },
  { name: 'Micques', branch: 'HQ', role: 'Finance Consultant', updated: 'Updated 3 weeks ago' },
];

function EyeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function BranchBadge({ branch }) {
  if (branch === 'HQ') {
    return <span className={styles.badgeHq}>{branch}</span>;
  }
  return <span className={styles.badgeBranch}>{branch}</span>;
}

function Users() {
  return (
    <div className={styles.page}>
      <div className={styles.topBar}>
        <h2 className={styles.pageHeading}>Users</h2>
        <input
          type="search"
          className={styles.findUser}
          placeholder="Find user"
          aria-label="Find user"
        />
      </div>

      <h3 className={styles.subHeading}>SupaMenu Users</h3>

      <div className={styles.tableCard}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Users&apos; Details</th>
              <th>Branch</th>
              <th>Role</th>
              <th>Detailed Reports</th>
            </tr>
          </thead>
          <tbody>
            {USERS.map((user) => (
              <tr key={user.name}>
                <td>
                  <div className={styles.userName}>{user.name}</div>
                  <div className={styles.userUpdated}>{user.updated}</div>
                </td>
                <td>
                  <BranchBadge branch={user.branch} />
                </td>
                <td>
                  <span className={styles.role}>{user.role}</span>
                </td>
                <td>
                  <div className={styles.reportsCell}>
                    <button type="button" className={styles.eyeBtn} aria-label="View report">
                      <EyeIcon />
                    </button>
                    <button type="button" className={styles.menuBtn} aria-label="More options">
                      ···
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={styles.pagination}>
          <span>Page 1 of 3</span>
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

      {/* HERBS PLACEHOLDER */}
      <div className={styles.herbsPlaceholder} />
    </div>
  );
}

export default Users;
