import React from "react";
import TreeView from 'react-treeview';
import _ from "lodash";

import Data from '../pages/processors/processors.json'

const vendors = _(Data).map('vendor').uniq().value();

class VendorTree extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsedBookKeeping: vendors.map(() => true)
        }
    }
        
    handleClick(i) {
        this.setState(prevState => {
            let [...collapsedBookKeeping] = prevState.collapsedBookKeeping;
            collapsedBookKeeping[i] = !collapsedBookKeeping[i];
            this.setState({collapsedBookKeeping});
        })
    }

    renderVendorTree(vendor, i) {
        const collapsedBookKeeping = this.state.collapsedBookKeeping;
        const label = <span className="vendorName" onClick={this.handleClick.bind(this, i)}>{vendor}</span>;
        const devices = _.filter(Data, {vendor: vendors[i]});
        return (
            <TreeView key={i} nodeLabel={label} collapsed={collapsedBookKeeping[i]} onClick={this.handleClick.bind(this, i)}>
                {devices.map(device => <div className="deviceName" key={device.id}><a>{device.name}</a></div>)}
            </TreeView>
        );
    }
        
    render() {
        return (
            <div>{vendors.map((vendor, i) => this.renderVendorTree(vendor, i))}</div>
        );
    }
};

export default VendorTree;