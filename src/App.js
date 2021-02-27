import { React, useEffect, useState } from 'react';
import './App.css';
import GraphView from './GraphView/GraphView';
import TableView from './TableView/TableView';
import { Motor, Sensor } from './data/testData';

import { Container, Row, Col } from 'react-bootstrap';

function App() {
  const [testData, setTestData] = useState(getData());
  
  useEffect(() => {
      testData.map((p) => {
          updateData(p, "Velocity", 100);
          updateData(p, "DC", 1);
          updateData(p, "Distance", 3);
      })

      setTimeout(() => {
          setTestData([...testData]);
      }, 0.5);
  })

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
    // let m1 = new Motor(0, Math.random(), "motor", 100, 5);
    // let m2 = new Motor(1, Math.random(), "motor", 15, 1);
    let s1 = new Sensor(2, Math.random(), "sensor", 10);
    // let s0 = new Sensor(5, Math.random(), "limitswitche", 7);
    let s2 = new Sensor(3, Math.random(), "sensor", 100 );
    let s3 = new Sensor(4, Math.random(), "sensor", 30);
    let s4 = new Sensor(5, Math.random(), "sensor",54);
    return [s1, s2, s3, s4];

}

const updateData = (p, name, amt) => {
    if (Math.random() > .5) {
        amt = -amt;
    }
    amt = Math.max(0, amt);
    if (p.params.hasOwnProperty(name) && p.params[name]) {
        p.params[name] += amt;
    }
}

export default App;
