import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import {Layout, Typography, Space}from 'antd';



import CryptoDetails from './components/CryptoDetails';
import Cryptocurrencies from './components/Cryptocurrencies';
import News from './components/News';
import Exchanges from './components/Exchanges';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import './App.css';

const App = () => {
  return (
    <div className='app'>
        <div className='navbar'>
            <Navbar/>
        </div>   
                
        <div className='main'>
          <Layout>
            <div className='routes'>
              <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/exchanges" element={<Exchanges />} />
              <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route path="/news" element={<News />} />
              </Routes>
            </div>
          </Layout>
              
        <div className='footer'>
          <Typography.Title  level={5} style={{color :'white',textAlign: 'center'}}>
            Crypt'nfo <br />
            All rights reserved
            © Sahil Kumar Agarwal          
            </Typography.Title>
          <Space>
            <Link to='/'>Home</Link>
            <Link to='/exchanges'>Exchanges</Link>
            <Link to='/news'>News</Link>
          </Space>
          </div>
        </div>   
    </div>
  );
}

export default App