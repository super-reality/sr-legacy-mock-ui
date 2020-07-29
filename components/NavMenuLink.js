import React from "react";
import styles from "../styles/Nav.module.scss";
import ActiveLink from "./ActiveLink";

export default function NavMenuLink({children, href, exact, ...otherProps}) {
    return (
        <li className={styles.item}>
            <ActiveLink href={href} exact={exact} className={styles.link} activeClassName={styles.active} {...otherProps}>{children}</ActiveLink>
        </li>
    );
}
