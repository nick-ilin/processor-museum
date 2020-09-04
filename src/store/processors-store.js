/* eslint-disable import/prefer-default-export */
import _ from 'lodash';

import Data from '../pages/processors/processors.json';

export const getProcessor = (id) => (id ? _.find(Data, (item) => item.id === id) : _.groupBy(Data, 'vendor'));
