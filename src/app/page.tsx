import React from "react";
import Link from "next/link";
import Image from "next/image";

import imageEquilibrium from "../../public/images/image-equilibrium.jpg";
import imageAvatar from "../../public/images/image-avatar.png";
import iconView from "../../public/images/icon-view.svg";
import iconEthereum from "../../public/images/icon-ethereum.svg";
import iconClock from "../../public/images/icon-clock.svg";

import styles from "./page.module.scss";

const Home = () => {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.displayPhotoContainer}>
        <Image
          src={imageEquilibrium}
          className={styles.displayPhoto}
          alt={""}
        />
        <div className={styles.overlay}>
          <Image src={iconView} className={styles.iconView} alt={""} />
        </div>
      </div>
      <h1 className={styles.header}>
        <Link href={"/"}>Equilibrium #3429</Link>
      </h1>
      <p className={styles.description}>
        Our Equilibrium collection promotes balance and calm.
      </p>
      <div className={styles.status}>
        <span className={styles.value}>
          <Image src={iconEthereum} alt={""} /> 0.041 ETH
        </span>
        <span className={styles.duration}>
          <Image src={iconClock} alt={""} /> 3 days left
        </span>
      </div>
      <hr />
      <div className={styles.footer}>
        <Image
          src={imageAvatar}
          width={33}
          height={33}
          className={styles.imageAvatar}
          alt={""}
        />
        <p>
          Creation of <Link href={"/"}>Jules Wyvern</Link>
        </p>
      </div>
    </main>
  );
};

export default Home;
