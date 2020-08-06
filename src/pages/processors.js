import React from "react";
import _ from "lodash";

import VendorTree from '../components/vendor-tree';

import Data from '../pages/processors/processors.json';

class Processors extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            treeData: _.groupBy(Data, 'vendor')
        }
    }
    render() {
        return (
            <div>
                <VendorTree treeData={this.state.treeData}/>
                {this.props.children}
            </div>
        );
    }
}

export default Processors;