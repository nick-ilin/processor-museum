import React from 'react';
import { getProcessorById } from '../store/processors-store';

import '../styles/processor-info.scss';

const ProcessorInfo = (props) => {
  const info = getProcessorById(props.id);
  return (
    <div className="processorInfo">
      <a href={info.imageUrlBigTop} target="_blank" rel="noreferrer"><img className="image" src={info.imageUrlTop} alt={info.name} /></a>
      <a href={info.imageUrlBigBottom} target="_blank" rel="noreferrer"><img className="image" src={info.imageUrlBottom} alt={info.name} /></a>
      <div className="description">
        <ul>
          <li>{`Производитель: ${info.vendor}`}</li>
          <li>{`Название: ${info.name}`}</li>
          <li>{`Дата выпуска: ${info.launchDate}`}</li>
          <li>{`Частота: ${info.frequency}`}</li>
          <li>{`Разъем: ${info.socket}`}</li>
          <li>{`Число транзисторов: ${info.transistors}`}</li>
          <li>{`Техпроцесс: ${info.cycle}`}</li>
          <li>{`Семейство: ${info.family}`}</li>
        </ul>
      </div>
    </div>
  );
};

export default ProcessorInfo;
