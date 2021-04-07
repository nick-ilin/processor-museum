import React from 'react';
import { getVideocardById } from '../store/videocards-store';

import '../styles/videocard-info.scss';

const VideocardInfo = (props) => {
  const info = getVideocardById(props.id);
  return (
    <div className="videocardInfo">
      <a href={info.imageUrlBigTop} target="_blank" rel="noreferrer">
        <img className="image" src={info.imageUrlTop} alt={info.name} />
      </a>
      <a href={info.imageUrlBigBottom} target="_blank" rel="noreferrer">
        <img className="image" src={info.imageUrlBottom} alt={info.name} />
      </a>
      <div className="description">
        <ul>
          <li>{`Производитель: ${info.vendor}`}</li>
          <li>{`Название: ${info.name}`}</li>
          <li>{`Дата выпуска: ${info.launchDate}`}</li>
          <li>{`Разъем: ${info.slot}`}</li>
          <li>{`GPU: ${info.gpu}`}</li>
        </ul>
      </div>
    </div>
  );
};

export default VideocardInfo;
