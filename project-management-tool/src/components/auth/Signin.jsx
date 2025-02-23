import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Container, Form, Button, Card, Alert } from "react-bootstrap";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulating authentication
    if (email === "test@example.com" && password === "password") {
      localStorage.setItem("auth", "true"); // Save authentication state
      navigate("/dashboard"); // Redirect to dashboard
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: "#F6F4F0" }} // Light background
    >
      <Card className="p-4 shadow" style={{ backgroundColor: "#2E5077", color: "#F6F4F0" }}>
        <h2 className="text-center">Sign In</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label style={{ color: "#79D7BE" }}>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ borderColor: "#4DA1A9" }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label style={{ color: "#79D7BE" }}>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ borderColor: "#4DA1A9" }}
            />
          </Form.Group>
          <Button
            type="submit"
            className="w-100"
            style={{ backgroundColor: "#4DA1A9", borderColor: "#4DA1A9" }}
          >
            Sign In
          </Button>
        </Form>
        
        {/* Signup Link */}
        <div className="text-center mt-3">
          <span style={{ color: "#F6F4F0" }}>Don't have an account? </span>
          <Link to="/signup" style={{ color: "#79D7BE", textDecoration: "none" }}>
            Sign Up
          </Link>
        </div>
      </Card>
    </Container>
  );
};

export default SignIn;
