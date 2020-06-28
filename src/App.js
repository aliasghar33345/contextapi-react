import React  from 'react';
import Coder1 from './child1';
import CounterContext from './CounterContext';




function App() {
  return (
    <div className="App">
          <CounterContext.Provider value={10}>
             <Coder1></Coder1>
          </CounterContext.Provider>
    </div>
  );
}

export default App;
