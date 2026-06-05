import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import styles from './AdminLayout.module.css';

// Import nav PNG assets
import logoImg from '../../assets/Auth Pages/Logo.png';
import overviewIcon from '../../assets/Overview/overview.png';
import usersIcon from '../../assets/Overview/users.png';
import requestsIcon from '../../assets/Overview/requests.png';
import userIcon from '../../assets/Overview/user.png';
import ordersIcon from '../../assets/Overview/orders.png';
import reportsIcon from '../../assets/Overview/reports.png';
import marketingIcon from '../../assets/Overview/marketing.png';
import creditcardIcon from '../../assets/Overview/creditcard,png.png';
import settingsIcon from '../../assets/Overview/settings.png';
import myaccIcon from '../../assets/Overview/myacc.png';
import logoutIcon from '../../assets/Overview/logout.png';

function HamburgerIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#888888" strokeWidth="2" strokeLinecap="round">
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="4" y1="18" x2="20" y2="18" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#888888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#888888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#888888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function PersonIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
  );
}

function AdminLayout() {
  const navigate = useNavigate();

  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <img src={logoImg} alt="DineHub" className={styles.brandLogo} />
          <span className={styles.brandText}>DineHub</span>
        </div>

        <nav className={styles.nav}>
          {/* MAIN SECTION */}
          <div className={styles.navSection}>
            <div className={styles.sectionLabel}>MAIN</div>
            <NavLink
              to="overview"
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
              }
            >
              <img src={overviewIcon} alt="Overview" className={styles.navIcon} />
              <span>Overview</span>
            </NavLink>
            <NavLink
              to="clients"
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
              }
            >
              <img src={usersIcon} alt="Clients" className={styles.navIcon} />
              <span>Clients</span>
            </NavLink>
            <NavLink
              to="requests"
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
              }
            >
              <img src={requestsIcon} alt="Requests" className={styles.navIcon} />
              <span>Requests</span>
            </NavLink>
            <NavLink
              to="/admin/users"
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
              }
            >
              <img src={userIcon} alt="Staff" className={styles.navIcon} />
              <span>Staff</span>
            </NavLink>
            <NavLink
              to="/admin/orders"
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
              }
            >
              <img src={ordersIcon} alt="Orders" className={styles.navIcon} />
              <span>Orders</span>
            </NavLink>
          </div>

          {/* ANALYTICS SECTION */}
          <div className={styles.navSection}>
            <div className={styles.sectionLabel}>ANALYTICS</div>
            <NavLink
              to="/admin/reports"
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
              }
            >
              <img src={reportsIcon} alt="Reports" className={styles.navIcon} />
              <span>Reports</span>
            </NavLink>
            <NavLink
              to="/admin/marketing"
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
              }
            >
              <img src={marketingIcon} alt="Marketing" className={styles.navIcon} />
              <span>Marketing</span>
            </NavLink>
            <NavLink
              to="/admin/payments"
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
              }
            >
              <img src={creditcardIcon} alt="Payments" className={styles.navIcon} />
              <span>Payments</span>
            </NavLink>
          </div>

          {/* SYSTEM SECTION */}
          <div className={styles.navSection}>
            <div className={styles.sectionLabel}>SYSTEM</div>
            <NavLink
              to="settings"
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
              }
            >
              <img src={settingsIcon} alt="Settings" className={styles.navIcon} />
              <span>Settings</span>
            </NavLink>
            <NavLink
              to="/admin/account"
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
              }
            >
              <img src={myaccIcon} alt="My Account" className={styles.navIcon} />
              <span>My Account</span>
            </NavLink>
            <button
              onClick={() => navigate('/login')}
              className={styles.navLinkButton}
            >
              <img src={logoutIcon} alt="Logout" className={styles.navIcon} />
              <span>Logout</span>
            </button>
          </div>
        </nav>

        <div className={styles.sidebarBottom}>
          <div className={styles.sidebarUserCard}>
            <div className={styles.sidebarUserInfo}>
              <div className={styles.sidebarAvatar}>
                <PersonIcon />
              </div>
              <div className={styles.sidebarUserCopy}>
                <strong>Eunice Atete</strong>
                <small>Super Admin</small>
              </div>
            </div>
            <button
              type="button"
              className={styles.upgradeButton}
              onClick={() => navigate('/pricing')}
            >
              Upgrade to Pro!
            </button>
          </div>
        </div>
      </aside>

      <div className={styles.mainArea}>
        <header className={styles.navbar}>
          <button type="button" className={styles.hamburgerBtn} aria-label="Menu">
            <HamburgerIcon />
          </button>
          
          <div className={styles.searchWrap}>
            <SearchIcon />
            <input
              type="search"
              className={styles.searchInput}
              placeholder="Search clients, orders, businesses..."
              aria-label="Search"
            />
          </div>

          <div className={styles.topbarRight}>
            <button type="button" className={styles.iconBtn} aria-label="Calendar">
              <CalendarIcon />
            </button>
            <button type="button" className={styles.iconBtn} aria-label="Notifications">
              <div className={styles.bellWrapper}>
                <BellIcon />
                <span className={styles.bellBadge}>8</span>
              </div>
            </button>
            <div className={styles.userProfile}>
              <div className={styles.profileAvatar}>
                <PersonIcon />
              </div>
              <div className={styles.profileInfo}>
                <span className={styles.profileName}>Eunice Atete</span>
                <span className={styles.profileRole}>Super Admin</span>
              </div>
              <ChevronDownIcon />
            </div>
          </div>
        </header>

        <main className={styles.content}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
