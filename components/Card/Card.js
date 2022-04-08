import React from "react";
import styles from "./Card.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Card({ name, phone, email, image, id }) {
  const router = useRouter();
  return (
    <div className={styles.card} onClick={() => router.push(`/cats/${id}`)}>
      <div className={styles["card-header"]}>
        <Image
          src={image.url}
          alt={image.alt}
          className={styles["card-img"]}
          layout="fill"
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
