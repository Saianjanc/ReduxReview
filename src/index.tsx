import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Second from './components/Second';
import First from './components/First';
import { Provider } from 'react-redux';
import AppStore from './utils/store/AppStore';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const router = createBrowserRouter([
  {
    path: "/",
    element: <First />
  },
  {
    path: "second",
    element: <Second />
  }
])
root.render(
  <Provider store={AppStore}>
    <RouterProvider router={router} />
  </Provider>
);