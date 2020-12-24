import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUsers, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

import './shared.scss';
import MainContainer from './containers/MainContainer';

library.add(faUsers, faQuestionCircle);

const App = () => {
  return (
    <div>
      <MainContainer />
    </div>
  );
};

export default App;
