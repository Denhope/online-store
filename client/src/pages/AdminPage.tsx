import React, { FC, useState } from 'react';
import { Container, Button } from 'react-bootstrap';

const AdminPage: FC = () => {
  // const [brandVisible, setBrandVisible] = useState(false);
  // const [typeVisible, setTypeVisible] = useState(false);
  // const [deviceVisible, setDeviceVisible] = useState(false);

  return (
    <Container className="d-flex flex-column">
      {/* <Button variant={'outline-dark'} className="mt-4 p-2" onClick={() => setTypeVisible(true)}>
        Добавить тип
      </Button>
      <Button variant={'outline-dark'} className="mt-4 p-2" onClick={() => setBrandVisible(true)}>
        Добавить бренд
      </Button>
      <Button variant={'outline-dark'} className="mt-4 p-2" onClick={() => setDeviceVisible(true)}>
        Добавить устройство
      </Button> */}
    </Container>
  );
};

export default AdminPage;
