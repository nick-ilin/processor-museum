import _ from 'lodash';

import Data from '../pages/processors/processors.json';

export const getProcessor = (id) => (
  _.find(Data, function (item) {
    return item.id === id;
  })
);
