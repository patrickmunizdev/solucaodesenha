import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Dashboard from './pages/dashboard';
import UserList from './pages/users/index';
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        {/*TELAS INICIAIS*/}
        {/* <Route path="/" element={<Login/>}/> */}
        <Route path="/dashboard" element={<Dashboard/>}/>
        
        {/*USERS*/}
        <Route path="/users" element={<UserList/>}/>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
)
