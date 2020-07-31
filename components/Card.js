import React from "react";
import classNames from "classnames";
import styles from "../styles/Card.module.scss";

export default function Card({className, children}) {
    return (
        <div className={classNames(className, styles.card)}>
            {children}
        </div>
    );
}
