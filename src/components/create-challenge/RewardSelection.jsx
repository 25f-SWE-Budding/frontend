import { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './RewardSelection.module.css';
import { PRODUCTS, PRICE_FILTERS } from '../../constants/products';
import { filterProducts } from '../../utils/filters';
import { useFetch } from '../../hooks/useFetch';
import { API_ENDPOINTS } from '../../constants/api';
import {
  formatPrice,
  calculatePricePerPerson,
  calculateDiscountPercent,
} from '../../utils/format';

const FILTER_OPTIONS = Object.values(PRICE_FILTERS);

function RewardSelection({ onSelect, selectedItem, setSelectedItem }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState(PRICE_FILTERS.ALL);
  const { data: apiItems = PRODUCTS } = useFetch(API_ENDPOINTS.ITEM.LIST, PRODUCTS);
  const [products, setProducts] = useState(PRODUCTS);

  useEffect(() => {
    if (Array.isArray(apiItems)) {
      setProducts(apiItems);
    }
  }, [apiItems]);

  const filteredProducts = useMemo(
    () => filterProducts(products, searchTerm, activeFilter),
    [products, searchTerm, activeFilter]
  );

  const renderList = () => (
    <div className={styles.listContainer}>
      <div className={styles.searchBar}>
        <span className={styles.searchIcon}>🔍</span>
        <input
          type="text"
          placeholder="원하는 보상을 검색해보세요"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className={styles.filterChips}>
        {FILTER_OPTIONS.map((filter) => (
          <button
            key={filter}
            className={`${styles.chip} ${
              activeFilter === filter ? styles.activeChip : ''
            }`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className={styles.productGrid}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className={styles.productCard}
              onClick={() => setSelectedItem(product)}
            >
              <div className={styles.imagePlaceholder}>{product.img}</div>
              <div className={styles.productInfo}>
                <p className={styles.productName}>{product.name}</p>
                <p className={styles.price}>{formatPrice(product.price)}</p>
              </div>
            </div>
          ))
        ) : (
          <div
            style={{
              gridColumn: '1 / -1',
              textAlign: 'center',
              padding: '40px',
              color: '#888',
            }}
          >
            조건에 맞는 상품이 없어요 😢
          </div>
        )}
      </div>
    </div>
  );

  const renderDetail = () => {
    const discountPercent = calculateDiscountPercent(
      selectedItem.originalPrice,
      selectedItem.price
    );

    return (
      <div className={styles.detailContainer}>
        <div className={styles.bigImage}>{selectedItem.img}</div>
        <div className={styles.detailInfo}>
          <h3 className={styles.detailName}>{selectedItem.name}</h3>
          <div className={styles.priceRow}>
            <span className={styles.discountPercent}>{discountPercent}%</span>
            <span className={styles.finalPrice}>
              {formatPrice(selectedItem.price)}
            </span>
            <span className={styles.originalPrice}>
              {formatPrice(selectedItem.originalPrice)}
            </span>
          </div>
          <div className={styles.badge}>
            🙂 1명당 {calculatePricePerPerson(selectedItem.price)}씩 걸면 돼요.
          </div>
        </div>
        <div className={styles.bottomButtonArea}>
          <button
            className={styles.backButton}
            onClick={() => setSelectedItem(null)}
          >
            취소
          </button>
          <button
            className={styles.confirmButton}
            onClick={() => onSelect && onSelect(selectedItem)}
          >
            이걸로 할게요
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      {selectedItem ? renderDetail() : renderList()}
    </div>
  );
}

RewardSelection.propTypes = {
  onSelect: PropTypes.func,
  selectedItem: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    originalPrice: PropTypes.number,
    img: PropTypes.string,
  }),
  setSelectedItem: PropTypes.func,
};

RewardSelection.defaultProps = {
  onSelect: null,
  selectedItem: null,
  setSelectedItem: null,
};

export default RewardSelection;
