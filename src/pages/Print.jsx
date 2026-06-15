import { useEffect, useState } from 'react';
import collectionData from '../data/collection.json';
import styles from './Print.module.css';

export default function Print() {
  const [printItems, setPrintItems] = useState([]);

  useEffect(() => {
    const gpus = collectionData.filter(item => item.category === 'gpu');
    setPrintItems(gpus);
  }, []);

  return (
    <div className={styles.printContainer}>
      <div className={styles.stickerGrid}>
        {printItems.map((item) => (
          <div key={item.id} className={styles.stickerCell}>
            <div className={styles.stickerId}>{item.id}</div>
            <div className={styles.stickerBrand}>{item.brand}</div>
            <div className={styles.stickerModel}>
              {item.gpu} {item.ram}Mb
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}