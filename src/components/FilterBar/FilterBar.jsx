import { useState, useRef, useEffect } from 'react';
import styles from './FilterBar.module.css';

export default function FilterBar({
                                    brands,
                                    families,
                                    currentBrand,
                                    currentFamily,
                                    onBrandChange,
                                    onFamilyChange,
                                    totalCount,
                                    filteredCount
                                  }) {
  const [brandOpen, setBrandOpen] = useState(false);
  const [familyOpen, setFamilyOpen] = useState(false);
  const brandRef = useRef(null);
  const familyRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (brandRef.current && !brandRef.current.contains(event.target)) {
        setBrandOpen(false);
      }
      if (familyRef.current && !familyRef.current.contains(event.target)) {
        setFamilyOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleBrandSelect = (brand) => {
    onBrandChange(brand);
    setBrandOpen(false);
  };

  const handleFamilySelect = (family) => {
    onFamilyChange(family);
    setFamilyOpen(false);
  };

  const clearBrand = () => {
    onBrandChange('all');
  };

  const clearFamily = () => {
    onFamilyChange('all');
  };

  const getBrandLabel = () => {
    if (currentBrand === 'all') return 'Все производители';
    return currentBrand;
  };

  const getFamilyLabel = () => {
    if (currentFamily === 'all') return 'Все семейства';
    return currentFamily;
  };

  return (
    <div className={styles.filterBar}>
      <div className={styles.filterBarWrapper}>
        <div className={styles.selectWrapper} ref={brandRef}>
          <div
            className={`${styles.selectTrigger} ${brandOpen ? styles.open : ''}`}
            onClick={() => setBrandOpen(!brandOpen)}
          >
            <span className={styles.selectValue}>{getBrandLabel()}</span>
            <span className={styles.selectArrow}>▼</span>
          </div>
          {currentBrand !== 'all' && (
            <button className={styles.clearBtn} onClick={clearBrand} title="Сбросить">
              ✕
            </button>
          )}
          {brandOpen && (
            <div className={styles.dropdown}>
              {brands.map(brand => (
                <div
                  key={brand}
                  className={`${styles.dropdownItem} ${currentBrand === brand ? styles.active : ''}`}
                  onClick={() => handleBrandSelect(brand)}
                >
                  {brand === 'all' ? 'Все производители' : brand}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className={styles.selectWrapper} ref={familyRef}>
          <div
            className={`${styles.selectTrigger} ${familyOpen ? styles.open : ''}`}
            onClick={() => setFamilyOpen(!familyOpen)}
          >
            <span className={styles.selectValue}>{getFamilyLabel()}</span>
            <span className={styles.selectArrow}>▼</span>
          </div>
          {currentFamily !== 'all' && (
            <button className={styles.clearBtn} onClick={clearFamily} title="Сбросить">
              ✕
            </button>
          )}
          {familyOpen && (
            <div className={styles.dropdown}>
              <div
                className={`${styles.dropdownItem} ${currentFamily === 'all' ? styles.active : ''}`}
                onClick={() => handleFamilySelect('all')}
              >
                Все семейства
              </div>
              {families.filter(f => f !== 'all').map(family => (
                <div
                  key={family}
                  className={`${styles.dropdownItem} ${currentFamily === family ? styles.active : ''}`}
                  onClick={() => handleFamilySelect(family)}
                >
                  {family}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className={styles.filterStats}>
        <span>Показано устройств: {filteredCount} из {totalCount}</span>
      </div>
    </div>
  );
}