import React from 'react';
import {
  useRouteError,
  isRouteErrorResponse,
} from '../../node_modules/react-router-dom/dist/index';

export const ErrorPage = () => {
  const error = useRouteError();
  console.log(isRouteErrorResponse(error));
  console.log(error);
  return <div>Error</div>;
};
