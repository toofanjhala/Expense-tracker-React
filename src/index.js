import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { AuthContextProvider } from './store/Auth-context';
import { Provider } from 'react-redux';
import Store from './store/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <Provider store={Store}>
      <AuthContextProvider>
      <App />
      </AuthContextProvider>
      </Provider>

);
