import React from "react";
import TreeView from 'react-treeview';
import _ from "lodash";

import data from '../pages/processors/processors.json'

const vendors = _(data).map('vendor').uniq().value();

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
        
    render() {
        const collapsedBookKeeping = this.state.collapsedBookKeeping;
        return (
            <div>
                {vendors.map((vendor, i) => {
                    const label =
                        <span className="vendorname" onClick={this.handleClick.bind(this, i)}>
                            {vendor}
                        </span>;
                    const processors = _.filter(data, {vendor: vendors[i]});
                    return (
                        <TreeView
                            key={i}
                            nodeLabel={label}
                            collapsed={collapsedBookKeeping[i]}
                            onClick={this.handleClick.bind(this, i)}>
                            {processors.map(processor => <div className="procname" key={processor.id}><a>{processor.name}</a></div>)}
                        </TreeView>
                    );
                })}
            </div>
        );
    }
};

export default VendorTree;