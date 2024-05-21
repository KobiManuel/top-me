import React from "react";
import styles from "./AvatarChain.module.scss";

const AvatarChain = ({ avatars }) => {
  const MAX_DISPLAY_AVATARS = 4;

  return (
    <figure className={styles["avatar-chain"]}>
      {avatars.slice(0, MAX_DISPLAY_AVATARS).map((avatar, index) => (
        <img
          className={styles["images"]}
          src={avatar}
          alt={`Avatar ${index + 1}`}
          key={index}
        />
      ))}
      {avatars.length > MAX_DISPLAY_AVATARS && (
        <span className={styles.others}>
          +{avatars.length - MAX_DISPLAY_AVATARS}
        </span>
      )}
    </figure>
  );
};

export default AvatarChain;
