import React from "react";
import cn from "classNames";
import styles from "./SectionContainer.module.css";
import { upperFirst } from "lodash";

interface IProps {
  isSection: boolean;
  children: React.ReactNode;

  backgroundColor?: "default";
}

const SectionContainer = ({
  isSection,
  backgroundColor = "default",
  children,
}: IProps) => {
  return isSection ? (
    <section
      className={cn(
        styles.container,
        styles[`color${upperFirst(backgroundColor)}`]
      )}
    >
      {children}
    </section>
  ) : (
    <div className={styles.container}>{children}</div>
  );
};

export default SectionContainer;
