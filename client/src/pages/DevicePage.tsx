import React, { FC, useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useParams } from 'react-router-dom';
import { useActions } from '../hooks/useActions';

const DevicePage: FC = () => {
  const { fethOneDevice } = useActions();
  const { selectedDevice } = useTypedSelector((state) => state.device);
  const [device, setDevice] = useState({ info: [] });
  const { id } = useParams<{ id?: string }>();

  useEffect(() => {
    fethOneDevice(id);
  }, []);

  return (
    <Container>
      <Row className="mt-5">
        <Col md={5}>
          <img className="d-block w-100" src={selectedDevice.img} alt="First slide"></img>
        </Col>
        <Col md={7}>
          <Card>
            <Card.Body>
              <Card.Title>{selectedDevice.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">
                Райтинг - {selectedDevice.rating}
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </Card.Text>

              <div className="d-flex gap-4">
                <Button variant="danger">Купить</Button>
                <Button variant="warning">Добавить в корзину</Button>
              </div>
            </Card.Body>
          </Card>
          <Container>
            <Row className="mt-5">
              <h3 className="ml-auto ">Харктеристики</h3>
              {/* {selectedDevice.discription.map(
                (info) =>
                  <Row key={info.id}>
                    {info.title}: {info.discription}
                  </Row>
                  111,
              )} */}
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default DevicePage;
