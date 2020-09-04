import React from 'react';
import { getProcessor } from '../store/processors-store';

class DeviceInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const info = getProcessor(this.props.id);
    return (
      <div className="cpuImages">
        <img className="cpuImage" src={info.imageUrl} alt={info.id} />
        <img className="cpuImage" src={(info.imageUrl).replace('top', 'bottom')} alt={info.id} />
      </div>
    );
  }
}

export default DeviceInfo;
