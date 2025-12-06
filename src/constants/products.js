export const PRODUCTS = [
  {
    id: 1,
    name: '[특가] 알뜰 미니 망고 2구',
    price: 15900,
    originalPrice: 18000,
    img: '🥭',
  },
  {
    id: 2,
    name: '[알뜰] 혼자 먹는 조각 망고',
    price: 12900,
    originalPrice: 15000,
    img: '🥭',
  },
  {
    id: 3,
    name: '[선물] 가성비 망고 세트',
    price: 29900,
    originalPrice: 32000,
    img: '🎁',
  },
  {
    id: 4,
    name: '[원월드] 프리미엄 고당도 애플망고',
    price: 35900,
    originalPrice: 37900,
    img: '🥭',
  },
  {
    id: 5,
    name: '[원월드] 골드망고 과일세트',
    price: 35900,
    originalPrice: 37900,
    img: '🎁',
  },
  {
    id: 6,
    name: '[프레시] 달콤한 망고 2kg',
    price: 42000,
    originalPrice: 45000,
    img: '🍋',
  },
  {
    id: 7,
    name: '[제주] 제주산 애플망고 선물세트',
    price: 55000,
    originalPrice: 60000,
    img: '🍊',
  },
  {
    id: 8,
    name: '[제주] 제주산 귤 선물세트',
    price: 45000,
    originalPrice: 50000,
    img: '🍊',
  },
];

export const PRICE_FILTERS = {
  ALL: '전체',
  RANGE_10K: '1만원대',
  RANGE_20K: '2만원대',
  RANGE_30K: '3만원대',
  RANGE_40K: '4만원대',
  RANGE_50K_90K: '5-9만원대',
};

export const PRICE_FILTER_RANGES = {
  [PRICE_FILTERS.RANGE_10K]: { min: 10000, max: 20000 },
  [PRICE_FILTERS.RANGE_20K]: { min: 20000, max: 30000 },
  [PRICE_FILTERS.RANGE_30K]: { min: 30000, max: 40000 },
  [PRICE_FILTERS.RANGE_40K]: { min: 40000, max: 50000 },
  [PRICE_FILTERS.RANGE_50K_90K]: { min: 50000, max: 100000 },
};
