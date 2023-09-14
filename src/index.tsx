import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { LatestComic } from './latestComic'
import { LatestComic2 } from './latestComic2'
import { LatestComic3 } from './latestComic3'
import { LatestComic4 } from './latestComic4'
import { LatestComic5 } from './latestComic5'

import { getXkcd } from './xkcdService'
import { XkcdServiceContext } from './xkcdContext'
import { Main } from './main'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/di1",
    element: <LatestComic />,
  },
  {
    path: "/di2",
    element: <LatestComic2 />,
  },
  {
    path: "/di3",
    element: <LatestComic3 />,
  },
  {
    path: "/di4",
    element: <LatestComic4 />,
  },
  {
    path: "/di5",
    element: <LatestComic5 />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <XkcdServiceContext.Provider value={getXkcd}>
      <RouterProvider router={router} />
    </XkcdServiceContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
