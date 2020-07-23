import React from "react";

import Navigation from '../components/navigation';

export default props => (
    <div>
        <Navigation />
        {props.children}
    </div>
);