import styles from './Home.module.css';
import MissionHeader from '../../components/home/MissionHeader';
import MemberInfo from '../../components/home/MemberInfo';
import Notion from '../../components/home/Notion';
import CharacterGroup from '../../components/home/CharacterGroup';
import PhotoSection from '../../components/home/PhotoSection';
import Calendar from '../../components/home/Calendar';
import NavigateBar from '../../components/ui/NavigateBar';
import { useFetch } from '../../hooks/useFetch';
import { useAuth } from '../../hooks/useAuth';
import { API_ENDPOINTS } from '../../constants/api';
import { MOCK_HOME_DATA } from '../../constants/mockData';

function Home() {
  const { userId } = useAuth();
  // TODO: 실제 API에 홈 데이터 엔드포인트가 있으면 업데이트 필요
  // 현재는 mock 데이터 사용
  const { data } = useFetch(null, MOCK_HOME_DATA);

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
