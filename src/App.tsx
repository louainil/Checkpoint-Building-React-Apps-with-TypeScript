import React from 'react';
import Greeting from './components/Greeting';
import Counter from './components/Counter';

/**
 * Minimal app entry to demonstrate the two checkpoint components.
 * (Not adding extra features beyond rendering them.)
 */
const App = (): JSX.Element => {
  return (
    <div>
      <Greeting name="World" />
      <Counter />
    </div>
  );
};

export default App;
