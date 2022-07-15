import React, { FC } from 'react';
import { NavDropdown } from 'react-bootstrap';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import { useActions } from '../../hooks/useActions';

const DeviceBrandBar: FC = () => {
  const { setSelectedBrand } = useActions();
  const { brands } = useTypedSelector((state) => state.device);
  return (
    <NavDropdown title="Брэнды">
      {brands.map((brand) => (
        <NavDropdown.Item
          onClick={() => {
            setSelectedBrand(brand);
            console.log('Selected type: ' + brand.name);
          }}
          action
          variant="secondary"
          key={brand.id}
        >
          {brand.name}
        </NavDropdown.Item>
      ))}
    </NavDropdown>
  );
};

export default DeviceBrandBar;
