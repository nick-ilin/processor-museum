import { useState } from 'react';
import ImageViewer from '../ImageViewer/ImageViewer';
import styles from './DeviceCard.module.css';

export default function DeviceCard({ item, category }) {
  const [showImage, setShowImage] = useState(false);
  const [imageError, setImageError] = useState(false);

  const smallImage = `/assets/${item.id}.jpg`;
  const bigImage = `/assets/big/${item.id}.jpg`;

  // Функция для получения стиля состояния
  const getConditionStyle = () => {
    switch (item.condition) {
      case 'g':
        return styles.conditionGood;
      case 'a':
        return styles.conditionArtefact;
      case 'f':
        return styles.conditionFailed;
      default:
        return '';
    }
  };

  const Placeholder = () => (
    <div className={styles.placeholder}>
      <span>📷</span>
    </div>
  );

  return (
    <>
      <div className={styles.card}>
        <div
          className={`${styles.imageWrapper} ${styles[category]}`}
          onClick={() => !imageError && setShowImage(true)}
        >
          {!imageError ? (
            <img
              src={smallImage}
              alt={item.name}
              className={styles.image}
              onError={() => setImageError(true)}
            />
          ) : (
            <Placeholder />
          )}
        </div>

        <div className={styles.cardContent}>
          <div className={styles.cardHeader}>
            <div className={styles.cardTitle}>
              {item.brand} {item.name}
            </div>
            {item.condition && (
              <div
                className={`${styles.conditionBadge} ${getConditionStyle()}`}
              />
            )}
          </div>
          <div className={styles.cardDetails}>
            {item.slot && (
              <div>{item.gpuvendor} {item.gpu} {item.slot} {item.ram}Mb {item.box === "1" ? "BOX" : ""}</div>
            )}
          </div>
        </div>
      </div>

      {showImage && !imageError && (
        <ImageViewer
          src={bigImage}
          alt={item.name}
          onClose={() => setShowImage(false)}
        />
      )}
    </>
  );
}