import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import { hash } from "bcryptjs";
import { useHistory } from "react-router-dom";
import "./Register.css";

import musicLogo from "./Logo.jpg"; // Import the music logo image

const Register = () =>{
    const [register, setRegister] = useState({
        username:"",
        nama: "",
        email: "",
        no_telp: "",
        foto: null,
        password: "",
    });
    const history = useHistory();

    const handleChange = (event) => {
        const { name, value, files } = event.target;
        if (name === "foto") {
            setRegister({ ...register, foto: files[0] });
        } else {
            setRegister({ ...register, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const hashedPassword = await hash(register.password, 10);
          const formData = new FormData();
          formData.append("username", register.username);
          formData.append("nama", register.nama);
          formData.append("email", register.email);
          formData.append("no_telp", register.no_telp);
          formData.append("foto", register.foto); // tambahkan file gambar ke FormData
          formData.append("password", hashedPassword); // tambahkan password yang sudah di-hash ke FormData
          const response = await axios.post(
            "http://localhost:5000/api/dataUser",
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
          if (response.data) {
            alert(response.data.message);
            setRegister({ registername:"", nama: "", email: "", no_telp: "", foto: null, password:"" });
            history.push("/register");
          }
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <div className="register-container">
      <div className="logo-container">
        <img src={musicLogo} alt="Music Logo" className="music-logo" />
      </div>
      <div>
        <h1 className="register-heading">Register</h1>
        <Form className="register-form" onSubmit={handleSubmit}>
          <Form.Group controlId="formUsername">
            <Form.Label className="register-label">Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={register.username}
              onChange={handleChange}
              className="register-input"
              placeholder="Enter username"
            />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label className="register-label">Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={register.email}
              onChange={handleChange}
              className="register-input"
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label className="register-label">Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={register.password}
              onChange={handleChange}
              className="register-input"
              placeholder="Enter password"
            />
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label className="register-label">Confirm Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={register.password}
              onChange={handleChange}
              className="register-input"
              placeholder="Enter password"
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="register-button">
            Register
          </Button>
        </Form>
      </div>
    </div>
    );
}

export default Register;