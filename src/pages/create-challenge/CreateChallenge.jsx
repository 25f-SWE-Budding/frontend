import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./CreateChallenge.module.css";
import NavigateBar from "../../components/ui/NavigateBar";
import NextButton from "../../components/create-challenge/NextButton";

// 컴포넌트들
import TitleField from "../../components/create-challenge/TitleField";
import CategoryField from "../../components/create-challenge/CategoryField";
import FriendField from "../../components/create-challenge/FriendField";
import ChallengePeriod from "../../components/create-challenge/ChallengePeriod";

// [NEW] 방금 만든 보상 선택 컴포넌트 import
import RewardSelection from "../../components/create-challenge/RewardSelection";

function CreateChallenge() {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  // [NEW] 선택된 보상을 저장할 변수
  const [selectedReward, setSelectedReward] = useState(null);

  const titles = [
    "도전 생성하기", // step 0
    "도전 기간 설정", // step 1 (제목을 살짝 바꿨어요)
    "보상 설정하기", // step 2
    "결제 하기", // step 3 (결제 단계 추가)
  ];

  // [NEW] 보상 선택 화면에서 "이걸로 할게요"를 눌렀을 때 실행될 함수
  const handleRewardSelect = (product) => {
    setSelectedReward(product); // 1. 선택한 상품 저장
    setStep(step + 1); // 2. 다음 단계(결제)로 이동
  };

  const renderContent = () => {
    switch (step) {
      case 0:
        return (
          <>
            <TitleField />
            <CategoryField />
            <FriendField />
          </>
        );
      case 1:
        return (
          <>
            <ChallengePeriod />
            {/* ChallengePeriod 안에 설명이 있으니 div는 지워도 됩니다 */}
          </>
        );
      case 2:
        // [수정됨] 여기가 핵심입니다!
        // onSelect 속성으로 handleRewardSelect 함수를 전달해줍니다.
        return <RewardSelection onSelect={handleRewardSelect} />;

      case 3:
        // [NEW] 결제 화면 (마지막 단계)
        return (
          <div className={styles.description}>
            {selectedReward && (
              <p style={{ color: "#ff6b00", fontWeight: "bold" }}>
                선택한 보상: {selectedReward.name}
              </p>
            )}
            <br />
            친구랑 결제하는 화면입니다.
          </div>
        );
      default:
        return <div>모든 단계가 끝났습니다!</div>;
    }
  };

  const handleNext = () => {
    // step 3이 마지막이라고 가정
    if (step === 3) {
      navigate("/");
    } else {
      setStep(step + 1);
    }
  };

  return (
    <div className={styles.createChallenge}>
      <NavigateBar title={titles[step]} disableCreateBtn={true} />

      <div className={styles.container}>{renderContent()}</div>

      {/* [중요 로직] 
         step 2(보상선택)일 때는 RewardSelection 안에 자체 버튼이 있으므로,
         바깥쪽 NextButton은 숨깁니다 (!== 2).
      */}
      {step !== 2 && (
        <div className={styles.bottomBar}>
          <NextButton
            onClick={handleNext}
            // 마지막 단계(3)면 '완료하기', 아니면 '다음'
            text={step === 3 ? "완료하기" : "다음"}
          />
        </div>
      )}
    </div>
  );
}

export default CreateChallenge;
