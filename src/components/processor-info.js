import React from 'react';
import { getProcessorById } from '../store/processors-store';

import '../styles/processor-info.scss';

const ProcessorInfo = (props) => {
  const info = getProcessorById(props.id);
  return (
    <div className="cpuImages">
      <img className="cpuImage" src={info.imageUrl} alt={info.id} />
      <img className="cpuImage" src={(info.imageUrl).replace('top', 'bottom')} alt={info.id} />
      <div className="cpuInfo">
        <ul className="cpuHeadlines">
          <li>Производитель:</li>
          <li>Название</li>
          <li>Дата выпуска</li>
          <li>Частота</li>
          <li>Разъем</li>
          <li>Число транзисторов</li>
          <li>Техпроцесс</li>
          <li>Семейство</li>
        </ul>
        <ul className="cpuDescription">{Object.values(info).map((item, i) => (i > 1) && <li>{item}</li>)}</ul>
      </div>
    </div>
  );
};

export default ProcessorInfo;
