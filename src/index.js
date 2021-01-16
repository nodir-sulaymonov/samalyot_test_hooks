import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import PublicRoute from "./route";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
        <BrowserRouter>
            <PublicRoute />
        </BrowserRouter>,
  document.getElementById('root')
);

