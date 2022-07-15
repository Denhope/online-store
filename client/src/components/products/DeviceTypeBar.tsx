import React, { FC } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';

const DeviceTypeBar: FC = () => {
  const { setSelectedType } = useActions();
  const { types } = useTypedSelector((state) => state.device);
  return (
    <ListGroup>
      <h3 className="mr-auto ">Категории</h3>
      {types.map((type) => (
        <ListGroup.Item
          onClick={() => {
            setSelectedType(type);
            console.log('Selected type: ' + type.name);
          }}
          action
          variant="secondary"
          key={type.id}
        >
          {type.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default DeviceTypeBar;
