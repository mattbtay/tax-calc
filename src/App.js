import React, { useState, useRef } from "react";
import { Container, Row, Col, Navbar, Form } from "react-bootstrap";
import "./bootstrap.min.css";
import "./App.css";

function App() {
  let [value, setValue] = useState(0);

  const textInput = useRef(null);

  function setAmount() {
    var toCents = textInput.current.value;
    setValue(toCents);
  }

  return (
    <div className="App">
      <Navbar bg="light" expand="lg" className="mb-2">
        <Navbar.Brand href="#home">Taylor's Savings Calculator</Navbar.Brand>
      </Navbar>
      <div className="main">
        <div className="form-wrap">
          <Container>
            <Row>
              <Col md={12}>
                <label>Paycheck Amount</label>
                <Form.Control
                  key="input-value"
                  ref={textInput}
                  type="text"
                  placeholder="$100.00"
                  onChange={() => setAmount()}
                />
              </Col>
              <Col md={12}>
                <label htmlFor="">Amount to tax account</label>
                <Form.Control readOnly value={value * 0.3} />
              </Col>
              <Col md={12}>
                <label htmlFor="">Amount Z personal</label>
                <Form.Control readOnly value={value * 0.7 * 0.1} />
              </Col>
              <Col md={12}>
                <label htmlFor="">Amount to T personal</label>
                <Form.Control readOnly value={value * 0.7 * 0.1} />
              </Col>
              <Col md={12}>
                <label htmlFor="">Amount to Savings</label>
                <Form.Control
                  readOnly
                  value={value * 0.7 - (value * 0.7 * 0.1 + value * 0.7 * 0.1)}
                />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default App;
