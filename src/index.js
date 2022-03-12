// React
import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css';

// App
import App from './App';

// Utils
import reportWebVitals from './reportWebVitals';

// FireBase
import {
  FirebaseAppProvider
} from 'reactfire';
import firebaseConfig from './firebase-config'

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Suspense fallback={'Conectando la app'}>
      <App />
    </Suspense>
  </FirebaseAppProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
