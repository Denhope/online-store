import React, { FC } from 'react';
import { ListGroup, NavDropdown } from 'react-bootstrap';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import { useActions } from '../../hooks/useActions';

const DeviceBrandBar: FC = () => {
  const { setSelectedBrand } = useActions();
  const { brands, selectedBrand } = useTypedSelector((state) => state.device);
  return (
    <ListGroup title="Брэнды">
      <h3 className="mr-auto ">Брэнды</h3>
      {brands.map((brand) => (
        <ListGroup.Item
          onClick={() => {
            setSelectedBrand(brand);
          }}
          action
          variant="secondary"
          key={brand.id}
        >
          {brand.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default DeviceBrandBar;
