import React, { useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const history = useHistory();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLogin({ ...login, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post("http://localhost:5000/api/login", login);
      setLoading(false);
      if (response.data) {
        alert(response.data.message);
        console.log(response.data.roles);
        if (response.data.roles === "Admin") {
          history.push("/dataUser");
        } else {
          history.push("/landing");
        }
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
      setError("Login failed");
    }
  };

  return (
    <div style={styles.container}>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={login.username}
            onChange={handleChange}
            placeholder="Enter username"
            style={styles.input}
          />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={login.password}
            onChange={handleChange}
            placeholder="Enter password"
            style={styles.input}
          />
        </Form.Group>
        {error && <p style={styles.error}>{error}</p>}
        <Button variant="primary" type="submit" style={styles.button} disabled={loading}>
          {loading ? <Spinner animation="border" size="sm" /> : "Login"}
        </Button>

      </Form>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "100px",
  },
  input: {
    width: "300px",
    marginBottom: "10px",
  },
  button: {
    marginTop: "20px",
    width: "100px",
  },
  error: {
    color: "red",
    marginBottom: "10px",
  },
};

export default Login;