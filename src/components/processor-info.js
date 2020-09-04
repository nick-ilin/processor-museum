import React from 'react';
import { getProcessor } from '../store/processors-store';

const ProcessorInfo = (props) => {
  const info = getProcessor(props.id);
  return (
    <div className="cpuImages">
      <img className="cpuImage" src={info.imageUrl} alt={info.id} />
      <img className="cpuImage" src={(info.imageUrl).replace('top', 'bottom')} alt={info.id} />
    </div>
  );
};

export default ProcessorInfo;
