import React from "react";
import styles from "./Card.module.css";
import Image from "next/image";

export default function Card({ name, phone, email, image, id }) {
  return (
    <div className={styles.card}>
      <div className={styles["card-header"]}>
        <Image
          src={image.url}
          alt={image.alt}
          className={styles["card-img"]}
        ></Image>
      </div>
      <div>
        <h3>{name}</h3>
        <p>{phone}</p>
        <p>{email}</p>
      </div>
    </div>
  );
}
