import { Link } from "react-router-dom";
import { FaHome , FaUser, FaFolderOpen, FaPhone  } from "react-icons/fa";
import styles from "./Navigation.module.css";

function Navigation() {
  return (
    <nav className={styles.nav}>
      <Link to="/home" className={styles.navLink}>
        <FaHome  />
      </Link>
      <Link to="/about" className={styles.navLink}>
        <FaUser />
      </Link>
      <Link to="/portfolio" className={styles.navLink}>
        <FaFolderOpen />
      </Link>
      <Link to="/contact" className={styles.navLink}>
        <FaPhone  />
      </Link>
    </nav>
  );
}

export default Navigation;
