import React from 'react';
import { Route, Routes } from 'react-router';
import 'bootswatch/dist/pulse/bootstrap.min.css';
import Home from './pages/home/Home';
import NotFoundPage from './pages/not-found/NotFoundPage';
import Header from './components/Header';
import Connect from './pages/connect/Connect';
import { Helmet } from 'react-helmet';
import Create from './pages/create/Create';

const App = () => (
  <>
    <Helmet>
      <title>School React Kitties</title>
    </Helmet>
    <Header />
    <div style={{ overflow: 'auto', margin: '0px 16px' }}>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/my-kitties/*" element={<UserPage />} />
      <Route path="/breed/*" element={<UserPage />} />*/}
        <Route path="/create/*" element={<Create />} />
        <Route path="/connect/*" element={<Connect />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  </>
);

export default App;
