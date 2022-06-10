import Link from "next/link";
import Navigation from "./Navigation";

import classes from "./MainHeader.module.css";

const MainHeader = () => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <Link href="/">NextEvents</Link>
            </div>
            <Navigation />
        </header>
    );
};

export default MainHeader;
