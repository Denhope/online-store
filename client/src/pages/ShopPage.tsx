import React, { FC, useEffect } from 'react';
import DeviceTypeBar from '../components/products/DeviceTypeBar';
import DeviceBrandBar from '../components/products/DeviceBrandBar';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import DeviceList from '../components/products/DeviceList';
import PagePagination from '../components/products/Pagination';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

const ShopPage: FC = () => {
  const { page, selectedBrand, selectedType } = useTypedSelector((state) => state.device);
  const { featchDevices, fetchTypes, fetchBrands } = useActions();

  useEffect(() => {
    fetchTypes();
    fetchBrands();
    featchDevices(selectedType, selectedBrand, 2, page);
  }, [page, selectedBrand, selectedType]);

  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <DeviceTypeBar />
          <DeviceBrandBar />
        </Col>

        <Col md={9}>
          <DeviceList />
          <PagePagination />
        </Col>
      </Row>
    </Container>
  );
};

export default ShopPage;
