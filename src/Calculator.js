import React, { useState } from "react";
import "./Calculator.css";
import { Jumbotron, Container, Row, Col, Button, Form } from "react-bootstrap";
import CalculatorService from "./Calculator.service";

function Calculator() {
  const [compute, concatNumbers, SUM, SUBTRACTION, SPLIT, MULTIPLICATION] = CalculatorService();

  const [txtNumbers, setTxtNumbers] = useState("0");
  const [number1, setNumber1] = useState('0')
  const [number2, setNumber2] = useState(null)
  const [operation, setOperation] = useState(null)

  function handleNumbers(number) {
    let result;
    if (operation === null) {
      result = concatNumbers(number1, number)
      setNumber1(result)
    } else {
      result = concatNumbers(number2, number)
      setNumber2(result)
    }
    setTxtNumbers(result)
  }

  function handleOperations(op) {
    if (operation === null) {
      setOperation(op)
      return;
    }
    if (number2 !== null) {
      const result = compute(parseFloat(number1), parseFloat(number2), operation)
      setOperation(op)
      setNumber1(result.toString())
      setNumber2(null)
      setTxtNumbers(result.toString())
    }
  }

  function handleCalc() {
    if (number2 === null) {
      return;
    }
    const result = compute(parseFloat(number1), parseFloat(number2), operation)
    setTxtNumbers(result)
  }

  function handleClean() {
    setTxtNumbers('0')
    setNumber1('0')
    setNumber2(null)
    setOperation(null)
  }

  return (
    <Jumbotron
      className="jumbotron"
      style={{
        background: "transparent !important",
        backgroundColor: "#a9a9a9",
        padding: "5px",
        margin: "5px",
        width: "400px",
      }}
    >
      <h2>Basic Calculator</h2>
      <Container>
        <Row>
          <Col xs="3">
            <Button variant="danger" onClick={handleClean}>C</Button>
          </Col>
          <Col xs="9">
            <Form.Control
              type="text"
              name="txtNumbers"
              className="text-right"
              readOnly="readonly"
              value={txtNumbers}
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant="light" onClick={() => handleNumbers("7")}>
              7
            </Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => handleNumbers("8")}>
              8
            </Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => handleNumbers("9")}>
              9
            </Button>
          </Col>
          <Col>
            <Button variant="warning" onClick={() => handleOperations("/")}>
              /
            </Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant="light" onClick={() => handleNumbers("4")}>
              4
            </Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => handleNumbers("5")}>
              5
            </Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => handleNumbers("6")}>
              6
            </Button>
          </Col>
          <Col>
            <Button variant="warning" onClick={() => handleOperations("*")}>
              *
            </Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant="light" onClick={() => handleNumbers("1")}>
              1
            </Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => handleNumbers("2")}>
              2
            </Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => handleNumbers("3")}>
              3
            </Button>
          </Col>
          <Col>
            <Button variant="warning" onClick={() => handleOperations("-")}>
              -
            </Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant="light" onClick={() => handleNumbers("0")}>
              0
            </Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => handleNumbers('.')}>.</Button>
          </Col>
          <Col>
            <Button variant="success" onClick={handleCalc}>=</Button>
          </Col>
          <Col>
            <Button variant="warning" onClick={() => handleOperations("+")}>
              +
            </Button>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Calculator;
