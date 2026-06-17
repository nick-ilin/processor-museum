import {NavLink, Outlet} from 'react-router-dom';
import styles from './Layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1>📦 Processor museum</h1>
        <nav className={styles.nav}>
          <NavLink to="/processors" className={({ isActive }) => isActive ? styles.active : ''}>CPU</NavLink>
          <NavLink to="/videocards" className={({ isActive }) => isActive ? styles.active : ''}>GPU</NavLink>
          <NavLink to="/mainboards" className={({ isActive }) => isActive ? styles.active : ''}>MB</NavLink>
          <NavLink to="/other-devices" className={({ isActive }) => isActive ? styles.active : ''}>Other</NavLink>
        </nav>
      </header>
      <main className={styles.main}>{children}
        <Outlet />
      </main>
    </div>
  );
}