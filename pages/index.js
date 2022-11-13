import Head from 'next/head'
import App from "next/app"

import React from "react"
import {createRoot} from 'react-dom/client';

//component
import TodoContainer from "./TodoContainer"
import document from './_document';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <TodoContainer /> 
  </React.StrictMode>, 
);