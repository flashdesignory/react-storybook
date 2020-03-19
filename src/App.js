import React from 'react';

import Button from './components/button/Button';
import { ButtonTypes } from './constants/button';

function App() {
  return (
    <div className="App">
      <div>
        <div>Primary Button:</div>
        <Button label={"click me"} type={ButtonTypes.PRIMARY} onClick={() => console.log('click')}/>
      </div>
      <div>
        <div>Secondary Button:</div>
        <Button label={"click me"} type={ButtonTypes.SECONDARY} onClick={() => console.log('click')}/>
      </div>
      <div>
        <div>Tertiary Button:</div>
        <Button label={"click me"} type={ButtonTypes.TERTIARY} onClick={() => console.log('click')}/>
      </div>
    </div>
  );
}

export default App;
