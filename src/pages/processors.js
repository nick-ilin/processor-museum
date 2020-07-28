import React, { Component } from "react";

import VendorTree from '../components/vendor-tree';

import '../styles/react-treeview.css';

export default props => (
    <div>
        <VendorTree />
        {props.children}
    </div>
);