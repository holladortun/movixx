/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-multi-carousel/lib/styles.css';
import App from './App.tsx';
import './index.css';
import { SWRConfig } from 'swr';
import { RecoilRoot } from 'recoil';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SWRConfig value={{ provider: () => new Map() }}>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </SWRConfig>
  </React.StrictMode>,
);
