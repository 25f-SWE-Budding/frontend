import styles from './Character.module.css';
import pointIcon from '../../assets/point-icon.png';
import ShortcutButton from '../../components/character/ShortcutButton';
import Avatar from '../../components/character/Avatar';
import ContentContainer from '../../components/character/ContentContainer';
import { ROUTES } from '../../constants/routes';

const MOCK_USER_POINT = 144;
const MOCK_ALERTS = [''];

function Character() {
  return (
    <div className={styles.container}>
      <div className="characterContainer">
        <div className={styles.topContainer}>
          <div className={styles.shortcutContainer}>
            <ShortcutButton name="나의 도전" url={ROUTES.MY_CHALLENGE} />
            <ShortcutButton name="공지" url={ROUTES.HOME} />
          </div>
          <div className={styles.pointContainer}>
            <img
              className={styles.pointIcon}
              src={pointIcon}
              alt="포인트 아이콘"
            />
            <p className={styles.point}>{MOCK_USER_POINT}</p>
          </div>
        </div>
        <Avatar alert={MOCK_ALERTS} />
      </div>
      <ContentContainer />
    </div>
  );
}

export default Character;
