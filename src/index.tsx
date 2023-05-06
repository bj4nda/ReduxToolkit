import React from 'react';
import ReactDOM from 'react-dom/client';
import Application from './components/application';

import { makeServer } from './api';

import './index.css';
import { Provider } from 'react-redux';
import store from './store';
import { fetchTasks } from './features/tasks-slice';

const environment = process.env.NODE_ENV;
makeServer({ environment });
store.dispatch(fetchTasks());
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Application />
    </Provider>
  </React.StrictMode>,
);
