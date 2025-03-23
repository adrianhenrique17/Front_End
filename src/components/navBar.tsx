import React from "react";
import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Site do cebolão</div>
      <ul className={styles.navLinks}>
        <li>
          <a href="#">Início</a>
        </li>
        <li>
          <a href="#"> o cebola</a>
        </li>
        <li>
          <a href="#">Contato do cebola</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
