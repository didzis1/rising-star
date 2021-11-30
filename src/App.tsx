import React, { useState } from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { CarOutlined, PieChartOutlined, HomeOutlined } from '@ant-design/icons';

import Home from './components/Home';
import Statistics from './components/Statistics';
import TimeMachine from './components/TimeMachine';

const { Sider, Content } = Layout;

const App = (): JSX.Element => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  return (
    <Layout>
      <Sider
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          minHeight: '100vh'
        }}
        collapsible
        collapsed={collapsed}
        onCollapse={() => setCollapsed(!collapsed)}>
        <Menu
          theme='dark'
          defaultSelectedKeys={['home']}
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column'
          }}>
          <Menu.Item
            key='home'
            icon={<HomeOutlined />}
            style={{ alignContent: 'center' }}>
            <Link to='/'>Home</Link>
          </Menu.Item>
          <Menu.Item key='statistics' icon={<PieChartOutlined />}>
            <Link to='/statistics'>Statistics</Link>
          </Menu.Item>
          <Menu.Item key='time-machine' icon={<CarOutlined />}>
            <Link to='/time-machine'>Time Machine</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        {/* <Header>
          <div>
            <p style={{ color: '#FFFFFF' }}>Rising Star</p>
          </div>
        </Header> */}
        <Content>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/statistics' element={<Statistics />} />
            <Route path='/time-machine' element={<TimeMachine />} />
          </Routes>
        </Content>
        {/* <Footer style={{ backgroundColor: '#eaeaea' }}>
          <Text>
            Vincit Ricing Star Pre-assignment @2021 Created by Didzis Zvaigzne
          </Text>
        </Footer> */}
      </Layout>
    </Layout>
  );
};

export default App;
