import React from 'react';
import { getMainboardById } from '../store/mainboards-store';

import '../styles/mainboard-info.scss';

const MainboardInfo = (props) => {
  const info = getMainboardById(props.id);
  return (
    <div className="mainboardInfo">
      <a href={info.imageUrlBig} target="_blank" rel="noreferrer">
        <img className="image" src={info.imageUrl} alt={info.name} />
      </a>
      <div className="description">
        <ul>
          <li>{`Производитель: ${info.vendor}`}</li>
          <li>{`Название: ${info.name}`}</li>
          <li>{`Ревизия: ${info.revision}`}</li>
          <li>{`Дата выпуска: ${info.launchDate}`}</li>
          <li>{`Разъем: ${info.socket}`}</li>
        </ul>
      </div>
    </div>
  );
};

export default MainboardInfo;
