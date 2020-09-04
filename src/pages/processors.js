import React from 'react';
import _ from 'lodash';

import VendorTree from '../components/vendor-tree';

import Data from './processors/processors.json';

class Processors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      treeData: _.groupBy(Data, 'vendor'),
    };
  }

  render() {
    const { treeData } = this.state;
    const { children } = this.props;

    return (
      <div>
        <VendorTree treeData={treeData} />
        {children}
      </div>
    );
  }
}

export default Processors;
