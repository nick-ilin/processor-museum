import React from 'react';

import Navigation from '../components/navigation';

const Home = (props) => {
  const { children } = props;
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
};

export default Home;
