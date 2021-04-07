import React from 'react';
import VendorTree from '../components/vendor-tree';
import { getMainboards } from '../store/mainboards-store';

import '../styles/navigation.scss';

const treeData = getMainboards();

const Mainboards = (props) => (
  <div className="main">
    <VendorTree treeData={treeData} />
    {props.children}
  </div>
);

export default Mainboards;
