import React from 'react';
import VendorTree from '../components/vendor-tree';
import { getProcessors } from '../store/processors-store';

const treeData = getProcessors();

const Processors = (props) => (
  <div>
    <VendorTree treeData={treeData} />
    {props.children}
  </div>
);

export default Processors;
