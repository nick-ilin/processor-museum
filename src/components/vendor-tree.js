import React from 'react';
import TreeView from 'react-treeview';
import { Link } from '@reach/router';
import _ from 'lodash';

import '../styles/tree.scss';

class VendorTree extends React.Component {
  constructor(props) {
    super(props);

    this.sortingMethod = 'family'; // vendor
    this.list = _(props.treeData).map(this.sortingMethod).uniq().value();
    this.sortedList = this.list.sort(this.compare);
    this.devices = _.groupBy(props.treeData, this.sortingMethod);
    this.state = {
      collapsedBookKeeping: this.sortedList.map(() => true),
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
    return (
      <TreeView
        key={i}
        nodeLabel={label}
        collapsed={collapsedBookKeeping[i]}
        onClick={this.handleClick.bind(this, i)}
      >
        {this.devices[vendor].map((device) => (
          <li key={device.id}>
            <Link to={device.id}>{`${device.vendor}  ${device.name}`}</Link>
          </li>
        ))}
      </TreeView>
    );
  }

  render() {
    return (
      <div className="vendorTree">
        {this.sortedList.map((sortParameter, i) => this.renderVendorTree(sortParameter, i))}
      </div>
    );
  }
}

export default VendorTree;
