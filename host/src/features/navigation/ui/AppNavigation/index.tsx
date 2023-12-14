import { NavLink } from 'react-router-dom';
import styles from './styles.module.css';

export const AppNavigation = function AppNavigation() {
  return (
    <ul className={styles.appNavigation}>
      <li>
        <NavLink
          to="/"
          className={styles.link}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={styles.link}
        >
          About
        </NavLink>
      </li>
    </ul>
  );
};
