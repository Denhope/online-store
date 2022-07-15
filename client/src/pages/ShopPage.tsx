import React, { FC } from 'react';
import DeviceTypeBar from '../components/products/DeviceTypeBar';
import DeviceBrandBar from '../components/products/DeviceBrandBar';
import { Col, Container, Row } from 'react-bootstrap';
const ShopPage: FC = () => {
  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <DeviceTypeBar />
          <DeviceBrandBar />
        </Col>

        <Col md={9}>LISTITEMS</Col>
      </Row>
    </Container>
  );
};

export default ShopPage;
