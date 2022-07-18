import React, { FC, useEffect } from 'react';
import DeviceTypeBar from '../components/products/DeviceTypeBar';
import DeviceBrandBar from '../components/products/DeviceBrandBar';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import DeviceList from '../components/products/DeviceList';
import { useTypedSelector } from '../hooks/useTypedSelector';

const ShopPage: FC = () => {
  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <DeviceTypeBar />
          <DeviceBrandBar />
        </Col>

        <Col md={9}>
          <DeviceList />
        </Col>
      </Row>
    </Container>
  );
};

export default ShopPage;
