import './styles/index.css';
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from "./App";
import { authenticate } from './api';
import { 
  LoginPage,
  NotFoundPage, 
} from './pages';


authenticate();
  

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<Navigate replace to={'/login'} />} />
        <Route path='login' element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  ,document.querySelector("#root"));