import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';



const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

    </Routes>
  </Router>,

  document.getElementById("root")

);

serviceWorker.unregister();


