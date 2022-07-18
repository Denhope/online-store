import React, { FC, useEffect } from 'react';
import Row from 'react-bootstrap/Row';

import DeviceItem from './DeviceItem';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import DeviceService from '../../services/DeviceServices';
import { Spinner } from 'react-bootstrap';

const DeviceList: FC = () => {
  const { devices, isLoading } = useTypedSelector((state) => state.device);
  if (isLoading) {
    return <Spinner animation={'border'}></Spinner>;
  }

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
          discription={deviceItem.discription}
        />
      ))}
    </Row>
  );
};

export default DeviceList;
