import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signIn } from "../../utils/api"; // ✅ Import the signIn function
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
      const response = await signIn(email, password); // Call signIn API
      console.log("API Response:", response); // Debugging
  
      if (response.token) { // If token exists, login is successful
        localStorage.setItem("auth", JSON.stringify(response.token)); // Store token
        navigate("/dashboard", { replace: true }); // Redirect to dashboard
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
      <Card className="p-4 shadow" style={{ backgroundColor: "#2E5077", color: "#F6F4F0" }}>
        <h2 className="text-center">Sign In</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </Form.Group>

          <Button type="submit" className="w-100">Sign In</Button>
        </Form>

        <div className="text-center mt-3">
          <span>Don't have an account? </span>
          <Link to="/signup">Sign Up</Link>
        </div>
      </Card>
    </Container>
  );
};

export default SignIn;
