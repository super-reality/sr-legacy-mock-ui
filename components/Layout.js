import React from "react";
import Nav from "./Nav";
import NavBrand from "./NavBrand";
import NavMenu from "./NavMenu";
import NavMenuLink from "./NavMenuLink";
import classNames from "classnames";
import styles from "../styles/Layout.module.scss";

export default function Layout({ children }) {
    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <Nav>
                    <NavBrand />
                    <NavMenu>
                        <NavMenuLink href={"/student"}>Student</NavMenuLink>
                        <NavMenuLink href={"/mentor"}>Mentor</NavMenuLink>
                        <NavMenuLink href={"/classroom"}>Classroom</NavMenuLink>
                    </NavMenu>
                </Nav>
            </header>
            <main className={classNames(styles.main, styles.scrollable)}>
                {children}
            </main>
        </div>
    );
}
