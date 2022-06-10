import Link from "next/link";
import React from "react";
import classes from "./Navigation.module.css";

const Navigation = () => {
    return (
        <nav className={classes.navigation}>
            <ul>
                <li>
                    <Link href="/events">Browse all events</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
