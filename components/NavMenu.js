import React from "react";
import classNames from "classnames";
import styles from "../styles/Nav.module.scss";

export default function NavMenu({children, className}) {
    return (
        <ul className={classNames(className, styles.menu)}>
            {children}
        </ul>
    );
}
