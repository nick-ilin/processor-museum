import { useState } from 'react';
import ImageViewer from '../ImageViewer/ImageViewer';
import styles from './DeviceCard.module.css';

export default function DeviceCard({ item, category }) {
  const [showImage, setShowImage] = useState(false);
  const [imageError, setImageError] = useState(false);

  const smallImage = `/assets/${item.id}.jpg`;
  const bigImage = `/assets/big/${item.id}.jpg`;

  const Placeholder = () => (
    <div className={`${styles.placeholder} ${styles[category]}`}>
      <span>📷</span>
    </div>
  );

  return (
    <>
      <div className={styles.card}>
        <div className={`${styles.imageWrapper} ${styles[category]}`}
             onClick={() => !imageError && setShowImage(true)}>
          {!imageError ? (
            <img
              src={smallImage}
              alt={item.name}
              className={`${styles.image} ${styles[category]}`}
              onError={() => setImageError(true)}
            />
          ) : (
            <Placeholder/>
          )}
        </div>

        <div className={styles.cardContent}>
          <div className={styles.cardDetails}>
            <div className={styles.cardTitle}>{item.name}</div>
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