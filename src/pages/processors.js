import React, { Component } from "react";

import VendorTree from '../components/vendor-tree';

import '../styles/tree.css';

export default props => (
    <div>
        <VendorTree name = '../pages/processors/processors.json' />
        {props.children}
    </div>
);