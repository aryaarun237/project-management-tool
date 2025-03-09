import React, { useState } from "react";
import { Form, Button, Container, Card, InputGroup, Alert } from "react-bootstrap";
import { Eye, EyeSlash } from "react-bootstrap-icons";
import { useNavigate, Link } from "react-router-dom";
import { apiRequest } from "../../utils/api";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await apiRequest("POST", "/auth/signup", formData);
      if (response.success) {
        navigate("/signin"); // Redirect to signin after successful signup
      } else {
        setError(response.message || "Signup failed");
      }
    } catch (error) {
      setError("Error signing up. Please try again.");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: "#F6F4F0" }}>
      <Card className="p-4 shadow" style={{ width: "24rem", backgroundColor: "#2E5077", color: "#F6F4F0" }}>
        <Card.Body>
          <h3 className="text-center" style={{ color: "#79D7BE" }}>Sign Up</h3>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label style={{ color: "#79D7BE" }}>Username</Form.Label>
              <Form.Control type="text" name="username" value={formData.username} onChange={handleChange} required placeholder="Enter username" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ color: "#79D7BE" }}>Email</Form.Label>
              <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ color: "#79D7BE" }}>Password</Form.Label>
              <InputGroup>
                <Form.Control type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} required placeholder="Enter password" />
                <Button variant="outline-secondary" onClick={togglePasswordVisibility} style={{ borderColor: "#79D7BE" }}>{showPassword ? <EyeSlash /> : <Eye />}</Button>
              </InputGroup>
            </Form.Group>

            <Button type="submit" className="w-100" style={{ backgroundColor: "#4DA1A9", border: "none" }}>Sign Up</Button>
          </Form>

          <div className="text-center mt-3">
            <span>Already have an account? </span>
            <Link to="/signin" style={{ color: "#79D7BE", textDecoration: "none" }}>Sign In</Link>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Signup;

