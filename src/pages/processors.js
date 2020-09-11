import React from 'react';
import VendorTree from '../components/vendor-tree';

const Processors = (props) => (
  <div>
    <VendorTree />
    {props.children}
  </div>
);

export default Processors;
