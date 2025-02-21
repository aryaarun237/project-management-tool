import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tasks from "./Tasks";
import Analytics from "./Analytics";
import CalendarComponent from "./CalendarComponent";
import ExportReport from "./ExportReport";

const Dashboard = () => {
  return (
    <Container>
      <h2 className="mt-4">Dashboard</h2>
      <Row>
        <Col md={6}><Tasks /></Col>
        <Col md={6}><Analytics /></Col>
      </Row>
      <Row className="mt-3">
        <Col md={6}><CalendarComponent /></Col>
        <Col md={6}><ExportReport /></Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
