import { useState } from "react";
import styles from "./RewardSelection.module.css";

// 🥭 망고 창고 (상품 데이터)
const PRODUCTS = [
  {
    id: 1,
    name: "[원월드] 프리미엄 고당도 애플망고",
    price: 35900,
    originalPrice: 37900,
    img: "🥭",
  },
  {
    id: 2,
    name: "[원월드] 골드망고 과일세트",
    price: 35900,
    originalPrice: 37900,
    img: "🎁",
  },
  {
    id: 3,
    name: "[프레시] 달콤한 망고 2kg",
    price: 42000,
    originalPrice: 45000,
    img: "🍋",
  },
  {
    id: 4,
    name: "[제주] 제주산 애플망고 선물세트",
    price: 55000,
    originalPrice: 60000,
    img: "🍊",
  },
  {
    id: 5,
    name: "[제주] 제주산 귤 선물세트",
    price: 45000,
    originalPrice: 50000,
    img: "🍊",
  },
];

export default function RewardSelection({ onSelect }) {
  // 1. 현재 선택된 상품이 무엇인지 기억하는 변수 (null이면 아무것도 안 고른 상태 = 리스트 보기)
  const [selectedItem, setSelectedItem] = useState(null);

  // --- 화면 1: 상품 리스트 (진열대) ---
  const renderList = () => (
    <div className={styles.listContainer}>
      {/* 검색창 */}
      <div className={styles.searchBar}>
        <span className={styles.searchIcon}>🔍</span>
        <input type="text" placeholder="원하는 보상을 검색해보세요" />
      </div>

      {/* 필터 버튼들 (모양만 흉내) */}
      <div className={styles.filterChips}>
        <button className={`${styles.chip} ${styles.activeChip}`}>전체</button>
        <button className={styles.chip}>1만원대</button>
        <button className={styles.chip}>2만원대</button>
        <button className={styles.chip}>3만원대</button>
      </div>

      {/* 상품 그리드 */}
      <div className={styles.productGrid}>
        {PRODUCTS.map((product) => (
          <div
            key={product.id}
            className={styles.productCard}
            onClick={() => setSelectedItem(product)} // 클릭하면 상세 화면으로 이동!
          >
            <div className={styles.imagePlaceholder}>{product.img}</div>
            <div className={styles.productInfo}>
              <p className={styles.productName}>{product.name}</p>
              <p className={styles.price}>{product.price.toLocaleString()}원</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // --- 화면 2: 상품 상세 (자세히 보기) ---
  const renderDetail = () => {
    // 1명당 얼마인지 계산 (예시로 3명이라고 가정)
    const pricePerPerson = Math.floor(selectedItem.price / 3).toLocaleString();

    return (
      <div className={styles.detailContainer}>
        {/* 큰 이미지 */}
        <div className={styles.bigImage}>{selectedItem.img}</div>

        {/* 상품 정보 */}
        <div className={styles.detailInfo}>
          <h3 className={styles.detailName}>{selectedItem.name}</h3>
          <div className={styles.priceRow}>
            <span className={styles.discountPercent}>5%</span>
            <span className={styles.finalPrice}>
              {selectedItem.price.toLocaleString()}원
            </span>
            <span className={styles.originalPrice}>
              {selectedItem.originalPrice.toLocaleString()}원
            </span>
          </div>

          <div className={styles.badge}>
            🙂 1명당 {pricePerPerson}원씩 걸면 돼요.
          </div>
        </div>

        {/* 하단 버튼 (이걸로 할게요) */}
        <div className={styles.bottomButtonArea}>
          {/* 뒤로가기 버튼은 상단 네비바에 있다고 가정하거나, 여기에 작게 추가 가능 */}
          <button
            className={styles.backButton}
            onClick={() => setSelectedItem(null)} // 다시 null로 만들면 리스트로 돌아감
          >
            취소
          </button>
          <button
            className={styles.confirmButton}
            onClick={() => onSelect && onSelect(selectedItem)} // 부모에게 "나 이거 골랐어!" 알림
          >
            이걸로 할게요
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      {/* 선택된 아이템이 있으면 상세화면, 없으면 리스트화면 보여주기 */}
      {selectedItem ? renderDetail() : renderList()}
    </div>
  );
}
