import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import styles from './ClientLayout.module.css';
import logoImg from '../../assets/Landing/Logo.png';
import overviewIcon from '../../assets/Overview/overview.png';
import chartsIcon from '../../assets/Overview/charts.png';
import ordersIcon from '../../assets/Overview/orders.png';
import menuIcon from '../../assets/Overview/menu.png';
import settingsIcon from '../../assets/Overview/settings.png';
import myaccIcon from '../../assets/Overview/myacc.png';
import logoutIcon from '../../assets/Overview/logout.png';

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.searchIcon}>
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  );
}

const NAV_ITEMS = [
  { to: 'overview', label: 'Overview', icon: overviewIcon },
  { to: 'charts',   label: 'Charts',   icon: chartsIcon   },
  { to: 'orders',   label: 'Orders',   icon: ordersIcon   },
  { to: 'menu',     label: 'Menu',     icon: menuIcon     },
];

function ClientLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <img src={logoImg} alt="DineHub" className={styles.brandIcon} />
          <span className={styles.brandText}>DineHub</span>
        </div>

        <nav className={styles.nav}>
          {NAV_ITEMS.map(({ to, label, icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
              }
            >
              <img src={icon} alt="" className={styles.navIcon} />
              {label}
            </NavLink>
          ))}
        </nav>

        <div className={styles.sidebarBottom}>
          <NavLink
            to="settings"
            end
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
            }
          >
            <img src={settingsIcon} alt="" className={styles.navIcon} />
            Settings
          </NavLink>
          <div className={styles.accountRow}>
            <button type="button" className={styles.accountLeft} onClick={handleLogout}>
              <img src={myaccIcon} alt="" className={styles.navIcon} />
              <span>My Account</span>
            </button>
            <button type="button" className={styles.logoutBtn} aria-label="Logout" onClick={handleLogout}>
              <img src={logoutIcon} alt="" className={styles.logoutIcon} />
            </button>
          </div>
        </div>
      </aside>

      <div className={styles.main}>
        <header className={styles.topbar}>
          <div className={styles.searchWrap}>
            <input
              type="search"
              className={styles.searchInput}
              placeholder="Search here"
              aria-label="Search"
            />
            <SearchIcon />
          </div>
          <div className={styles.topbarRight}>
            <button type="button" className={styles.iconBtn} aria-label="Notifications">
              <BellIcon />
            </button>
            <span className={styles.divider} />
            <span className={styles.userName}>Eunice Atete</span>
            <div className={styles.avatar} aria-hidden="true" />
          </div>
        </header>

        <main className={styles.content}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default ClientLayout;