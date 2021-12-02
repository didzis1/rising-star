import React, { useEffect } from 'react';
import { Typography, Layout, Row, Col, DatePicker, Button, Space } from 'antd';
import HighestVolumeForm from './HighestVolumeForm';
import axios from 'axios';

const { Text, Title } = Typography;
const { RangePicker } = DatePicker;

const Statistics = () => {
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=eur&from=1637648561&to=1638339761'
      );
      return response.data;
    }
    const getData = async () => {
      const response = await fetchData();
      return response;
    };
    console.log(getData());
  }, []);

  return (
    <Layout style={{ display: 'flex', height: '100%', padding: 35 }}>
      <Title level={1}>Bitcoin statistics</Title>

      <Row>
        <Col span={12}>
          <Layout>
            <Title level={4}>Highest Trading Volume</Title>
            <Text>
              Select a date range to display the highest trading volume of BTC
              within the given date range
            </Text>
            <Row>
              <Space size={18}>
                <Col>
                  <RangePicker style={{ width: '350px' }} />
                </Col>
                <Col>
                  <Button type='primary'>Search</Button>
                </Col>
              </Space>
            </Row>
          </Layout>
        </Col>

        <Col span={12}>
          <Layout>
            <Title level={4}>Longest Bearish Trend</Title>
            <Text>
              Select a date range to display the longest bearish trend within
              the given date range
            </Text>
            <Row>
              <Space size={18}>
                <Col>
                  <HighestVolumeForm />
                </Col>
                <Col>
                  <Button type='primary'>Search</Button>
                </Col>
              </Space>
            </Row>
          </Layout>
        </Col>
      </Row>
    </Layout>
  );
};

export default Statistics;
