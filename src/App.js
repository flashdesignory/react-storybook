import React from 'react';

import Button from './components/button/Button';
import { ButtonTypes } from './constants/button';

function App() {
  return (
    <div className="App">
      <Button label={"click me"} type={ButtonTypes.PRIMARY} onClick={() => console.log('click')}/>
      <Button label={"click me"} type={ButtonTypes.SECONDARY} onClick={() => console.log('click')}/>
      <Button label={"click me"} type={ButtonTypes.TERTIARY} onClick={() => console.log('click')}/>
    </div>
  );
}

export default App;
