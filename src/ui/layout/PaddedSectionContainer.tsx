import React from "react";

import styles from "./PaddedSectionContainer.module.css";

interface IProps {
  children: React.ReactNode;
}

const PaddedSectionContainer = ({ children }: IProps) => {
  return <div className={styles.container}>{children}</div>;
};

export default PaddedSectionContainer;
