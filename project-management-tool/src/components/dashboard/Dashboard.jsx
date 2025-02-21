import React from "react";
import { Container, Button, Navbar, Nav, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { BoxArrowRight, PersonCircle } from "react-bootstrap-icons";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  return (
    <>
      {/* Navbar */}
      <Navbar bg="primary" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand className="fw-bold">Project Dashboard</Navbar.Brand>
          <Nav className="ms-auto">
            <Button variant="outline-light" onClick={handleLogout}>
              <BoxArrowRight className="me-2" /> Logout
            </Button>
          </Nav>
        </Container>
      </Navbar>

      {/* Dashboard Content */}
      <Container className="mt-5 pt-5">
        <h2 className="text-center">Welcome to Your Dashboard</h2>
        <Card className="shadow mt-4 p-4">
          <h4>Project Management Overview</h4>
          <p>Here you can manage your projects, track progress, and collaborate with your team.</p>
          <Button variant="success">Start a New Project</Button>
        </Card>
      </Container>
    </>
  );
};

export default Dashboard;
