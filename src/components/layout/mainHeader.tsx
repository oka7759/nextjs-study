import { NextPage } from "next";
import Link from "next/link";
import classes from "./main-header.module.css";

interface Props {}

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">넥스트 이벤트</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href="/events">올 이벤트</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
