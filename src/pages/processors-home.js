import React from 'react';

const ProcessorsHome = (props) => (
  <div className="cpuImages">
    <img className="cpuImage" src={`src/assets/processors/amd/${props.id}_top.jpg`} alt={props.id} />
    <img className="cpuImage" src={`src/assets/processors/amd/${props.id}_bottom.jpg`} alt={props.id} />
  </div>
);
export default ProcessorsHome;
