import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import styles from './Login.module.css';

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  // TODO: 실제 카카오 로그인 SDK 연동
  const handleKakaoLogin = async () => {
    try {
      // 임시: 테스트용 로그인
      // 실제로는 카카오 SDK를 통해 토큰을 받아야 함
      const mockToken = 'mock_kakao_token_' + Date.now();
      const mockUserId = 1;
      
      login(mockUserId, mockToken);
      navigate('/');
    } catch (error) {
      console.error('카카오 로그인 실패:', error);
      alert('로그인에 실패했습니다.');
    }
  };

  // TODO: 실제 구글 로그인 SDK 연동
  const handleGoogleLogin = async () => {
    try {
      // 임시: 테스트용 로그인
      const mockToken = 'mock_google_token_' + Date.now();
      const mockUserId = 2;
      
      login(mockUserId, mockToken);
      navigate('/');
    } catch (error) {
      console.error('구글 로그인 실패:', error);
      alert('로그인에 실패했습니다.');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.branding}>
          <div className={styles.logo}>🌱</div>
          <h1 className={styles.title}>Budding</h1>
          <p className={styles.subtitle}>
            작은 습관으로 시작하는
            <br />
            나만의 성장 이야기
          </p>
        </div>

        <div className={styles.features}>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>✨</span>
            <p>친구들과 함께하는 챌린지</p>
          </div>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>🎯</span>
            <p>목표 달성 시 보상 받기</p>
          </div>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>🌟</span>
            <p>나만의 캐릭터 키우기</p>
          </div>
        </div>

        <div className={styles.loginButtons}>
          <button
            className={`${styles.loginButton} ${styles.kakao}`}
            onClick={handleKakaoLogin}
          >
            <span className={styles.buttonIcon}>💬</span>
            카카오로 시작하기
          </button>
          <button
            className={`${styles.loginButton} ${styles.google}`}
            onClick={handleGoogleLogin}
          >
            <span className={styles.buttonIcon}>G</span>
            구글로 시작하기
          </button>
        </div>

        <p className={styles.terms}>
          로그인 시 <a href="#terms">이용약관</a> 및 <a href="#privacy">개인정보처리방침</a>에 동의합니다
        </p>
      </div>
    </div>
  );
}

export default Login;
