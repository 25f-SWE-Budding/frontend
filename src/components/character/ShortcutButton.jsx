import styles from "./ShortcutButton.module.css";
import starIcon from "../../assets/star-icon.png";
import Button from "../../components/ui/Button";

function ShortcutButton({ name, url = "/" }) {
  return (
    <span>
      <img className={styles.gotoIcon} src={starIcon} alt="star-icon" />
      <Button className={styles.buttonText} name={name} url={url} />
    </span>
  );
}

export default ShortcutButton;
