import React, { FC } from 'react';
import { Col, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { IDeviceType } from '../../models/IDevice';
import Image from 'react-bootstrap/Image';
import { RouteNames } from '../../router';
const DeviceItem: FC<IDeviceType> = (props) => {
  const device = props;
  const history = useHistory();
  return (
    <Col onClick={() => history.push(RouteNames.DEVICE_ROUTE + '/' + device.id)}>
      <Card>
        <Card.Img src={device.img} />
        <Card.Body className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
          <Card.Title>{device.name}</Card.Title>
          <div className="d-flex align-items-center">
            <div>{device.rating}</div>
            <Image width={18} height={18} src={'nnn'} />
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default DeviceItem;
