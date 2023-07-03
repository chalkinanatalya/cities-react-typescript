import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const Setting = {
  RENT_PROPOSAL: 350,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      proposalCount = {Setting.RENT_PROPOSAL}
    />
  </React.StrictMode>,
);
