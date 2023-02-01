import React, { Suspense, Profiler } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const LangContext = React.createContext();

const root = ReactDOM.createRoot(document.getElementById('root'));

function onRenderCallback(...arr) {
    console.log(arr);
}

root.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <LangContext.Provider value={'ru'}>
        <Profiler id='App' onRender={onRenderCallback}>
          <App />
        </Profiler>        
      </LangContext.Provider>
    </Suspense>
  </React.StrictMode>
);

export { LangContext };
 