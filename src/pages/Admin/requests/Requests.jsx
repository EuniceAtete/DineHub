import { useMemo, useState } from 'react';
import styles from './Requests.module.css';

const REQUESTS = [
  { id: 1, requester: 'Aline Uwase', business: 'Kigali Bistro', type: 'New Client', date: '2026-06-08', status: 'Pending' },
  { id: 2, requester: 'Jean Mugisha', business: 'M Hotel', type: 'Plan Upgrade', date: '2026-06-07', status: 'Approved' },
  { id: 3, requester: 'Nadia Ishimwe', business: 'Urban Cafe', type: 'Staff Access', date: '2026-06-07', status: 'Pending' },
  { id: 4, requester: 'Eric Ntwali', business: 'Sundowner', type: 'Payout Review', date: '2026-06-06', status: 'Rejected' },
  { id: 5, requester: 'Claudine Kayitesi', business: 'Soy Resto', type: 'Menu Import', date: '2026-06-05', status: 'Pending' },
];

const STATUSES = ['All', 'Pending', 'Approved', 'Rejected'];

function StatusBadge({ status }) {
  const className = status === 'Approved' ? styles.approved : status === 'Rejected' ? styles.rejected : styles.pending;
  return <span className={`${styles.statusBadge} ${className}`}>{status}</span>;
}

function Requests() {
  const [statusFilter, setStatusFilter] = useState('All');
  const [rows, setRows] = useState(REQUESTS);

  const filteredRows = useMemo(() => rows.filter((row) => statusFilter === 'All' || row.status === statusFilter), [rows, statusFilter]);

  const updateStatus = (id, status) => {
    setRows((current) => current.map((row) => (row.id === id ? { ...row, status } : row)));
  };

  return (
    <div className={styles.page}>
      <div className={styles.topBar}>
        <div>
          <h1 className={styles.pageHeading}>Requests</h1>
          <p className={styles.pageSubtext}>Review incoming client, access, and billing requests.</p>
        </div>
        <select className={styles.select} value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)}>
          {STATUSES.map((status) => <option key={status} value={status}>{status}</option>)}
        </select>
      </div>

      <section className={styles.tableCard}>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Requester</th>
                <th>Business</th>
                <th>Type</th>
                <th>Date Submitted</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredRows.map((request) => (
                <tr key={request.id}>
                  <td className={styles.nameCell}>{request.requester}</td>
                  <td>{request.business}</td>
                  <td className={styles.typeCell}>{request.type}</td>
                  <td className={styles.muted}>{request.date}</td>
                  <td><StatusBadge status={request.status} /></td>
                  <td>
                    <div className={styles.actions}>
                      <button type="button" className={styles.approveBtn} onClick={() => updateStatus(request.id, 'Approved')}>Approve</button>
                      <button type="button" className={styles.rejectBtn} onClick={() => updateStatus(request.id, 'Rejected')}>Reject</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Requests;
