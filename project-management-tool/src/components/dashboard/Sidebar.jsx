import React, { useState } from "react";
import { Offcanvas, ListGroup, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      {/* Sidebar Toggle Button */}
      <Button 
        style={{ backgroundColor: "#4DA1A9", border: "none" }} 
        onClick={() => setShow(true)} 
        className="m-3"
      >
        ☰ Menu
      </Button>

      {/* Offcanvas Sidebar */}
      <Offcanvas 
        show={show} 
        onHide={() => setShow(false)} 
        style={{ backgroundColor: "#2E5077", color: "#F6F4F0" }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{ color: "#F6F4F0" }}>📌 Project Manager</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup variant="flush">
            <ListGroup.Item 
              action 
              style={{ backgroundColor: "#2E5077", color: "#F6F4F0", border: "none" }}
              onClick={() => navigate("/dashboard")}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#4DA1A9")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#2E5077")}
            >
              Dashboard
            </ListGroup.Item>
            <ListGroup.Item 
              action 
              style={{ backgroundColor: "#2E5077", color: "#F6F4F0", border: "none" }}
              onClick={() => navigate("/tasks")}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#4DA1A9")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#2E5077")}
            >
              Tasks
            </ListGroup.Item>
            <ListGroup.Item 
              action 
              style={{ backgroundColor: "#2E5077", color: "#F6F4F0", border: "none" }}
              onClick={() => navigate("/analytics")}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#4DA1A9")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#2E5077")}
            >
              Analytics
            </ListGroup.Item>
            <ListGroup.Item 
              action 
              style={{ backgroundColor: "#2E5077", color: "#F6F4F0", border: "none" }}
              onClick={() => navigate("/calendar")}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#4DA1A9")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#2E5077")}
            >
              Calendar
            </ListGroup.Item>
            <ListGroup.Item 
              action 
              style={{ backgroundColor: "#2E5077", color: "#F6F4F0", border: "none" }}
              onClick={() => navigate("/reports")}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#4DA1A9")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#2E5077")}
            >
              Reports
            </ListGroup.Item>
            
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Sidebar;
