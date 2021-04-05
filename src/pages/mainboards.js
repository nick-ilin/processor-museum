import React from 'react';
import VendorTree from '../components/vendor-tree';
import { getMainboards } from '../store/mainboards-store';

const treeData = getMainboards();

const Mainboards = (props) => (
  <div>
    <VendorTree treeData={treeData} />
    {props.children}
  </div>
);

export default Mainboards;
