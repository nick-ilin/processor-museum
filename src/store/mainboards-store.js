import _ from 'lodash';

import Data from '../pages/mainboards/mainboards.json';

export const getMainboards = () => (Data);
export const getMainboardById = (id) => (_.find(Data, (item) => item.id === id));
