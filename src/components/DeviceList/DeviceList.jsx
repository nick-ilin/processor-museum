import DeviceCard from '../DeviceCard/DeviceCard';
import styles from './DeviceList.module.css';

export default function DeviceList({ items, category }) {
  if (!items || items.length === 0) {
    return (
      <div className={styles.empty}>
        Нет устройств в этой категории
      </div>
    );
  }

  return (
    <div className={styles.deviceList}>
      {items.map(item => (
        <DeviceCard
          key={item.id}
          item={item}
          category={category}
        />
      ))}
    </div>
  );
}