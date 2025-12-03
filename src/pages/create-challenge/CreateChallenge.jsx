import { useState, useEffect } from "react";
import styles from "./CreateChallenge.module.css";
import NavigateBar from "../../components/ui/NavigateBar";
import CategoryField from "../../components/create-challenge/CategoryField";
import TitleField from "../../components/create-challenge/TitleField";

function CreateChallenge() {
  const [title, setTitle] = useState("");
  return (
    <div className={styles.createChallenge}>
      <NavigateBar title={"도전 생성하기"} disableCreateBtn={true} />
      <div className={styles.container}>
        <TitleField value={title} onChange={(e) => setTitle(e.target.value)} />
        <CategoryField />
        <div>
          <p>함께할 친구</p>
          <div></div>
          <input
            type="text"
            placeholder="친구 이름을 검색하세요"
            maxLength={15}
          />
        </div>
      </div>
    </div>
  );
}

export default CreateChallenge;
