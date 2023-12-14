import { Link } from 'react-router-dom';
import styles from './styles.module.css';

export const AppNavigation = function AppNavigation() {
  return (
    <ul className={styles.appNavigation}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  );
};
