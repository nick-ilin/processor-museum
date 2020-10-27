import _ from 'lodash';

import Data from '../pages/processors/processors.json';

export const getProcessors = () => (Data);
export const getProcessorById = (id) => (_.find(Data, (item) => item.id === id));
