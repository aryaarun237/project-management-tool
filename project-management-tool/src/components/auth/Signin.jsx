import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signIn } from "../../utils/api";
import { Container, Form, Button, Card, Alert } from "react-bootstrap";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await signIn(email, password);
      console.log("API Response:", response);

      if (response.token) {
        localStorage.setItem("auth", JSON.stringify(response.token));
        navigate("/dashboard", { replace: true });
      } else {
        setError(response.message || "Invalid credentials");
      }
    } catch (error) {
      console.error("Signin Error:", error);
      setError("Error signing in. Please try again.");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: "#F6F4F0" }}>
      <Card className="p-4 shadow" style={{ width: "24rem", backgroundColor: "#2E5077", color: "#F6F4F0" }}>
        <h2 className="text-center" style={{ color: "#79D7BE" }}>Sign In</h2>
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
            />
          </Form.Group>

          <Button type="submit" className="w-100" style={{ backgroundColor: "#4DA1A9", border: "none" }}>
            Sign In
          </Button>
        </Form>

        <div className="text-center mt-3">
          <span>Don't have an account? </span>
          <Link to="/signup" style={{ color: "#79D7BE", textDecoration: "none" }}>Sign Up</Link>
        </div>
      </Card>
    </Container>
  );
};

export default SignIn;
