import styles from './MyChallenge.module.css';
import NavigateBar from '../../components/ui/NavigateBar';
import RoomCard from '../../components/my-challenge/RoomCard';
import { MOCK_CHALLENGE_LIST } from '../../constants/mockData';

function MyChallenge() {
  return (
    <div className={styles.container}>
      <NavigateBar title="지금 진행중인 도전" />

      <div className={styles.roomCardList}>
        {MOCK_CHALLENGE_LIST.map((challenge) => (
          <RoomCard
            key={challenge.id}
            title={challenge.title}
            subtitle={challenge.subtitle}
            type={challenge.type}
          />
        ))}
      </div>
    </div>
  );
}

export default MyChallenge;
