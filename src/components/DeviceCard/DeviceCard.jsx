import { useState } from 'react';
import ImageViewer from '../ImageViewer/ImageViewer';
import styles from './DeviceCard.module.css';

export default function DeviceCard({ item, category }) {
  const [showImage, setShowImage] = useState(false);
  const [imageError, setImageError] = useState(false);

  const smallImage = `/assets/${category}/${item.id}.jpg`;
  const bigImage = `/assets/${category}/big/${item.id}.jpg`;

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

  const renderDetails = () => {
    switch (category) {
      case 'gpu':
        return (
          <div className={styles.deviceSlot}>
            {item.gpuvendor} {item.gpu} {item.slot} {item.ram}Mb {item.addinfo}
          </div>
        );
      case 'cpu':
        return (
          <div className={styles.deviceSlot}>
            {item.core} {item.spec}
          </div>
        );
      case 'mb':
        return (
          <div className={styles.deviceSlot}>
            {item.chipset} {item.family}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className={styles.device}>
        <div className={styles.deviceId}>#{item.id}</div>
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
            <Placeholder/>
          )}
        </div>

        <div className={styles.deviceContent}>
          <div className={styles.deviceHeader}>
            <div className={styles.deviceTitle}>
              {item.brand} {item.name} {item.frequency ? item.frequency + "MHz" : ""}
            </div>
            {item.condition && (
              <div className={`${styles.conditionBadge} ${getConditionStyle()}`}/>
            )}
          </div>
          <div className={styles.deviceDetails}>
            {renderDetails()}
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