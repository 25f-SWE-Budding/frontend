import styles from './Home.module.css';
import MissionHeader from '../../components/home/MissionHeader';
import MemberInfo from '../../components/home/MemberInfo';
import Notion from '../../components/home/Notion';
import CharacterGroup from '../../components/home/CharacterGroup';
import PhotoSection from '../../components/home/PhotoSection';
import Calendar from '../../components/home/Calendar';
import NavigateBar from '../../components/ui/NavigateBar';
import { useFetch } from '../../hooks/useFetch';
import { MOCK_HOME_DATA } from '../../constants/mockData';

function Home() {
  const { data } = useFetch(
    'http://localhost:5173/data/homeData.json',
    MOCK_HOME_DATA
  );

  return (
    <div id={styles.container}>
      <NavigateBar title="" disableCreateBtn={true} />
      <MissionHeader
        succedDays={data.succedDays}
        leftDays={data.leftDays}
        goal={data.goal}
        prize={data.prize}
      />

      <MemberInfo members={data.members} />
      <Notion notion={data.notion} />
      <CharacterGroup />

      <div className={styles.whiteSection}>
        <PhotoSection />
        <div className={styles.divider}></div>
        <Calendar />
      </div>
    </div>
  );
}

export default Home;
