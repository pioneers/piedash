import { React, useState } from 'react';
import GraphView from './GraphView/GraphView';
import TableView from './TableView/TableView';
import { Motor } from './data/testData';

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
    let m1 = new Motor(Math.random(), 1, "Super motor", 100, 5);
    return [m1];

}
export default App;
