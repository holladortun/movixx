/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-multi-carousel/lib/styles.css';
import 'react-loading-skeleton/dist/skeleton.css';
import { SkeletonTheme } from 'react-loading-skeleton';
import App from './App.tsx';
import './index.css';
import { SWRConfig } from 'swr';
import { RecoilRoot } from 'recoil';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SWRConfig value={{ provider: () => new Map() }}>
      <RecoilRoot>
        <SkeletonTheme baseColor='#202020' highlightColor='#444'>
          <App />
        </SkeletonTheme>
      </RecoilRoot>
    </SWRConfig>
  </React.StrictMode>,
);
