import React from "react";
import Nav from "@/ui/layout/Nav";
import Footer from "@/ui/layout/Footer";
import styles from "./Layout.module.css";

interface IProps {
  children: React.ReactNode;

  className?: string;
}

const Layout = ({ children, className }: IProps) => {
  return (
    <>
      <div className={className}>
        <Nav />
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
