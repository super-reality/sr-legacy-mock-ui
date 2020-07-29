import React from "react";
import styles from "../styles/Nav.module.scss";

export default function Nav({ children }) {
    return (
        <nav className={styles.nav}>
            {children}
        </nav>
    );
}
