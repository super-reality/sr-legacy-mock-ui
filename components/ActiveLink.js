import React from "react";
import { useRouter } from "next/router";
import classNames from "classnames";

export default function ActiveLink({ children, href, className, activeClassName, exact }) {

    const router = useRouter();

    const handleClick = event => {
        event.preventDefault();
        router.push(href);
    }

    const isMatch = exact ? router.pathname === href : router.pathname.indexOf(href) === 0;

    return (
        <a href={href} onClick={handleClick} className={classNames(className, {[activeClassName]: isMatch})}>
            {children}
        </a>
    );

}
