import _ from 'lodash';

import Data from '../pages/videocards/videocards.json';

export const getVideocards = () => (Data);
export const getVideocardById = (id) => (_.find(Data, (item) => item.id === id));
