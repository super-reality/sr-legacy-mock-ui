import React from "react";
import ActiveLink from "./ActiveLink";
import styles from "../styles/Nav.module.scss";

export default function NavBrand(props) {
    return <ActiveLink href={"/"} className={styles.brand} activeClassName={styles.active} exact {...props}>brand</ActiveLink>
}
