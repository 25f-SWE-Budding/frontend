import styles from "./MemberInfo.module.css";

function MemberInfo({ members = [] }) {
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <p>사진</p>
        <p>{members.length}</p>
      </div>
      {members.map((member, idx) => (
        <div key={idx} className={styles.profile}>
          <p>개인 프로필 사진</p>
          <p>{member}</p>
        </div>
      ))}
    </div>
  );
}

export default MemberInfo;
