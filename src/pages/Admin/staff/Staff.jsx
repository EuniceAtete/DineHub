import { useMemo, useState } from 'react';
import styles from './Staff.module.css';

const STAFF = [
  { id: 1, avatar: 'CJ', name: 'Celia Joyeuse', role: 'Orders Verifier', business: 'M Hotel', status: 'Active', lastLogin: 'Today, 09:42' },
  { id: 2, avatar: 'JM', name: 'Jado Mugisha', role: 'Operations Manager', business: 'Soy Resto', status: 'Active', lastLogin: 'Yesterday, 16:10' },
  { id: 3, avatar: 'AM', name: 'Ariane Mutoni', role: 'Finance Analyst', business: 'DineHub HQ', status: 'Active', lastLogin: 'Jun 6, 2026' },
  { id: 4, avatar: 'OK', name: 'Olivier Kaneza', role: 'Marketing Manager', business: 'Urban Cafe', status: 'Inactive', lastLogin: 'May 28, 2026' },
  { id: 5, avatar: 'NI', name: 'Nadia Ishimwe', role: 'Support Lead', business: 'Sundowner', status: 'Active', lastLogin: 'Jun 4, 2026' },
];

const ROLES = ['All', 'Orders Verifier', 'Operations Manager', 'Finance Analyst', 'Marketing Manager', 'Support Lead'];

function StatusBadge({ status }) {
  return <span className={`${styles.statusBadge} ${status === 'Active' ? styles.active : styles.inactive}`}>{status}</span>;
}

function Staff() {
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('All');

  const filteredStaff = useMemo(() => {
    return STAFF.filter((member) => {
      const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) || member.business.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesRole = roleFilter === 'All' || member.role === roleFilter;
      return matchesSearch && matchesRole;
    });
  }, [searchTerm, roleFilter]);

  return (
    <div className={styles.page}>
      <div className={styles.topBar}>
        <div>
          <h1 className={styles.pageHeading}>Staff</h1>
          <p className={styles.pageSubtext}>Directory of operators assigned to client businesses.</p>
        </div>
        <button type="button" className={styles.primaryBtn}>Add Staff</button>
      </div>

      <section className={styles.controlsCard}>
        <input
          type="search"
          className={styles.searchInput}
          placeholder="Search staff or business"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <select className={styles.select} value={roleFilter} onChange={(event) => setRoleFilter(event.target.value)}>
          {ROLES.map((role) => <option key={role} value={role}>{role}</option>)}
        </select>
      </section>

      <section className={styles.tableCard}>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Avatar</th>
                <th>Name</th>
                <th>Role</th>
                <th>Assigned Business</th>
                <th>Status</th>
                <th>Last Login</th>
              </tr>
            </thead>
            <tbody>
              {filteredStaff.map((member) => (
                <tr key={member.id}>
                  <td><span className={styles.avatar}>{member.avatar}</span></td>
                  <td className={styles.nameCell}>{member.name}</td>
                  <td>{member.role}</td>
                  <td className={styles.businessCell}>{member.business}</td>
                  <td><StatusBadge status={member.status} /></td>
                  <td className={styles.muted}>{member.lastLogin}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Staff;
