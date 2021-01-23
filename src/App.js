import { React, useState } from 'react';
import GraphView from './GraphView/GraphView';
import TableView from './TableView/TableView';
import { Motor, Sensor } from './data/testData';

import { Container, Row, Col } from 'react-bootstrap';
function App() {
  const [testData, setTestData] = useState(getData());
  return (
    <div className="App">
      <Container>
        <Row>
          <Col lg className="graphView">
            <GraphView data={testData} />
          </Col>
          <Col lg className="tableView">
            <TableView data={testData} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const getData = () => {
    let m1 = new Motor(0, Math.random(), "motor", 100, 5);
    let m2 = new Motor(1, Math.random(), "motor", 15, 1);
    let s1 = new Sensor(2, Math.random(), "sensor", 10)
    let s2 = new Sensor(3, Math.random(), "sensor", 100 )
    return [m1, s1, m2, s2];

}
export default App;
