import React, { useState, useRef } from "react";
import { Container, Row, Col, Navbar, Form } from "react-bootstrap";
import money from "money-math";
import "./bootstrap.min.css";
import "./App.css";

function App() {
  let [value, setValue] = useState(0);

  const textInput = useRef(null);

  function taxAmt() {
    return value * 0.3;
  }

  function zAmt() {
    return value * 0.7 * 0.1;
  }

  function tAmt() {
    return value * 0.7 * 0.1;
  }

  function savingsAmt() {
    return value * 0.7 - (value * 0.7 * 0.1 + value * 0.7 * 0.1);
  }

  function setAmount() {
    var toNum = textInput.current.value;

    var toCents = toNum;

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
                <Form.Control readOnly value={taxAmt()} />
              </Col>
              <Col md={12}>
                <label htmlFor="">Amount Z personal</label>
                <Form.Control readOnly value={zAmt()} />
              </Col>
              <Col md={12}>
                <label htmlFor="">Amount to T personal</label>
                <Form.Control readOnly value={tAmt()} />
              </Col>
              <Col md={12}>
                <label htmlFor="">Amount to Savings</label>
                <Form.Control readOnly value={savingsAmt()} />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default App;
