import React from "react";
import TreeView from 'react-treeview';
import _ from "lodash";

let vendors;

class VendorTree extends React.Component {
    constructor(props) {
        super(props);
        vendors = Object.keys(this.props.treeData).map((key) => key);
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
        const devices = this.props.treeData[vendor].map((item) => item)
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