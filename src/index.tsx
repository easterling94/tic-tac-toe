import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/app';
import { ErrorPage } from './components/game-window/game-error';
import { Board } from './components/game-window/board';
import { NoGameChosen } from './components/game-window/no-game-chosen';
import {
  createBrowserRouter,
  RouterProvider,
} from '../node_modules/react-router-dom/dist/index';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <NoGameChosen />,
      },
      {
        path: ':gameID',
        element: <Board />,
      },
      {
        path: '/error',
        element: <ErrorPage />,
      },
    ],
  },
]);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
