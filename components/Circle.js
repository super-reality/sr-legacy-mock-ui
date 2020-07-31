import React from "react";
import classNames from "classnames";
import styles from "../styles/Circle.module.scss";

export default function Circle({children, className, ...otherProps}) {
    return <i className={classNames(className, styles.circle)} {...otherProps}>{children}</i>
}
