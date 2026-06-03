import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import styles from './AdminLayout.module.css';
import overviewStyles from './overview/AdminOverview.module.css';
import logoImg from '../../assets/Landing/Logo.png';

const NAV_SECTIONS = [
  {
    label: 'MAIN',
    items: [
      { to: 'overview', label: 'Overview', icon: <OverviewIcon /> },
      { to: 'clients', label: 'Clients', icon: <ClientsIcon /> },
      { to: 'requests', label: 'Requests', icon: <RequestsIcon /> },
      { to: '/admin/staff', label: 'Staff', icon: <StaffIcon /> },
      { to: '/admin/orders', label: 'Orders', icon: <OrdersIcon /> },
    ],
  },
  {
    label: 'ANALYTICS',
    items: [
      { to: '/admin/reports', label: 'Reports', icon: <ReportsIcon /> },
      { to: '/admin/marketing', label: 'Marketing', icon: <MarketingIcon /> },
      { to: '/admin/payments', label: 'Payments', icon: <PaymentsIcon /> },
    ],
  },
  {
    label: 'SYSTEM',
    items: [
      { to: 'settings', label: 'Settings', icon: <SettingsIcon /> },
      { to: '/admin/account', label: 'My Account', icon: <AccountIcon /> },
    ],
  },
];

function SvgIcon({ children }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={styles.navIcon}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function OverviewIcon() {
  return (
    <SvgIcon>
      <rect x="3" y="3" width="6" height="6" />
      <rect x="15" y="3" width="6" height="6" />
      <rect x="3" y="15" width="6" height="6" />
      <rect x="15" y="15" width="6" height="6" />
    </SvgIcon>
  );
}

function ClientsIcon() {
  return (
    <SvgIcon>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </SvgIcon>
  );
}

function RequestsIcon() {
  return (
    <SvgIcon>
      <path d="M6 4v16" />
      <path d="M18 4v16" />
      <path d="M6 8h4l4 8h4" />
      <circle cx="6" cy="4" r="2" />
      <circle cx="18" cy="4" r="2" />
      <circle cx="6" cy="20" r="2" />
      <circle cx="18" cy="20" r="2" />
    </SvgIcon>
  );
}

function StaffIcon() {
  return (
    <SvgIcon>
      <circle cx="8" cy="8" r="3" />
      <path d="M3 21v-2a5 5 0 0 1 10 0v2" />
      <path d="M16 8h5" />
      <path d="M16 14h5" />
      <path d="M16 20h5" />
    </SvgIcon>
  );
}

function OrdersIcon() {
  return (
    <SvgIcon>
      <path d="M6 7h12l-1 14H7L6 7Z" />
      <path d="M9 7a3 3 0 0 1 6 0" />
      <path d="M3 3h4l2 4" />
    </SvgIcon>
  );
}

function ReportsIcon() {
  return (
    <SvgIcon>
      <path d="M4 20V10" />
      <path d="M10 20V4" />
      <path d="M16 20v-7" />
      <path d="M22 20V8" />
    </SvgIcon>
  );
}

function MarketingIcon() {
  return (
    <SvgIcon>
      <path d="M3 11v4a2 2 0 0 0 2 2h2l4 4v-4h3l7 3V6l-7 3H5a2 2 0 0 0-2 2Z" />
      <path d="M14 9v8" />
    </SvgIcon>
  );
}

function PaymentsIcon() {
  return (
    <SvgIcon>
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="M3 10h18" />
      <path d="M7 15h4" />
    </SvgIcon>
  );
}

function SettingsIcon() {
  return (
    <SvgIcon>
      <path d="M12 15.5A3.5 3.5 0 1 0 12 8a3.5 3.5 0 0 0 0 7.5Z" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.88-.34 1.7 1.7 0 0 0-1 1.55V21a2 2 0 1 1-4 0v-.08a1.7 1.7 0 0 0-1-1.55 1.7 1.7 0 0 0-1.88.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-1.55-1H3a2 2 0 1 1 0-4h.08a1.7 1.7 0 0 0 1.55-1 1.7 1.7 0 0 0-.34-1.88l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.55V3a2 2 0 1 1 4 0v.08a1.7 1.7 0 0 0 1 1.55 1.7 1.7 0 0 0 1.88-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.4 9c.1.36.38.65.75.82.24.12.5.18.77.18H21a2 2 0 1 1 0 4h-.08a1.7 1.7 0 0 0-1.52 1Z" />
    </SvgIcon>
  );
}

function AccountIcon() {
  return (
    <SvgIcon>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </SvgIcon>
  );
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.searchIcon} aria-hidden="true">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M8 2v4M16 2v4M3 10h18" />
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function AdminLayout() {
  const navigate = useNavigate();

  const handleUpgrade = () => {
    navigate('/pricing');
  };

  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <img src={logoImg} alt="DineHub" className={styles.brandIcon} />
          <span className={styles.brandText}>DineHub</span>
        </div>

        <nav className={styles.nav}>
          {NAV_SECTIONS.map((section) => (
            <div key={section.label} className={overviewStyles.navSection}>
              <div className={overviewStyles.navSectionLabel}>
                <span>{section.label}</span>
              </div>
              {section.items.map(({ to, label, icon }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === 'overview' || to === 'settings'}
                  className={({ isActive }) =>
                    `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
                  }
                >
                  {icon}
                  {label}
                </NavLink>
              ))}
            </div>
          ))}
        </nav>

        <div className={styles.sidebarBottom}>
          <div className={overviewStyles.sidebarUserCard}>
            <div className={overviewStyles.sidebarUserInfo}>
              <span className={overviewStyles.sidebarAvatar}>
                <AccountIcon />
              </span>
              <span className={overviewStyles.sidebarUserCopy}>
                <strong>Eunice Atete</strong>
                <small>Super Admin</small>
              </span>
            </div>
            <button type="button" className={overviewStyles.upgradeButton} onClick={handleUpgrade}>
              Upgrade to Pro!
            </button>
          </div>
        </div>
      </aside>

      <div className={styles.mainArea}>
        <header className={styles.navbar}>
          <div className={styles.searchWrap}>
            <input
              type="search"
              className={styles.searchInput}
              placeholder="Search clients, orders, businesses..."
              aria-label="Search"
            />
            <SearchIcon />
          </div>
          <div className={styles.topbarRight}>
            <button type="button" className={styles.iconBtn} aria-label="Calendar">
              <CalendarIcon />
            </button>
            <span className={styles.divider} />
            <span className={`${styles.avatar} ${overviewStyles.topAvatar}`} aria-hidden="true">
              <AccountIcon />
            </span>
            <span className={overviewStyles.topUserCopy}>
              <strong>Eunice Atete</strong>
              <small>Super Admin</small>
            </span>
            <button type="button" className={styles.iconBtn} aria-label="Open user menu">
              <ChevronDownIcon />
            </button>
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
