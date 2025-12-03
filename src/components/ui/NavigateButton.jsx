import { useNavigate } from "react-router-dom";
import styles from "./NavigateButton.module.css";
import NavIcon from "../../assets/nav-button.svg?react";

export default function NavigateButton() {
  const navigate = useNavigate();

  return (
    <button className={styles.navigateButton} onClick={() => navigate(-1)}>
      <NavIcon />
    </button>
  );
}
