import React, { Component } from "react";
import { Container, Row, Col, Navbar, Form } from "react-bootstrap";
import money from "money-math";
import "./bootstrap.min.css";
import "./App.css";

class App extends Component {
  setAmount = () => {
    //var toNum = this.money;
    //var toCents = money.floatToAmount(toNum);
    //setValue(toCents);
    console.log(this.paycheck.value);

    let paycheck = money.floatToAmount(this.paycheck.value);

    let tAmt = money.floatToAmount(paycheck * 0.3),
      zpAmt = money.floatToAmount(paycheck * 0.7 * 0.1),
      tpAmt = money.floatToAmount(paycheck * 0.7 * 0.1),
      toSav = money.add(zpAmt, tpAmt);

    this.taxAmount.value = tAmt;
    this.zpersonal.value = zpAmt;
    this.tpersonal.value = tpAmt;
    let totalUsed = money.add(tAmt, toSav);
    this.savingsAmt.value = money.subtract(paycheck, totalUsed);
  };

  render() {
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
                    ref={input => (this.paycheck = input)}
                    type="number"
                    placeholder="$100.00"
                    onKeyUp={this.setAmount}
                  />
                </Col>
                <Col md={12}>
                  <label htmlFor="">Amount to tax account</label>
                  <Form.Control
                    ref={input => (this.taxAmount = input)}
                    type="number"
                    key="taxAmmount"
                    readOnly
                  />
                </Col>
                <Col md={12}>
                  <label htmlFor="">Amount Z personal</label>
                  <Form.Control
                    ref={input => (this.zpersonal = input)}
                    type="number"
                    key="zpersonal"
                    readOnly
                  />
                </Col>
                <Col md={12}>
                  <label htmlFor="">Amount to T personal</label>
                  <Form.Control
                    ref={input => (this.tpersonal = input)}
                    type="number"
                    key="tpersonal"
                    readOnly
                  />
                </Col>
                <Col md={12}>
                  <label htmlFor="">Amount to Savings</label>
                  <Form.Control
                    readOnly
                    type="number"
                    key="savings-ammount"
                    ref={input => (this.savingsAmt = input)}
                  />
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <div className="shameless-plug">
          <Container>
            <Row>
              <Col md={12}>
                If the math is bad, don't blame me ;) <br />
                <a
                  href="http://twitter.com/mattbtay"
                  target="_blank"
                  rel="noopener"
                >
                  @mattbtay
                </a>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default App;
