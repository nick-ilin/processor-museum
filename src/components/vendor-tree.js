import React from "react";
import TreeView from 'react-treeview';

import '../styles/react-treeview.css';

const vendorArr = ['AMD', 'Intel', 'IBM', 'Cirix', 'Harris', 'TI'];

const processorArr = [
    ['286', '386', '486'],
    ['Pentium I', 'Pentium II', 'Pentium !!!'],
    ['486'],
    ['386'],
    ['286'],
    ['486']
];

class VendorTree extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsedBookkeeping: vendorArr.map(() => true)
        }
    }
        
    handleClick(i) {
    this.setState(prevState => {
        let [...collapsedBookkeeping] = prevState.collapsedBookkeeping;
            collapsedBookkeeping[i] = !collapsedBookkeeping[i];
            this.setState({collapsedBookkeeping: collapsedBookkeeping});
        })
    }
        
    render() {
        const collapsedBookkeeping = this.state.collapsedBookkeeping;
        return (
            <div>
                {vendorArr.map((node, i) => {
                const label =
                    <span className="vendorname" onClick={this.handleClick.bind(this, i)}>
                        {node}
                    </span>;
                return (
                    <TreeView
                        key={i}
                        nodeLabel={label}
                        collapsed = {collapsedBookkeeping[i]}
                        onClick={this.handleClick.bind(this, i)}>
                            {processorArr[i].map(entry => <div className="procname" key={entry}><a>{entry}</a></div>)}
                    </TreeView>
                );
                })}
            </div>
        );
    }
};
  

export default VendorTree;