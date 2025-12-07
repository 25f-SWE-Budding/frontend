import { useNavigate } from 'react-router-dom';
import styles from './Profile.module.css';
import { useAuth } from '../../hooks/useAuth';
import { useFetch } from '../../hooks/useFetch';
import { API_ENDPOINTS } from '../../constants/api';

const MOCK_USER = {
  id: 1,
  name: '사용자',
  email: 'user@example.com',
};

const MOCK_USER_ITEMS = [
  { id: 1, name: '보유 아이템 1', description: '설명 1' },
  { id: 2, name: '보유 아이템 2', description: '설명 2' },
];

const MOCK_STATS = {
  completedChallenges: 5,
  totalDays: 42,
  totalPoints: 144,
};

function Profile() {
  const navigate = useNavigate();
  const { userId, logout } = useAuth();
  const { data: userItems = MOCK_USER_ITEMS } = useFetch(
    API_ENDPOINTS.ITEM.LIST_BY_USER(userId),
    MOCK_USER_ITEMS
  );

  const handleLogout = () => {
    if (confirm('로그아웃 하시겠습니까?')) {
      logout();
      navigate('/login');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.pageTitle}>프로필</h1>
      </div>
      
      <div className={styles.profileSection}>
        <div className={styles.userInfo}>
          <div className={styles.avatar}>🌱</div>
          <div className={styles.userDetails}>
            <h2>{MOCK_USER.name}</h2>
            <p>{MOCK_USER.email}</p>
          </div>
        </div>
      </div>

      <div className={styles.statsSection}>
        <h3>활동 통계</h3>
        <div className={styles.statsList}>
          <div className={styles.statItem}>
            <p className={styles.statValue}>{MOCK_STATS.completedChallenges}</p>
            <p className={styles.statLabel}>완료한 도전</p>
          </div>
          <div className={styles.statItem}>
            <p className={styles.statValue}>{MOCK_STATS.totalDays}</p>
            <p className={styles.statLabel}>총 출석일</p>
          </div>
          <div className={styles.statItem}>
            <p className={styles.statValue}>{MOCK_STATS.totalPoints}</p>
            <p className={styles.statLabel}>획등 포인트</p>
          </div>
        </div>
      </div>

      <div className={styles.itemsSection}>
        <h3>보유 아이템</h3>
        <div className={styles.itemsList}>
          {Array.isArray(userItems) && userItems.length > 0 ? (
            userItems.map((item) => (
              <div key={item.id} className={styles.itemCard}>
                <h4>{item.name}</h4>
                <p>{item.description}</p>
              </div>
            ))
          ) : (
            <p className={styles.emptyMessage}>보유한 아이템이 없습니다.</p>
          )}
        </div>
      </div>

      <div className={styles.actionsSection}>
        <button className={styles.logoutButton} onClick={handleLogout}>
          로그아웃
        </button>
      </div>
    </div>
  );
}

export default Profile;
