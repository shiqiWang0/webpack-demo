import React from 'react'
import { createRoot } from 'react-dom/client'
import {
  BrowserRouter,
} from "react-router-dom";

import { useRoutes } from "react-router-dom";

import getRouters from './routers/APP_TARGET.js';

const App = () => {
  const ElementRouter = useRoutes(getRouters())
  return <>
    <h1>Hello react webpack</h1>
    {ElementRouter}
  </>
}

const root = createRoot(document.getElementById('root'))

root.render(<BrowserRouter>
  <App />
</BrowserRouter>)
