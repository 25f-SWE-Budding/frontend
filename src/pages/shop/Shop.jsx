import { useState } from 'react';
import styles from './Shop.module.css';
import NavigateBar from '../../components/ui/NavigateBar';
import Button from '../../components/ui/Button';
import { useAuth } from '../../hooks/useAuth';
import { useFetch } from '../../hooks/useFetch';
import { API_ENDPOINTS } from '../../constants/api';

const MOCK_ITEMS = [
  { id: 1, name: '아이템 1', price: 100, description: '설명 1' },
  { id: 2, name: '아이템 2', price: 200, description: '설명 2' },
  { id: 3, name: '아이템 3', price: 300, description: '설명 3' },
];

function Shop() {
  const { userId } = useAuth();
  const { data: items = MOCK_ITEMS } = useFetch(API_ENDPOINTS.ITEM.LIST, MOCK_ITEMS);
  const [loading, setLoading] = useState(false);

  const handleBuyItem = async (itemId) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://budding.onrender.com${API_ENDPOINTS.ITEM.BUY}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ itemId, userId }),
        }
      );
      if (response.ok) {
        alert('구매 성공!');
      } else {
        alert('구매 실패');
      }
    } catch (error) {
      console.error('구매 중 오류:', error);
      alert('오류 발생');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <NavigateBar title="샴" />
      <div className={styles.itemList}>
        {Array.isArray(items) ? (
          items.map((item) => (
            <div key={item.id} className={styles.itemCard}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p className={styles.price}>{item.price} 포인트</p>
              <Button
                onClick={() => handleBuyItem(item.id)}
                disabled={loading}
              >
                구매
              </Button>
            </div>
          ))
        ) : (
          <p>아이템을 찾을 수 없습니다.</p>
        )}
      </div>
    </div>
  );
}

export default Shop;
