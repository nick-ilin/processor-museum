import React from 'react';
import VendorTree from '../components/vendor-tree';
import { getProcessors } from '../store/processors-store';

import '../styles/navigation.scss';

const treeData = getProcessors();

const Processors = (props) => (
  <div className="main">
    <VendorTree treeData={treeData} />
    {props.children}
  </div>
);

export default Processors;
