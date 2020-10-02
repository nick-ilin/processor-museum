import React from 'react';
import TreeView from 'react-treeview';
import { Link } from '@reach/router';
import _ from 'lodash';

import '../styles/tree.scss';

let vendors;

class VendorTree extends React.Component {
  constructor(props) {
    super(props);
    vendors = _.uniqBy(props.treeData, 'vendor').map((item) => item.vendor);
    this.state = {
      collapsedBookKeeping: vendors.map(() => true),
    };
  }

  handleClick(i) {
    this.setState((prevState) => {
      const [...collapsedBookKeeping] = prevState.collapsedBookKeeping;
      collapsedBookKeeping[i] = !collapsedBookKeeping[i];
      this.setState({ collapsedBookKeeping });
    });
  }

  renderVendorTree(vendor, i) {
    const { collapsedBookKeeping } = this.state;
    const label = (
      <span className="vendorName" role="link" tabIndex={0} onClick={this.handleClick.bind(this, i)} onKeyDown={this.handleClick.bind(this, i)}>
        {vendor}
      </span>
    );
    const devices = _.filter(this.props.treeData, (item) => item.vendor === vendor).map((item) => item);
    return (
      <TreeView
        key={i}
        nodeLabel={label}
        collapsed={collapsedBookKeeping[i]}
        onClick={this.handleClick.bind(this, i)}
      >
        {devices.map((device) => (
          <li key={device.id}>
            <Link to={device.id}>{device.name}</Link>
          </li>
        ))}
      </TreeView>
    );
  }

  render() {
    return (
      <div className="vendorTree">
        {vendors.map((vendor, i) => this.renderVendorTree(vendor, i))}
      </div>
    );
  }
}

export default VendorTree;
