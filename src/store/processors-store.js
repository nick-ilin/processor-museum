import _ from 'lodash';

import Data from '../pages/processors/processors.json';

export const getAllProcessors = () => (_.groupBy(Data, 'vendor'));
export const getProcessor = (id) => (_.find(Data, (item) => item.id === id));
