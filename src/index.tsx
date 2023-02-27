import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/app';
import { ErrorPage } from './pages/error-page';
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
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <NoGameChosen />,
      },
      {
        path: ':gameID',
        element: <Board />,
      },
    ],
  },
]);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
