import { useState, useEffect } from "react";
import styles from "./Character.module.css";
import starIcon from "../../assets/star-icon.png";
import Button from "../../components/ui/Button";

function Character() {
  return (
    <div>
      <div className="characterContainer" id={styles.background}>
        <div>
          <div>
            <span>
              <img src={starIcon} alt="star-icon" width="47" />
              <Button name={"나의 도전"} url={"/"} />
            </span>
            <span>
              <img src={starIcon} alt="star-icon" width="47" />
              <Button name={"공지"} url={"/"} />
            </span>
          </div>
          <p>point</p>
        </div>
        <div>
          <p>character message</p>
          <p>character</p>
        </div>
      </div>
      <div>
        <p>bottom bar</p>
      </div>
    </div>
  );
}

export default Character;
