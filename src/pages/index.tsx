import Image from "next/image";
import React from "react";
import hero from "public/archsunset.jpg";
import styles from "./index.module.css";
import SectionContainer from "@/ui/layout/SectionContainer";

const index = () => {
  return (
    <SectionContainer isSection>
      <div className={styles.heroContainer}>
        <Image
          src={hero}
          alt="Pretty Chinese building on a bridge at sunset"
          className={styles.heroImage}
        />
        <div className={styles.heroTextContainer}>
          <h1 className={styles.heroHeader}>
            Is it possible to learn Chinese?
          </h1>
          <p className={styles.heroText}>Join me on my quest to find out.</p>
        </div>
      </div>
    </SectionContainer>
  );
};

export default index;
