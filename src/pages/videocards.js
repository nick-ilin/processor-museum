import React from 'react';
import VendorTree from '../components/vendor-tree';
import { getVideocards } from '../store/videocards-store';

import '../styles/navigation.scss';

const treeData = getVideocards();

const Videocards = (props) => (
  <div className="main">
    <VendorTree treeData={treeData} />
    {props.children}
  </div>
);

export default Videocards;
