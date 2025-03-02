import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Tasks from "./Tasks";
import Analytics from "./Analytics";
import CalendarComponent from "./CalendarComponent";
import ExportReport from "./ExportReport";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (!auth) {
      navigate("/signin");
    }
  }, [navigate]);

  return (
    <div className="d-flex">
      <Sidebar />
      <Container fluid className="p-4" style={{ backgroundColor: "#F6F4F0", minHeight: "100vh" }}>
        <Row className="mb-4 align-items-center">
          <Col>
            <h2 className="fw-bold" style={{ color: "#2E5077" }}>Welcome, User</h2>
          </Col>
          <Col className="text-end">
            <Button style={{ backgroundColor: "#dc3545", border: "none" }} onClick={() => { localStorage.removeItem("auth"); navigate("/signin"); }}>
              Logout
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
