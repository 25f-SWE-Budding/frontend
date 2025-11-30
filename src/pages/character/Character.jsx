import { useState, useEffect } from "react";
import Button from "../../components/ui/Button";
import styles from "./Character.module.css";
import starIcon from "../../assets/star-icon.png";
import pointIcon from "../../assets/point-icon.png";
import avatar from "../../assets/avatar/avatar.png";
import MessagePoint from "../../assets/message-point.svg?react";
function Character() {
  const userName = "지현";
  const userPoint = 144;
  return (
    <div className={styles.container}>
      <div className="characterContainer">
        <div className={styles.gotoContainer}>
          <div className={styles.gotoButtons}>
            <span>
              <img className={styles.gotoIcon} src={starIcon} alt="star-icon" />
              <Button
                className={styles.buttonText}
                name={"나의 도전"}
                url={"/"}
              />
            </span>
            <span>
              <img className={styles.gotoIcon} src={starIcon} alt="star-icon" />
              <Button name={"공지"} url={"/"} />
            </span>
          </div>
          <div className={styles.pointContainer}>
            <img
              className={styles.pointIcon}
              src={pointIcon}
              alt="point-icon"
            />
            <p className={styles.point}>{userPoint}</p>
          </div>
        </div>
        <div className={styles.avatarSection}>
          <div className={styles.messageBubbleContainer}>
            <div className={styles.messageBubble}>
              <span className={styles.messageName}>{userName}</span>
              <span className={styles.message}>
                가 콕! <br />
                얼른 미션 하러가요
              </span>
            </div>
            <MessagePoint />
          </div>
          <img className={styles.avatar} src={avatar} alt="avatar" />
        </div>
      </div>
      <div>
        <p>bottom bar</p>
      </div>
    </div>
  );
}

export default Character;
