import React from "react";
import TreeView from 'react-treeview';
import _ from "lodash";

import '../styles/react-treeview.css';

import data from '../pages/processors/processors.json'

/*const processorArr = [
    ['286', '386', '486'],
    ['Pentium I', 'Pentium II', 'Pentium !!!'],
    ['486'],
    ['386'],
    ['286'],
    ['486']
];*/
const vendors = _.uniq(_.map(data, 'vendor'));

class VendorTree extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsedBookkeeping: vendors.map(() => true)
        }
    }
        
    handleClick(i) {
    this.setState(prevState => {
        let [...collapsedBookkeeping] = prevState.collapsedBookkeeping;
            collapsedBookkeeping[i] = !collapsedBookkeeping[i];
            this.setState({collapsedBookkeeping});
        })
    }
        
    render() {
        const collapsedBookkeeping = this.state.collapsedBookkeeping;
        return (
            <div>
                {vendors.map((vendor, i) => {
                const label =
                    <span className="vendorname" onClick = {this.handleClick.bind(this, i)}>
                        {vendor}
                    </span>;
                const processors = _.filter(data, {vendor: vendors[i]});
                return (
                    <TreeView
                        key = {i}
                        nodeLabel = {label}
                        collapsed = {collapsedBookkeeping[i]}
                        onClick = {this.handleClick.bind(this, i)}>
                        {processors.map(processor => <div className="procname" key={processor.id}><a>{processor.name}</a></div>)}
                    </TreeView>
                );
                })}
            </div>
        );
    }
};
  

export default VendorTree;