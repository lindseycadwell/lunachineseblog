import Link from "next/link";
import React from "react";

import styles from "./Nav.module.css";

import { Tangerine } from "@next/font/google";

const tangerine = Tangerine({ weight: "700", subsets: ["latin"] });

const Nav = () => {
  return (
    <header className={styles.container}>
      <nav>
        <ul className={styles.list}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">Blog</Link>
          </li>
          <li className={styles.logo}>
            <Link href="/blog">
              <div style={{ display: "flex", alignItems: "center" }}>
                <span className={tangerine.className}>Luna</span>{" "}
                <span className={styles.chineseFont}>月</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/about">Tests</Link>
          </li>
          <li>
            <Link href="/about">History</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
