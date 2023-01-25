import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const LangContext = React.createContext();

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
    // <Suspense fallback={<div>Loading...</div>}>
      // <LangContext.Provider value={'ru'}>
        <App />
      // </LangContext.Provider>
    // </Suspense>
  // </React.StrictMode>
);

export { LangContext };
 