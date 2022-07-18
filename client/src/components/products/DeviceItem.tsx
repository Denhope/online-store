import React, { FC, useEffect, useState } from 'react';
import { Col, Card } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import { IDeviceType } from '../../models/IDevice';
import Image from 'react-bootstrap/Image';
import { RouteNames } from '../../router';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
const DeviceItem: FC<IDeviceType> = (props) => {
  const device = props;
  const history = useHistory();

  const { fethOneDevice } = useActions();
  const { selectedDevice } = useTypedSelector((state) => state.device);
  const { id } = useParams<{ id?: string }>();

  const selectPage = (id: string) => {
    // fethOneDevice(id);
    history.push(RouteNames.DEVICE_ROUTE + '/' + device.id);
  };
  return (
    <Col onClick={() => selectPage(device.id)}>
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
