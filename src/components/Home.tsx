import React from 'react';
import { Typography, Layout } from 'antd';

const { Text } = Typography;

const Home = () => {
  return (
    <Layout
      style={{
        backgroundColor: '#eaeaea',
        height: '100%',
        justifyContent: 'center'
      }}>
      <Text>Welcome to The Rising Star!</Text>
      <Text>Your crypto history tracker</Text>
    </Layout>
  );
};

export default Home;
