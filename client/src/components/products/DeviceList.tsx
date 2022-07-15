import React, { FC } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DeviceItem from './DeviceItem';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const DeviceList: FC = () => {
  const { devices } = useTypedSelector((state) => state.device);
  return (
    <Row xs={2} md={3} xl={4} className="g-5">
      {devices.map((deviceItem) => (
        <DeviceItem
          key={deviceItem.id}
          id={deviceItem.id}
          name={deviceItem.name}
          price={deviceItem.price}
          rating={deviceItem.rating}
          img={deviceItem.img}
        />
      ))}
    </Row>
  );
};

export default DeviceList;
